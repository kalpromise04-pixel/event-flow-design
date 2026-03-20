import React from 'react';
import { Users, ShieldCheck, Calendar, Activity, Database, AlertCircle, Search, Filter, MoreVertical, CheckCircle2, XCircle } from 'lucide-react';
import { MOCK_EVENTS } from '../lib/mockData';
import { formatDate } from '../lib/utils';
import { motion } from 'framer-motion';

export const Admin = () => {
  const users = [
    { id: '1', name: 'Alex Johnson', email: 'alex@example.com', role: 'Organizer', status: 'Active', joined: '2024-01-15' },
    { id: '2', name: 'Sarah Miller', email: 'sarah@example.com', role: 'User', status: 'Pending', joined: '2024-03-20' },
    { id: '3', name: 'Mike Ross', email: 'mike@example.com', role: 'Admin', status: 'Active', joined: '2023-11-05' },
    { id: '4', name: 'Emma Wilson', email: 'emma@example.com', role: 'User', status: 'Active', joined: '2024-02-12' },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="mb-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
        <div>
          <h1 className="text-3xl font-black text-gray-900">System Oversight</h1>
          <p className="text-gray-500 mt-1">Monitor platform health, user roles, and compliance.</p>
        </div>
        <div className="flex items-center space-x-3">
          <button className="px-6 py-3 bg-white border border-gray-100 text-gray-900 font-bold rounded-2xl hover:bg-gray-50 transition-all shadow-sm flex items-center">
            <Database className="w-5 h-5 mr-2" />
            System Logs
          </button>
          <button className="px-6 py-3 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all flex items-center">
            <Activity className="w-5 h-5 mr-2" />
            Live Reports
          </button>
        </div>
      </div>

      {/* Admin Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
        {[
          { label: 'Total Users', value: '12,402', icon: Users, color: 'bg-blue-50 text-blue-600' },
          { label: 'Pending Approvals', value: '18', icon: AlertCircle, color: 'bg-orange-50 text-orange-600' },
          { label: 'Verified Organizers', value: '452', icon: ShieldCheck, color: 'bg-green-50 text-green-600' },
          { label: 'Platform Incidents', value: '0', icon: CheckCircle2, color: 'bg-teal-50 text-teal-600' },
        ].map((stat, i) => (
          <div key={i} className="bg-white rounded-3xl border border-gray-100 shadow-sm p-6">
            <div className={`w-12 h-12 rounded-2xl ${stat.color} flex items-center justify-center mb-4`}>
              <stat.icon className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium text-gray-500">{stat.label}</p>
            <h4 className="text-2xl font-black text-gray-900 mt-1">{stat.value}</h4>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* User Management Table */}
        <div className="lg:col-span-2 bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-8 border-b border-gray-50 flex flex-col md:flex-row md:items-center justify-between gap-4">
            <h3 className="text-xl font-bold text-gray-900">User Management</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400 w-4 h-4" />
              <input
                type="text"
                placeholder="Search users..."
                className="pl-10 pr-4 py-2 bg-gray-50 border-none rounded-xl text-sm focus:ring-2 focus:ring-indigo-500 w-full md:w-64"
              />
            </div>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="bg-gray-50/50">
                  <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">User</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Role</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Status</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Joined</th>
                  <th className="px-8 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {users.map((user) => (
                  <tr key={user.id} className="hover:bg-gray-50/50 transition-colors">
                    <td className="px-8 py-6">
                      <div>
                        <p className="font-bold text-gray-900">{user.name}</p>
                        <p className="text-[10px] text-gray-400 font-medium">{user.email}</p>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-[10px] font-bold ${
                        user.role === 'Admin' ? 'bg-purple-50 text-purple-600' : 
                        user.role === 'Organizer' ? 'bg-indigo-50 text-indigo-600' : 'bg-gray-50 text-gray-600'
                      }`}>
                        {user.role}
                      </span>
                    </td>
                    <td className="px-8 py-6">
                      <div className="flex items-center">
                        {user.status === 'Active' ? (
                          <CheckCircle2 className="w-4 h-4 text-green-500 mr-1.5" />
                        ) : (
                          <Activity className="w-4 h-4 text-orange-500 mr-1.5" />
                        )}
                        <span className="text-xs font-medium text-gray-600">{user.status}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6">
                      <p className="text-xs font-bold text-gray-900">{formatDate(user.joined)}</p>
                    </td>
                    <td className="px-8 py-6 text-right">
                      <button className="p-2 text-gray-400 hover:text-gray-900 rounded-lg transition-all">
                        <MoreVertical className="w-4 h-4" />
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Security & Alerts */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8">
            <h3 className="text-lg font-bold text-gray-900 mb-6 flex items-center">
              <ShieldCheck className="w-5 h-5 mr-2 text-indigo-600" />
              Compliance Tasks
            </h3>
            <div className="space-y-6">
              {[
                { title: 'Tax Document Review', priority: 'High', date: 'Due in 2 days' },
                { title: 'New Organizer KYC', priority: 'Medium', date: 'Due in 5 days' },
                { title: 'Privacy Policy Update', priority: 'Low', date: 'Due in 10 days' },
              ].map((task, i) => (
                <div key={i} className="flex items-start space-x-4 pb-6 border-b border-gray-50 last:border-0 last:pb-0">
                  <div className={`w-2 h-2 rounded-full mt-2 flex-shrink-0 ${
                    task.priority === 'High' ? 'bg-red-500' : 
                    task.priority === 'Medium' ? 'bg-orange-500' : 'bg-green-500'
                  }`} />
                  <div>
                    <p className="text-sm font-bold text-gray-900">{task.title}</p>
                    <div className="flex items-center mt-1">
                      <span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mr-3">{task.priority} Priority</span>
                      <span className="text-[10px] text-gray-400">{task.date}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
            <button className="w-full mt-8 py-3 bg-gray-50 text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all text-sm">
              View All Tasks
            </button>
          </div>

          <div className="bg-red-50 rounded-3xl p-8 border border-red-100">
            <div className="flex items-center space-x-3 mb-4">
              <div className="p-2 bg-white rounded-xl">
                <AlertCircle className="w-5 h-5 text-red-600" />
              </div>
              <h4 className="font-bold text-red-900">System Alert</h4>
            </div>
            <p className="text-sm text-red-700 leading-relaxed mb-6">
              Scheduled maintenance on Payment Gateways this Sunday at 02:00 AM UTC. Please notify active organizers.
            </p>
            <button className="w-full py-3 bg-red-600 text-white font-bold rounded-xl hover:bg-red-700 transition-all text-sm shadow-lg shadow-red-100">
              Send Alert to Users
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};