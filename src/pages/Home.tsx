import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Search, MapPin, Calendar, Star, ShieldCheck, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import { MOCK_EVENTS } from '../lib/mockData';
import { EventCard } from '../components/events/EventCard';

export const Home = () => {
  const featuredEvents = MOCK_EVENTS.slice(0, 3);

  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden pt-16 md:pt-24 lg:pt-32">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[150%] h-[150%] bg-[radial-gradient(circle_at_50%_20%,#e0e7ff_0%,transparent_50%)] -z-10 opacity-60"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block py-1 px-4 rounded-full bg-indigo-50 text-indigo-600 text-sm font-bold tracking-wide uppercase mb-6">
              Experience the Extraordinary
            </span>
            <h1 className="text-5xl md:text-7xl font-black tracking-tight text-gray-900 leading-tight">
              Discover and Host <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 via-purple-600 to-indigo-600">
                Memorable Events
              </span>
            </h1>
            <p className="mt-8 text-lg md:text-xl text-gray-600 max-w-2xl mx-auto leading-relaxed">
              From tech summits and live concerts to art exhibitions and food festivals, find the experiences that shape your world.
            </p>

            <div className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to="/events"
                className="w-full sm:w-auto px-8 py-4 bg-indigo-600 text-white font-bold rounded-2xl hover:bg-indigo-700 shadow-lg shadow-indigo-200 transition-all flex items-center justify-center group"
              >
                Find Events
                <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
              <Link
                to="/organizer"
                className="w-full sm:w-auto px-8 py-4 bg-white text-gray-900 font-bold border-2 border-gray-100 rounded-2xl hover:border-indigo-100 hover:bg-gray-50 transition-all flex items-center justify-center"
              >
                Host an Event
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="mt-20 rounded-3xl overflow-hidden border-8 border-white shadow-2xl max-w-5xl mx-auto"
          >
            <img
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e1520e39-d3d4-454d-aeb7-00f57e9fb646/hero-background-9d6059f1-1774014365698.webp"
              alt="Events Display"
              className="w-full h-auto aspect-[21/9] object-cover"
            />
          </motion.div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-black text-gray-900">Recommended for You</h2>
            <p className="mt-2 text-gray-600">Handpicked experiences based on your interests and recent activity.</p>
          </div>
          <Link
            to="/events"
            className="inline-flex items-center text-indigo-600 font-bold hover:text-indigo-700"
          >
            View all events
            <ArrowRight className="w-5 h-5 ml-1" />
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredEvents.map((event) => (
            <EventCard key={event.id} event={event} />
          ))}
        </div>
      </section>

      {/* Categories */}
      <section className="bg-gray-50 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-black text-gray-900">Explore by Category</h2>
            <p className="mt-4 text-gray-600">Find exactly what you're looking for with our curated collections.</p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
            {[
              { name: 'Music', icon: Zap, color: 'bg-orange-50 text-orange-600' },
              { name: 'Tech', icon: ShieldCheck, color: 'bg-blue-50 text-blue-600' },
              { name: 'Sports', icon: Star, color: 'bg-green-50 text-green-600' },
              { name: 'Art', icon: Zap, color: 'bg-purple-50 text-purple-600' },
              { name: 'Food', icon: Star, color: 'bg-red-50 text-red-600' },
              { name: 'Wellness', icon: ShieldCheck, color: 'bg-teal-50 text-teal-600' },
            ].map((cat) => (
              <Link
                key={cat.name}
                to={`/events?category=${cat.name}`}
                className="flex flex-col items-center p-8 bg-white rounded-3xl border border-gray-100 hover:border-indigo-100 hover:shadow-xl transition-all group"
              >
                <div className={`p-4 rounded-2xl ${cat.color} mb-4 group-hover:scale-110 transition-transform`}>
                  <cat.icon className="w-8 h-8" />
                </div>
                <span className="font-bold text-gray-900">{cat.name}</span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Features */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl font-black text-gray-900 leading-tight">
              Powerful Tools for <br />
              <span className="text-indigo-600">Event Creators</span>
            </h2>
            <p className="mt-6 text-lg text-gray-600 leading-relaxed">
              We provide everything you need to build, manage, and scale your events. From secure ticketing to real-time analytics.
            </p>

            <div className="mt-10 space-y-6">
              {[
                { title: 'Secure Ticket Booking', desc: 'Industry-standard encryption and secure payment gateways.' },
                { title: 'Real-time Analytics', desc: 'Track sales, attendance, and marketing performance live.' },
                { title: 'QR Check-in System', desc: 'Fast, contact-less entry management with our mobile scanner.' },
              ].map((feature, i) => (
                <div key={i} className="flex items-start space-x-4">
                  <div className="flex-shrink-0 w-8 h-8 bg-indigo-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900">{feature.title}</h4>
                    <p className="text-gray-500 text-sm mt-1">{feature.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              to="/organizer"
              className="mt-12 inline-flex items-center px-8 py-4 bg-gray-900 text-white font-bold rounded-2xl hover:bg-black transition-all"
            >
              Start Organizing Now
            </Link>
          </div>
          <div className="relative">
            <div className="aspect-square bg-indigo-100 rounded-full absolute -top-10 -right-10 w-64 h-64 -z-10 blur-3xl opacity-50"></div>
            <img
              src="https://storage.googleapis.com/dala-prod-public-storage/generated-images/e1520e39-d3d4-454d-aeb7-00f57e9fb646/user-avatar-2-4d132806-1774014374094.webp"
              alt="Organizer Dashboard"
              className="w-full rounded-3xl shadow-2xl"
            />
          </div>
        </div>
      </section>
    </div>
  );
};