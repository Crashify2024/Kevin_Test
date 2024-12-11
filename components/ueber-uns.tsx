import Image from 'next/image'
import { Button } from "@/components/ui/button"
import { Phone, CheckCircle } from 'lucide-react'

export function UeberUns() {
  const keyPoints = [
    "Innovative App für professionelle Schadensaufnahmen",
    "Keine hohen Anfangsinvestitionen erforderlich",
    "Flexibles und kostengünstiges Gutachtermodell",
    "Digitale Transformation der Kfz-Schadensbewertung"
  ]

  return (
    <section className="py-16 px-4 bg-gradient-to-br from-white to-gray-100" id="ueber-uns" aria-labelledby="ueber-uns-title">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-8 items-center">
          <div className="w-full lg:w-1/2 relative aspect-[4/3] lg:aspect-auto lg:h-[500px]">
            <Image
              src="/max-maurer.jpg"
              alt="Max Maurer, Gründer von Crashify - Innovative Kfz-Schadensbewertung"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-lg shadow-lg"
              priority
            />
          </div>
          <div className="w-full lg:w-1/2 flex flex-col justify-between space-y-4">
            <h2 id="ueber-uns-title" className="text-xl sm:text-2xl font-bold mb-4">Über Crashify: Revolutionäre Kfz-Schadensbewertung</h2>
            <p className="text-base sm:text-lg font-semibold text-gray-700">
              Gegründet 2020 von Max Maurer, Kfz-Meister und Betriebswirt, revolutioniert Crashify die digitale Schadensregulierung in Deutschland.
            </p>
            <ul className="space-y-2">
              {keyPoints.map((point, index) => (
                <li key={index} className="flex items-start">
                  <CheckCircle className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-1" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8">
              <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 hover:text-black" onClick={() => {
                const formSection = document.getElementById('kontakt-formular');
                if (formSection) {
                  const yOffset = -80; 
                  const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({top: y, behavior: 'smooth'});
                }
              }}>
                <Phone className="mr-2 h-5 w-5" />
                Jetzt kontaktieren
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

