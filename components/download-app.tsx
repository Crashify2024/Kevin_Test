import Image from 'next/image'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { Apple, PlayCircle } from 'lucide-react'

export function DownloadApp() {
  return (
    <section className="bg-gradient-subtle py-16 px-4" id="download">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <h2 className="text-xl sm:text-2xl font-bold mb-4 text-white">Jetzt durchstarten mit Crashify</h2>
            <p className="text-base sm:text-lg mb-6 text-white/80">
              Crashify ist die innovative Enterprise-Grade-App für Mobilgeräte, die effiziente Schadensabwicklung auf ein neues Level bringt. Profitieren Sie von einer benutzerfreundlichen Lösung, die Zeit spart, Ihre Arbeit erleichtert und Ihnen neue Einkommensmöglichkeiten bietet.
            </p>
            <p className="text-base sm:text-lg mb-6 text-white font-semibold">
              Jetzt downloaden und durchstarten!
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link 
                href="https://apps.apple.com/de/app/crashify/id6479369344" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="secondary" className="w-full h-14 px-6">
                  <Apple className="h-8 w-8 mr-2" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Download on</span>
                    <span className="text-lg font-semibold">App Store</span>
                  </div>
                </Button>
              </Link>
              <Link 
                href="https://play.google.com/store/apps/details?id=com.mmgutachten.crashify&hl=gsw&gl=US&pli=1" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full sm:w-auto"
              >
                <Button variant="secondary" className="w-full h-14 px-6">
                  <PlayCircle className="h-8 w-8 mr-2" />
                  <div className="flex flex-col items-start">
                    <span className="text-xs">Download on</span>
                    <span className="text-lg font-semibold">Google Play</span>
                  </div>
                </Button>
              </Link>
            </div>
          </div>
          <div className="lg:w-1/2 flex justify-center items-center">
            <div className="relative w-[200px] sm:w-[230px] md:w-[275px]">
              <Image
                src="/crashify-login-hand.png"
                alt="Crashify App Login Screen auf einem iPhone"
                width={345}
                height={614}
                className="rounded-3xl shadow-2xl"
                priority
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

