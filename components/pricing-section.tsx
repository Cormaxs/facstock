import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Check } from "lucide-react"

export function PricingSection() {
  const plans = [
    {
      name: "Emprendedor",
      subtitle: "Básico",
      price: "$18.000",
      period: "+ IVA/mes",
      description: "Ideal para kioscos, pequeños emprendimientos, ferias",
      features: [
        "Hasta 500 productos activos",
        "Hasta 100 comprobantes/mes",
        "1 usuario",
        "Reportes básicos de ventas",
        "Soporte por email/chat (24-48hs)",
      ],
      cta: "Elegir Plan Emprendedor",
      popular: false,
    },
    {
      name: "PYME",
      subtitle: "Estándar",
      price: "$35.000",
      period: "+ IVA/mes",
      description: "Tiendas de ropa, minimercados, ferreterías medianas",
      features: [
        "Hasta 5.000 productos activos",
        "Facturación electrónica ilimitada",
        "3 usuarios",
        "1-2 depósitos/sucursales",
        "Reportes avanzados completos",
        "Control de cuentas corrientes",
        "Soporte prioritario (8-12hs)",
        "Integración con Mercado Pago",
      ],
      cta: "Elegir Plan PYME",
      popular: true,
    },
    {
      name: "Pro",
      subtitle: "Premium",
      price: "$75.000",
      period: "+ IVA/mes",
      description: "Alto volumen, varias sucursales, distribuidoras",
      features: [
        "10.000+ productos (ilimitado)",
        "Facturación electrónica ilimitada",
        "Usuarios ilimitados",
        "Depósitos/sucursales ilimitadas",
        "Reportes personalizables",
        "CRM básico incluido",
        "API para integraciones",
        "Soporte 24/7 prioritario",
        "Capacitaciones personalizadas",
      ],
      cta: "Contactar para Plan Pro",
      popular: false,
    },
  ]

  return (
    <section id="precios" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Nuestros Planes</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Elige el plan que mejor se adapte a las necesidades de tu negocio.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {plans.map((plan, index) => (
            <Card
              key={index}
              className={`relative h-full border-border ${plan.popular ? "border-facturito-orange-500 shadow-lg scale-105" : ""}`}
            >
              {plan.popular && (
                <Badge className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-facturito-orange-500 to-facturito-purple-600 text-white">
                  ¡El Más Popular!
                </Badge>
              )}
              <CardHeader className="text-center pb-8">
                <CardTitle className="text-2xl text-foreground">{plan.name}</CardTitle>
                <CardDescription className="text-sm text-muted-foreground">{plan.subtitle}</CardDescription>
                <div className="mt-4">
                  <span className="text-4xl font-bold text-foreground">{plan.price}</span>
                  <span className="text-muted-foreground ml-1">{plan.period}</span>
                </div>
                <p className="text-sm text-muted-foreground mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent className="pt-0">
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start">
                      <Check className="h-5 w-5 text-green-500 mr-3 mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  className={`w-full ${
                    plan.popular
                      ? "bg-gradient-to-r from-facturito-orange-500 to-facturito-purple-600 hover:from-facturito-orange-600 hover:to-facturito-purple-700 text-white"
                      : "bg-foreground hover:bg-foreground/90 text-background"
                  }`}
                >
                  {plan.cta}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-sm text-muted-foreground max-w-2xl mx-auto">
            <strong>Nota importante:</strong> Precios estimados y sujetos a actualización debido a la inflación.
            ¡Consulta por tu plan anual y obtén un descuento!
          </p>
        </div>
      </div>
    </section>
  )
}
