import Preloader from '@/components/ui/Preloader'

export default function StaticLoading() {
  return (
    <div className="min-h-screen bg-[#FFF7F0] flex items-center justify-center">
      <div className="text-center">
        <Preloader size="lg" text="Loading Static" />
        <p className="mt-6 text-[#3C1F0F]/70 text-sm">
          Loading static resources...
        </p>
      </div>
    </div>
  )
} 