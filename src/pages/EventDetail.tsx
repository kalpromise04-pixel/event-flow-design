import React, { useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { Calendar, MapPin, Share2, Heart, ShieldCheck, Ticket, Users, Info } from 'lucide-react';
import { MOCK_EVENTS } from '../lib/mockData';
import { formatDate, formatCurrency } from '../lib/utils';
import { toast } from 'sonner';

export const EventDetail = () => {
  const { id } = useParams();
  const event = MOCK_EVENTS.find(e => e.id === id);
  const [ticketQuantity, setTicketQuantity] = useState(1);

  if (!event) {
    return (
      <div className="max-w-7xl mx-auto px-4 py-20 text-center">
        <h2 className="text-2xl font-bold">Event not found</h2>
        <Link to="/events" className="text-indigo-600 mt-4 block">Back to events</Link>
      </div>
    );
  }

  const handleBooking = () => {
    toast.success(`Successfully booked ${ticketQuantity} ticket(s) for ${event.title}!`, {
      description: "A confirmation email has been sent to your inbox.",
    });
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-8">
          <div className="relative aspect-video rounded-3xl overflow-hidden shadow-xl">
            <img
              src={event.imageUrl}
              alt={event.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute top-6 left-6 flex space-x-2">
              <span className="bg-white/90 backdrop-blur-md px-4 py-1.5 rounded-full text-indigo-600 font-bold text-sm shadow-sm">
                {event.category}
              </span>
            </div>
            <div className="absolute top-6 right-6 flex space-x-2">
              <button className="p-2.5 bg-white/90 backdrop-blur-md rounded-full text-gray-700 hover:text-red-500 shadow-sm transition-colors">
                <Heart className="w-5 h-5" />
              </button>
              <button className="p-2.5 bg-white/90 backdrop-blur-md rounded-full text-gray-700 hover:text-indigo-600 shadow-sm transition-colors">
                <Share2 className="w-5 h-5" />
              </button>
            </div>
          </div>

          <div className="space-y-4">
            <h1 className="text-4xl md:text-5xl font-black text-gray-900 leading-tight">
              {event.title}
            </h1>
            <div className="flex flex-wrap items-center gap-6 text-gray-600">
              <div className="flex items-center">
                <Calendar className="w-5 h-5 mr-2 text-indigo-600" />
                <span className="font-medium">{formatDate(event.date)}</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 mr-2 text-indigo-600" />
                <span className="font-medium">{event.venue}, {event.location}</span>
              </div>
            </div>
          </div>

          <div className="prose prose-lg max-w-none text-gray-600 leading-relaxed">
            <h3 className="text-xl font-bold text-gray-900 mb-4">About this Event</h3>
            <p>{event.description}</p>
            <p className="mt-4">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
            </p>
          </div>

          <div className="bg-gray-50 rounded-3xl p-8 border border-gray-100">
            <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
              <Info className="w-5 h-5 mr-2 text-indigo-600" />
              Event Information
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-2">Organizer</h4>
                <div className="flex items-center space-x-3">
                  <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-600 font-bold">
                    E
                  </div>
                  <span className="font-medium">Evently Certified Organizer</span>
                </div>
              </div>
              <div>
                <h4 className="font-bold text-gray-900 text-sm uppercase tracking-wider mb-2">Capacity</h4>
                <div className="flex items-center space-x-3">
                  <Users className="w-5 h-5 text-gray-400" />
                  <span className="font-medium">{event.capacity} total spots</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Booking Sidebar */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 space-y-6">
            <div className="bg-white rounded-3xl border border-gray-100 shadow-xl p-8">
              <div className="flex items-center justify-between mb-8">
                <div>
                  <p className="text-sm font-medium text-gray-500">Ticket Price</p>
                  <p className="text-3xl font-black text-gray-900">
                    {event.price === 0 ? 'Free' : formatCurrency(event.price)}
                  </p>
                </div>
                <div className="bg-green-50 text-green-700 px-3 py-1 rounded-full text-xs font-bold uppercase">
                  Available
                </div>
              </div>

              <div className="space-y-4 mb-8">
                <div className="flex items-center justify-between px-4 py-3 bg-gray-50 rounded-xl">
                  <span className="text-sm font-medium text-gray-600">Quantity</span>
                  <div className="flex items-center space-x-4">
                    <button
                      onClick={() => setTicketQuantity(Math.max(1, ticketQuantity - 1))}
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      -
                    </button>
                    <span className="font-bold text-gray-900">{ticketQuantity}</span>
                    <button
                      onClick={() => setTicketQuantity(ticketQuantity + 1)}
                      className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center hover:bg-gray-100 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                <div className="flex justify-between items-center px-4 py-2">
                  <span className="text-sm text-gray-500">Service Fee</span>
                  <span className="text-sm font-medium text-gray-900">{formatCurrency(event.price > 0 ? 2.50 : 0)}</span>
                </div>
                <div className="flex justify-between items-center px-4 py-2 border-t border-gray-50 pt-4">
                  <span className="text-base font-bold text-gray-900">Total</span>
                  <span className="text-xl font-black text-indigo-600">
                    {formatCurrency((event.price * ticketQuantity) + (event.price > 0 ? 2.50 : 0))}
                  </span>
                </div>
              </div>

              <button
                onClick={handleBooking}
                className="w-full py-4 bg-indigo-600 text-white font-black rounded-2xl hover:bg-indigo-700 shadow-lg shadow-indigo-100 transition-all flex items-center justify-center"
              >
                <Ticket className="w-5 h-5 mr-2" />
                Book Tickets Now
              </button>

              <p className="text-center text-xs text-gray-400 mt-6 flex items-center justify-center">
                <ShieldCheck className="w-3.5 h-3.5 mr-1 text-green-500" />
                Secure Payment Powered by Stripe
              </p>
            </div>

            <div className="bg-indigo-900 rounded-3xl p-8 text-white relative overflow-hidden">
              <div className="absolute top-0 right-0 -mr-8 -mt-8 w-32 h-32 bg-indigo-800 rounded-full blur-2xl opacity-50"></div>
              <h4 className="text-xl font-bold mb-4 relative z-10">Group Booking?</h4>
              <p className="text-indigo-200 text-sm mb-6 relative z-10 leading-relaxed">
                Planning to bring a group of 10 or more? Contact our sales team for special rates and exclusive packages.
              </p>
              <button className="w-full py-3 bg-white text-indigo-900 font-bold rounded-xl hover:bg-indigo-50 transition-all relative z-10 text-sm">
                Inquire Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};