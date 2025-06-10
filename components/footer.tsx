import Link from "next/link"
import Image from "next/image"
import { Facebook, Instagram, Twitter, Linkedin } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background dark:bg-background dark:text-foreground border-t border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo y descripción */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-3 mb-4">
              <Image src="/images/facturito-logo.png" alt="Facturito Logo" width={32} height={32} className="h-8 w-8" />
              <span className="text-xl font-bold">Facturito</span>
            </div>
            <p className="text-muted-foreground dark:text-muted-foreground max-w-md">
              El sistema de gestión de inventario y facturación electrónica más completo para comercios y PYMEs
              argentinas. Simplifica tu negocio y potencia tus ventas.
            </p>
            <div className="flex space-x-4 mt-6">
              <Link href="#" className="text-muted-foreground hover:text-facturito-orange-500 transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-facturito-orange-500 transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-facturito-orange-500 transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-muted-foreground hover:text-facturito-orange-500 transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Enlaces rápidos */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="#funcionalidades"
                  className="text-muted-foreground hover:text-facturito-orange-500 transition-colors"
                >
                  Funcionalidades
                </Link>
              </li>
              <li>
                <Link
                  href="#precios"
                  className="text-muted-foreground hover:text-facturito-orange-500 transition-colors"
                >
                  Planes y Precios
                </Link>
              </li>
              <li>
                <Link href="#faq" className="text-muted-foreground hover:text-facturito-orange-500 transition-colors">
                  Preguntas Frecuentes
                </Link>
              </li>
              <li>
                <Link
                  href="#contacto"
                  className="text-muted-foreground hover:text-facturito-orange-500 transition-colors"
                >
                  Contacto
                </Link>
              </li>
            </ul>
          </div>

          {/* Información legal */}
          <div>
            <h3 className="text-lg font-semibold mb-4">Legal</h3>
            <ul className="space-y-2">
              <li>
                <Link href="#" className="text-muted-foreground hover:text-facturito-orange-500 transition-colors">
                  Términos y Condiciones
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-facturito-orange-500 transition-colors">
                  Política de Privacidad
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-facturito-orange-500 transition-colors">
                  Política de Cookies
                </Link>
              </li>
              <li>
                <Link href="#" className="text-muted-foreground hover:text-facturito-orange-500 transition-colors">
                  Soporte Técnico
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-12 pt-8 text-center text-muted-foreground">
          <p>&copy; 2024 Facturito. Todos los derechos reservados. Hecho con ❤️ para comerciantes argentinos.</p>
        </div>
      </div>
    </footer>
  )
}
