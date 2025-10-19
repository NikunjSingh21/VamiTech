import type React from 'react';

export interface Mentor {
  id: number;
  name: string;
  avatar: string;
  tagline: string;
  expertise: string[];
  price: number;
  approved: boolean;
}

export interface Testimonial {
  quote: string;
  author: string;
  role: string;
  avatar: string;
}

export interface Step {
    icon: React.ComponentType<{ className?: string }>;
    title: string;
    description: string;
}