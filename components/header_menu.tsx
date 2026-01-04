"use client"

import { useState, useRef, useEffect } from "react"
import { ChevronDown } from "lucide-react"
import Link from "next/link"

type DropdownItem = {
  title: string
  description: string
  path?: string
  external?: boolean
}

type MenuItem = {
  label: string
  hasDropdown: boolean
  path?: string
  dropdownItems?: DropdownItem[]
}

const NavigationMenu = () => {
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [mounted, setMounted] = useState(false)
  const menuRef = useRef<HTMLDivElement>(null)
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    setMounted(true)
    if (typeof window !== "undefined" && window.matchMedia("(max-width: 767px)").matches) {
      setIsMobileMenuOpen(true)
      setActiveDropdown("")
    }
  }, [])

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setActiveDropdown(null)
        setIsMobileMenuOpen(false)
      }
    }
    document.addEventListener("mousedown", handleClickOutside)
    return () => document.removeEventListener("mousedown", handleClickOutside)
  }, [])

  const openDropdown = (label: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    setActiveDropdown(label)
  }

  const scheduleClose = () => {
    if (closeTimer.current) clearTimeout(closeTimer.current)
    closeTimer.current = setTimeout(() => setActiveDropdown(null), 120)
  }

  const menuItems: MenuItem[] = [
    { label: "Trading Platform", hasDropdown: false, path: "/tradingplatform" },
    {
      label: "For Brokers",
      hasDropdown: true,
      dropdownItems: [
        { title: "500x Platform", description: "Complete trading platform solution", path: "/500x-platform" },
        { title: "For owner", description: "500x for hedge fund managers", path: "/for-owner" },
        { title: "For Broker", description: "500x for brokers", path: "/for-broker" },
        { title: "Buy the Platform", description: "Deep liquidity pools and providers", path: "/buy-the-platform" },
      ],
    },
    {
      label: "Company",
      hasDropdown: true,
      dropdownItems: [
        { title: "About Us", description: "Machine learning algorithms", path: "/f_about" },
        { title: "Contact Us", description: "Enterprise-grade security", path: "/contact" },
        { title: "Legal Information", description: "Enterprise-grade security", path: "/legal" },
      ],
    },
    { label: "Download", hasDropdown: false, path: "/downloads" },
    // { label: "Support", hasDropdown: false, path: "/support" },
  ]

  return (
    <nav className="bg-[#181a20] border-gray-200 sticky top-0 z-50" ref={menuRef}>
      <div className="mx-auto px-4 sm:px-6 lg:px-8">

        {/* Desktop Menu */}
        <div className="hidden md:flex items-center space-x-1">
          {menuItems.map((item) => {
            const isOpen = activeDropdown === item.label
            const buttonContent = (
              <span className="flex items-center space-x-1 px-4 py-2 text-white hover:text-[#fcd535] hover:bg-[#fcd535]/5 rounded-lg transition-all duration-200 font-medium">
                <span>{item.label}</span>
                {item.hasDropdown && (
                  <ChevronDown
                    className={`w-4 h-4 transition-transform duration-200 ${isOpen ? "rotate-180" : ""}`}
                  />
                )}
              </span>
            )

            return (
              <div
                key={item.label}
                className="relative pb-2"
                onPointerEnter={() => item.hasDropdown && openDropdown(item.label)}
                onPointerLeave={scheduleClose}
              >
                {item.hasDropdown ? (
                  <button
                    className="outline-none"
                    onClick={(e) => {
                      e.stopPropagation()
                      setActiveDropdown(isOpen ? null : item.label)
                    }}
                    aria-haspopup="menu"
                    aria-expanded={isOpen}
                  >
                    {buttonContent}
                  </button>
                ) : item.path ? (
                  <Link href={item.path}>{buttonContent}</Link>
                ) : (
                  <button className="outline-none">{buttonContent}</button>
                )}

                {/* Desktop Dropdown */}
                {item.hasDropdown && isOpen && (
                  <div
                    className="absolute top-full left-0 pt-2 w-80 z-50"
                    onPointerEnter={() => openDropdown(item.label)}
                    onPointerLeave={scheduleClose}
                  >
                    <div className="bg-white rounded-xl shadow-xl border border-gray-100 py-2 animate-in fade-in slide-in-from-top-2 duration-200">
                      {item.dropdownItems?.map((dropdownItem) =>
                        dropdownItem.external ? (
                          <a
                            href={dropdownItem.path}
                            key={dropdownItem.title}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group block px-4 py-3 hover:bg-[#fcd535]/10 transition-all duration-200 flex items-center justify-between mx-2 rounded-lg"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 group-hover:text-[#000000] transition-colors duration-200">
                                {dropdownItem.title}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-200">
                                {dropdownItem.description}
                              </p>
                            </div>
                            <div className="w-2 h-2 bg-[#fcd535] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 ml-4 transform group-hover:scale-110" />
                          </a>
                        ) : (
                          <Link
                            href={dropdownItem.path ?? "#"}
                            key={dropdownItem.title}
                            className="group block px-4 py-3 hover:bg-[#fcd535]/10 transition-all duration-200 flex items-center justify-between mx-2 rounded-lg"
                            onClick={() => setActiveDropdown(null)}
                          >
                            <div className="flex-1">
                              <h3 className="font-semibold text-gray-900 group-hover:text-[#000000] transition-colors duration-200">
                                {dropdownItem.title}
                              </h3>
                              <p className="text-sm text-gray-600 mt-1 group-hover:text-gray-700 transition-colors duration-200">
                                {dropdownItem.description}
                              </p>
                            </div>
                            <div className="w-2 h-2 bg-[#fcd535] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-200 ml-4 transform group-hover:scale-110" />
                          </Link>
                        )
                      )}
                    </div>
                  </div>
                )}
              </div>
            )
          })}
        </div>
      </div>

      {/* Mobile Menu */}
      {mounted && isMobileMenuOpen && (
        <div className="md:hidden py-4 animate-in fade-in slide-in-from-top-2 duration-200 flex-col gap-2">
          {menuItems.map((item) => (
            <div key={item.label} className="mb-2">
              {!item.hasDropdown && item.path ? (
                <Link
                  href={item.path}
                  className="w-full flex items-center justify-between px-4 py-3 text-left text-white hover:bg-[#fcd535]/10 rounded-lg transition-all duration-200 font-medium"
                  onClick={() => setIsMobileMenuOpen(false)}
                >
                  <span>{item.label}</span>
                </Link>
              ) : (
                <button
                  className="w-full flex items-center justify-between px-4 py-3 text-left text-white hover:bg-[#fcd535]/10 rounded-lg transition-all duration-200 font-medium"
                  onClick={(e) => {
                    e.stopPropagation()
                    setActiveDropdown(activeDropdown === item.label ? null : item.label)
                  }}
                  aria-haspopup={item.hasDropdown ? "menu" : undefined}
                  aria-expanded={activeDropdown === item.label}
                >
                  <span>{item.label}</span>
                  {item.hasDropdown && (
                    <ChevronDown
                      className={`w-4 h-4 transition-transform duration-200 ${
                        activeDropdown === item.label ? "rotate-180" : ""
                      }`}
                      style={{ color: "#fcd535" }} // arrow color updated
                    />
                  )}
                </button>
              )}

              {item.hasDropdown && activeDropdown === item.label && (
                <div className="mt-2 ml-4 space-y-1 animate-in fade-in slide-in-from-top-1 duration-200">
                  {item.dropdownItems?.map((dropdownItem) =>
                    dropdownItem.external ? (
                      <a
                        href={dropdownItem.path}
                        key={dropdownItem.title}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group block px-4 py-3 transition-all duration-200 rounded-lg border-l-2 border-transparent hover:border-[#fcd535]/60 hover:bg-[#fcd535]/5"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <h3
                          className="font-semibold text-sm"
                          style={{
                            color:
                              item.label === "Solutions" || item.label === "Technology"
                                ? "#ffffff"
                                : "#f4efd9",
                          }}
                        >
                          {dropdownItem.title}
                        </h3>
                        <p className="text-xs mt-1" style={{ color: "#848E9C" }}>
                          {dropdownItem.description}
                        </p>
                      </a>
                    ) : (
                      <Link
                        href={dropdownItem.path ?? "#"}
                        key={dropdownItem.title}
                        className="group block px-4 py-3 transition-all duration-200 rounded-lg border-l-2 border-transparent hover:border-[#fcd535]/60 hover:bg-[#fcd535]/5"
                        onClick={() => setIsMobileMenuOpen(false)}
                      >
                        <h3
                          className="font-semibold text-sm"
                          style={{
                            color:
                              item.label === "Solutions" || item.label === "Technology"
                                ? "#ffffff"
                                : "#f4efd9",
                          }}
                        >
                          {dropdownItem.title}
                        </h3>
                        <p className="text-xs mt-1" style={{ color: "#848E9C" }}>
                          {dropdownItem.description}
                        </p>
                      </Link>
                    )
                  )}
                </div>
              )}
            </div>
          ))}
        </div>
      )}
    </nav>
  )
}

export default NavigationMenu
