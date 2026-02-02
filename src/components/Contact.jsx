import React from "react";

export default function Contact() {
  return (
    <section
      id="contact"
      data-aos="fade-up"
      data-aos-delay="200"
      className="min-h-screen flex justify-center items-center px-6 py-16 relative"
    >
      {/* Background Glow */}
      <div className="absolute w-[350px] h-[350px] rounded-full bg-purple-600/40 blur-3xl -top-10 left-10"></div>
      <div className="absolute w-[350px] h-[350px] rounded-full bg-pink-500/40 blur-3xl bottom-10 right-10"></div>

      {/* Contact Card */}
      <article
        className="relative z-10 max-w-xl w-full bg-white/10 backdrop-blur-xl 
        border border-white/20 shadow-lg shadow-purple-900/30 rounded-3xl p-10"
      >
        {/* Header */}
        <header className="text-center mb-8">
          <h2 className="text-4xl font-bold text-purple-300 drop-shadow-lg">
            Contact Me
          </h2>
          <p className="text-gray-300 mt-2">
            Let's build something amazing together!- UI ONLY
          </p>
        </header>

        {/* Form */}
        <form className="space-y-5">

          <div>
            <label
              htmlFor="name"
              className="block text-gray-300 font-medium mb-1"
            >
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 rounded-xl bg-gray-900 text-white 
              border border-gray-700 focus:outline-none focus:border-purple-500"
              placeholder="Your Name"
            />
          </div>

          <div>
            <label
              htmlFor="email"
              className="block text-gray-300 font-medium mb-1"
            >
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 rounded-xl bg-gray-900 text-white 
              border border-gray-700 focus:outline-none focus:border-purple-500"
              placeholder="example@gmail.com"
            />
          </div>

          <div>
            <label
              htmlFor="message"
              className="block text-gray-300 font-medium mb-1"
            >
              Message
            </label>
            <textarea
              id="message"
              rows="4"
              className="w-full px-4 py-3 rounded-xl bg-gray-900 text-white 
              border border-gray-700 focus:outline-none focus:border-purple-500"
              placeholder="Type your message here..."
            ></textarea>
          </div>

          {/* Submit Button */}
          <button
            className="w-full text-white bg-purple-600 py-3 rounded-full text-lg font-semibold 
            hover:bg-purple-700 hover:shadow-[0_0_25px_rgba(168,85,247,0.7)] transition-all"
          >
            Send Message
          </button>
        </form>
      </article>
    </section>
  );
}
