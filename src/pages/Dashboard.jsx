import { Users, DollarSign, Activity, Briefcase, LogOut } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { StatCard } from '../components/dashboard/StatCard';
import { MainLineChart, PerformanceBarChart, DistributionPieChart } from '../components/dashboard/DashboardCharts';
import { RecentOrders } from '../components/dashboard/RecentOrders';

const stats = [
  {
    title: 'Total Revenue',
    value: '$124,563.00',
    change: '+12.5%',
    changeText: 'from last month',
    trend: 'up',
    icon: DollarSign,
    colorClass: 'bg-blue-100 text-blue-600',
  },
  {
    title: 'Active Projects',
    value: '45',
    change: '+3.2%',
    changeText: 'from last month',
    trend: 'up',
    icon: Briefcase,
    colorClass: 'bg-indigo-100 text-indigo-600',
  },
  {
    title: 'Total Users',
    value: '8,342',
    change: '-1.4%',
    changeText: 'from last month',
    trend: 'down',
    icon: Users,
    colorClass: 'bg-emerald-100 text-emerald-600',
  },
  {
    title: 'Activity Rate',
    value: '94.2%',
    change: '+4.1%',
    changeText: 'from last week',
    trend: 'up',
    icon: Activity,
    colorClass: 'bg-amber-100 text-amber-600',
  },
];

export function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    if (window.confirm('Are you sure you want to log out?')) {
      navigate('/');
    }
  };

  return (
    <div className="space-y-6">
      {/* Page Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
        <div>
          <h1 className="text-2xl font-display font-semibold text-slate-900 m-0">Dashboard Overview</h1>
          <p className="text-slate-500 mt-1">Welcome back to Nexus ERP. Here's what's happening today.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-4 py-2 bg-white border border-slate-200 text-slate-600 rounded-xl font-medium hover:bg-slate-50 transition-colors shadow-sm text-sm">
            Download Report
          </button>
          <button className="px-4 py-2 bg-blue-600 text-white rounded-xl font-medium hover:bg-blue-700 transition-colors shadow-sm shadow-blue-600/20 text-sm">
            New Campaign
          </button>
          <button 
            onClick={handleLogout}
            className="flex items-center gap-2 px-4 py-2 bg-red-50 text-red-600 border border-red-100 rounded-xl font-medium hover:bg-red-100 hover:text-red-700 transition-colors shadow-sm text-sm"
          >
            <LogOut size={16} />
            Logout
          </button>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {stats.map((stat, i) => (
          <div key={stat.title} className="opacity-0 translate-y-4 animate-[slideUp_0.5s_ease-out_forwards]" style={{ animationDelay: `${i * 100}ms` }}>
            <StatCard {...stat} />
          </div>
        ))}
      </div>

      {/* Main Content Grid 1: Line Chart & Insights */}
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 opacity-0 translate-y-4 animate-[slideUp_0.5s_ease-out_forwards]" style={{ animationDelay: '400ms' }}>
          <MainLineChart />
        </div>
        
        <div className="interactive-card p-6 flex flex-col items-center justify-center text-center opacity-0 translate-y-4 animate-[slideUp_0.5s_ease-out_forwards]" style={{ animationDelay: '500ms' }}>
          <div className="w-24 h-24 rounded-full bg-indigo-50 flex items-center justify-center mb-6">
            <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" className="text-indigo-500" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.59 14.37a6 6 0 01-5.84 7.38v-4.8m5.84-2.58a14.98 14.98 0 006.16-12.12A14.98 14.98 0 009.631 8.41m5.96 5.96a14.926 14.926 0 01-5.841 2.58m-.119-8.54a6 6 0 00-7.381 5.84h4.8m2.581-5.84a14.927 14.927 0 00-2.58 5.84m2.699 2.7c-.103.021-.207.041-.311.06a15.09 15.09 0 01-2.448-2.45m.311.06a15.09 15.09 0 00-2.448-2.45m0 0a15.09 15.09 0 00-2.448 2.45m2.448-2.45a15.09 15.09 0 002.448 2.45m-2.448 2.45a15.09 15.09 0 00-2.448-2.45"/>
            </svg>
          </div>
          <h3 className="text-xl font-semibold text-slate-900 mb-2">Nexus Intelligence is Active</h3>
          <p className="text-slate-500 mb-6 text-sm">Your AI assistant has analyzed 450 transactions today. Revenue is projected to grow by 14%.</p>
          <button className="w-full bg-slate-900 text-white font-medium py-2.5 rounded-xl hover:bg-slate-800 transition-colors">
            View Insights
          </button>
        </div>
      </div>

      {/* Main Content Grid 2: Bar & Pie Charts */}
      <div className="grid lg:grid-cols-2 gap-6 opacity-0 translate-y-4 animate-[slideUp_0.5s_ease-out_forwards]" style={{ animationDelay: '600ms' }}>
        <PerformanceBarChart />
        <DistributionPieChart />
      </div>

      {/* Tables Section */}
      <div className="opacity-0 translate-y-4 animate-[slideUp_0.5s_ease-out_forwards]" style={{ animationDelay: '700ms' }}>
        <RecentOrders />
      </div>

    </div>
  );
}
