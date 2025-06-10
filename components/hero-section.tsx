import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle } from "lucide-react"

export function HeroSection() {
  return (
    <section
      id="inicio"
      className="relative overflow-hidden bg-gradient-to-br from-facturito-orange-50 to-facturito-purple-100 dark:from-facturito-purple-900/20 dark:to-facturito-orange-900/20 py-20 sm:py-32"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
            Facturito: Simplifica tu Negocio,{" "}
            <span className="bg-gradient-to-r from-facturito-orange-500 to-facturito-purple-600 bg-clip-text text-transparent">
              Potencia tus Ventas
            </span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground max-w-3xl mx-auto">
            El sistema de gestión de inventario y facturación electrónica para comercios y PYMEs de Argentina.
            Compatible con AFIP-ARCA. Controla tu stock, emite facturas y toma decisiones inteligentes.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button
              size="lg"
              className="bg-gradient-to-r from-facturito-orange-500 to-facturito-purple-600 hover:from-facturito-orange-600 hover:to-facturito-purple-700 text-white text-lg px-8 py-3"
            >
              ¡Pruébalo Gratis por 15 Días!
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg px-8 py-3 border-facturito-purple-300 text-facturito-purple-700 hover:bg-facturito-purple-50 dark:border-facturito-orange-400 dark:text-facturito-orange-400 dark:hover:bg-facturito-orange-400/10"
            >
              Solicitar Demo Gratuita
            </Button>
          </div>

          <div className="mt-12 flex flex-wrap items-center justify-center gap-6 text-sm text-muted-foreground">
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              Sin costo de implementación
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              Soporte en español
            </div>
            <div className="flex items-center">
              <CheckCircle className="h-5 w-5 text-green-500 mr-2" />
              Compatible con AFIP
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
