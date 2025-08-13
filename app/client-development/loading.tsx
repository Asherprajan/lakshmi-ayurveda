import Preloader from '@/components/ui/Preloader'

export default function ClientDevelopmentLoading() {
  return (
    <div className="min-h-screen bg-[#FFF7F0] flex items-center justify-center">
      <div className="text-center">
        <Preloader size="lg" text="Loading Client" />
        <p className="mt-6 text-[#3C1F0F]/70 text-sm">
          Preparing client-side resources...
        </p>
      </div>
    </div>
  )
} 