import { Home, Menu, User, Settings } from 'lucide-react'
import DashboardHeader from '../components/DashboardHeader'
import KPIGrid from '../components/KPIGrid'
import DepartmentPerformance from '../components/DepartmentPerformance'
import StrategicInitiatives from '../components/StrategicInitiatives'
import RecentActivity from '../components/RecentActivity'
export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <DashboardHeader />
      <main className="container mx-auto px-4 py-6">
        <KPIGrid />
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mt-6">
          <div className="lg:col-span-2 flex flex-col gap-6">
            <DepartmentPerformance />
            <StrategicInitiatives />
          </div>
          <div>
            <RecentActivity />
          </div>
        </div>
      </main>
    </div>
  )
}