"use client";
import React, { useEffect, useRef } from 'react';
import { Heart, Star, Phone, Handshake, User, Shield, ChevronRight, CheckCircle } from 'lucide-react';
import Navbar from '../navbar';
import Footer from '../footer';

const PortfolioPage = () => {
  return (
    <>
    <Navbar/>
    <div className="min-h-screen bg-white font-sans text-slate-800">
      
      {/* SECTION 1: HERO / PROFILE */}
    <section className="bg-[#f8f9fa] py-16 lg:py-20">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex flex-col-reverse lg:flex-row items-center gap-12 lg:gap-20">
          {/* Left Text Content */}
          <div className="w-full lg:w-1/2">
            <span className="block text-[#0047ba] font-bold uppercase mb-3 text-sm tracking-wide">
              ABOUT US
            </span>
            <h2 className="text-2xl lg:text-4xl font-bold text-gray-800 leading-tight mb-4" style={{fontSize:'24px'}}>
              From Refugee Camp To Business Success: The Inspiring Journey Of Business Coach
            </h2>
            <h2 className="text-3xl lg:text-4xl font-bold text-[#0047ba] leading-tight mb-6">
              Suresh Mansharamani
            </h2>
            <p className="text-gray-600 leading-relaxed mb-6 text-base lg:text-lg">
              In a world where success is often reserved for the privileged,
              Business Coach Suresh Mansharamani was born in a refugee camp in
              Maharashtra. He started his journey with a job career of just Rs
              300/month to making his company 300 times oversubscribed IPO in
              1995 and getting listed at the Bombay Stock Exchange. Followed by
              a Presidential Award, he is now a Certified Gallup Strengths
              Coach,{" "}
              <span className="font-bold text-gray-800">
                Business Coach in India, Best OKR Coach, Best SME Coach, Best
                Sales Trainer, Best SME IPO Coach, Best Motivational Speakers
              </span>{" "}
              and Author of seven Books.
            </p>
          </div>

          {/* Right Image Content */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://i.ibb.co/T1yH13Q/image_1.png"
              alt="Business Coach Suresh Mansharamani sitting on a bench"
              className="rounded-[40px] w-full h-auto shadow-lg"
            />
          </div>
        </div>
      </div>
     
    </section>

      {/* SECTION 2: BLUE INFO SECTION */}
   <div className="font-sans text-slate-800">
      
      {/* =========================================
          SECTION 1: ABOUT US (White Background)
          Matches image_47c81a.jpg
      ========================================= */}
  
      {/* =========================================
          SECTION 2: MISSION & VISION (Blue Background)
          Matches image_3c6b32.jpg
      ========================================= */}
      <section className="bg-[#0041a3] text-white py-16 lg:py-24">
        <div className="container mx-auto px-6 lg:px-12 space-y-16">
          
          {/* Top Text Columns */}
          <div className="grid md:grid-cols-2 gap-10 text-blue-50 leading-relaxed">
            <div>
              <p>
                Despite facing numerous challenges, including a lack of formal education and fluency in English, <span className="font-bold text-white">Motivational Speaker in India</span> Suresh Mansharamani persevered. To know more you have the opportunity to attend the <span className="font-bold text-white">upcoming events</span> or check out our <span className="font-bold text-white">clients testimonials</span>.
              </p>
              <p className="mt-6">
                However, with success also came setbacks. The failure of his online DVD rental venture in 2006, MovieMart.in,
              </p>
            </div>
            <div>
              <p>
                served as a valuable lesson of knowing when to pivot or persevere. Armed with this insight, Business Coach Suresh founded the Tajurba Business Network with a mission to empower SMEs across India by leveraging his expertise as a Business Coach in India, <span className="font-bold text-white">SME IPO Coach</span> and OKR (Objectives and Key Results) expert.
              </p>
            </div>
          </div>

          {/* Middle Heading Section */}
          <div className="space-y-6">
            <h2 className="text-3xl lg:text-4xl font-bold text-white">
              Overcoming Business Challenges And Achieving Massive Growth With OKR Systems
            </h2>
            <p className="text-blue-50 leading-relaxed max-w-5xl">
              Business Coaches Suresh Mansharamani is expert by helping individuals and businesses achieve their Big Hairy Audacious Goals (BHAGs) through actionable strategies and the implementation of OKR systems.
            </p>
            <p className="text-blue-50 leading-relaxed max-w-5xl">
              Suresh Mansharamani has ability to provide individualized counsel, whether through <span className="font-bold text-white">one-on-one business coaching</span> or group sessions targeted at improving team performance, has contributed to his status as one of India's leading <span className="font-bold text-white">business coaches</span>. Whether you're looking for <span className="font-bold text-white">IPO coach</span> Suresh Mansharamani, <span className="font-bold text-white">sales trainers, motivational speakers</span>, or <span className="font-bold text-white">OKR consultancy</span>, he has unmatched experience to help your company reach its objectives. View <span className="font-bold text-white">our reviews</span> and <span className="font-bold text-white">get in touch</span> with us right now. To learn more, you can also choose to go to the <span className="font-bold text-white">upcoming event</span>.
            </p>
          </div>

          {/* Bottom Mission & Vision Grid */}
          <div className="grid md:grid-cols-2 gap-12 pt-8">
            {/* Our Mission */}
            <div className="space-y-4">
              <h3 className="text-3xl font-normal text-white">Our Mission</h3>
              <p className="text-yellow-400 font-bold uppercase tracking-wide text-sm">
                Har Ghar Entrepreneurs
              </p>
              <p className="text-blue-100 leading-relaxed text-sm lg:text-base">
                I am committed to reaching out to crores of aspiring entrepreneurs across Bharat to empower them to start their own ventures. By fostering entrepreneurship, I aim to create wealth, generate employment, and contribute to making Bharat a Vishva Guru and a five trillion-dollar economy. Through this mission, we strive to inspire every household to embrace entrepreneurship, driving our nation towards unparalleled growth and global leadership.
              </p>
            </div>

            {/* Our Vision */}
            <div className="space-y-4">
              <h3 className="text-3xl font-normal text-white">Our Vision</h3>
              {/* Spacer to align with mission subtitle if needed, or just margin */}
              <div className="h-6 md:block hidden"></div> 
              <p className="text-blue-100 leading-relaxed text-sm lg:text-base">
                To help 500 MSMEs of Bharat scale up, get listed on the SME exchange, and achieve valuations of 1000 crores or more. By the year 2029, my goal is to nurture and support the growth of at least 100 of these MSMEs into unicorns, driving significant economic growth and innovation in our nation. Additionally, I aim for my own company Tajurba to get listed on the SME exchange and achieve a 5 lakh crore valuation by 2029.
              </p>
            </div>
          </div>

        </div>
      </section>

    </div>

      {/* SECTION 3: FEATURES / VALUES (We Innovate With Purpose) */}
      <section className="bg-slate-900 py-20">
        <div className="container mx-auto px-6 text-center mb-12">
          <p className="text-yellow-500 font-bold uppercase tracking-widest text-sm mb-2">Core Values</p>
          <h2 className="text-3xl md:text-4xl font-bold text-white">We Innovate With Purpose.</h2>
        </div>

        <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Card 1 */}
          <div className="bg-blue-900 p-8 rounded-lg text-white text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center mb-4"><Heart className="w-10 h-10 text-white" /></div>
            <h3 className="text-xl font-bold mb-2">Empathy</h3>
            <p className="text-blue-200 text-sm">Understanding the customer needs deeply and acting with care.</p>
          </div>

          {/* Card 2 */}
          <div className="bg-cyan-600 p-8 rounded-lg text-white text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center mb-4"><Star className="w-10 h-10 text-white" /></div>
            <h3 className="text-xl font-bold mb-2">Purpose Driven</h3>
            <p className="text-cyan-100 text-sm">Every action is aligned with the long-term vision of success.</p>
          </div>

          {/* Card 3 */}
          <div className="bg-emerald-500 p-8 rounded-lg text-white text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center mb-4"><Phone className="w-10 h-10 text-white" /></div>
            <h3 className="text-xl font-bold mb-2">Communication</h3>
            <p className="text-emerald-100 text-sm">Clear, transparent, and constant communication channels.</p>
          </div>

          {/* Card 4 */}
          <div className="bg-yellow-500 p-8 rounded-lg text-white text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center mb-4"><Handshake className="w-10 h-10 text-white" /></div>
            <h3 className="text-xl font-bold mb-2">Collaboration</h3>
            <p className="text-yellow-100 text-sm">Building strong partnerships to achieve mutual growth.</p>
          </div>

          {/* Card 5 */}
          <div className="bg-orange-500 p-8 rounded-lg text-white text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center mb-4"><User className="w-10 h-10 text-white" /></div>
            <h3 className="text-xl font-bold mb-2">Leadership</h3>
            <p className="text-orange-100 text-sm">Inspiring others to dream more, learn more, and do more.</p>
          </div>

          {/* Card 6 */}
          <div className="bg-orange-600 p-8 rounded-lg text-white text-center hover:-translate-y-2 transition-transform duration-300">
            <div className="flex justify-center mb-4"><Shield className="w-10 h-10 text-white" /></div>
            <h3 className="text-xl font-bold mb-2">Integrity</h3>
            <p className="text-orange-100 text-sm">Upholding the highest standards of honesty and ethics.</p>
          </div>
        </div>
      </section>

      {/* SECTION 4: CHALLENGES (Image Left, List Right) */}
      <section className="container mx-auto px-6 py-20 bg-gray-50">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          {/* Image */}
          <div className="w-full md:w-5/12">
            <img 
              src="/api/placeholder/400/600" 
              alt="Speaker on stage" 
              className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
            />
          </div>

          {/* Content */}
          <div className="w-full md:w-7/12 space-y-8">
            <div>
              <p className="text-blue-600 font-bold uppercase text-sm mb-2">Mentoring</p>
              <h2 className="text-3xl md:text-4xl font-bold text-blue-900 mb-6">
                Common Business Challenges
              </h2>
            </div>

            <div className="space-y-4">
              {['Stagnant Sales Growth', 'Lack of Team Accountability', 'Poor Time Management', 'Inability to Scale Operations', 'High Employee Turnover'].map((item, index) => (
                <div key={index} className="flex items-center justify-between p-4 bg-white rounded shadow-sm border border-gray-100 group hover:border-blue-500 cursor-pointer transition-colors">
                  <span className="font-semibold text-slate-700 group-hover:text-blue-600">{item}</span>
                  <ChevronRight className="text-gray-400 group-hover:text-blue-600" size={20} />
                </div>
              ))}
            </div>

            <button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded font-bold transition-colors">
              Schedule A Call
            </button>
          </div>
        </div>
      </section>

      {/* SECTION 5: BOOKS / AMAZON (Dark Background) */}
      <section className="bg-stone-950 py-20 relative overflow-hidden">
        {/* Background Overlay Effect (Optional Library feel) */}
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dark-wood.png')]"></div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="text-center mb-12">
             <p className="text-white text-sm uppercase tracking-widest">My Books</p>
             <h2 className="text-3xl font-bold text-yellow-400">Buy From Amazon</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Book Card 1 */}
            <BookCard 
              title="Drive Your Business"
              desc="Learn the specific strategies to double your profits in 6 months."
              image="/api/placeholder/150/200"
            />
            {/* Book Card 2 */}
             <BookCard 
              title="Own The Stage"
              desc="Master the art of public speaking and influence any audience."
              image="/api/placeholder/150/200"
            />
            {/* Book Card 3 */}
             <BookCard 
              title="Closing The Sales"
              desc="Advanced techniques to close deals faster and handle objections."
              image="/api/placeholder/150/200"
            />
            {/* Book Card 4 */}
             <BookCard 
              title="Specific Knowledge"
              desc="How to gain specialized knowledge that makes you irreplaceable."
              image="/api/placeholder/150/200"
            />
             {/* Book Card 5 */}
             <BookCard 
              title="Super Power"
              desc="Unlock your hidden potential and achieve superhuman results."
              image="/api/placeholder/150/200"
            />
          </div>
        </div>
      </section>

    </div>
    <Footer/>
    </>
  );
};

// Helper Component for the Book Section to maintain the specific layout
const BookCard = ({ title, desc, image }) => {
  return (
    <div className="flex flex-row h-full">
      {/* Left Blue Part */}
      <div className="bg-blue-800 p-6 w-2/3 flex flex-col justify-center items-start text-white rounded-l-md">
        <h3 className="text-lg font-bold mb-2 uppercase text-yellow-400">{title}</h3>
        <p className="text-xs text-blue-100 mb-4 line-clamp-3">{desc}</p>
        <button className="bg-yellow-400 text-blue-900 px-4 py-1 text-xs font-bold uppercase rounded hover:bg-yellow-300">
          Buy Now
        </button>
      </div>
      
      {/* Right Image Part with Yellow Border */}
      <div className="w-1/3 bg-black border-4 border-yellow-400 rounded-r-md overflow-hidden relative">
        <img src={image} alt={title} className="w-full h-full object-cover" />
      </div>
    </div>
  )
}

export default PortfolioPage;