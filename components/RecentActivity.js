import { FileText, User, Star, Layers, Calendar } from 'lucide-react'
const activities = [
  {
    icon: FileText,
    title: 'New Article Published',
    description: '“Advances in Robotic Surgery” in Nature Surgery',
    time: '2 hours ago'
  },
  {
    icon: User,
    title: 'New Author Registered',
    description: 'Dr. Emily Carter (Stanford University)',
    time: '5 hours ago'
  },
  {
    icon: Star,
    title: 'Journal Impact Factor Updated',
    description: 'Nature Surgery: 6.2 (+0.3)',
    time: '1 day ago'
  },
  {
    icon: Layers,
    title: 'Initiative Completed',
    description: 'Global Outreach Program',
    time: '2 days ago'
  }
]
export default function RecentActivity() {
  return (
    <section className="bg-white rounded-xl shadow p-6">
      <div className="flex items-center gap-2 mb-4">
        <Calendar size={24} className="text-primary" />
        <h2 className="text-lg font-semibold">Recent Activity</h2>
      </div>
      <ul className="divide-y divide-gray-100">
        {activities.map((activity, idx) => (
          <li key={idx} className="flex items-start gap-3 py-4 first:pt-0 last:pb-0">
            <div className="bg-primary/10 text-primary rounded-full p-2 mt-1">
              <activity.icon size={20} />
            </div>
            <div>
              <div className="font-medium">{activity.title}</div>
              <div className="text-sm text-gray-500">{activity.description}</div>
              <div className="text-xs text-gray-400 mt-1">{activity.time}</div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  )
}