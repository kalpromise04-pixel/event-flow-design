import React from 'react';
import { Settings, Ticket, History, User, LogOut, Bell, ShieldCheck, ChevronRight } from 'lucide-react';
import { MOCK_USER, MOCK_EVENTS } from '../lib/mockData';
import { formatDate, formatCurrency } from '../lib/utils';
import { motion } from 'framer-motion';

export const Dashboard = () => {
  const userTickets = [
    { id: 't1', eventId: '1', date: '2024-06-15T20:00:00Z', status: 'active', quantity: 2, price: 90.00 },
    { id: 't2', eventId: '4', date: '2024-05-12T10:00:00Z', status: 'used', quantity: 1, price: 0 },
  ];

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
        {/* Sidebar Nav */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-white rounded-3xl border border-gray-100 shadow-sm p-8 text-center">
            <div className="relative inline-block mb-6">
              <img
                src={MOCK_USER.avatar}
                alt={MOCK_USER.name}
                className="w-24 h-24 rounded-3xl object-cover ring-4 ring-indigo-50"
              />
              <div className="absolute -bottom-2 -right-2 bg-green-500 w-6 h-6 rounded-full border-4 border-white flex items-center justify-center">
                <ShieldCheck className="w-3 h-3 text-white" />
              </div>
            </div>
            <h2 className="text-xl font-bold text-gray-900">{MOCK_USER.name}</h2>
            <p className="text-sm text-gray-500 font-medium">{MOCK_USER.email}</p>
            <button className="mt-6 w-full py-2.5 bg-gray-50 text-gray-900 font-bold rounded-xl hover:bg-gray-100 transition-all text-sm flex items-center justify-center">
              <Settings className="w-4 h-4 mr-2" />
              Edit Profile
            </button>
          </div>

          <nav className="bg-white rounded-3xl border border-gray-100 shadow-sm p-4 space-y-1">
            {[
              { label: 'My Tickets', icon: Ticket, active: true },
              { label: 'Wishlist', icon: History, active: false },
              { label: 'Security', icon: ShieldCheck, active: false },
              { label: 'Notifications', icon: Bell, active: false },
            ].map((item) => (
              <button
                key={item.label}
                className={`w-full flex items-center justify-between px-4 py-3 rounded-xl transition-all ${
                  item.active ? 'bg-indigo-50 text-indigo-600' : 'text-gray-600 hover:bg-gray-50'
                }`}
              >
                <div className="flex items-center space-x-3">
                  <item.icon className="w-5 h-5" />
                  <span className="font-bold text-sm">{item.label}</span>
                </div>
                {item.active && <ChevronRight className="w-4 h-4" />}
              </button>
            ))}
            <button className="w-full flex items-center px-4 py-3 rounded-xl text-red-600 hover:bg-red-50 transition-all font-bold text-sm">
              <LogOut className="w-5 h-5 mr-3" />
              Logout
            </button>
          </nav>
        </div>

        {/* Content Area */}
        <div className="lg:col-span-3 space-y-8">
          <div>
            <h1 className="text-3xl font-black text-gray-900">Your Tickets</h1>
            <p className="text-gray-500 mt-1">Manage your upcoming and past event bookings.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {userTickets.map((ticket, idx) => {
              const event = MOCK_EVENTS.find(e => e.id === ticket.eventId);
              if (!event) return null;

              return (
                <motion.div
                  key={ticket.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-3xl border border-gray-100 shadow-sm overflow-hidden flex flex-col group hover:shadow-md transition-all"
                >
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.imageUrl}
                      alt={event.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                    />
                    <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-indigo-600">
                      {ticket.status.toUpperCase()}
                    </div>
                  </div>
                  <div className="p-6 space-y-4 flex-grow flex flex-col">
                    <div className="flex justify-between items-start">
                      <div>
                        <h3 className="font-black text-gray-900 line-clamp-1">{event.title}</h3>
                        <p className="text-sm text-gray-500 flex items-center mt-1">
                          <Ticket className="w-3.5 h-3.5 mr-1" />
                          {ticket.quantity} Ticket(s)
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold text-gray-900">{formatCurrency(ticket.price)}</p>
                        <p className="text-[10px] text-gray-400 font-bold uppercase tracking-wider">Total Paid</p>
                      </div>
                    </div>

                    <div className="flex items-center space-x-6 pt-4 border-t border-gray-50 mt-auto">
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Date</span>
                        <span className="text-sm font-bold text-gray-900">{formatDate(ticket.date)}</span>
                      </div>
                      <div className="flex flex-col">
                        <span className="text-[10px] font-bold text-gray-400 uppercase tracking-wider">Location</span>
                        <span className="text-sm font-bold text-gray-900 truncate max-w-[120px]">{event.location}</span>
                      </div>
                    </div>

                    <div className="pt-2">
                      <button className="w-full py-2.5 bg-indigo-600 text-white font-bold rounded-xl hover:bg-indigo-700 transition-all text-sm flex items-center justify-center shadow-lg shadow-indigo-100">
                        View QR Ticket
                      </button>
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          <div className="bg-indigo-50 rounded-3xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 border border-indigo-100">
            <div className="max-w-md">
              <h3 className="text-2xl font-black text-gray-900">Discover More Events</h3>
              <p className="text-gray-600 mt-2">Check out events happening this weekend in your area.</p>
            </div>
            <button className="px-8 py-3 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 transition-all whitespace-nowrap">
              Explore Now
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};