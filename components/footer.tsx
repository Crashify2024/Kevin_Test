"use client"

import Link from "next/link"
import { Button } from "@/components/ui/button"

export function Footer() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gray-100 text-gray-600 border-t">
      <div className="container mx-auto py-12 px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <h3 className="text-lg font-bold text-gray-900">Crashify</h3>
            <p className="text-sm">
              Innovative Schadensabwicklung für die moderne Automobilbranche. Wir revolutionieren die Unfallabwicklung.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Unternehmen</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <button onClick={() => scrollToSection('ueber-uns')} className="text-gray-600 hover:text-gray-900 block">
                  Über Uns
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection('kontakt')} className="text-gray-600 hover:text-gray-900 block">
                  Kontakt
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Rechtliches</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link href="/datenschutz" className="text-gray-600 hover:text-gray-900">
                  Datenschutz
                </Link>
              </li>
              <li>
                <Link href="/agb" className="text-gray-600 hover:text-gray-900">
                  AGB
                </Link>
              </li>
              <li>
                <Link href="/impressum" className="text-gray-600 hover:text-gray-900">
                  Impressum
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-4">Newsletter</h3>
            <p className="text-sm mb-4">Bleiben Sie auf dem Laufenden mit unseren neuesten Nachrichten und Updates.</p>
            <form className="flex flex-col space-y-2">
              <input
                type="email"
                placeholder="Ihre E-Mail-Adresse"
                className="px-4 py-2 bg-white border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <Button type="submit" className="w-full">Abonnieren</Button>
            </form>
          </div>
        </div>
        <div className="border-t border-gray-200 mt-8 pt-8 text-sm text-center">
          <p>&copy; {new Date().getFullYear()} Crashify. Alle Rechte vorbehalten.</p>
        </div>
      </div>
    </footer>
  )
}

