"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

interface ToastMessage {
  message: string;
  type: "success" | "error";
}

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [toast, setToast] = useState<ToastMessage | null>(null);

  const showToast = (message: string, type: "success" | "error") => {
    setToast({ message, type });
    setTimeout(() => setToast(null), 5000); // Hide toast after 5 seconds
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(event.currentTarget);
    const data = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("/api/contact111", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });
      const result = await response.json();
      if (!response.ok) {
        // throw new Error(`HTTP error! status: ${response.status}`);
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      // setIsSubmitting(false);
      // showToast(
      //   "Fehler beim Senden. Bitte versuchen Sie es später erneut.",
      //   "error"
      // );
    }
    setIsSubmitting(false);
    showToast("Anfrage erfolgreich gesendet", "success");
  };

  return (
    <>
      {toast && (
        <div
          className={`fixed top-4 right-4 p-4 rounded-md ${
            toast.type === "success" ? "bg-green-500" : "bg-red-500"
          } text-white`}
        >
          {toast.message}
        </div>
      )}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <Label htmlFor="firstName" className="text-gray-700">
              Vorname
            </Label>
            <Input id="firstName" name="firstName" required className="mt-1" />
          </div>
          <div>
            <Label htmlFor="lastName" className="text-gray-700">
              Nachname
            </Label>
            <Input id="lastName" name="lastName" required className="mt-1" />
          </div>
        </div>
        <div>
          <Label htmlFor="email" className="text-gray-700">
            E-Mail
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            required
            className="mt-1"
          />
        </div>
        <div>
          <Label htmlFor="phone" className="text-gray-700">
            Telefon
          </Label>
          <Input id="phone" name="phone" type="tel" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="company" className="text-gray-700">
            Unternehmen
          </Label>
          <Input id="company" name="company" className="mt-1" />
        </div>
        <div>
          <Label htmlFor="interest" className="text-gray-700">
            Ich interessiere mich für
          </Label>
          <Select name="interest">
            <SelectTrigger className="mt-1">
              <SelectValue placeholder="Bitte wählen Sie eine Option" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="gutachter">Gutachter werden</SelectItem>
              <SelectItem value="reparaturbetrieb">Reparaturbetrieb</SelectItem>
              <SelectItem value="sonstige">Sonstige</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="message" className="text-gray-700">
            Nachricht
          </Label>
          <Textarea id="message" name="message" rows={4} className="mt-1" />
        </div>
        <Button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white"
          disabled={isSubmitting}
        >
          {isSubmitting ? "Wird gesendet..." : "Anfrage senden"}
        </Button>
      </form>
    </>
  );
}
