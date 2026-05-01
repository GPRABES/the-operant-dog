/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Facebook, MapPin, Clock, MessageSquare, ChevronRight, ChevronDown, Star, Users, Activity, Dog, Heart, Menu, X, Quote, Mail, User, Phone, Calendar, Send } from 'lucide-react';
import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom';

const COLORS = {
  navy: '#001d39',
  orange: '#EF5B25',
  cream: '#FAF9F6',
  white: '#FFFFFF',
  text: '#1a1a1a',
};



const Navbar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <nav className="fixed w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100" id="navbar">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center">
            <Link to="/">
              <img src="/logo.png" alt="The Operant Dog" className="h-14 w-auto" />
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-6">
            <Link to="/#services" className="text-sm font-medium hover:text-[#EF5B25] transition-colors">Services</Link>
            <Link to="/#about" className="text-sm font-medium hover:text-[#EF5B25] transition-colors">About</Link>
            <Link to="/#testimonials" className="text-sm font-medium hover:text-[#EF5B25] transition-colors">Testimonials</Link>
            <Link to="/#faqs" className="text-sm font-medium hover:text-[#EF5B25] transition-colors">FAQs</Link>
            
            <div className="flex items-center space-x-3 pl-2">
              <a
                href="tel:0499697042"
                className="flex items-center px-5 py-2 rounded-full text-sm font-semibold transition-all border-[1.5px] border-[#001d39] text-[#001d39] hover:bg-[#001d39] hover:text-white"
              >
                <Phone className="w-4 h-4 mr-2" />
                0499 697 042
              </a>
              <Link
                to="/#contact"
                className="px-6 py-2 rounded-full text-sm font-semibold text-white transition-transform hover:scale-105"
                style={{ backgroundColor: COLORS.orange }}
              >
                Start Here
              </Link>
            </div>
          </div>

          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="p-2">
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-white border-b border-gray-100 px-4 py-6 space-y-4 shadow-xl absolute w-full"
        >
          <Link to="/#services" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/#about" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/#testimonials" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>Testimonials</Link>
          <Link to="/#faqs" className="block text-lg font-medium" onClick={() => setIsOpen(false)}>FAQs</Link>
          
          <div className="pt-4 mt-4 border-t border-gray-100 flex flex-col space-y-3">
            <a
              href="tel:0499697042"
              className="flex items-center justify-center w-full px-6 py-3 rounded-xl text-lg font-semibold transition-all border-[1.5px] border-[#001d39] text-[#001d39] hover:bg-[#001d39] hover:text-white"
            >
              <Phone className="w-5 h-5 mr-2" />
              0499 697 042
            </a>
            <Link
              to="/#contact"
              className="block text-center px-6 py-3 rounded-xl text-white font-semibold text-lg"
              style={{ backgroundColor: COLORS.orange }}
              onClick={() => setIsOpen(false)}
            >
              Start Here
            </Link>
          </div>
        </motion.div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center pt-24 pb-12 overflow-hidden" id="hero">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <span
              className="inline-block px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest mb-6"
              style={{ backgroundColor: `${COLORS.orange}20`, color: COLORS.orange }}
            >
              Coffs Harbour's Premier Dog Training
            </span>
            <h1
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[1.1] tracking-tight mb-8 font-serif"
              style={{ color: COLORS.navy }}
            >
              Is your dog pulling, reacting, or ignoring recall?
            </h1>
            <h2 className="text-2xl font-bold text-gray-800 mb-4 font-serif">
              Real-world training for real-life dogs
            </h2>
            <p className="text-lg text-gray-600 mb-10 max-w-xl leading-relaxed">
              Clear, practical training that works outside the classroom.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a
                href="#contact"
                className="group flex items-center justify-center px-8 py-4 rounded-full text-white font-bold transition-all hover:shadow-xl hover:-translate-y-1"
                style={{ backgroundColor: COLORS.navy }}
              >
                Inquire Now
                <ChevronRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
              <a
                href="#services"
                className="flex items-center justify-center px-8 py-4 rounded-full border-2 border-gray-200 font-bold hover:bg-gray-50 transition-all font-sans"
              >
                View Services
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1 }}
            className="relative"
          >
            <div className="aspect-[4/5] rounded-[2rem] overflow-hidden shadow-2xl relative z-10">
              <img
                src="/hero-image.jpg"
                alt="Happy dog training"
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            {/* Artistic accents */}
            <div
              className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-3xl opacity-20"
              style={{ backgroundColor: COLORS.orange }}
            ></div>
            <div
              className="absolute -bottom-10 -left-10 w-60 h-60 rounded-full blur-3xl opacity-10"
              style={{ backgroundColor: COLORS.navy }}
            ></div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  return (
    <section className="py-16 lg:py-24 bg-white" id="services">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-serif" style={{ color: COLORS.navy }}>Our Training Programs</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto font-sans">
            Comprehensive support for you and your dog. From foundational life skills to specialized reactivity support.
          </p>
        </div>

        <div className="space-y-24">
          {/* Service 1 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${COLORS.orange}1A` }}>
                <Users className="w-8 h-8 icon-glow" style={{ color: COLORS.orange }} />
              </div>
              <h3 className="text-3xl font-bold mb-4 font-serif" style={{ color: COLORS.navy }}>Life Skills Group Program</h3>
              <p className="text-xl font-medium text-gray-800 mb-6">Practical training for real-world dogs. ($260 all-in)</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A structured 6-week course designed to help dogs cope better in everyday life. This isn't about perfect obedience—it's about engagement, emotional regulation, and skills that transfer to real life.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3 shrink-0" style={{ backgroundColor: `${COLORS.orange}33` }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.orange }}></div>
                  </div>
                  <span className="text-gray-700"><strong>Week 1 is dog-free:</strong> Learn how dogs learn and how to set training up for success.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3 shrink-0" style={{ backgroundColor: `${COLORS.orange}33` }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.orange }}></div>
                  </div>
                  <span className="text-gray-700"><strong>Small Groups:</strong> Maximum of 6 dogs for careful spacing and attention.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3 shrink-0" style={{ backgroundColor: `${COLORS.orange}33` }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.orange }}></div>
                  </div>
                  <span className="text-gray-700"><strong>Focus Areas:</strong> Understanding behaviour, arousal, building engagement, and clear communication.</span>
                </li>
              </ul>
              <Link to="/?service=Life+Skills#contact" className="inline-flex items-center font-bold transition-colors hover:opacity-80 text-lg" style={{ color: COLORS.orange }}>
                Inquire about Life Skills <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl bg-gray-100">
                 <img src="https://images.unsplash.com/photo-1548199973-03cce0bbc87b?q=80&w=2069&auto=format&fit=crop" alt="Group Training" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

          {/* Service 2 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-1"
            >
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl bg-gray-100">
                 <img src="https://images.unsplash.com/photo-1516734212186-a967f81ad0d7?q=80&w=2071&auto=format&fit=crop" alt="Reactivity Support" className="w-full h-full object-cover" />
              </div>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-2"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${COLORS.orange}1A` }}>
                <Activity className="w-8 h-8 icon-glow" style={{ color: COLORS.orange }} />
              </div>
              <h3 className="text-3xl font-bold mb-4 font-serif" style={{ color: COLORS.navy }}>Reactivity Rescue Package</h3>
              <p className="text-xl font-medium text-gray-800 mb-6">For dogs struggling around people or other dogs.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                A structured support pathway providing intensive one-on-one coaching to help your dog feel safer and respond better in triggering environments.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3 shrink-0" style={{ backgroundColor: `${COLORS.orange}33` }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.orange }}></div>
                  </div>
                  <span className="text-gray-700"><strong>Personalized Coaching:</strong> Tailored strategies for your specific dog's triggers and thresholds.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3 shrink-0" style={{ backgroundColor: `${COLORS.orange}33` }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.orange }}></div>
                  </div>
                  <span className="text-gray-700"><strong>Safe Setups:</strong> Controlled environments to practice new skills safely.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3 shrink-0" style={{ backgroundColor: `${COLORS.orange}33` }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.orange }}></div>
                  </div>
                  <span className="text-gray-700"><strong>Integration:</strong> Includes eventual enrolment in Life Skills Group Classes when ready.</span>
                </li>
              </ul>
              <Link to="/?service=Reactivity+Support#contact" className="inline-flex items-center font-bold transition-colors hover:opacity-80 text-lg" style={{ color: COLORS.orange }}>
                Inquire about Reactivity Support <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
            </motion.div>
          </div>

          {/* Service 3 */}
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-2 lg:order-1"
            >
              <div className="w-16 h-16 rounded-2xl flex items-center justify-center mb-6" style={{ backgroundColor: `${COLORS.orange}1A` }}>
                <Dog className="w-8 h-8 icon-glow" style={{ color: COLORS.orange }} />
              </div>
              <h3 className="text-3xl font-bold mb-4 font-serif" style={{ color: COLORS.navy }}>Puppy School</h3>
              <p className="text-xl font-medium text-gray-800 mb-6">Start off on the right paw.</p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                Small group classes focused on building confidence, engagement, and a strong relationship from the start. We prioritize positive exposure over forced interactions.
              </p>
              <ul className="space-y-4 mb-8">
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3 shrink-0" style={{ backgroundColor: `${COLORS.orange}33` }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.orange }}></div>
                  </div>
                  <span className="text-gray-700"><strong>Confidence Building:</strong> Safe exposure to novel objects, sounds, and surfaces.</span>
                </li>
                <li className="flex items-start">
                  <div className="w-6 h-6 rounded-full flex items-center justify-center mt-1 mr-3 shrink-0" style={{ backgroundColor: `${COLORS.orange}33` }}>
                    <div className="w-2 h-2 rounded-full" style={{ backgroundColor: COLORS.orange }}></div>
                  </div>
                  <span className="text-gray-700"><strong>Foundation Skills:</strong> Focus, recall, loose leash walking, and settling.</span>
                </li>
              </ul>
              <Link to="/?service=Puppy+School#contact" className="inline-flex items-center font-bold transition-colors hover:opacity-80 text-lg" style={{ color: COLORS.orange }}>
                Inquire about Puppy School <ChevronRight className="ml-1 w-5 h-5" />
              </Link>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="order-1 lg:order-2"
            >
              <div className="aspect-[4/3] rounded-[2rem] overflow-hidden shadow-xl bg-gray-100">
                 <img src="https://images.unsplash.com/photo-1583511655857-d19b40a7a54e?q=80&w=2069&auto=format&fit=crop" alt="Puppy School" className="w-full h-full object-cover" />
              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

const QuoteSection = () => {
  return (
    <section className="py-20 bg-white border-y border-gray-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
        >
          <Quote className="w-12 h-12 mx-auto mb-6 opacity-20" style={{ color: COLORS.orange }} />
          <h3 className="text-3xl md:text-4xl font-bold mb-6 font-serif leading-tight" style={{ color: COLORS.navy }}>
            "Behaviours rehearsed are reinforced"
          </h3>
          <p className="text-lg font-bold text-gray-500 uppercase tracking-wider font-sans">
            — Will Sinclair-Huggins, The Operant Dog
          </p>
        </motion.div>
      </div>
    </section>
  );
};

const About = () => {
  return (
    <section className="py-16 lg:py-24 overflow-hidden" id="about">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative order-2 lg:order-1"
          >
            <div className="aspect-square rounded-[3rem] overflow-hidden rotate-3">
              <img
                src="/about-image.jpg"
                alt="Trainer with dog"
                className="w-full h-full object-cover -rotate-3 scale-110"
                referrerPolicy="no-referrer"
              />
            </div>
            <div
              className="absolute -bottom-6 -right-6 p-8 bg-white rounded-2xl shadow-xl z-20 hidden sm:block border border-gray-100"
            >
              <p className="text-3xl font-bold text-serif" style={{ color: COLORS.navy }}>100%</p>
              <p className="text-xs font-bold uppercase tracking-widest text-gray-500 font-sans">Reinforcement Based</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="order-1 lg:order-2"
          >
            <h2
              className="text-4xl lg:text-5xl font-bold mb-8 leading-tight font-serif"
              style={{ color: COLORS.navy }}
            >
              Building clearer communication and <span className="italic" style={{ color: COLORS.orange }}>calmer days</span>.
            </h2>
            <div className="space-y-6 text-gray-600 text-lg leading-relaxed font-sans">
              <p>
                The Operant Dog was established in Coffs Harbour, NSW to provide practical dog training and behavior support focused on real-world outcomes.
              </p>
              <p>
                Our philosophy is simple: training should hold up outside, not just in a quiet park. We focus on positive reinforcement to build confidence in both the dog and the handler.
              </p>
              <div className="pt-4 grid grid-cols-2 gap-4">
                <div className="flex items-center space-x-3">
                  <Heart className="w-5 h-5" style={{ color: COLORS.orange }} />
                  <span className="text-sm font-semibold uppercase tracking-wide">Kind Methods</span>
                </div>
                <div className="flex items-center space-x-3">
                  <MapPin className="w-5 h-5" style={{ color: COLORS.orange }} />
                  <span className="text-sm font-semibold uppercase tracking-wide">Local Support</span>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

const ClientStories = () => {
  const reviews = [
    {
      text: "The Reactivity Support package changed our life. My dog is finally calm when we walk past other dogs!",
      author: "Sarah & Buddy",
      rating: 5
    },
    {
      text: "Practical advice that actually works. We've seen more progress in 3 weeks than we did in 6 months of traditional obedience.",
      author: "Mark & Lexi",
      rating: 5
    },
    {
      text: "Reinforcement based training that makes sense. Our dog loves the sessions and so do we!",
      author: "Jessica & Cooper",
      rating: 5
    }
  ];

  return (
    <section className="bg-[#001d39]" id="testimonials">
      <div className="pt-24 pb-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold text-white mb-4 font-serif">Client Stories</h2>
          <p className="text-xl text-white/70 font-sans max-w-2xl mx-auto mb-8">Real results from real dogs and their humans.</p>
          <div className="flex justify-center space-x-1">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-6 h-6" style={{ fill: COLORS.orange, color: COLORS.orange }} />
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5 }}
              className="bg-white/5 hover:bg-white/10 backdrop-blur-md p-8 rounded-3xl border border-white/10 transition-all shadow-xl relative overflow-hidden group"
            >
              <div className="absolute top-0 right-0 p-6 opacity-5 group-hover:opacity-10 transition-opacity">
                <Quote className="w-24 h-24 text-white" />
              </div>
              <MessageSquare className="w-8 h-8 mb-8 icon-glow" style={{ color: COLORS.orange }} />
              <p className="text-white/90 italic mb-8 leading-relaxed font-sans text-lg relative z-10">
                "{review.text}"
              </p>
              <div className="flex items-center space-x-4 relative z-10">
                <div className="w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg shadow-inner" style={{ backgroundColor: COLORS.orange, color: COLORS.white }}>
                  {review.author[0]}
                </div>
                <span className="text-white font-bold font-sans tracking-wide">{review.author}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      <div className="w-full relative">
        <div className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#001d39] to-transparent z-10 pointer-events-none"></div>
        <div className="absolute -top-6 left-0 right-0 z-20 flex justify-center pointer-events-none">
           <span className="bg-white/10 backdrop-blur-md border border-white/20 text-white px-8 py-3 rounded-full text-sm font-bold tracking-widest uppercase shadow-2xl flex items-center">
             <Instagram className="w-4 h-4 mr-2" /> Live from Training
           </span>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 auto-rows-[200px] md:auto-rows-[250px] lg:auto-rows-[300px] gap-1 bg-[#001d39]">
          <div className="col-span-2 row-span-2 relative overflow-hidden group bg-white/5">
            <img src="/images/gallery/insta-1.jpg" alt="Dog Training Session" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </div>
          <div className="col-span-1 row-span-1 relative overflow-hidden group bg-white/5">
            <img src="/images/gallery/insta-2.jpg" alt="Owner and Dog" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </div>
          <div className="col-span-1 row-span-1 relative overflow-hidden group bg-white/5">
            <img src="/images/gallery/insta-3.jpg" alt="Dog Outdoors" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </div>
          <div className="col-span-1 row-span-1 relative overflow-hidden group bg-white/5">
            <img src="/images/gallery/insta-4.jpg" alt="Cute Dog" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </div>
          <div className="col-span-1 row-span-1 relative overflow-hidden group bg-white/5">
            <img src="/images/gallery/insta-5.jpg" alt="Training Progress" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy" />
          </div>
        </div>
      </div>
    </section>
  );
};

const FAQs = () => {
  const faqs = [
    {
      question: "Do I need to do anything before starting?",
      answer: "No prior training is required. The Life Skills Group Program is designed to meet dogs and owners where they are. Week 1 is dog-free and explains how dogs learn, how behaviour changes under stress, and how to set training up for success."
    },
    {
      question: "Is Week 1 really dog-free?",
      answer: "Yes. The first session is humans only. This allows you to understand the training approach without needing to manage your dog at the same time. It also helps ensure everyone starts the practical sessions with the same foundation."
    },
    {
      question: "Are harsh corrections used?",
      answer: "No. Harsh corrections are not used or permitted. The focus is on clear communication, reinforcement, and helping dogs feel more comfortable in the environments they live in."
    },
    {
      question: "How do group times work?",
      answer: "Group times are assigned by the trainer based on your intake form. This helps keep sessions safe, productive, and appropriate for each dog."
    },
    {
      question: "Can reactive dogs attend Life Skills?",
      answer: "Sometimes. Some dogs benefit from starting with Reactivity Support before joining a group environment. If group training isn’t the right fit, we’ll discuss an alternative pathway."
    },
    {
      question: "What if I’m not sure where to start?",
      answer: "Start here: <a href=\"#contact\" class=\"text-[#EF5B25] font-bold hover:underline\">Go to Start Here</a>"
    },
    {
      question: "What happens if my dog struggles during the course?",
      answer: "Training is adjusted to suit the dog in front of us. If a group environment becomes unsuitable, alternative options will be discussed."
    },
    {
      question: "How many dogs are in each group?",
      answer: "Groups are limited to a maximum of 6 dogs. Small groups allow for better spacing, more individual guidance, and a calmer learning environment."
    }
  ];

  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const toggleFaq = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-16 lg:py-24" id="faqs">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-6 font-serif" style={{ color: COLORS.navy }}>
            Frequently Asked Questions
          </h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div 
              key={index} 
              className="border border-gray-200 rounded-2xl overflow-hidden bg-white hover:shadow-sm transition-shadow"
            >
              <button
                onClick={() => toggleFaq(index)}
                className="w-full flex justify-between items-center p-6 text-left focus:outline-none"
              >
                <span className="text-lg font-bold font-serif" style={{ color: COLORS.navy }}>{faq.question}</span>
                <ChevronDown 
                  className={`w-6 h-6 transform transition-transform duration-300 ${openIndex === index ? 'rotate-180' : ''}`} 
                  style={{ color: COLORS.orange }}
                />
              </button>
              
              {openIndex === index && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  className="px-6 pb-6 text-gray-600 font-sans leading-relaxed"
                  dangerouslySetInnerHTML={{ __html: faq.answer }}
                />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Contact = () => {
  const location = useLocation();
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    phone: '',
    dob: '',
    service: '',
    message: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = React.useState('');

  React.useEffect(() => {
    const params = new URLSearchParams(location.search);
    const serviceFromUrl = params.get('service');
    if (serviceFromUrl) {
      setFormData(prev => ({ ...prev, service: serviceFromUrl }));
    }
  }, [location.search]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('loading');
    setErrorMessage('');

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({
          ...formData,
          message: `Service Inquiry: ${formData.service || 'Not specified'}\nDOB: ${formData.dob}\n\n${formData.message}`
        })
      });

      const data = await response.json();
      
      if (data.success) {
        setStatus('success');
        setFormData({ name: '', email: '', phone: '', dob: '', service: '', message: '' });
      } else {
        setStatus('error');
        setErrorMessage(data.error || 'Failed to send message.');
      }
    } catch (error) {
      setStatus('error');
      setErrorMessage('A network error occurred. Please try again.');
    }
  };

  return (
    <section className="py-16 lg:py-24 bg-gray-50" id="contact">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4 font-serif" style={{ color: COLORS.navy }}>Contact</h2>
          <p className="text-gray-600 text-lg">If you're unsure where to begin, start here.</p>
        </div>

        <div className="grid lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
              <div className="p-6 sm:p-12">
                <h3 className="text-3xl font-bold mb-2 font-serif" style={{ color: COLORS.navy }}>The Operant Dog – Enquiry Form</h3>
                <p className="text-gray-600 mb-8 pb-8 border-b border-gray-100">Tell us a bit about your dog and what you'd like help with.</p>
                
                {status === 'success' ? (
                  <div className="bg-green-50 border border-green-200 text-green-800 rounded-xl p-8 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <Send className="w-8 h-8 text-green-600" />
                    </div>
                    <h4 className="text-2xl font-bold font-serif mb-2">Message Sent!</h4>
                    <p>Thank you for reaching out. We will get back to you shortly.</p>
                    <button onClick={() => setStatus('idle')} className="mt-6 font-bold text-green-700 hover:text-green-800 underline">Send another message</button>
                  </div>
                ) : (
                <form className="space-y-6" onSubmit={handleSubmit}>
                  <div className="group">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 transition-colors group-focus-within:text-[#EF5B25]">Email Address <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#EF5B25] transition-colors">
                        <Mail className="h-5 w-5" />
                      </div>
                      <input type="email" required value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#EF5B25] focus:ring-4 focus:ring-[#EF5B25]/10 outline-none transition-all bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-400" placeholder="hello@example.com" />
                    </div>
                  </div>
                  
                  <div className="group">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 transition-colors group-focus-within:text-[#EF5B25]">Full Name <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#EF5B25] transition-colors">
                        <User className="h-5 w-5" />
                      </div>
                      <input type="text" required value={formData.name} onChange={(e) => setFormData({...formData, name: e.target.value})} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#EF5B25] focus:ring-4 focus:ring-[#EF5B25]/10 outline-none transition-all bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-400" placeholder="Jane Doe" />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="group">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 transition-colors group-focus-within:text-[#EF5B25]">Phone Number <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#EF5B25] transition-colors">
                          <Phone className="h-5 w-5" />
                        </div>
                        <input type="tel" required value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#EF5B25] focus:ring-4 focus:ring-[#EF5B25]/10 outline-none transition-all bg-gray-50 focus:bg-white text-gray-800 placeholder-gray-400" placeholder="0400 000 000" />
                      </div>
                    </div>

                    <div className="group">
                      <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 transition-colors group-focus-within:text-[#EF5B25]">Dog's DOB <span className="text-red-500">*</span></label>
                      <div className="relative">
                        <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#EF5B25] transition-colors">
                          <Calendar className="h-5 w-5" />
                        </div>
                        <input type="date" required value={formData.dob} onChange={(e) => setFormData({...formData, dob: e.target.value})} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#EF5B25] focus:ring-4 focus:ring-[#EF5B25]/10 outline-none transition-all bg-gray-50 focus:bg-white text-gray-800" />
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 transition-colors group-focus-within:text-[#EF5B25]">Service of Interest</label>
                    <div className="relative">
                      <div className="absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none text-gray-400 group-focus-within:text-[#EF5B25] transition-colors">
                        <Dog className="h-5 w-5" />
                      </div>
                      <select 
                        value={formData.service} 
                        onChange={(e) => setFormData({...formData, service: e.target.value})} 
                        className="w-full pl-12 pr-10 py-3.5 rounded-xl border border-gray-200 focus:border-[#EF5B25] focus:ring-4 focus:ring-[#EF5B25]/10 outline-none transition-all bg-gray-50 focus:bg-white text-gray-800 appearance-none cursor-pointer"
                      >
                        <option value="">I'm not sure yet / General Enquiry</option>
                        <option value="Life Skills">Life Skills Group Classes</option>
                        <option value="Reactivity Support">Reactivity Rescue Package</option>
                        <option value="Puppy School">Puppy School</option>
                      </select>
                      <div className="absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none text-gray-500">
                        <ChevronDown className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  <div className="group">
                    <label className="block text-xs font-bold text-gray-500 uppercase tracking-wider mb-2 transition-colors group-focus-within:text-[#EF5B25]">Tell us a bit about your dog and what you'd like help with <span className="text-red-500">*</span></label>
                    <div className="relative">
                      <div className="absolute top-4 left-0 pl-4 flex items-start pointer-events-none text-gray-400 group-focus-within:text-[#EF5B25] transition-colors">
                        <MessageSquare className="h-5 w-5" />
                      </div>
                      <textarea required value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} rows={5} className="w-full pl-12 pr-4 py-3.5 rounded-xl border border-gray-200 focus:border-[#EF5B25] focus:ring-4 focus:ring-[#EF5B25]/10 outline-none transition-all bg-gray-50 focus:bg-white resize-none text-gray-800 placeholder-gray-400" placeholder="Breed, age, what you're struggling with..."></textarea>
                    </div>
                  </div>

                  {errorMessage && (
                    <div className="bg-red-50 text-red-600 p-4 rounded-xl border border-red-100 text-sm">
                      {errorMessage}
                    </div>
                  )}
                  <div className="pt-6">
                    <button type="submit" disabled={status === 'loading'} className="group w-full sm:w-auto flex items-center justify-center px-8 py-4 rounded-xl text-white font-bold text-lg transition-all hover:shadow-xl hover:-translate-y-1 relative overflow-hidden disabled:opacity-70 disabled:pointer-events-none" style={{ backgroundColor: COLORS.navy }}>
                      <span className="relative z-10 flex items-center">
                        {status === 'loading' ? 'Sending...' : 'Submit Enquiry'}
                        {status !== 'loading' && <Send className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />}
                      </span>
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300" style={{ background: `linear-gradient(90deg, ${COLORS.navy} 0%, ${COLORS.orange} 100%)` }}></div>
                    </button>
                  </div>
                </form>
                )}
              </div>
            </div>
          </div>

          <div className="lg:col-span-1 space-y-8">
            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm relative overflow-hidden">
              <div className="absolute top-0 right-0 w-24 h-24 bg-[#EF5B25] opacity-5 rounded-bl-full pointer-events-none"></div>
              <h4 className="text-xl font-bold mb-1 font-serif" style={{ color: COLORS.navy }}>Will Sinclair-Huggins</h4>
              <p className="text-[#EF5B25] font-bold text-sm uppercase tracking-wider mb-6">Dog Trainer</p>
              
              <div className="space-y-4 mb-6">
                <a href="mailto:will@theoperantdog.com.au" className="flex items-center text-gray-600 hover:text-[#EF5B25] transition-colors group">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-colors" style={{ backgroundColor: `${COLORS.orange}1A` }}>
                    <Mail className="w-4 h-4 group-hover:scale-110 transition-transform" style={{ color: COLORS.orange }} />
                  </div>
                  <span className="font-medium text-sm break-all">will@theoperantdog.com.au</span>
                </a>
                <a href="tel:0499697042" className="flex items-center text-gray-600 hover:text-[#EF5B25] transition-colors group">
                  <div className="w-8 h-8 rounded-full flex items-center justify-center mr-3 transition-colors" style={{ backgroundColor: `${COLORS.orange}1A` }}>
                    <Phone className="w-4 h-4 group-hover:scale-110 transition-transform" style={{ color: COLORS.orange }} />
                  </div>
                  <span className="font-medium">0499 697 042</span>
                </a>
              </div>

              <a href="tel:0499697042" className="flex items-center justify-center w-full py-3.5 rounded-xl text-white font-bold transition-all hover:shadow-lg hover:-translate-y-0.5" style={{ backgroundColor: COLORS.orange }}>
                <Phone className="w-5 h-5 mr-2" />
                Call Now
              </a>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 font-serif" style={{ color: COLORS.navy }}>Location</h4>
              <p className="text-gray-600 flex items-center">
                <MapPin className="w-5 h-5 mr-3" style={{ color: COLORS.orange }} />
                Coffs Harbour, NSW
              </p>
            </div>

            <div>
              <h4 className="text-xl font-bold mb-4 font-serif" style={{ color: COLORS.navy }}>Helpful Information to Include</h4>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 mr-3 shrink-0" style={{ backgroundColor: COLORS.orange }}></div>
                  <span>Your dog's age</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 mr-3 shrink-0" style={{ backgroundColor: COLORS.orange }}></div>
                  <span>Breed (best guess is fine)</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 mr-3 shrink-0" style={{ backgroundColor: COLORS.orange }}></div>
                  <span>What you're struggling with in real life</span>
                </li>
                <li className="flex items-start">
                  <div className="w-1.5 h-1.5 rounded-full mt-2 mr-3 shrink-0" style={{ backgroundColor: COLORS.orange }}></div>
                  <span>How your dog behaves around other dogs or people</span>
                </li>
              </ul>
            </div>

            <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm">
              <p className="text-sm text-gray-600 italic">
                Forms are usually reviewed within 2 business days.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className="bg-white py-16 border-t border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-12 items-center text-center md:text-left">
          <div>
            <Link to="/">
              <img src="/logo.png" alt="The Operant Dog" className="h-20 w-auto mx-auto md:mx-0" />
            </Link>
            <p className="text-sm font-bold mt-3 text-gray-700">
              &copy; The Operant Dog 2026
            </p>
          </div>

          <div className="flex flex-col items-center justify-center space-y-4">
            <div className="flex space-x-6">
              <a
                href="https://www.facebook.com/theoperantdog/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-50 rounded-full hover:bg-[#001d39] hover:text-white transition-all text-gray-600 shadow-sm"
                aria-label="Facebook"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com/theoperantdog/"
                target="_blank"
                rel="noopener noreferrer"
                className="p-4 bg-gray-50 rounded-full hover:bg-[#001d39] hover:text-white transition-all text-gray-600 shadow-sm"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6" />
              </a>
            </div>
          </div>

          <div className="text-sm text-gray-500 font-medium md:text-right flex flex-col items-center md:items-end space-y-4">
            <div className="space-y-3 flex flex-col items-center md:items-end">
              <a href="mailto:will@theoperantdog.com.au" className="flex items-center hover:text-[#EF5B25] transition-colors group">
                <Mail className="w-4 h-4 mr-2 md:mr-0 md:ml-2 group-hover:scale-110 transition-transform order-1 md:order-2" style={{ color: COLORS.orange }} />
                <span className="order-2 md:order-1 break-all">will@theoperantdog.com.au</span>
              </a>
              <a href="tel:0499697042" className="flex items-center hover:text-[#EF5B25] transition-colors group">
                <Phone className="w-4 h-4 mr-2 md:mr-0 md:ml-2 group-hover:scale-110 transition-transform order-1 md:order-2" style={{ color: COLORS.orange }} />
                <span className="order-2 md:order-1">0499 697 042</span>
              </a>
              <span className="flex items-center text-gray-500 group">
                <MapPin className="w-4 h-4 mr-2 md:mr-0 md:ml-2 order-1 md:order-2" style={{ color: COLORS.orange }} />
                <span className="order-2 md:order-1">Coffs Harbour & surrounds</span>
              </span>
            </div>
            
            <div className="pt-2">
              <Link to="/terms" className="text-xs hover:text-[#EF5B25] transition-colors underline underline-offset-4 decoration-gray-200 hover:decoration-[#EF5B25]">Terms & Conditions</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

function LandingPage() {
  const location = useLocation();

  React.useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, left: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#EF5B25] selection:text-white relative">
      <Navbar />
      <Hero />
      <Services />
      <QuoteSection />
      <About />
      <ClientStories />
      <FAQs />
      <Contact />
      <Footer />
    </div>
  );
}

const TermsPage = () => {
  React.useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' });
  }, []);

  return (
    <div className="min-h-screen bg-white font-sans selection:bg-[#EF5B25] selection:text-white flex flex-col relative">
      <Navbar />
      <main className="flex-grow pt-32 pb-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl lg:text-5xl font-bold mb-8 font-serif" style={{ color: COLORS.navy }}>Terms</h1>
          <div className="prose prose-lg text-gray-600 font-sans">
            <p className="mb-6 leading-relaxed">
              By registering for programs, training services, or events with The Operant Dog, you agree to follow trainer instructions, site guidelines, and safety policies.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 font-serif" style={{ color: COLORS.navy }}>Training policies</h2>
            <ul className="list-disc pl-5 space-y-2 mb-8 leading-relaxed">
              <li>No harsh corrections are used or permitted during training</li>
              <li>No dog-to-dog contact during group sessions unless specifically instructed</li>
              <li>Dogs may be placed into groups based on intake information to support safety and learning</li>
              <li>Owners are responsible for ensuring their dog is appropriately restrained when not actively training</li>
              <li>Dogs showing signs of illness should not attend sessions</li>
            </ul>

            <h2 className="text-2xl font-bold mt-10 mb-4 font-serif" style={{ color: COLORS.navy }}>Participation</h2>
            <p className="mb-4 leading-relaxed">
              Training environments involve working with animals, which can be unpredictable. While reasonable care is taken to create a safe environment, participation is at your own risk.
            </p>
            <p className="mb-8 leading-relaxed">
              Owners are responsible for the behaviour of their dog at all times.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 font-serif" style={{ color: COLORS.navy }}>Suitability</h2>
            <p className="mb-8 leading-relaxed">
              If a group environment is not suitable for a particular dog, alternative options may be recommended.
            </p>

            <h2 className="text-2xl font-bold mt-10 mb-4 font-serif" style={{ color: COLORS.navy }}>Contact</h2>
            <p className="mb-8 leading-relaxed">
              If you have questions about these terms, please use the contact form on the website.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/terms" element={<TermsPage />} />
      </Routes>
    </BrowserRouter>
  );
}
