import { Clock, BarChart3, Shield, TrendingUp } from "lucide-react"

export function BenefitsSection() {
  const benefits = [
    {
      icon: Clock,
      title: "Ahorro de Tiempo",
      description: "Automatiza tareas repetitivas y dedica más tiempo a hacer crecer tu negocio.",
      color: "text-facturito-orange-500",
      bgColor: "bg-facturito-orange-100 dark:bg-facturito-orange-900/20",
      hoverBgColor: "group-hover:bg-facturito-orange-200 dark:group-hover:bg-facturito-orange-900/30",
    },
    {
      icon: BarChart3,
      title: "Control Total de Stock",
      description: "Mantén tu inventario actualizado en tiempo real y evita faltantes o excesos.",
      color: "text-facturito-purple-600",
      bgColor: "bg-facturito-purple-100 dark:bg-facturito-purple-900/20",
      hoverBgColor: "group-hover:bg-facturito-purple-200 dark:group-hover:bg-facturito-purple-900/30",
    },
    {
      icon: Shield,
      title: "Facturación AFIP Simple",
      description: "Emite facturas electrónicas cumpliendo con todas las normativas argentinas.",
      color: "text-facturito-orange-600",
      bgColor: "bg-facturito-orange-100 dark:bg-facturito-orange-900/20",
      hoverBgColor: "group-hover:bg-facturito-orange-200 dark:group-hover:bg-facturito-orange-900/30",
    },
    {
      icon: TrendingUp,
      title: "Reportes Inteligentes",
      description: "Toma decisiones basadas en datos con reportes claros y detallados.",
      color: "text-facturito-purple-500",
      bgColor: "bg-facturito-purple-100 dark:bg-facturito-purple-900/20",
      hoverBgColor: "group-hover:bg-facturito-purple-200 dark:group-hover:bg-facturito-purple-900/30",
    },
  ]

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">¿Por qué elegir Facturito?</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvemos los problemas más comunes de gestión y facturación para negocios argentinos, brindándote las
            herramientas que necesitas para crecer.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {benefits.map((benefit, index) => (
            <div key={index} className="text-center group">
              <div
                className={`mx-auto h-16 w-16 flex items-center justify-center rounded-full ${benefit.bgColor} ${benefit.hoverBgColor} transition-colors`}
              >
                <benefit.icon className={`h-8 w-8 ${benefit.color}`} />
              </div>
              <h3 className="mt-6 text-xl font-semibold text-foreground">{benefit.title}</h3>
              <p className="mt-2 text-muted-foreground">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
