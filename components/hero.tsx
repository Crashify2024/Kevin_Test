import { Button } from "@/components/ui/button"
import { Download, Phone, PlayCircle } from 'lucide-react'
import Image from 'next/image'
import { useEffect, useRef } from 'react'

export function Hero() {
  const scrollToDownload = () => {
    const downloadSection = document.getElementById('download');
    if (downloadSection) {
      downloadSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section className="min-h-[88vh] flex items-center bg-gradient-subtle py-12 px-4">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <Image
            src="/crashify-logo-transparent.jpg"
            alt="Crashify Logo"
            width={400}
            height={100}
            className="mb-12 mx-auto w-[400px] h-auto"
            priority
          />
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ihr Digitales <span className="text-white">Kfz-Gutachterbüro</span>
          </h1>
          <p className="text-base sm:text-lg text-white/80 mb-8 max-w-2xl mx-auto sm:h-auto h-[8em]">
            Innovative Technologie für die moderne Automobilbranche, die Effizienz und Genauigkeit in der Schadensabwicklung neu definiert.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              variant="outline"
              className="w-full sm:w-auto bg-white text-black hover:bg-gray-100 hover:text-black"
              onClick={() => {
                const formSection = document.getElementById('kontakt-formular');
                if (formSection) {
                  const yOffset = -80; // Adjust this value to account for any fixed headers
                  const y = formSection.getBoundingClientRect().top + window.pageYOffset + yOffset;
                  window.scrollTo({top: y, behavior: 'smooth'});
                }
              }}
            >
              <Phone className="mr-2 h-5 w-5" />
              <span className="whitespace-nowrap">Jetzt Kontaktieren</span>
            </Button>
            <Button 
              size="lg" 
              variant="secondary" 
              className="w-full sm:w-auto" 
              onClick={scrollToDownload}
            >
              <Download className="mr-2 h-5 w-5" />
              <span className="whitespace-nowrap">App Herunterladen</span>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="w-full sm:w-auto"
              onClick={() => {
                const verguetungsmodellSection = document.getElementById('verguetungsmodell');
                if (verguetungsmodellSection) {
                  verguetungsmodellSection.scrollIntoView({ behavior: 'smooth' });
                  window.dispatchEvent(new CustomEvent('playVerguetungsmodellVideo'));
                }
              }}
            >
              <PlayCircle className="mr-2 h-5 w-5" />
              <span className="whitespace-nowrap">Demo Ansehen</span>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

