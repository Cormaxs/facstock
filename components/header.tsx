"use client"

import { useState } from "react"
import Link from "next/link"
import Image from "next/image"
import { Menu, Moon, Sun } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { useTheme } from "next-themes"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  const navigation = [
    { name: "Inicio", href: "#inicio" },
    { name: "Funcionalidades", href: "#funcionalidades" },
    { name: "Planes y Precios", href: "#precios" },
    { name: "Preguntas Frecuentes", href: "#faq" },
    { name: "Contacto", href: "#contacto" },
  ]

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <Image src="/images/facturito-logo.png" alt="Facturito Logo" width={32} height={32} className="h-8 w-8" />
            <span className="text-xl font-bold text-facturito-purple-800 dark:text-facturito-orange-400">
              Facturito
            </span>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-facturito-purple-700 dark:hover:text-facturito-orange-400 transition-colors"
              >
                {item.name}
              </Link>
            ))}
          </nav>

          {/* Desktop CTA and Theme Toggle */}
          <div className="hidden md:flex items-center space-x-4">
            <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Cambiar tema</span>
            </Button>
            <Link
              href="#login"
              className="text-sm font-medium text-muted-foreground hover:text-facturito-purple-700 dark:hover:text-facturito-orange-400 transition-colors"
            >
              Acceso Clientes
            </Link>
            <Button className="bg-gradient-to-r from-facturito-orange-500 to-facturito-purple-600 hover:from-facturito-orange-600 hover:to-facturito-purple-700 text-white">
              ¡Pruébalo Gratis!
            </Button>
          </div>

          {/* Mobile menu button */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Abrir menú</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <div className="flex flex-col space-y-4 mt-6">
                {navigation.map((item) => (
                  <Link
                    key={item.name}
                    href={item.href}
                    className="text-lg font-medium text-muted-foreground hover:text-facturito-purple-700 dark:hover:text-facturito-orange-400 transition-colors"
                    onClick={() => setIsOpen(false)}
                  >
                    {item.name}
                  </Link>
                ))}
                <div className="pt-4 border-t">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-sm font-medium">Tema</span>
                    <Button variant="ghost" size="icon" onClick={() => setTheme(theme === "light" ? "dark" : "light")}>
                      <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                      <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                    </Button>
                  </div>
                  <Link
                    href="#login"
                    className="block text-lg font-medium text-muted-foreground hover:text-facturito-purple-700 dark:hover:text-facturito-orange-400 transition-colors mb-4"
                    onClick={() => setIsOpen(false)}
                  >
                    Acceso Clientes
                  </Link>
                  <Button className="w-full bg-gradient-to-r from-facturito-orange-500 to-facturito-purple-600 hover:from-facturito-orange-600 hover:to-facturito-purple-700 text-white">
                    ¡Pruébalo Gratis!
                  </Button>
                </div>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
