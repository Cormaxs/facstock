import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { ArrowRight, Phone, Mail } from "lucide-react"

export function CTASection() {
  return (
    <section id="contacto" className="py-20 bg-gradient-to-r from-facturito-purple-600 to-facturito-orange-500">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white sm:text-4xl">Transforma la gestión de tu negocio hoy</h2>
          <p className="mt-4 text-xl text-white/90 max-w-2xl mx-auto">
            Únete a cientos de comerciantes que ya confían en Facturito para hacer crecer sus negocios.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Tu email comercial"
              className="bg-white/10 border-white/20 text-white placeholder:text-white/70 focus:bg-white/20"
            />
            <Button
              size="lg"
              className="bg-white text-facturito-purple-700 hover:bg-white/90 whitespace-nowrap font-semibold"
            >
              ¡Empezar Gratis!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>

          <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-8 text-white/90">
            <div className="flex items-center">
              <Phone className="h-5 w-5 mr-2" />
              <span>+54 11 1234-5678</span>
            </div>
            <div className="flex items-center">
              <Mail className="h-5 w-5 mr-2" />
              <span>hola@facturito.com.ar</span>
            </div>
          </div>

          <p className="mt-8 text-sm text-white/80">
            15 días de prueba gratuita • Sin costo de implementación • Soporte en español
          </p>
        </div>
      </div>
    </section>
  )
}
