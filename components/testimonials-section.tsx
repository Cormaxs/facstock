import { Card, CardContent } from "@/components/ui/card"
import { Star } from "lucide-react"

export function TestimonialsSection() {
  const testimonials = [
    {
      name: "Juan Pérez",
      business: "Kiosco 'El Rincón'",
      content:
        "Facturito me cambió la vida. Antes perdía horas haciendo facturas a mano, ahora todo es automático y puedo enfocarme en atender a mis clientes.",
      rating: 5,
    },
    {
      name: "María González",
      business: "Boutique 'Estilo Único'",
      content:
        "El control de stock es increíble. Ya no me quedo sin mercadería importante y los reportes me ayudan a saber qué productos vender más.",
      rating: 5,
    },
    {
      name: "Carlos Rodríguez",
      business: "Ferretería 'Todo Hogar'",
      content:
        "La integración con AFIP es perfecta. Mis facturas salen automáticamente y nunca más tuve problemas con la AFIP. Súper recomendado.",
      rating: 5,
    },
  ]

  return (
    <section className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Clientes Satisfechos</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Descubre cómo Facturito está ayudando a negocios como el tuyo a crecer y prosperar.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="h-full border-border">
              <CardContent className="p-6">
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="h-5 w-5 text-yellow-400 fill-current" />
                  ))}
                </div>
                <blockquote className="text-muted-foreground mb-4">"{testimonial.content}"</blockquote>
                <div className="border-t border-border pt-4">
                  <p className="font-semibold text-foreground">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.business}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
