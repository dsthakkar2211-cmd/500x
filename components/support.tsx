"use client";

import React, { useEffect, useRef, useState } from "react";

type Sender = "user" | "bot" | "admin" | "admin-user";

type ChatItem =
  | { kind: "text"; sender: Sender; text: string }
  | { kind: "file"; sender: Sender; url: string; name: string; mime?: string }
  | { kind: "audio"; sender: Sender; url: string; mime?: string };

export default function SupportChatPage() {
  // --- state ---
  const [messages, setMessages] = useState<ChatItem[]>([
    {
      kind: "text",
      sender: "bot",
      text: "Hi 👋, I'm your Stock Support Bot. How can I help you today?",
    },
  ]);
  const [input, setInput] = useState("");
  const [isAdminMode, setIsAdminMode] = useState(false);
  const [attachedFile, setAttachedFile] = useState<File | null>(null);
  const [audioBlob, setAudioBlob] = useState<Blob | null>(null);
  const [audioName, setAudioName] = useState("");
  const [fileError, setFileError] = useState("");

  // refs
  const msgEndRef = useRef<HTMLDivElement | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);
  const emojiPickerRef = useRef<HTMLDivElement | null>(null);
  const mediaRecorderRef = useRef<MediaRecorder | null>(null);
  const recordTimerRef = useRef<number | null>(null);

  // scroll to bottom on new message
  useEffect(() => {
    msgEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  // detect admin mode via ?hash=…
  useEffect(() => {
    const usp = new URLSearchParams(location.search);
    setIsAdminMode(usp.has("hash"));
  }, []);

  // emoji web component lazy hook (no-op stub)
  useEffect(() => {
    (async () => {
      if (!(window as any).customElements?.get?.("emoji-picker")) {
        // register your emoji picker here later
      }
    })();
  }, []);

  // close emoji when clicking outside
  useEffect(() => {
    function onDoc(e: MouseEvent) {
      const el = emojiPickerRef.current;
      const btn = document.getElementById("emojiBtn");
      if (!el) return;
      if (e.target === el || el.contains(e.target as Node) || e.target === btn) return;
      el.style.display = "none";
    }
    document.addEventListener("click", onDoc);
    return () => document.removeEventListener("click", onDoc);
  }, []);

  // --- helpers ---
  function pushMessage(msg: ChatItem) {
    setMessages((m) => [...m, msg]);
  }

  async function sendToServer(userText?: string) {
    // demo stub — replace with your /api/chat call
    const reply = userText
      ? `You said: “${userText}”. (This is a demo reply — wire your API here.)`
      : "Thanks! (demo reply)";
    pushMessage({ kind: "text", sender: isAdminMode ? "admin" : "bot", text: reply });
  }

  // --- events ---
  function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setFileError("");

    // 1) file takes precedence
    if (attachedFile) {
      if (attachedFile.size > 2 * 1024 * 1024) {
        setFileError("File too large! Max 2MB allowed.");
        return;
      }
      const url = URL.createObjectURL(attachedFile);
      pushMessage({ kind: "file", sender: "user", url, name: attachedFile.name, mime: attachedFile.type });
      // TODO: upload → replace blob URL with server URL
      setAttachedFile(null);
      if (fileInputRef.current) fileInputRef.current.value = "";
      return;
    }

    // 2) audio if present
    if (audioBlob) {
      const url = URL.createObjectURL(audioBlob);
      pushMessage({ kind: "audio", sender: "user", url, mime: "audio/webm" });
      // TODO: upload → replace blob URL with server URL
      setAudioBlob(null);
      setAudioName("");
      return;
    }

    // 3) plain text
    const text = input.trim();
    if (!text) return;
    pushMessage({ kind: "text", sender: "user", text });
    setInput("");
    sendToServer(text);
  }

  function onPickFile() {
    setFileError("");
    fileInputRef.current?.click();
  }

  function onFileChange(e: React.ChangeEvent<HTMLInputElement>) {
    setFileError("");
    const f = e.target.files?.[0] || null;
    if (!f) return;
    if (f.size > 2 * 1024 * 1024) {
      setFileError("File too large! Max 2MB allowed.");
      e.target.value = "";
      return;
    }
    setAttachedFile(f);
    // clear any audio if selecting file
    setAudioBlob(null);
    setAudioName("");
  }

  // --- voice-to-text (SpeechRecognition) ---
  function onVoiceToText() {
    const SR: any = (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;
    if (!SR) {
      alert("Speech recognition not supported in this browser.");
      return;
    }
    const recog = new SR();
    recog.lang = "en-IN";
    recog.interimResults = false;
    recog.maxAlternatives = 1;
    recog.onresult = (ev: any) => {
      const transcript = ev.results?.[0]?.[0]?.transcript;
      if (transcript) setInput((t) => (t ? t + " " + transcript : transcript));
    };
    recog.onerror = (ev: any) => alert("Voice recognition error: " + ev.error);
    recog.start();
  }

  // --- push-to-talk (record audio) ---
  async function startRecording() {
    setFileError("");
    setAttachedFile(null);
    if (!navigator.mediaDevices?.getUserMedia) {
      setFileError("Audio recording not supported in this browser.");
      return;
    }
    try {
      const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
      const mr = new MediaRecorder(stream);
      mediaRecorderRef.current = mr;
      const chunks: BlobPart[] = [];
      mr.ondataavailable = (e) => chunks.push(e.data);
      mr.onstop = () => {
        const blob = new Blob(chunks, { type: "audio/webm" });
        if (blob.size === 0) {
          setFileError("No audio recorded.");
          return;
        }
        setAudioBlob(blob);
        setAudioName(`voice_${Date.now()}.webm`);
      };
      mr.start();
      // auto-stop after 30s
      recordTimerRef.current = window.setTimeout(() => stopRecording(), 30_000);
    } catch {
      setFileError("Microphone access denied or not available.");
    }
  }

  function stopRecording() {
    const mr = mediaRecorderRef.current;
    if (mr && mr.state === "recording") {
      mr.stop();
      mediaRecorderRef.current = null;
    }
    if (recordTimerRef.current) {
      clearTimeout(recordTimerRef.current);
      recordTimerRef.current = null;
    }
  }

  // --- emoji toggle ---
  function toggleEmoji() {
    if (!emojiPickerRef.current) return;
    emojiPickerRef.current.style.display =
      emojiPickerRef.current.style.display === "none" ? "block" : "none";
  }

  // --- render helpers ---
  function BubbleLabel({ sender }: { sender: Sender }) {
    if (sender === "bot")
      return (
        <div className="mb-1 flex items-center gap-2 text-[0.95rem] font-semibold text-[#3360ad]">
          <img src="https://img.icons8.com/emoji/24/robot-emoji.png" className="h-[19px] w-[19px]" />
          Ai-Assistant
        </div>
      );
    if (sender === "admin")
      return (
        <div className="mb-1 flex items-center gap-2 text-[0.95rem] font-semibold text-[#c26a00]">
          <img
            src="https://img.icons8.com/fluency/24/administrator-male.png"
            className="h-[19px] w-[19px]"
          />
          Admin
        </div>
      );
    return null;
  }

  function MessageView({ m }: { m: ChatItem }) {
    const base = "flex items-end gap-3 max-w-[88%] flex-wrap";
    const align = m.sender === "user" ? "self-end flex-row-reverse" : "self-start";
    const bubbleBase =
      "inline-block rounded-[18px] px-[17px] py-[11px] text-[1rem] leading-[1.6] shadow-[0_2px_12px_#8ab4f81c]";

    const bubbleColor =
      m.sender === "user"
        ? "bg-[#1769ff] text-white"
        : m.sender === "admin"
        ? "bg-[#ffe2be] text-[#784300]"
        : "bg-[#e9f1ff] text-[#222]";

    return (
      <div className={`${base} ${align}`}>
        {m.kind === "text" && (
          <div className={`${bubbleBase} ${bubbleColor}`}>
            {(m.sender === "bot" || m.sender === "admin") && <BubbleLabel sender={m.sender} />}
            <div>{m.text}</div>
          </div>
        )}

        {m.kind === "file" && (
          <div className={`${bubbleBase} ${bubbleColor}`}>
            {(m.sender === "bot" || m.sender === "admin") && <BubbleLabel sender={m.sender} />}
            {m.mime?.startsWith("image/") ? (
              <div className="space-y-2">
                <img
                  src={m.url}
                  alt={m.name}
                  className="max-h-[120px] max-w-[160px] rounded-[10px] shadow"
                />
                <div className="text-[0.97em] text-[#888]">{m.name}</div>
              </div>
            ) : (
              <a
                className="mt-1 inline-flex items-center gap-2 rounded-md bg-[#e8efff] px-2.5 py-1.5 text-[1.01em] text-[#234099] no-underline"
                href={m.url}
                target="_blank"
              >
                <img
                  className="h-[19px] w-[19px]"
                  src="https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/file.svg"
                />
                {m.name}
              </a>
            )}
          </div>
        )}

        {m.kind === "audio" && (
          <div className="mx-auto my-3 w-[350px] max-w-[98vw] rounded-[2rem] bg-[#476dff] p-6 shadow-[0_6px_32px_#1e51cf22,0_1px_10px_#9fc6ff18]">
            <audio controls className="audio-preview-player w-[98%] rounded-[1.4rem] bg-[#f7faff] shadow">
              <source src={m.url} type={m.mime || "audio/webm"} />
              Your browser does not support the audio element.
            </audio>
          </div>
        )}
      </div>
    );
  }

  // --- UI ---
  return (
    <div
      className={[
        "min-h-dvh w-full",
        "bg-[#181a20]",
        "px-4 py-6 sm:px-6 sm:py-8 md:px-10 md:py-12 lg:px-16 lg:py-16",
        "flex items-center justify-center",
        "pt-[env(safe-area-inset-top)] pb-[env(safe-area-inset-bottom)]",
      ].join(" ")}
    >
      {/* Card wrapper centered with generous breathing room */}
      <div
        className={[
          "relative w-full",
          "max-w-[640px]", // grows from phones → tablets → small desktop
          "rounded-2xl bg-white shadow-[0_12px_40px_#0b22381c] border border-[#e6ecf3]",
          "overflow-hidden",
          "flex flex-col",
        ].join(" ")}
        // Height keeps it centered and comfortably viewable across devices
        style={{ height: "min(86vh, 820px)" }}
      >
        {/* header */}
        <div className="relative bg-[#fcd535] px-5 py-4 text-[#111827]">
          <span className="text-lg font-semibold tracking-wide sm:text-xl">👨🏻‍💻 Support Chatbot</span>
          {isAdminMode && (
            <span className="absolute right-4 top-2 z-10 inline-flex items-center gap-1 rounded-[7px] bg-[#ffe168] px-3 py-1.5 text-[0.95em] font-bold text-[#1f2937] shadow-[0_0_8px_#bdbdbd42]">
              🛡️ Admin Mode
            </span>
          )}
        </div>

        {/* messages (fills remaining height) */}
        <div
          id="chatMessages"
          className="flex-1 overflow-y-auto bg-[#f6faff] px-4 py-4 sm:px-5 sm:py-5"
        >
          <div className="mx-auto flex max-w-[56ch] flex-col gap-[14px]">
            {messages.map((m, i) => (
              <MessageView key={i} m={m} />
            ))}
            <div ref={msgEndRef} />
          </div>
        </div>

        {/* file/audio preview bar */}
        {(attachedFile || audioBlob) && (
          <div className="mx-3 mb-2 mt-2 flex items-center gap-3 rounded-[14px] bg-[#f6faff] px-3 py-2.5 shadow-[0_2px_10px_#dae9ff26]">
            {attachedFile ? (
              <>
                {attachedFile.type.startsWith("image/") ? (
                  <img
                    className="max-h-[60px] max-w-[60px] rounded-[8px] shadow"
                    src={URL.createObjectURL(attachedFile)}
                    alt={attachedFile.name}
                  />
                ) : (
                  <img
                    className="h-[22px] w-[22px]"
                    src="https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/file.svg"
                  />
                )}
                <span className="text-[0.96em] text-[#444]">{attachedFile.name}</span>
                <button
                  type="button"
                  className="ml-auto inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f7fb] text-[#b43a32] shadow"
                  onClick={() => {
                    setAttachedFile(null);
                    if (fileInputRef.current) fileInputRef.current.value = "";
                  }}
                  title="Remove file"
                >
                  &times;
                </button>
              </>
            ) : audioBlob ? (
              <>
                <audio
                  controls
                  className="w-full rounded-[1.2rem] bg-[#f7faff] shadow"
                >
                  <source src={URL.createObjectURL(audioBlob)} type="audio/webm" />
                </audio>
                <button
                  type="button"
                  className="ml-2 inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f5f7fb] text-[#b43a32] shadow"
                  onClick={() => {
                    setAudioBlob(null);
                    setAudioName("");
                  }}
                  title="Remove audio"
                >
                  &times;
                </button>
              </>
            ) : null}
          </div>
        )}

        {/* input bar */}
        <form
          onSubmit={onSubmit}
          className="flex items-center gap-1 border-t border-[#eef1f4] px-2 sm:px-3"
        >
          <input
            id="chatInput"
            className="flex-1 bg-transparent px-2 py-3 text-[1.03rem] text-[#475569] outline-none placeholder:text-[#93a1b7] sm:py-4"
            placeholder="Type a message..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            autoFocus
          />
          <button
            type="submit"
            className="ml-1 inline-flex h-11 w-11 items-center justify-center rounded-full hover:bg-[#eaf0ff]"
            title="Send"
          >
            <svg viewBox="0 0 48 48" fill="none" className="h-7 w-7">
              <circle cx="24" cy="24" r="24" fill="#fcd535" />
              <path d="M15 23.5L33 15L24.5 33L24.5 25L15 23.5Z" fill="#fff" />
            </svg>
          </button>
        </form>

        {/* toolbar */}
        <div className="flex w-full items-center gap-2 rounded-b-2xl border-t border-[#eef1f4] px-2 py-2 sm:px-3">
          {/* Emoji */}
          <button
            id="emojiBtn"
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-[#f4f6fa]"
            onClick={(e) => {
              e.stopPropagation();
              toggleEmoji();
            }}
            title="Emoji"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/emoji-datasource-apple/img/apple/64/1f604.png"
              className="h-5 w-5 opacity-70"
            />
          </button>

          {/* File */}
          <input
            ref={fileInputRef}
            onChange={onFileChange}
            type="file"
            accept="image/*,application/pdf,application/msword,.doc,.docx,.txt,.csv,.xlsx"
            className="hidden"
          />
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-[#f4f6fa]"
            onClick={onPickFile}
            title="Attach file"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/paperclip.svg"
              className="h-5 w-5 opacity-70"
            />
          </button>

          {/* Voice-to-Text */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-[#f4f6fa]"
            onClick={onVoiceToText}
            title="Voice to Text"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/mic.svg"
              className="h-5 w-5 opacity-70"
            />
          </button>

          {/* Hold-to-record */}
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-full hover:bg-[#f4f6fa]"
            onMouseDown={startRecording}
            onMouseUp={stopRecording}
            onMouseLeave={stopRecording}
            onTouchStart={(e) => {
              e.preventDefault();
              startRecording();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              stopRecording();
            }}
            title="Record & Send Voice Message"
          >
            <img
              src="https://cdn.jsdelivr.net/npm/lucide-static@0.320.0/icons/mic-2.svg"
              className="h-5 w-5 opacity-70"
            />
          </button>

          {/* right side errors */}
          <span className="ml-auto pr-2 text-[0.93em] text-[#fd0707]" aria-live="polite">
            {fileError}
          </span>
        </div>

        {/* emoji popup container (anchored above toolbar) */}
        <div
          ref={emojiPickerRef}
          className="absolute bottom-20 left-3 z-50 hidden rounded-xl border border-[#e6ecf3] bg-white p-2 shadow-xl"
          onClick={(e) => e.stopPropagation()}
        >
          {/* mount your emoji web component here when added */}
        </div>
      </div>
    </div>
  );
}
