import { ContactForm } from "@/components/contact-form"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { MessageCircle, Clock, ThumbsUp } from 'lucide-react'

export function ContactSection() {
  return (
    <section className="py-24 bg-gray-100" id="kontakt-formular">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Lassen Sie uns zusammenarbeiten</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Entdecken Sie, wie Crashify Ihre Schadensabwicklung revolutionieren kann. Kontaktieren Sie uns noch heute für eine maßgeschneiderte Lösung.
          </p>
        </div>
        
        <div className="grid gap-12 lg:grid-cols-2 items-start">
          <div className="flex flex-col space-y-8 h-full">
            <Card className="bg-white shadow-lg flex-grow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Warum Sie uns kontaktieren sollten</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex items-start">
                  <MessageCircle className="w-5 h-5 mr-3 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Expertenwissen</h3>
                    <p className="text-gray-600">Unser Team bietet fundiertes Wissen aus der Schadensabwicklung und hat bereits mehrere Tausend Gutachten auf höchstem Qualitätsniveau erstellt.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <Clock className="w-5 h-5 mr-3 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Schnelle Antwort</h3>
                    <p className="text-gray-600">Wir melden uns innerhalb von 24 Stunden bei Ihnen zurück.</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <ThumbsUp className="w-5 h-5 mr-3 text-blue-500 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold text-gray-900">Maßgeschneiderte Lösungen</h3>
                    <p className="text-gray-600">Egal ob Reparaturbetrieb oder wenn du als Gutachter durchstarten möchtest, wir sind flexibel und finden individuelle Lösungen für Ihre spezifischen Anforderungen.</p>
                  </div>
                </div>
              </CardContent>
            </Card>
            
            <Card className="bg-blue-50 border-blue-200 flex-grow">
              <CardHeader>
                <CardTitle className="text-xl font-semibold text-gray-900">Unsere Versprechen an Sie</CardTitle>
              </CardHeader>
              <CardContent className="flex flex-col justify-between h-full">
                <ul className="list-disc list-inside space-y-2 text-gray-700">
                  <li>Kostenlose erste Beratung</li>
                  <li>Transparente Abrechnung</li>
                  <li>Flexible Lösungen für Ihr Unternehmen</li>
                  <li>Kontinuierliche Unterstützung und Updates</li>
                </ul>
              </CardContent>
            </Card>
          </div>
          
          <Card className="bg-white shadow-lg h-full">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-gray-900">Kontaktieren Sie uns</CardTitle>
              <CardDescription className="text-gray-600">
                Füllen Sie das Formular aus, und wir melden uns umgehend bei Ihnen.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <ContactForm />
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}

