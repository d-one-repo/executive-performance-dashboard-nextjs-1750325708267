import { Layers, Check, X, Calendar } from 'lucide-react'
const initiatives = [
  {
    title: 'Open Access Expansion',
    status: 'On Track',
    progress: 80,
    owner: 'Dr. A. Keller',
    due: '2024-09-01'
  },
  {
    title: 'AI Peer Review Pilot',
    status: 'At Risk',
    progress: 45,
    owner: 'Prof. L. Schmidt',
    due: '2024-12-15'
  },
  {
    title: 'Global Outreach Program',
    status: 'Completed',
    progress: 100,
    owner: 'Ms. J. Tan',
    due: '2024-03-30'
  }
]
function statusColor(status) {
  if (status === 'On Track') return 'text-green-600'
  if (status === 'At Risk') return 'text-yellow-600'
  if (status === 'Completed') return 'text-blue-600'
  return 'text-gray-500'
}
export default function StrategicInitiatives() {
  return (
    <section className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center gap-2 mb-4">
        <Layers size={24} className="text-primary" />
        <h2 className="text-lg font-semibold">Strategic Initiatives</h2>
      </div>
      <div className="space-y-4">
        {initiatives.map((item) => (
          <div key={item.title} className="flex items-center justify-between gap-4 p-4 rounded-lg hover:bg-gray-50 transition">
            <div className="flex-1">
              <div className="font-medium">{item.title}</div>
              <div className="text-xs text-gray-500 mt-1 flex items-center gap-2">
                <Calendar size={14} className="inline-block" />
                Due: {item.due}
                <span className="ml-4">Owner: {item.owner}</span>
              </div>
              <div className="w-full bg-gray-200 rounded-full h-2 mt-2">
                <div
                  className={`h-2 rounded-full ${item.progress === 100 ? 'bg-blue-500' : 'bg-primary'}`}
                  style={{ width: `${item.progress}%` }}
                ></div>
              </div>
            </div>
            <div className="flex flex-col items-end min-w-[90px]">
              <span className={`font-semibold text-sm ${statusColor(item.status)}`}>{item.status}</span>
              <span className="text-xs text-gray-400">{item.progress}%</span>
              <div className="mt-2">
                {item.status === 'Completed' ? (
                  <Check size={20} className="text-blue-500" />
                ) : item.status === 'At Risk' ? (
                  <X size={20} className="text-yellow-600" />
                ) : (
                  <Check size={20} className="text-green-600" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}