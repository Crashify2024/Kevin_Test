"use client";

import { Download, Menu } from "lucide-react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import * as React from "react";

import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogTrigger } from "@/components/ui/dialog";

const scrollToSection = (id: string) => {
  const element = document.getElementById(id);
  if (element) {
    const yOffset = -80; // Adjust this value based on your navbar height
    const y =
      element.getBoundingClientRect().top + window.pageYOffset + yOffset;
    window.scrollTo({ top: y, behavior: "smooth" });
  }
};

export function Navbar() {
  const router = useRouter();

  const handleNavigation = (
    e: React.MouseEvent<HTMLAnchorElement>,
    path: string
  ) => {
    e.preventDefault();
    if (path === "/") {
      window.scrollTo({ top: 0, behavior: "smooth" });
    } else {
      const sectionId = path.slice(1); // Remove the leading '#'
      scrollToSection(sectionId);
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md shadow-sm">
      <nav className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16 items-center">
          <Link
            href="/"
            className="flex items-center space-x-2"
            onClick={(e) => handleNavigation(e, "/")}
          >
            <span className="text-xl sm:text-2xl font-bold text-foreground">
              CRASHIFY
            </span>
          </Link>
          <div className="hidden md:flex items-center space-x-4 lg:space-x-6">
            <NavItem href="/" onNavigate={handleNavigation}>
              Startseite
            </NavItem>
            <NavItem href="#vorteile" onNavigate={handleNavigation}>
              Lösungen
            </NavItem>
            <NavItem href="#verguetungsmodell" onNavigate={handleNavigation}>
              Vergütungsmodell
            </NavItem>
            <NavItem href="#faq" onNavigate={handleNavigation}>
              FAQ
            </NavItem>
            <NavItem href="#ueber-uns" onNavigate={handleNavigation}>
              Über Uns
            </NavItem>
            <NavItem href="#kontakt-formular" onNavigate={handleNavigation}>
              Kontakt
            </NavItem>
            <Button
              onClick={() => scrollToSection("download")}
              variant="outline"
              size="sm"
              className="ml-4"
            >
              <Download className="mr-2 h-4 w-4" />
              Download
            </Button>
          </div>
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="ghost" className="md:hidden" size="icon">
                <Menu className="h-6 w-6" />
                <span className="sr-only">Navigationsmenü umschalten</span>
              </Button>
            </DialogTrigger>
            <DialogContent className="w-[300px] sm:w-[400px]">
              <div className="grid gap-4 py-4">
                <DialogNavItem href="/">Startseite</DialogNavItem>
                <DialogNavItem href="#vorteile">Lösungen</DialogNavItem>
                <DialogNavItem href="#verguetungsmodell">
                  Vergütungsmodell
                </DialogNavItem>
                <DialogNavItem href="#faq">FAQ</DialogNavItem>
                <DialogNavItem href="#ueber-uns">Über Uns</DialogNavItem>
                <DialogNavItem href="#kontakt-formular">Kontakt</DialogNavItem>
                <Button
                  onClick={() => scrollToSection("download")}
                  variant="outline"
                  className="w-full"
                >
                  <Download className="mr-2 h-4 w-4" />
                  Download
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </nav>
    </header>
  );
}

const NavItem = ({
  href,
  children,
  onNavigate,
}: {
  href: string;
  children: React.ReactNode;
  onNavigate: (e: React.MouseEvent<HTMLAnchorElement>, path: string) => void;
}) => (
  <Link
    href={href}
    onClick={(e) => onNavigate(e, href)}
    className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
  >
    {children}
  </Link>
);

const DialogNavItem = ({
  href,
  children,
}: {
  href: string;
  children: React.ReactNode;
}) => (
  <Link
    href={href}
    onClick={(e) => {
      e.preventDefault();
      scrollToSection(href.slice(1));
    }}
    className="block w-full text-left py-2 hover:text-accent"
  >
    {children}
  </Link>
);
