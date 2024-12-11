"use client"

import { useEffect } from 'react'
import { Hero } from '@/components/hero';
import { Features } from '@/components/features';
import Verguetungsmodell from '@/components/verguetungsmodell';
import { FAQ } from '@/components/faq';
import { DownloadApp } from '@/components/download-app';
import { UeberUns } from "@/components/ueber-uns"
import { ContactCTA } from "@/components/contact-cta"
import { ContactSection } from "@/components/contact-section"

export default function Home() {
  useEffect(() => {
    const scrollToContact = () => {
      const contactSection = document.getElementById('kontakt');
      if (contactSection) {
        contactSection.scrollIntoView({ behavior: 'smooth' });
      }
    };

    window.addEventListener('scrollToContact', scrollToContact);

    if (window.location.hash === '#kontakt') {
      scrollToContact();
    }

    return () => {
      window.removeEventListener('scrollToContact', scrollToContact);
    };
  }, []);

  return (
    <>
      <div id="home">
        <Hero />
      </div>
      <div id="vorteile">
        <Features />
      </div>
      <div id="verguetungsmodell">
        <Verguetungsmodell />
      </div>
      <div id="faq">
        <FAQ />
      </div>
      <div id="download">
        <DownloadApp />
      </div>
      <div id="ueber-uns">
        <UeberUns />
      </div>
      <ContactCTA />
      <div id="kontakt">
        <ContactSection />
      </div>
    </>
  )
}

