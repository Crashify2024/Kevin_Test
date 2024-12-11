import { Button } from "@/components/ui/button"
import { Check } from 'lucide-react'

export function Pricing() {
  return (
    <section className="py-24 bg-gray-50">
      <div className="container">
        <h2 className="text-3xl font-bold text-center mb-12">Unsere Preise</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              title: "Starter",
              price: "0€",
              features: [
                "Bis zu 10 Berichte pro Monat",
                "Grundlegende Analysefunktionen",
                "E-Mail-Support",
              ],
            },
            {
              title: "Professional",
              price: "49,99€",
              features: [
                "Unbegrenzte Berichte",
                "Erweiterte Analysefunktionen",
                "Prioritäts-Support",
                "API-Zugang",
              ],
            },
            {
              title: "Enterprise",
              price: "Individuell",
              features: [
                "Alles aus Professional",
                "Maßgeschneiderte Lösungen",
                "Dedizierter Account Manager",
                "On-Premise-Option",
              ],
            },
          ].map((plan, index) => (
            <div key={index} className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold mb-4">{plan.title}</h3>
              <p className="text-4xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6 space-y-2">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    {feature}
                  </li>
                ))}
              </ul>
              <Button className="w-full">Auswählen</Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

