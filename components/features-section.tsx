import { Package, FileText, BarChart, Users } from "lucide-react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"

export function FeaturesSection() {
  const features = [
    {
      icon: Package,
      title: "Gestión de Inventario",
      color: "text-facturito-orange-500",
      bgColor: "bg-facturito-orange-100 dark:bg-facturito-orange-900/20",
      items: [
        "Control de stock en tiempo real",
        "Carga de productos fácil",
        "Alertas de stock mínimo",
        "Múltiples depósitos/sucursales",
      ],
    },
    {
      icon: FileText,
      title: "Facturación Electrónica",
      color: "text-facturito-purple-600",
      bgColor: "bg-facturito-purple-100 dark:bg-facturito-purple-900/20",
      items: [
        "Facturas A, B, C, NCF compatibles con AFIP-ARCA",
        "Personalización de comprobantes",
        "Gestión de clientes y proveedores",
        "Integración automática con AFIP",
      ],
    },
    {
      icon: BarChart,
      title: "Reportes y Análisis",
      color: "text-facturito-orange-600",
      bgColor: "bg-facturito-orange-100 dark:bg-facturito-orange-900/20",
      items: [
        "Informes de ventas y rentabilidad",
        "Reportes de stock y rotación",
        "Análisis de clientes",
        "Gráficos claros para decisiones",
      ],
    },
    {
      icon: Users,
      title: "Otros Módulos",
      color: "text-facturito-purple-500",
      bgColor: "bg-facturito-purple-100 dark:bg-facturito-purple-900/20",
      items: [
        "CRM básico integrado",
        "Integración con Mercado Pago",
        "Conexión con e-commerce",
        "Gestión de usuarios y permisos",
      ],
    },
  ]

  return (
    <section id="funcionalidades" className="py-20 bg-muted/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Funcionalidades Clave</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Todo lo que necesitas para gestionar tu negocio de manera eficiente y profesional.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="h-full hover:shadow-lg transition-shadow border-border">
              <CardHeader>
                <div className="flex items-center space-x-3">
                  <div className={`h-10 w-10 flex items-center justify-center rounded-lg ${feature.bgColor}`}>
                    <feature.icon className={`h-6 w-6 ${feature.color}`} />
                  </div>
                  <CardTitle className="text-xl text-foreground">{feature.title}</CardTitle>
                </div>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2">
                  {feature.items.map((item, itemIndex) => (
                    <li key={itemIndex} className="flex items-start">
                      <div className="h-1.5 w-1.5 rounded-full bg-facturito-orange-500 mt-2 mr-3 flex-shrink-0" />
                      <span className="text-muted-foreground">{item}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
