export default function HelixonWebsite() {
  const services = [
    {
      title: 'SEO Optimization',
      desc: 'Boost your rankings and drive organic traffic with advanced SEO strategies.',
    },
    {
      title: 'Social Media Marketing',
      desc: 'Grow your audience and engagement across Instagram, Facebook, and LinkedIn.',
    },
    {
      title: 'Paid Advertising',
      desc: 'Generate leads and conversions with targeted Google & Meta ad campaigns.',
    },
    {
      title: 'Website Development',
      desc: 'Modern responsive websites optimized for speed, SEO, and conversions.',
    },
  ];

  const stats = [
    { number: '250+', label: 'Projects Completed' },
    { number: '98%', label: 'Client Satisfaction' },
    { number: '120+', label: 'Brands Scaled' },
    { number: '5X', label: 'Average Growth' },
  ];

  return (
    <div className="bg-black text-white min-h-screen font-sans">
      {/* Navbar */}
      <header className="flex items-center justify-between px-8 py-6 border-b border-gray-800 sticky top-0 bg-black/90 backdrop-blur z-50">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-yellow-400 flex items-center justify-center text-black font-bold text-xl">
            H
          </div>
          <h1 className="text-2xl font-bold tracking-wide">Helixon</h1>
        </div>

        <nav className="hidden md:flex items-center gap-8 text-gray-300">
          <a href="#home" className="hover:text-yellow-400 transition">Home</a>
          <a href="#services" className="hover:text-yellow-400 transition">Services</a>
          <a href="#about" className="hover:text-yellow-400 transition">About</a>
          <a href="#contact" className="hover:text-yellow-400 transition">Contact</a>
        </nav>

        <button className="bg-yellow-400 text-black px-5 py-2 rounded-full font-semibold hover:scale-105 transition">
          Get Started
        </button>
      </header>

      {/* Hero Section */}
      <section
        id="home"
        className="relative overflow-hidden px-8 md:px-20 py-24 md:py-32"
      >
        <div className="absolute top-0 left-0 w-96 h-96 bg-yellow-400/20 blur-3xl rounded-full"></div>

        <div className="grid md:grid-cols-2 gap-12 items-center relative z-10">
          <div>
            <p className="uppercase tracking-[6px] text-yellow-400 mb-4 text-sm">
              Digital Marketing Agency
            </p>

            <h2 className="text-5xl md:text-7xl font-extrabold leading-tight mb-6">
              Grow Your
              <span className="text-yellow-400"> Brand</span>
              <br />
              Online Faster
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed mb-8 max-w-xl">
              We help businesses increase visibility, leads, and revenue through
              powerful digital marketing strategies and modern web solutions.
            </p>

            <div className="flex flex-wrap gap-4">
              <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
                Start Project
              </button>

              <button className="border border-gray-700 px-8 py-4 rounded-full hover:border-yellow-400 hover:text-yellow-400 transition">
                View Portfolio
              </button>
            </div>
          </div>

          <div className="relative">
            <div className="absolute inset-0 bg-yellow-400/20 blur-3xl rounded-full"></div>

            <img
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&w=1200&auto=format&fit=crop"
              alt="Marketing"
              className="relative rounded-3xl shadow-2xl border border-gray-800"
            />
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-6 px-8 md:px-20 py-16">
        {stats.map((item, index) => (
          <div
            key={index}
            className="bg-gray-900 border border-gray-800 rounded-3xl p-8 text-center hover:border-yellow-400 transition"
          >
            <h3 className="text-4xl font-bold text-yellow-400 mb-2">
              {item.number}
            </h3>
            <p className="text-gray-400">{item.label}</p>
          </div>
        ))}
      </section>

      {/* Services */}
      <section id="services" className="px-8 md:px-20 py-24 bg-[#0b0b0b]">
        <div className="text-center mb-16">
          <p className="uppercase tracking-[5px] text-yellow-400 mb-3 text-sm">
            Our Services
          </p>

          <h2 className="text-5xl font-bold mb-6">
            Digital Solutions That Deliver Results
          </h2>

          <p className="text-gray-400 max-w-2xl mx-auto text-lg">
            From branding to performance marketing, we create strategies that
            help businesses scale online.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-black border border-gray-800 rounded-3xl p-8 hover:border-yellow-400 hover:-translate-y-2 transition duration-300"
            >
              <div className="w-16 h-16 rounded-2xl bg-yellow-400 text-black flex items-center justify-center text-2xl font-bold mb-6">
                {index + 1}
              </div>

              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>

              <p className="text-gray-400 leading-relaxed">
                {service.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* About Section */}
      <section
        id="about"
        className="grid md:grid-cols-2 gap-16 px-8 md:px-20 py-24 items-center"
      >
        <div>
          <img
            src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=1200&auto=format&fit=crop"
            alt="Team"
            className="rounded-3xl border border-gray-800"
          />
        </div>

        <div>
          <p className="uppercase tracking-[5px] text-yellow-400 mb-3 text-sm">
            About Helixon
          </p>

          <h2 className="text-5xl font-bold mb-6 leading-tight">
            We Create Marketing That Converts
          </h2>

          <p className="text-gray-400 text-lg leading-relaxed mb-6">
            Helixon is a modern digital marketing agency focused on helping
            businesses dominate online with SEO, paid ads, social media, and
            premium website experiences.
          </p>

          <p className="text-gray-400 text-lg leading-relaxed mb-8">
            Our team combines creativity, analytics, and performance strategies
            to generate real growth for startups, local businesses, and brands.
          </p>

          <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
            Learn More
          </button>
        </div>
      </section>

      {/* CTA */}
      <section className="px-8 md:px-20 py-24">
        <div className="bg-yellow-400 text-black rounded-[40px] p-10 md:p-20 text-center">
          <h2 className="text-4xl md:text-6xl font-extrabold mb-6">
            Ready To Scale Your Business?
          </h2>

          <p className="max-w-2xl mx-auto text-lg mb-8">
            Let Helixon help you increase traffic, generate leads, and grow
            your online revenue with powerful marketing strategies.
          </p>

          <button className="bg-black text-white px-10 py-4 rounded-full font-bold hover:scale-105 transition">
            Book Free Consultation
          </button>
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="px-8 md:px-20 py-24 bg-[#0b0b0b]">
        <div className="grid md:grid-cols-2 gap-16">
          <div>
            <p className="uppercase tracking-[5px] text-yellow-400 mb-3 text-sm">
              Contact Us
            </p>

            <h2 className="text-5xl font-bold mb-6">
              Let's Build Something Amazing
            </h2>

            <p className="text-gray-400 text-lg leading-relaxed">
              Have a project in mind? Reach out and let's discuss how we can
              grow your brand digitally.
            </p>
          </div>

          <form className="space-y-6">
            <input
              type="text"
              placeholder="Your Name"
              className="w-full bg-black border border-gray-800 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="w-full bg-black border border-gray-800 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400"
            />

            <textarea
              rows={5}
              placeholder="Your Message"
              className="w-full bg-black border border-gray-800 rounded-2xl px-6 py-4 outline-none focus:border-yellow-400"
            ></textarea>

            <button className="bg-yellow-400 text-black px-8 py-4 rounded-full font-bold hover:scale-105 transition">
              Send Message
            </button>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-gray-800 px-8 md:px-20 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-gray-400">
        <p>© 2026 Helixon Digital Marketing Agency</p>

        <div className="flex gap-6">
          <a href="#" className="hover:text-yellow-400 transition">
            Instagram
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            LinkedIn
          </a>
          <a href="#" className="hover:text-yellow-400 transition">
            Facebook
          </a>
        </div>
      </footer>
    </div>
  );
}
