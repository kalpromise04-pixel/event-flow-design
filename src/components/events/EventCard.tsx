import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, MapPin, Tag } from 'lucide-react';
import { Event } from '../../types';
import { formatDate, formatCurrency } from '../../lib/utils';
import { motion } from 'framer-motion';

interface EventCardProps {
  event: Event;
}

export const EventCard: React.FC<EventCardProps> = ({ event }) => {
  return (
    <motion.div
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
      className="group bg-white rounded-2xl border border-gray-100 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col h-full"
    >
      <Link to={`/events/${event.id}`} className="block relative aspect-video overflow-hidden">
        <img
          src={event.imageUrl}
          alt={event.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full shadow-sm">
          <span className="text-xs font-bold text-indigo-600">{event.category}</span>
        </div>
      </Link>

      <div className="p-5 flex flex-col flex-grow">
        <div className="flex items-center text-xs text-indigo-600 font-semibold mb-2">
          <Calendar className="w-3.5 h-3.5 mr-1.5" />
          {formatDate(event.date)}
        </div>
        <Link to={`/events/${event.id}`}>
          <h3 className="text-lg font-bold text-gray-900 group-hover:text-indigo-600 transition-colors line-clamp-2">
            {event.title}
          </h3>
        </Link>
        <div className="mt-3 flex items-center text-sm text-gray-500">
          <MapPin className="w-4 h-4 mr-1.5 flex-shrink-0 text-gray-400" />
          <span className="truncate">{event.venue}</span>
        </div>

        <div className="mt-auto pt-4 flex items-center justify-between">
          <div className="text-indigo-600 font-bold text-lg">
            {event.price === 0 ? 'Free' : formatCurrency(event.price)}
          </div>
          <Link
            to={`/events/${event.id}`}
            className="text-sm font-semibold text-gray-900 hover:text-indigo-600 flex items-center"
          >
            Details
            <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14m-7-7 7 7-7 7"/></svg>
          </Link>
        </div>
      </div>
    </motion.div>
  );
};