import { Button } from "@/components/ui/button"
import { Phone, Download } from 'lucide-react'

export function ContactCTA() {
  return (
    <section className="py-16 px-4 bg-gradient-subtle" id="kontakt">
      <div className="container mx-auto text-center">
        <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Bereit, Ihre Schadensabwicklung zu optimieren?</h2>
        <p className="text-base sm:text-lg mb-6 text-white/80">Entdecken Sie, wie Crashify Ihr Unternehmen revolutionieren kann.</p>
        <div className="flex flex-col sm:flex-row justify-center gap-4 mt-6">
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 hover:text-black"
            onClick={() => {
              const formSection = document.getElementById('kontakt-formular');
              if (formSection) {
                const yOffset = -80; 
                const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                window.scrollTo({top: y, behavior: 'smooth'});
              }
            }}
          >
            <Phone className="mr-2 h-5 w-5" />
            Jetzt Kontaktieren
          </Button>
          <Button 
            size="lg" 
            variant="outline"
            className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 hover:text-black"
            onClick={() => {
              const downloadSection = document.getElementById('download');
              if (downloadSection) {
                downloadSection.scrollIntoView({ behavior: 'smooth' });
              }
            }}
          >
            <Download className="mr-2 h-5 w-5" />
            Download
          </Button>
        </div>
      </div>
    </section>
  )
}

