import React from 'react';
import { Link } from 'react-router-dom';
import { Calendar, Mail, Facebook, Twitter, Instagram, Github } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-gray-50 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-1">
            <Link to="/" className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-indigo-600 rounded-lg flex items-center justify-center">
                <Calendar className="text-white w-5 h-5" />
              </div>
              <span className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-purple-600">
                Evently
              </span>
            </Link>
            <p className="mt-4 text-sm text-gray-500">
              The world's leading platform for discovering and managing events that matter.
            </p>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Platform</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/events" className="text-sm text-gray-600 hover:text-indigo-600">Browse Events</Link></li>
              <li><Link to="/organizer" className="text-sm text-gray-600 hover:text-indigo-600">For Organizers</Link></li>
              <li><Link to="/pricing" className="text-sm text-gray-600 hover:text-indigo-600">Pricing</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Support</h3>
            <ul className="mt-4 space-y-2">
              <li><Link to="/help" className="text-sm text-gray-600 hover:text-indigo-600">Help Center</Link></li>
              <li><Link to="/terms" className="text-sm text-gray-600 hover:text-indigo-600">Terms of Service</Link></li>
              <li><Link to="/privacy" className="text-sm text-gray-600 hover:text-indigo-600">Privacy Policy</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-sm font-semibold text-gray-900 tracking-wider uppercase">Connect</h3>
            <div className="flex space-x-4 mt-4">
              <a href="#" className="text-gray-400 hover:text-indigo-600"><Twitter className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-indigo-600"><Facebook className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-indigo-600"><Instagram className="w-5 h-5" /></a>
              <a href="#" className="text-gray-400 hover:text-indigo-600"><Github className="w-5 h-5" /></a>
            </div>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-200">
          <p className="text-center text-sm text-gray-400">
            © {new Date().getFullYear()} Evently Inc. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};