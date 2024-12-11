import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Phone, CheckCircle } from 'lucide-react'

export function AboutUs() {
  const keyPoints = [
    "Fortschrittliche Schadensbewertung",
    "Sichere Datenspeicherung",
    "Mobile App-Lösung",
    "Echtzeit-Kollaboration"
  ]

  return (
    <section className="bg-background" id="ueber-uns">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-3xl font-bold mb-4 text-foreground">Warum Crashify wählen?</h2>
          <p className="text-xl text-muted-foreground">Entdecken Sie die Vorteile unserer innovativen Lösung.</p>
        </div>
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-[38.2%] golden-ratio"> {/* Golden ratio: smaller part */}
            <Image
              src="/crashify-team.jpg"
              alt="Das Crashify-Team bei der Arbeit an innovativen Lösungen"
              width={600}
              height={371}
              className="rounded-lg shadow-lg object-cover"
            />
          </div>
          <div className="lg:w-[61.8%]"> {/* Golden ratio: larger part */}
            <h3 className="text-2xl font-semibold mb-4 text-foreground">Crashify – Die treibende Kraft für Innovation in der Unfallberichterstattung</h3>
            <p className="mb-6 text-muted-foreground">
              Crashify revolutioniert die Unfallberichterstattung in der Automobilbranche. Mit modernster Technologie und tiefgreifender Branchenexpertise bieten wir maßgeschneiderte Lösungen, die Prozesse effizienter, sicherer und zukunftsorientierter gestalten.
            </p>
            <ul className="space-y-2 mb-6">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-primary mr-2 flex-shrink-0 mt-1" />
                  <span className="text-foreground">{point}</span>
                </li>
              ))}
            </ul>
            <p className="mb-6 text-muted-foreground">
              Crashify optimiert die Unfallberichterstattung, reduziert Betrug und steigert die Effizienz sowie die Kundenzufriedenheit. Mit uns setzen Sie auf eine innovative, sichere und effiziente Lösung für die Automobilbranche.
            </p>
            <Button size="lg" variant="default" className="w-full sm:w-auto" onClick={() => window.dispatchEvent(new Event('scrollToContact'))}>
              <Phone className="mr-2 h-5 w-5" />
              Jetzt Kontaktieren
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

