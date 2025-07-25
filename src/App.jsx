import React from "react";

function App() {
  return (
    <div className="font-mono">
      {/* Navbar */}
      <header className="flex justify-between items-center p-6 border-b">
        <div className="text-xl font-bold">CALLMATE-AI</div>
        <nav className="space-x-6 text-sm">
          <a href="#">Home</a>
          <a href="#">About</a>
          <a href="#">Products</a>
          <a href="#">Contact</a>
          <button className="bg-black text-white px-4 py-1 rounded">Join Us</button>
        </nav>
      </header>

      {/* Hero Section */}
      <section className="flex flex-col md:flex-row items-center p-12">
        <div className="flex-1 space-y-4">
          <h1 className="text-4xl font-bold italic">Discover<br /><span className="not-italic">CALLMATE</span></h1>
          <p className="text-gray-700 text-sm max-w-md">
            CALLMATE-AI is a leading voice-based AI platform for customer support and marketing, specializing in Indian languages.
          </p>
          <button className="bg-black text-white px-6 py-2 rounded mt-2">Learn more</button>
        </div>
        <div className="flex-1">
          <img src="/img1.png" alt="Illustration" className="w-full h-auto" />
        </div>
      </section>

      {/* Empowering Section */}
      <section className="bg-black text-white text-center p-12">
        <h2 className="text-3xl font-bold mb-4">Empowering<br /><span className="italic">Indian Audiences</span></h2>
        <p className="text-sm max-w-xl mx-auto">
          At CALLMATE-AI, we enable businesses to engage Indian audiences at scale with accurate and contextual voice AI across all major Indian languages.
        </p>
      </section>

      {/* Innovation + Illustration Grid */}
      <section className="grid md:grid-cols-2 gap-8 p-12">
        <div className="bg-white shadow p-6 space-y-4">
          <h3 className="text-xl font-bold">Innovative Offline AI Solutions for India</h3>
          <p className="text-sm text-gray-600">
            CALLMATE pioneers the development of AI for the Indian context, even in low-connectivity areas.
          </p>
          <div className="bg-gray-100 h-40 flex items-center justify-center">
            <span>Image Here</span>
          </div>
        </div>
        <div className="bg-white shadow p-6">
          <img src="/img2.png" alt="Businessman Illustration" className="w-full h-auto" />
        </div>
      </section>

      {/* CTA Footer Section */}
      <footer className="bg-black text-white text-center p-10 space-y-4">
        <h3 className="text-xl font-bold">Transforming the Customer</h3>
        <button className="bg-white text-black px-6 py-2 rounded">Explore Our Solutions</button>
      </footer>

      {/* NEW SECTION: Revolutionizing the Future of */}
      <section className="p-12">
        <div className="flex justify-between items-start mb-10">
          <div className="space-y-4 max-w-xl">
            <h2 className="text-3xl font-bold italic">Revolutionizing the Future of</h2>
            <p className="text-gray-600 text-sm">
              CALLMATE.AI is at the forefront of the AI revolution, pioneering groundbreaking offline conversational AI solutions that are transforming the way Indian enterprises connect.
            </p>
          </div>
          <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center text-center text-xs font-bold border">
            Cache
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="border p-4 rounded text-center">
            <h4 className="font-bold">Empowering</h4>
            <p className="text-sm">Indian Businesses with Offline AI Expertise</p>
          </div>
          <div className="border p-4 rounded text-center">
            <h4 className="font-bold">Seamless</h4>
            <p className="text-sm">Offline AI Solutions for Multilingual Integration</p>
          </div>
          <div className="border p-4 rounded text-center">
            <h4 className="font-bold">Unparalleled</h4>
            <p className="text-sm">Offline AI Technology Tailored for Exceptional Performance</p>
          </div>
        </div>
      </section>

      {/* NEW SECTION: Driving + Elevate + CTA */}
      <section className="p-12 space-y-12">
        {/* Driving Block */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img src="/img3.png" alt="Businessman" className="w-1/3" />
          <div>
            <h3 className="text-2xl font-bold italic">Driving</h3>
            <p className="text-sm text-gray-600 max-w-md">
              CALLMATE.AI is leading the charge in the development of human-first offline conversational AI solutions tailored for the Indian market.
            </p>
          </div>
        </div>

        {/* Dark Info Block */}
        <div className="bg-black text-white p-10 rounded">
          <p className="text-sm max-w-xl">
            Mauris ullamcorper magna blandit, mattis elit vitae, malesuada neque. Aliquam quis velit mauris. Ut nec lorem varius arcu.
          </p>
        </div>

        {/* Image + Right Text */}
        <div className="flex flex-col md:flex-row items-center gap-10">
          <img src="/img4.png" alt="Profile" className="w-1/3" />
          <div>
            <h3 className="text-2xl font-bold italic">vestibulum.</h3>
            <p className="text-sm text-gray-600 max-w-md">
              Maecenas tempor ipsum blandit, gravida elit sit amet, pulvinar ex. Donec varius lorem ex.
            </p>
          </div>
        </div>

        {/* CTA at Bottom */}
        <div className="bg-black text-white p-10 rounded text-center space-y-4">
          <h4 className="text-xl font-bold">Unparalleled</h4>
          <p className="text-sm max-w-xl mx-auto">
            Discover how CALLMATE.AI is shaping the future of customer interactions with offline voice AI.
          </p>
          <button className="bg-white text-black px-6 py-2 rounded">Explore Our Solutions</button>
        </div>
      </section>
            {/* Full Footer */}
      <footer className="bg-[#1A1A1A] text-white px-10 py-12 mt-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 text-sm">
          {/* Logo + Copyright */}
          <div>
            <div className="mb-4">
              {/* Placeholder for logo */}
              <div className="w-10 h-6 bg-white rounded-full"></div>
            </div>
            <p className="text-xs text-gray-400 mt-4">
              © 2025 CALLMATE.AI, Inc.<br />
              All rights reserved.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="mb-2 font-semibold text-gray-300">Quick Links</h4>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#">Home</a></li>
              <li><a href="#">About</a></li>
              <li><a href="#">Products</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h4 className="mb-2 font-semibold text-gray-300">Connect with Us</h4>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#">Facebook</a></li>
              <li><a href="#">Twitter</a></li>
              <li><a href="#">LinkedIn</a></li>
              <li><a href="#">Instagram</a></li>
            </ul>
          </div>

          {/* Stay Updated */}
          <div>
            <h4 className="mb-2 font-semibold text-gray-300">Stay Updated</h4>
            <ul className="space-y-1 text-gray-400">
              <li><a href="#">Blog</a></li>
              <li><a href="#">Newsletter</a></li>
              <li><a href="#">Era.</a></li>
              <li><a href="#">Hen.</a></li>
            </ul>
          </div>
        </div>
      </footer>

    </div>
  );
}

export default App;
