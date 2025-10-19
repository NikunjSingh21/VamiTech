import React from 'react';
import { MENTORS, TESTIMONIALS, MENTOR_WORKFLOW_STEPS } from './constants';
import type { Mentor, Testimonial, Step } from './types';

// Header Component
const Header: React.FC = () => (
    <header className="bg-white/80 backdrop-blur-md sticky top-0 z-50 shadow-sm">
        <div className="container mx-auto px-6 py-4 flex justify-between items-center">
            <a href="#" className="text-2xl font-bold text-jd-green">VamiTech Mentors</a>
            <nav className="hidden md:flex space-x-8 items-center">
                <a href="#mentors" className="text-gray-600 hover:text-jd-green transition">Find a Mentor</a>
                <a href="#how-it-works" className="text-gray-600 hover:text-jd-green transition">How It Works</a>
                <a href="#" className="text-gray-600 hover:text-jd-green transition">Login</a>
                <a href="#how-it-works" className="bg-jd-green text-white px-5 py-2 rounded-full hover:bg-green-800 transition font-medium">Become a Mentor</a>
            </nav>
        </div>
    </header>
);

// Section Wrapper Component
const Section: React.FC<{ id: string; className?: string, children: React.ReactNode }> = ({ id, className = '', children }) => (
    <section id={id} className={`py-16 md:py-24 ${className}`}>
        <div className="container mx-auto px-6">
            {children}
        </div>
    </section>
);

// Section Title Component
const SectionTitle: React.FC<{ title: string; subtitle: string }> = ({ title, subtitle }) => (
    <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900">{title}</h2>
        <p className="mt-4 text-lg text-gray-500 max-w-2xl mx-auto">{subtitle}</p>
    </div>
);

// Card Component
const Card: React.FC<{ children: React.ReactNode; className?: string }> = ({ children, className = '' }) => (
    <div className={`bg-white rounded-xl shadow-lg p-6 transition-transform hover:-translate-y-2 ${className}`}>
        {children}
    </div>
);

// Hero Section
const HeroSection: React.FC = () => (
    <Section id="home" className="bg-white pt-24 md:pt-32">
        <div className="text-center">
            <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                Unlock Your Potential. <br /> <span className="text-jd-green">Connect with Industry Experts.</span>
            </h1>
            <p className="mt-6 text-xl text-gray-600 max-w-3xl mx-auto">
                1-on-1 mentorship from top tech professionals to help you accelerate your career, overcome challenges, and achieve your goals.
            </p>
            <div className="mt-10 flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="#mentors" className="w-full sm:w-auto bg-jd-green text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-green-800 transition shadow-md">Find a Mentor</a>
                <a href="#how-it-works" className="w-full sm:w-auto bg-gray-100 text-gray-800 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-200 transition">Become a Mentor</a>
            </div>
        </div>
    </Section>
);

// Mentors Section
const MentorCard: React.FC<{ mentor: Mentor }> = ({ mentor }) => (
    <Card className="flex flex-col text-center items-center">
        <img src={mentor.avatar} alt={mentor.name} className="h-24 w-24 rounded-full mb-4 shadow-md" />
        <h3 className="text-xl font-bold text-gray-900">{mentor.name}</h3>
        <p className="text-jd-green font-medium mb-3">{mentor.tagline}</p>
        <div className="flex flex-wrap justify-center gap-2 mb-4">
            {mentor.expertise.slice(0, 3).map(skill => (
                <span key={skill} className="bg-green-100 text-green-800 text-xs font-semibold px-2.5 py-0.5 rounded-full">{skill}</span>
            ))}
        </div>
        <p className="text-2xl font-bold text-gray-800 mt-auto mb-4">
            ₹{mentor.price}<span className="text-base font-normal text-gray-500">/session</span>
        </p>
        <a href="#" className="w-full text-center mt-2 px-6 py-2 rounded-lg font-semibold transition bg-gray-100 text-gray-800 hover:bg-gray-200">
            View Profile
        </a>
    </Card>
);

const MentorsSection: React.FC = () => {
    // Only show mentors that have been approved by the admin
    const approvedMentors = MENTORS.filter(mentor => mentor.approved);

    return (
        <Section id="mentors">
            <SectionTitle title="Meet Our Mentors" subtitle="Connect with verified professionals from leading tech companies." />
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8">
                {approvedMentors.map(mentor => <MentorCard key={mentor.id} mentor={mentor} />)}
            </div>
        </Section>
    );
};

// How It Works for Mentors Section
const HowItWorksSection: React.FC = () => (
    <Section id="how-it-works" className="bg-white">
        <SectionTitle title="Become a Mentor in 4 Simple Steps" subtitle="Share your expertise, make an impact, and earn on your own schedule." />
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
            {MENTOR_WORKFLOW_STEPS.map((step) => (
                <div key={step.title} className="text-center">
                    <div className="flex items-center justify-center h-20 w-20 rounded-full bg-green-100 mb-6 mx-auto border-4 border-white shadow-md">
                        <step.icon className="h-10 w-10 text-jd-green" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{step.title}</h3>
                    <p className="text-gray-600">{step.description}</p>
                </div>
            ))}
        </div>
         <div className="text-center mt-12">
            <a href="#" className="bg-jd-yellow text-gray-900 px-8 py-4 rounded-full text-lg font-bold hover:bg-amber-400 transition shadow-lg">
                Start Your Mentor Application
            </a>
        </div>
    </Section>
);

// Testimonials Section
const TestimonialCard: React.FC<{ testimonial: Testimonial }> = ({ testimonial }) => (
    <Card className="flex flex-col justify-between h-full">
        <p className="text-gray-700 text-lg mb-6">"{testimonial.quote}"</p>
        <div className="flex items-center">
            <img src={testimonial.avatar} alt={testimonial.author} className="h-12 w-12 rounded-full mr-4" />
            <div>
                <p className="font-bold text-gray-900">{testimonial.author}</p>
                <p className="text-gray-500">{testimonial.role}</p>
            </div>
        </div>
    </Card>
);

const TestimonialsSection: React.FC = () => (
    <Section id="testimonials">
        <SectionTitle title="Success Stories from Mentees" subtitle="Real results from professionals who found the guidance they needed." />
        <div className="grid lg:grid-cols-3 gap-8">
            {TESTIMONIALS.map(testimonial => <TestimonialCard key={testimonial.author} testimonial={testimonial} />)}
        </div>
    </Section>
);

// Contact Section
const ContactSection: React.FC = () => (
    <Section id="contact" className="bg-gray-800 text-white">
        <div className="max-w-2xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-extrabold">Have Questions?</h2>
            <p className="mt-4 text-lg text-gray-300">
                Our team is here to help. Whether you're looking for the right mentor or need help with the platform, reach out to us.
            </p>
            <a href="mailto:contact@vamitechmentors.com" className="mt-8 inline-block bg-jd-green text-white px-8 py-3 rounded-full text-lg font-semibold hover:bg-green-800 transition">
                contact@vamitechmentors.com
            </a>
        </div>
    </Section>
);

// Footer Component
const Footer: React.FC = () => (
    <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="container mx-auto px-6 text-center">
            <p>&copy; {new Date().getFullYear()} VamiTech Mentors. All rights reserved.</p>
            <div className="flex justify-center space-x-6 mt-4">
                <a href="#" className="hover:text-white">LinkedIn</a>
                <a href="#" className="hover:text-white">Instagram</a>
                <a href="#" className="hover:text-white">Twitter</a>
            </div>
        </div>
    </footer>
);

// Main App Component
const App: React.FC = () => {
    return (
        <>
            <Header />
            <main>
                <HeroSection />
                <MentorsSection />
                <HowItWorksSection />
                <TestimonialsSection />
                <ContactSection />
            </main>
            <Footer />
        </>
    );
};

export default App;