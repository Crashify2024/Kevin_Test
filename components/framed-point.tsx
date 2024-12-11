import { Check } from 'lucide-react'

interface FramedPointProps {
  title: string
  points: string[]
}

export function FramedPoint({ title, points }: FramedPointProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 ease-in-out hover:shadow-xl mb-6">
      <div className="bg-primary text-primary-foreground p-4">
        <h4 className="text-xl font-semibold">{title}</h4>
      </div>
      <ul className="p-4 space-y-2">
        {points.map((point, index) => (
          <li key={index} className="flex items-start">
            <Check className="h-5 w-5 text-green-500 mr-2 flex-shrink-0 mt-0.5" />
            <span className="text-sm">{point}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

