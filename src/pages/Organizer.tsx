import React from 'react';
import { LayoutDashboard, Plus, Users, DollarSign, Calendar, BarChart3, Bell, Send, Scan, Edit2, Trash2, ArrowUpRight, ArrowDownRight } from 'lucide-react';
import { MOCK_EVENTS } from '../lib/mockData';
import { formatCurrency, formatDate } from '../lib/utils';
import { motion } from 'framer-motion';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { name: 'Mon', sales: 4000, attendees: 2400 },
  { name: 'Tue', sales: 3000, attendees: 1398 },
  { name: 'Wed', sales: 2000, attendees: 9800 },
  { name: 'Thu', sales: 2780, attendees: 3908 },
  { name: 'Fri', sales: 1890, attendees: 4800 },
  { name: 'Sat', sales: 2390, attendees: 3800 },
  { name: 'Sun', sales: 3490, attendees: 4300 },
];

export const Organizer = () => {
  const organizerEvents = MOCK_EVENTS.filter(e => e.organizerId === 'org1');

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="flex flex-col md:flex-row md:items-center justify-between mb-10 gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900">Organizer Portal</h1>
          <p className="text-gray-500 mt-1">Manage your events, track sales, and connect with attendees.</p>
        </div>
        <button className="inline-flex items-center px-6 py-3 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all">
          <Plus className="w-5 h-5 mr-2" />
          Create New Event
        </button>
      </div>

      {/* Stats Overview */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Total Revenue', value: '$24,560', icon: DollarSign, change: '+12.5%', trend: 'up', color: 'bg-green-50 text-green-600' },
          { label: 'Total Tickets Sold', value: '1,284', icon: Users, change: '+5.2%', trend: 'up', color: 'bg-blue-50 text-blue-600' },
          { label: 'Active Events', value: '3', icon: Calendar, change: '0%', trend: 'neutral', color: 'bg-purple-50 text-purple-600' },
          { label: 'Avg. Attendance', value: '88%', icon: BarChart3, change: '-2.1%', trend: 'down', color: 'bg-orange-50 text-orange-600' },
        ].map((stat, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.1 }}
            className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6"
          >
            <div className="flex items-start justify-between">
              <div className={`p-3 rounded-2xl ${stat.color}`}>
                <stat.icon className="w-6 h-6" />
              </div>
              <div className={`flex items-center space-x-1 text-xs font-bold ${
                stat.trend === 'up' ? 'text-green-600' : stat.trend === 'down' ? 'text-red-600' : 'text-gray-400'
              }`}>
                {stat.trend === 'up' && <ArrowUpRight className="w-3 h-3" />}
                {stat.trend === 'down' && <ArrowDownRight className="w-3 h-3" />}
                <span>{stat.change}</span>
              </div>
            </div>
            <div className="mt-4">
              <p className="text-sm font-medium text-gray-500">{stat.label}</p>
              <h4 className="text-2xl font-black text-gray-900 mt-1">{stat.value}</h4>
            </div>
          </motion.div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-10">
        {/* Sales Chart */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
          <div className="flex items-center justify-between mb-8">
            <h3 className="text-xl font-bold text-gray-900">Ticket Sales Performance</h3>
            <select className="bg-gray-50 border-none rounded-xl text-xs font-bold text-gray-500 py-2 pl-3 pr-8 focus:ring-2 focus:ring-indigo-500">
              <option>Last 7 Days</option>
              <option>Last 30 Days</option>
              <option>Last 12 Months</option>
            </select>
          </div>
          <div className="h-[300px]">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={data}>
                <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f3f4f6" />
                <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                <YAxis axisLine={false} tickLine={false} tick={{ fontSize: 12, fill: '#9ca3af' }} />
                <Tooltip
                  contentStyle={{ backgroundColor: '#fff', borderRadius: '16px', border: 'none', boxShadow: '0 10px 15px -3px rgb(0 0 0 / 0.1)' }}
                  cursor={{ fill: '#f9fafb' }}
                />
                <Bar dataKey="sales" fill="#4f46e5" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-indigo-600 rounded-3xl p-8 text-white relative overflow-hidden">
            <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-indigo-500 rounded-full blur-2xl opacity-50"></div>
            <h3 className="text-xl font-bold mb-4 relative z-10">Ready for Check-in?</h3>
            <p className="text-indigo-100 text-sm mb-6 relative z-10 leading-relaxed">
              Open the QR scanner to verify attendee tickets at the entrance.
            </p>
            <button className="w-full py-4 bg-white text-indigo-600 font-bold rounded-2xl hover:bg-indigo-50 transition-all flex items-center justify-center shadow-lg">
              <Scan className="w-5 h-5 mr-2" />
              Launch Scanner
            </button>
          </div>

          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6">Engagement Tools</h3>
            <div className="space-y-4">
              <button className="w-full flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition-all group">
                <div className="p-2 bg-white rounded-xl mr-4 group-hover:bg-indigo-100 transition-colors">
                  <Send className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold">Email Blast</p>
                  <p className="text-[10px] text-gray-500">Send updates to all attendees</p>
                </div>
              </button>
              <button className="w-full flex items-center p-4 bg-gray-50 rounded-2xl hover:bg-indigo-50 hover:text-indigo-600 transition-all group">
                <div className="p-2 bg-white rounded-xl mr-4 group-hover:bg-indigo-100 transition-colors">
                  <Bell className="w-5 h-5 text-indigo-600" />
                </div>
                <div className="text-left">
                  <p className="text-sm font-bold">Push Notifications</p>
                  <p className="text-[10px] text-gray-500">Real-time mobile alerts</p>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Events Table */}
      <div className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
        <div className="p-8 border-b border-gray-50 flex items-center justify-between">
          <h3 className="text-xl font-bold text-gray-900">Your Active Events</h3>
          <button className="text-sm font-bold text-indigo-600 hover:underline">View All Events</button>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-gray-50/50">
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Event</th>
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date</th>
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Attendance</th>
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Revenue</th>
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-50">
              {organizerEvents.map((event) => (
                <tr key={event.id} className="hover:bg-gray-50/50 transition-colors">
                  <td className="px-8 py-6">
                    <div className="flex items-center">
                      <img src={event.imageUrl} alt="" className="w-12 h-12 rounded-xl object-cover mr-4" />
                      <div>
                        <p className="font-bold text-gray-900 line-clamp-1">{event.title}</p>
                        <p className="text-[10px] text-gray-400 font-medium">{event.category}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-gray-900">{formatDate(event.date)}</p>
                  </td>
                  <td className="px-8 py-6">
                    <div className="flex flex-col">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-[10px] font-bold text-gray-500">{event.ticketsSold}/{event.capacity}</span>
                        <span className="text-[10px] font-bold text-indigo-600">{Math.round((event.ticketsSold / event.capacity) * 100)}%</span>
                      </div>
                      <div className="w-24 h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <div className="h-full bg-indigo-600 rounded-full" style={{ width: `${(event.ticketsSold / event.capacity) * 100}%` }}></div>
                      </div>
                    </div>
                  </td>
                  <td className="px-8 py-6">
                    <p className="text-sm font-bold text-gray-900">{formatCurrency(event.ticketsSold * event.price)}</p>
                  </td>
                  <td className="px-8 py-6">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold bg-green-50 text-green-600">
                      LIVE
                    </span>
                  </td>
                  <td className="px-8 py-6 text-right">
                    <div className="flex items-center justify-end space-x-2">
                      <button className="p-2 text-gray-400 hover:text-indigo-600 hover:bg-indigo-50 rounded-lg transition-all">
                        <Edit2 className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-all">
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};