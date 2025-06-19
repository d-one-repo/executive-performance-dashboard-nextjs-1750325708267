import { Home, Menu, User, Settings } from 'lucide-react'
export default function DashboardHeader() {
  return (
    <header className="bg-white shadow-sm">
      <div className="container mx-auto flex items-center justify-between px-4 py-4">
        <div className="flex items-center gap-3">
          <Menu size={28} className="text-primary lg:hidden" />
          <Home size={28} className="text-primary hidden lg:block" />
          <h1 className="text-2xl font-bold text-primary tracking-tight">
            Executive Performance Dashboard
          </h1>
        </div>
        <div className="flex items-center gap-4">
          <span className="hidden md:block text-gray-700 font-medium">
            Stefanie Burgmaier
          </span>
          <User size={28} className="text-gray-500" />
          <Settings size={24} className="text-gray-400 hover:text-primary cursor-pointer" />
        </div>
      </div>
    </header>
  )
}