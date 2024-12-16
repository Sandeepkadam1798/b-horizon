'use client'

import { useState } from 'react'
import Image from "next/image"
import Link from "next/link"
import { ChevronDown, Menu, X } from 'lucide-react'

const navItems = [
  { label: 'Home', href: '/' },
  { label: 'About Us', href: '/about' },
  { 
    label: 'Services', 
    href: '/services',
    items: ['Software Testing', 'Web Development', 'Mobile Development', 'Cloud Services'] 
  },
  { 
    label: 'Industries', 
    href: '/industries',
    items: ['Healthcare', 'Finance', 'Education', 'Retail'] 
  },
  { 
    label: 'Technology', 
    href: '/technology',
    items: ['AI & ML', 'Cloud Computing', 'DevOps', 'Blockchain'] 
  },
  { label: 'Contact Us', href: '/contact' }
]

const AppHeader = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)
  const [activeDropdown, setActiveDropdown] = useState(null)

  const handleDropdownClick = (label) => {
    setActiveDropdown((prev) => (prev === label ? null : label))
  }

  return (
    <header className="sticky top-0 z-50 border-b bg-white shadow-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            <Image
              src="/placeholder.svg"
              alt="STG CHENNAI IT SERVICES"
              width={124}
              height={48}
              className="h-12 w-auto"
            />
          </Link>

          {/* Mobile Menu Toggle */}
          <button
            className="block md:hidden text-gray-600"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <div
                key={item.label}
                className="relative"
                onMouseEnter={() => setActiveDropdown(item.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <Link
                  href={item.href}
                  className={`flex items-center gap-1 py-2 text-sm font-medium transition-colors
                    ${activeDropdown === item.label ? 'text-blue-600' : 'text-gray-600 hover:text-blue-600'}`}
                >
                  {item.label}
                  {item.items && (
                    <ChevronDown className={`h-4 w-4 transition-transform ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </Link>

                {item.items && activeDropdown === item.label && (
                  <div className="absolute left-0 top-full z-50 mt-1 w-48 rounded-md bg-white py-2 shadow-lg ring-1 ring-black ring-opacity-5">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem}
                        href="#"
                        className="block px-4 py-2 text-sm text-gray-600 hover:bg-gray-50 hover:text-blue-600"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="mt-4 space-y-4 md:hidden h-screen">
            {navItems.map((item) => (
              <div key={item.label} className="relative">
                <button
                  onClick={() => handleDropdownClick(item.label)}
                  className="w-full flex justify-between items-center py-2 text-sm font-medium text-gray-600 hover:text-blue-600"
                >
                  {item.label}
                  {item.items && (
                    <ChevronDown className={`h-4 w-4 transition-transform ${
                      activeDropdown === item.label ? 'rotate-180' : ''
                    }`} />
                  )}
                </button>

                {item.items && activeDropdown === item.label && (
                  <div className="mt-2 space-y-2 pl-4">
                    {item.items.map((subItem) => (
                      <Link
                        key={subItem}
                        href="#"
                        className="block text-sm text-gray-600 hover:text-blue-600"
                      >
                        {subItem}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </nav>
    </header>
  )
}

export default AppHeader
