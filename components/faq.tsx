import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion"

export function FAQ() {
  return (
    <section className="py-24 bg-white text-gray-900">
      <div className="container max-w-full sm:max-w-[90%] md:max-w-[80%] mx-auto px-4 sm:px-6">
        <h2 className="text-xl sm:text-2xl font-bold text-center mb-8 text-gray-900">Häufig gestellte Fragen</h2>
        <Accordion type="single" collapsible className="w-full">
          <AccordionItem value="item-1">
            <AccordionTrigger className="text-base sm:text-lg text-left justify-start text-gray-900">Wie funktioniert Crashify?</AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Crashify ist eine mobile App, die den gesamten Prozess der Unfallberichterstattung digitalisiert. Sie ermöglicht es Nutzern, Unfalldetails aufzunehmen, Fotos zu machen und Berichte direkt von ihrem Smartphone aus zu erstellen und zu übermitteln.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-2">
            <AccordionTrigger className="text-base sm:text-lg text-left justify-start text-gray-900">Ist Crashify DSGVO-konform?</AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Ja, Crashify ist vollständig DSGVO-konform. Wir nehmen den Schutz persönlicher Daten sehr ernst und haben strenge Sicherheitsmaßnahmen implementiert, um die Privatsphäre unserer Nutzer zu gewährleisten.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-3">
            <AccordionTrigger className="text-base sm:text-lg text-left justify-start text-gray-900">Benötige ich für Crashify ein Gewerbe?</AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Ja, für die Nutzung von Crashify ist ein angemeldetes Gewerbe erforderlich. Während unserer kostenlosen Ausbildung unterstützen wir Sie mit allen wichtigen Informationen zur Gewerbeanmeldung, damit Sie schnell und unkompliziert starten können.
            </AccordionContent>
          </AccordionItem>
          <AccordionItem value="item-4">
            <AccordionTrigger className="text-base sm:text-lg text-left justify-start text-gray-900">Welche Vorteile bietet Crashify gegenüber herkömmlichen Methoden?</AccordionTrigger>
            <AccordionContent className="text-gray-700">
              Crashify bietet zahlreiche Vorteile, darunter schnellere Bearbeitungszeiten, höhere Genauigkeit bei der Schadenserfassung, reduzierte Betrugsrisiken und verbesserte Kundenzufriedenheit durch einen transparenten und effizienten Prozess.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </section>
  )
}

