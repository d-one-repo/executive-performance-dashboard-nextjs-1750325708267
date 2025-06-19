import { FileText, Star, User, Layers } from 'lucide-react'
const kpis = [
  {
    label: 'Published Articles',
    value: '2,340',
    icon: FileText,
    change: '+8%',
    description: 'vs last quarter',
    color: 'bg-primary/10 text-primary'
  },
  {
    label: 'Impact Factor',
    value: '6.2',
    icon: Star,
    change: '+0.3',
    description: 'vs last year',
    color: 'bg-yellow-100 text-yellow-600'
  },
  {
    label: 'Active Authors',
    value: '1,120',
    icon: User,
    change: '+5%',
    description: 'vs last quarter',
    color: 'bg-accent/10 text-accent'
  },
  {
    label: 'Ongoing Initiatives',
    value: '12',
    icon: Layers,
    change: '+2',
    description: 'new this year',
    color: 'bg-blue-100 text-blue-700'
  }
]
export default function KPIGrid() {
  return (
    <section>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {kpis.map((kpi, idx) => (
          <div
            key={kpi.label}
            className="bg-white rounded-xl shadow p-5 flex items-center gap-4"
          >
            <div className={`rounded-full p-3 ${kpi.color}`}>
              <kpi.icon size={28} />
            </div>
            <div>
              <div className="text-2xl font-bold">{kpi.value}</div>
              <div className="text-gray-500 text-sm">{kpi.label}</div>
              <div className="text-xs mt-1 text-green-600 font-medium">{kpi.change} <span className="text-gray-400 font-normal">{kpi.description}</span></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}