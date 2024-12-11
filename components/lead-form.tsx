"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export function LeadForm() {
  const [isSubmitted, setIsSubmitted] = useState(false)

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    // Here you would typically send the form data to your server
    console.log("Form submitted")
    setIsSubmitted(true)
  }

  if (isSubmitted) {
    return (
      <div className="text-center">
        <h3 className="text-2xl font-bold mb-4">Vielen Dank!</h3>
        <p>Wir werden uns in Kürze bei Ihnen melden.</p>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <Label htmlFor="name">Name</Label>
        <Input id="name" required />
      </div>
      <div>
        <Label htmlFor="email">E-Mail</Label>
        <Input id="email" type="email" required />
      </div>
      <div>
        <Label htmlFor="phone">Telefon</Label>
        <Input id="phone" type="tel" />
      </div>
      <div>
        <Label htmlFor="message">Nachricht</Label>
        <Textarea id="message" />
      </div>
      <Button type="submit" className="w-full">Anfrage senden</Button>
    </form>
  )
}

