"use client"

import { useState, useEffect, useRef } from 'react'
import { Button } from "@/components/ui/button"
import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group"
import { CheckCircle } from 'lucide-react'

export default function Verguetungsmodell() {
  const [activeTab, setActiveTab] = useState<"gutachter" | "partner">("gutachter")

  const vorteile = {
    gutachter: [
      { title: "Kostenlose Nutzung", fact: "Keine Startkosten oder Gebühren" },
      { title: "Attraktive Vergütung", fact: "50% des Gutachterhonorars (Ø 310€ pro Schaden)" },
      { title: "Geringer Zeitaufwand", fact: "Automatisierte Abwicklung durch Crashify" },
      { title: "Maximale Flexibilität", fact: "Arbeiten Sie wann und wo Sie möchten" },
      { title: "Schnelle Auszahlung", fact: "Transparente, automatisierte Abrechnung" },
      { title: "Zertifizierter Abschluss", fact: "Erhalte eine kostenlose Schulung mit einem zertifizierten Abschluss von Crashify" }
    ],
    partner: [
      { title: "Wertschöpfungsoptimiert", fact: "125€ pro eingereichtes Gutachten" },
      { title: "Kundenzufriedenheit", fact: "Schnelle, professionelle Schadensabwicklung" },
      { title: "Schnell & Präzise", fact: "Innerhalb weniger Stunden liegt Ihnen das qualifizierte Gutachten vor" },
      { title: "Nahtlose Integration", fact: "Perfekte Anpassung an Ihren Werkstattalltag" },
      { title: "Effektive Prozessgestaltung", fact: "Sie können den Kunden direkt bedienen – dies spart Ihnen Kosten und Ressourcen" },
      { title: "Wettbewerbsvorteil", fact: "Positionierung als innovative Werkstatt" }
    ]
  }

  const videos = {
    gutachter: {
      id: "ReGVMyPnHu4",
      title: "Crashify Gutachter: Einfach, flexibel und lukrativ",
      description: "Werden Sie Crashify-Gutachter und arbeiten Sie flexibel von zu Hause aus. Nutzen Sie unsere innovative App für effiziente Schadensaufnahmen, profitieren Sie von attraktiven Vergütungen und einer kostenlosen Schulung."
    },
    partner: {
      id: "-cARReITLOU",
      title: "Crashify für Reparaturbetriebe: Zusatzeinnahmen ohne Mehraufwand",
      description: "Steigern Sie den Umsatz Ihres Reparaturbetriebs mit Crashify. Generieren Sie zusätzliche Einnahmen ohne Mehrarbeit, integrieren Sie unsere Lösung nahtlos in Ihren Werkstattalltag und verbessern Sie die Kundenzufriedenheit."
    }
  };

  const videoRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let player: any;

    const loadYouTubeScript = () => {
      const tag = document.createElement('script');
      tag.src = 'https://www.youtube.com/iframe_api';
      const firstScriptTag = document.getElementsByTagName('script')[0];
      firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);
    };

    const onYouTubeIframeAPIReady = () => {
      player = new (window as any).YT.Player('verguetungsmodell-video', {
        videoId: videos[activeTab].id,
        playerVars: {
          responsive: 1,
          autoplay: 0,
          rel: 0,
        },
        events: {
          onReady: (event: any) => {
            console.log('YouTube player is ready');
            handleResize();
          },
          onError: (event: any) => {
            console.error('YouTube player error:', event.data);
          },
        },
      });
    };

    const handleResize = () => {
      if (player && player.getIframe) {
        const iframe = player.getIframe();
        const container = iframe.parentElement;
        const containerWidth = container.offsetWidth;
        const containerHeight = containerWidth * (9/16); // 16:9 aspect ratio
        iframe.style.width = '100%';
        iframe.style.height = `${containerHeight}px`;
      }
    };

    window.addEventListener('resize', handleResize);

    const handlePlayVideo = () => {
      if (player && player.playVideo) {
        player.playVideo();
      }
    };

    if (!(window as any).YT) {
      loadYouTubeScript();
      (window as any).onYouTubeIframeAPIReady = onYouTubeIframeAPIReady;
    } else {
      onYouTubeIframeAPIReady();
    }

    window.addEventListener('playVerguetungsmodellVideo', handlePlayVideo);

    return () => {
      window.removeEventListener('playVerguetungsmodellVideo', handlePlayVideo);
      if (player && player.destroy) {
        player.destroy();
      }
      window.removeEventListener('resize', handleResize);
    };
  }, [activeTab]);

  return (
    <section className="bg-gradient-subtle py-12 px-4" id="verguetungsmodell">
      <div className="container mx-auto max-w-4xl">
        <div className="max-w-3xl mx-auto text-center mb-6">
          <h2 className="text-xl sm:text-2xl font-bold mb-2 text-white">Unser Vergütungsmodell</h2>
          <p className="text-sm sm:text-base text-white/80">Wählen Sie das Modell, das am besten zu Ihnen passt.</p>
        </div>
        <div className="flex justify-center mb-8">
          <ToggleGroup type="single" value={activeTab} onValueChange={(value) => setActiveTab(value as "gutachter" | "partner")} className="bg-secondary rounded-lg p-1 flex flex-col sm:flex-row w-full">
            <ToggleGroupItem value="gutachter" aria-label="Jetzt Gutachter werden" className="rounded-md px-4 py-3 data-[state=on]:bg-black data-[state=on]:text-white transition-all text-sm sm:text-base w-full mb-2 sm:mb-0 sm:mr-2 text-black">
              Jetzt Gutachter werden
            </ToggleGroupItem>
            <ToggleGroupItem value="partner" aria-label="Für Reperaturbetriebe" className="rounded-md px-4 py-3 data-[state=on]:bg-black data-[state=on]:text-white transition-all text-sm sm:text-base w-full text-black">
              Für Reperaturbetriebe
            </ToggleGroupItem>
          </ToggleGroup>
        </div>
        <div className="bg-card p-4 rounded-lg shadow-lg">
          <div className="relative w-full pt-[56.25%] mb-6">
            <div ref={videoRef} id="verguetungsmodell-video" className="absolute top-0 left-0 w-full h-full rounded-lg overflow-hidden"></div>
          </div>
          <div className="grid gap-4 grid-cols-1 sm:grid-cols-2">
            {vorteile[activeTab].map((vorteil, index) => (
              <div key={index} className="flex items-start p-4 bg-secondary rounded-lg">
                <CheckCircle className="h-5 w-5 text-black mr-2 flex-shrink-0 mt-1 stroke-2 fill-none" />
                <div className="text-black">
                  <h4 className="font-semibold text-black">{vorteil.title}</h4>
                  <p className="text-sm text-black">{vorteil.fact}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <div className="mt-6 text-center">
          <Button size="lg" variant="secondary" className="w-full sm:w-auto" onClick={() => window.dispatchEvent(new Event('scrollToContact'))}>
            Jetzt bei Crashify starten
          </Button>
        </div>
      </div>
    </section>
  )
}

