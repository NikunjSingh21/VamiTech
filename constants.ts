import type { Mentor, Testimonial, Step } from './types';
import { UserPlusIcon, ClipboardDocumentCheckIcon, CheckBadgeIcon, SparklesIcon } from './components/IconComponents';

export const MENTORS: Mentor[] = [
  {
    id: 1,
    name: "Priya Singh",
    avatar: "https://picsum.photos/id/1011/200/200",
    tagline: "Cloud Architect at AWS",
    expertise: ["System Design", "AWS", "DevOps", "Career Growth"],
    price: 500,
    approved: true,
  },
  {
    id: 2,
    name: "Rohan Verma",
    avatar: "https://picsum.photos/id/1025/200/200",
    tagline: "Product Manager at VamiTech",
    expertise: ["Product Strategy", "Agile", "User Research"],
    price: 350,
    approved: true,
  },
  {
    id: 3,
    name: "Aarav Sharma",
    avatar: "https://picsum.photos/id/1005/200/200",
    tagline: "Data Engineer at TechCorp",
    expertise: ["Python", "SQL", "Data Warehousing", "ETL"],
    price: 400,
    approved: true,
  },
  {
    id: 4,
    name: "Neha Gupta",
    avatar: "https://picsum.photos/id/1027/200/200",
    tagline: "UX Designer at CreativeUI",
    expertise: ["Figma", "Prototyping", "Design Systems"],
    price: 250,
    approved: true,
  },
  {
    id: 5,
    name: "Vikram Reddy",
    avatar: "https://picsum.photos/id/1062/200/200",
    tagline: "Senior SDE at Microsoft",
    expertise: ["C++", "Algorithms", "Distributed Systems"],
    price: 500,
    approved: false, // This mentor is pending admin approval
  },
   {
    id: 6,
    name: "Sonia Kapoor",
    avatar: "https://picsum.photos/id/1074/200/200",
    tagline: "Frontend Developer",
    expertise: ["React", "TypeScript", "Next.js"],
    price: 150,
    approved: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    quote: "My mentor, Priya, was incredible. Her insights on system design were instrumental in me landing a job at a top tech company. Worth every penny!",
    author: "Amit Kumar",
    role: "Software Engineer",
    avatar: "https://picsum.photos/id/237/100/100",
  },
  {
    quote: "I was feeling stuck in my career. A few sessions on product strategy completely changed my perspective and gave me the clarity I needed.",
    author: "Sunita Chen",
    role: "Aspiring Product Manager",
    avatar: "https://picsum.photos/id/238/100/100",
  },
  {
    quote: "As a new developer, getting guidance on my portfolio and interview skills was a game-changer. I felt so much more confident.",
    author: "Raj Patel",
    role: "Frontend Developer",
    avatar: "https://picsum.photos/id/239/100/100",
  },
];

export const MENTOR_WORKFLOW_STEPS: Step[] = [
    {
        icon: UserPlusIcon,
        title: '1. Create Profile',
        description: 'Sign up and build your mentor profile. Showcase your skills, experience, and what makes you a great mentor.'
    },
    {
        icon: ClipboardDocumentCheckIcon,
        title: '2. Submit for Review',
        description: 'Once you are happy with your profile, submit it to our admin team for a quick quality and verification check.'
    },
    {
        icon: CheckBadgeIcon,
        title: '3. Get Approved',
        description: 'Our team will review your profile. Once approved, you’ll go live on the platform for mentees to discover.'
    },
    {
        icon: SparklesIcon,
        title: '4. Start Mentoring',
        description: 'Set your availability, connect with mentees, and start making a real impact while earning for your expertise.'
    }
];