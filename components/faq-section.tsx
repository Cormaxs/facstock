import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

export function FAQSection() {
  const faqs = [
    {
      question: "¿Facturito es compatible con mi tipo de negocio?",
      answer:
        "Facturito está diseñado para todo tipo de comercios y PYMEs: kioscos, tiendas de ropa, ferreterías, minimercados, librerías, distribuidoras y más. Si vendes productos y necesitas facturar, Facturito es para ti.",
    },
    {
      question: "¿Necesito conocimientos técnicos para usar Facturito?",
      answer:
        "No, Facturito está diseñado para ser intuitivo y fácil de usar. Nuestro equipo te ayuda con la configuración inicial y ofrecemos capacitación para que puedas aprovechar al máximo todas las funcionalidades.",
    },
    {
      question: "¿Cómo funciona la integración con AFIP?",
      answer:
        "Facturito se conecta automáticamente con AFIP-ARCA para emitir facturas electrónicas válidas. Solo necesitas tus credenciales fiscales y nosotros nos encargamos del resto. Todas las facturas cumplen con la normativa argentina.",
    },
    {
      question: "¿Hay costo de implementación?",
      answer:
        "No, la implementación de Facturito es completamente gratuita. Solo pagas la suscripción mensual del plan que elijas. Nuestro equipo te ayuda con la configuración inicial sin costo adicional.",
    },
    {
      question: "¿Qué tipo de soporte ofrecen?",
      answer:
        "Ofrecemos soporte en español por email, chat y WhatsApp. Los tiempos de respuesta varían según el plan: Plan Emprendedor (24-48hs), Plan PYME (8-12hs), Plan Pro (soporte prioritario 24/7).",
    },
    {
      question: "¿Puedo cambiar de plan cuando quiera?",
      answer:
        "Sí, puedes cambiar tu plan en cualquier momento. Si necesitas más funcionalidades puedes hacer upgrade, y si necesitas reducir costos puedes hacer downgrade. Los cambios se aplican en el próximo período de facturación.",
    },
    {
      question: "¿Mis datos están seguros?",
      answer:
        "Absolutamente. Utilizamos encriptación de nivel bancario y servidores seguros. Realizamos backups automáticos diarios y cumplimos con todas las normativas de protección de datos. Tu información está completamente protegida.",
    },
    {
      question: "¿Puedo probar Facturito antes de pagar?",
      answer:
        "¡Por supuesto! Ofrecemos 15 días de prueba gratuita sin compromiso. Puedes probar todas las funcionalidades y decidir si Facturito es la solución ideal para tu negocio.",
    },
  ]

  return (
    <section id="faq" className="py-20 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-bold text-foreground sm:text-4xl">Preguntas Frecuentes</h2>
          <p className="mt-4 text-lg text-muted-foreground max-w-2xl mx-auto">
            Resolvemos las dudas más comunes sobre Facturito y cómo puede ayudar a tu negocio.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`} className="border-border">
                <AccordionTrigger className="text-left text-foreground hover:text-facturito-orange-500">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
    </section>
  )
}
