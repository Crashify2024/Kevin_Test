import { LeadForm } from "@/components/lead-form"

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container max-w-md mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8">Kontaktieren Sie uns</h1>
        <LeadForm />
      </div>
    </div>
  )
}

