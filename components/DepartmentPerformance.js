import { File, User, Star, Layers } from 'lucide-react'
const departments = [
  {
    name: 'Editorial',
    icon: File,
    kpi: 'Acceptance Rate',
    value: '32%',
    trend: '+2%',
    trendType: 'up'
  },
  {
    name: 'Research',
    icon: Star,
    kpi: 'Avg. Impact Factor',
    value: '6.2',
    trend: '+0.3',
    trendType: 'up'
  },
  {
    name: 'Authors',
    icon: User,
    kpi: 'New Authors',
    value: '120',
    trend: '+10',
    trendType: 'up'
  },
  {
    name: 'Initiatives',
    icon: Layers,
    kpi: 'Active Projects',
    value: '12',
    trend: '+2',
    trendType: 'up'
  }
]
export default function DepartmentPerformance() {
  return (
    <section className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center gap-2 mb-4">
        <Layers size={24} className="text-primary" />
        <h2 className="text-lg font-semibold">Department Performance</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {departments.map((dept) => (
          <div key={dept.name} className="flex items-center gap-4 p-4 rounded-lg hover:bg-gray-50 transition">
            <div className="bg-primary/10 text-primary rounded-full p-3">
              <dept.icon size={24} />
            </div>
            <div>
              <div className="font-semibold">{dept.name}</div>
              <div className="text-sm text-gray-500">{dept.kpi}: <span className="font-medium text-gray-700">{dept.value}</span></div>
              <div className="text-xs text-green-600">{dept.trend} {dept.trendType === 'up' ? '▲' : '▼'}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}