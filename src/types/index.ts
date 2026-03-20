export type EventCategory = 'Music' | 'Tech' | 'Sports' | 'Art' | 'Food' | 'Wellness';

export interface Event {
  id: string;
  title: string;
  description: string;
  category: EventCategory;
  date: string;
  location: string;
  venue: string;
  price: number;
  imageUrl: string;
  organizerId: string;
  capacity: number;
  ticketsSold: number;
}

export interface Ticket {
  id: string;
  eventId: string;
  userId: string;
  purchaseDate: string;
  ticketType: string;
  status: 'active' | 'used' | 'cancelled';
  qrCode: string;
}

export interface User {
  id: string;
  name: string;
  email: string;
  role: 'user' | 'organizer' | 'admin';
  avatar?: string;
}