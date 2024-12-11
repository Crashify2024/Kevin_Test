import { Wallet, Clock, Download, Phone, DollarSign } from 'lucide-react'
import { Button } from "@/components/ui/button"

export function Features() {
  const features = [
    { 
      icon: Wallet, 
      title: "Keine Kosten", 
      description: "Weder die App-Nutzung noch die Ausbildung zum Sachverständigen kosten dich etwas – der Einstieg ist komplett risikofrei" 
    },
    { 
      icon: DollarSign, 
      title: "Aufwandsentschädigung", 
      description: "Mit Crashify profitieren Sie von einer fairen Vergütung für jedes erstellte Gutachten – eine lohnende Anerkennung Ihrer Expertise." 
    },
    { 
      icon: Clock, 
      title: "Zeitersparnis", 
      description: "Unsere App ermöglicht eine effiziente Schadensaufnahme, sodass Sie mehr Zeit für Ihre Kunden haben und Ihre Arbeitsabläufe optimieren können." 
    },
  ];

  return (
    <section className="bg-background py-16 px-4" id="vorteile">
      <div className="container mx-auto">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-foreground">Unsere Vorteile</h2>
          <p className="text-base sm:text-lg text-muted-foreground">Entdecken Sie, wie Crashify Ihre Arbeit revolutioniert und optimiert.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {features.map((feature, index) => (
            <div key={index} className="card text-center p-6">
              <div className="w-16 h-16 mx-auto flex items-center justify-center rounded-full bg-primary/10 mb-4">
                <feature.icon className="h-8 w-8 text-black" />
              </div>
              <h3 className="text-xl font-semibold mb-2 text-foreground">{feature.title}</h3>
              <p className="text-muted-foreground">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button size="lg" variant="outline" className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 hover:text-black" onClick={() => {
            const formSection = document.getElementById('kontakt-formular');
            if (formSection) {
              const yOffset = -80; 
              const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
              window.scrollTo({top: y, behavior: 'smooth'});
            }
          }}>
            <Phone className="mr-2 h-5 w-5" />
            <span className="whitespace-nowrap">Jetzt Kontaktieren</span>
          </Button>
          <Button 
            size="lg" 
            variant="secondary"
            className="w-full sm:w-auto"
            onClick={() => {
              const downloadSection = document.getElementById('download');
              if (downloadSection) {
                downloadSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Download className="mr-2 h-5 w-5" />
            <span className="whitespace-nowrap">App Herunterladen</span>
          </Button>
        </div>
      </div>
    </section>
  )
}

