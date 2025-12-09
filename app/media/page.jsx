import React from 'react';

import Footer from '../layout/footer';
import Header from '../layout/Header';

// --- Sample Data ---
const newsArticles = [
  {
    id: 1,
    image: "/assets/images/Bhaswar-Paul.jpg", 
    source: "siliconindia.com",
    title: "India's Best Business Coach, Mr. Suresh Mansharamani, shares proven methods to enhance profitability",
    description: "In the challenging world of modern Indian business, profitability is not just a financial goal. It is a survival metric. Indian entrepreneurs and business owners are constantly searching...",
    link: "#"
  },
  {
    id: 2,
    image: "/assets/images/book-1.jpeg",
    source: "tribuneindia.com",
    title: "Facing Business Scalability Challenges? Insights from India's Most Experienced Business Coach...",
    description: "Scaling a business isn't just about growing bigger. It's about growing smarter. While growth usually means adding more—more clients, more revenue, more team members...",
    link: "#"
  },
  {
    id: 3,
    image: "/assets/images/book-3.jpeg",
    source: "prabhatkhabar.com",
    title: "Success Story: ₹300 से शुरू हुआ सफर, 300 गुना ओवरसब्सक्राइब्ड IPO तक, जानिए सुरेश मंشارामानी का जुनून",
    description: "सुरेश मंشارामानी ने ₹300 प्रति माह की नौकरी से शुरुआत की और 1995 में 300 गुना ओवरसब्सक्राइब्ड IPO के साथ अपनी कंपनी लिस्ट कराई...",
    link: "#"
  },
  {
    id: 4,
    image: "https://via.placeholder.com/600x400?text=Article+4",
    source: "adgully.com",
    title: "How AI & Automation are revolutionizing entrepreneurship",
    description: "The entire world seems to be bowing down to the term called AI. The emergence of Artificial Intelligence (AI) and automation is transforming the entrepreneurial scene...",
    link: "#"
  },
  {
    id: 5,
    image: "https://via.placeholder.com/600x400?text=Article+5",
    source: "pulsexpertech.com",
    title: "Tajurba Builds a Bridge to the SME Exchange: Empowering 500 Indian SMEs to Scale, Raise Funds...",
    description: "Tajurba, India's fastest-growing community of Small and Medium Enterprises (SMEs), has launched a transformative initiative aimed at helping over 500 promising Indian SMEs...",
    link: "#"
  },
  {
    id: 6,
    image: "https://via.placeholder.com/600x400?text=Article+6",
    source: "couturefashion.net",
    title: "Tajurba Builds a Bridge to the SME Exchange: Empowering 500 Indian SMEs to Scale, Raise Funds...",
    description: "Tajurba, India's fastest-growing community of Small and Medium Enterprises (SMEs), has launched a transformative initiative aimed at helping over 500 promising Indian SMEs...",
    link: "#"
  },
];

const videoTestimonials = [
  // Replace 'dQw4w9WgXcQ' with your actual YouTube Video IDs
  { id: 'video1', title: 'Shailendra Chaurasia | Success Story', youtubeId: 'dQw4w9WgXcQ' },
  { id: 'video2', title: 'Suraj Bode OKR Testimonial', youtubeId: 'dQw4w9WgXcQ' },
  { id: 'video3', title: 'Dr. Amit Verma Testimonial', youtubeId: 'dQw4w9WgXcQ' },
  { id: 'video4', title: 'Dr Hitesh Khuran Testimonial', youtubeId: 'dQw4w9WgXcQ' },
];

// --- Sub-Components ---

const NewsCard = ({ article }) => (
  // Card BG: #4c4949
  <div className="bg-[#4c4949] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl hover:shadow-[#b79662]/20 hover:-translate-y-2 transition-all duration-300 border border-gray-600 group">
    <div className="relative h-52 overflow-hidden">
      <img 
        src={article.image} 
        alt={article.title} 
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" 
      />
      {/* Label: Gold Background */}
      <span className="absolute bottom-3 right-3 bg-[#b79662] text-xs font-bold px-3 py-1 rounded-sm text-white shadow-sm">
        {article.source}
      </span>
    </div>
    <div className="p-6 flex flex-col h-[calc(100%-13rem)]">
      {/* Title: Gold */}
      <h3 className="text-lg font-bold mb-3 text-[#b79662] line-clamp-2 leading-tight">
        {article.title}
      </h3>
      {/* Text: Light Gray */}
      <p className="text-gray-200 text-sm mb-6 line-clamp-3 flex-grow font-light">
        {article.description}
      </p>
      {/* Button: Gold */}
      <a 
        href={article.link} 
        className="inline-flex items-center justify-center bg-[#b79662] hover:bg-[#967d51] text-white font-semibold py-2.5 px-5 rounded transition-colors duration-300 w-full md:w-auto text-sm uppercase tracking-wide"
      >
        Read the article
      </a>
    </div>
  </div>
);

const TestimonialHero = () => (
  <section className="flex flex-col lg:flex-row w-full min-h-[600px] max-w-7xl mx-auto mt-20 mb-10 shadow-2xl rounded-lg overflow-hidden">
    {/* Left Text Side: Background #4c4949 */}
    <div className="w-full lg:w-1/2 bg-[#4c4949] p-10 md:p-16 lg:px-24 lg:py-20 flex flex-col justify-center relative overflow-hidden">
      
      <div className="relative z-10">
        <span className="block text-[#b79662] font-bold tracking-widest uppercase mb-4 text-sm">
          Testimonials
        </span>
        <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 leading-none text-white">
          Here's What Our <br />
          <span className="text-[#b79662]">
            Customers Have To Say
          </span>
        </h2>
        <p className="text-gray-200 text-lg mb-10 leading-relaxed max-w-xl font-light">
          A vibrant network of entrepreneurs, business owners, and professionals united by a shared passion for growth and success. Whether you're seeking valuable connections, strategic partnerships, or collaborative opportunities, our network offers a dynamic platform to propel your business forward.
        </p>
        <button className="bg-[#b79662] hover:bg-[#967d51] text-white font-bold py-4 px-10 rounded shadow-md hover:shadow-lg transition-all duration-300 w-fit text-lg uppercase tracking-wide">
          Join our community now
        </button>
      </div>
    </div>

    {/* Right Image Side with Theme Overlay */}
    {/* Added 'group' class here so children can react to hover */}
    <div className="w-full lg:w-1/2 relative min-h-[400px] lg:min-h-auto bg-[#1e1e1e] group">
      <img 
        src="/assets/images/Bhaswar-Paul.jpg" // Replace with actual image
        alt="Suresh Mansharamani" 
        // The existing classes here will now work because of the parent 'group' class
        className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
      />
      
      {/* Overlay: Gold tint with multiply blend mode */}
      {/* Added group-hover:opacity-0 and transition so the tint fades out on hover, revealing true colors */}
      <div className="absolute inset-0 bg-[#b79662]/60 mix-blend-multiply z-10 group-hover:opacity-0 transition-all duration-500"></div>
      
      {/* Texture */}
      <div className="absolute inset-0 opacity-20 z-20 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>
    </div>
  </section>
);

const VideoCard = ({ video }) => (
  // Card BG: #4c4949
  <div className="bg-[#4c4949] rounded-lg overflow-hidden shadow-lg border border-gray-600 group hover:border-[#b79662] transition-colors duration-300">
    <div className="relative pb-[56.25%] h-0 bg-black"> 
      <iframe
        className="absolute top-0 left-0 w-full h-full"
        src={`https://www.youtube.com/embed/${video.youtubeId}`}
        title={video.title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
    </div>
    <div className="p-5 text-center">
      <h3 className="text-base font-medium text-white group-hover:text-[#b79662] transition-colors duration-300 line-clamp-2">
        {video.title}
      </h3>
    </div>
  </div>
);

// --- Main Component ---

const MediaSection = () => {
  return (
    <>
    <Header />
    <div className="bg-[#1e1e1e] flex flex-col">
        {/* Section 2: Testimonial Hero */}
      <TestimonialHero />

      {/* Section 1: News Grid */}
      <section className="py-20 px-4 md:px-8 lg:px-16 relative">
        <div className="max-w-7xl mx-auto relative z-10">
           <div className="text-center mb-14">
              <span className="text-[#b79662] font-bold tracking-wider uppercase mb-2 block">In The News</span>
              <h2 className="text-3xl md:text-4xl font-bold text-white">Media <span className="text-[#b79662]">Coverage</span></h2>
              <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 rounded-full"></div>
           </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsArticles.map(article => (
              <NewsCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

    

      {/* Section 3: Video Grid */}
      {/* <section className="py-20 px-4 md:px-8 lg:px-16 bg-[#1e1e1e] relative">
        <div className="max-w-6xl mx-auto relative z-10">
          <div className="text-center mb-14">
              <h2 className="text-3xl md:text-4xl font-bold text-white">Our Clients <span className="text-[#b79662]">Testimonial</span></h2>
              <div className="w-24 h-1 bg-[#b79662] mx-auto mt-4 rounded-full"></div>
           </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            {videoTestimonials.map(video => (
              <VideoCard key={video.id} video={video} />
            ))}
          </div>
        </div>
      </section> */}
    </div>
    <Footer />
    </>
  );
};

export default MediaSection;