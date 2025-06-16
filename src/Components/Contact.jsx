import { Mail, Phone, MapPin } from "lucide-react";

export default function ContactSection() {
  return (
    <>
      <section
        id="projects"
        className="py-20 px-4 text-white"
        style={{ backgroundColor: "#1F252E" }}
      >
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Get In <span className="text-orange-500">Touch</span>
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            {/* Left Info Panel */}
            <div>
              <h3 className="text-2xl font-bold mb-6">Let's work together</h3>
              <p className="text-gray-300 mb-8">
                I'm always interested in new opportunities and exciting
                projects. Feel free to reach out if you'd like to collaborate!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <Mail className="w-6 h-6 text-orange-500" />
                  <a
                    href="mailto:nanda0311.dev@gmail.com"
                    className="text-gray-300 hover:text-orange-400 transition"
                  >
                    nandu3112002@gmail.com
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <Phone className="w-6 h-6 text-orange-500" />
                  <a
                    href="tel:+919876543210"
                    className="text-gray-300 hover:text-orange-400 transition"
                  >
                    +91 9347521480
                  </a>
                </div>
                <div className="flex items-center space-x-4">
                  <MapPin className="w-6 h-6 text-orange-500" />
                  <span className="text-gray-300">Tirupati,India</span>
                </div>
              </div>
            </div>

            {/* Right Contact Form */}
            <form
              action="https://formspree.io/f/yourFormID"
              method="POST"
              className="space-y-6"
            >
              <div>
                <label htmlFor="name" className="sr-only">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="Your Name"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="email" className="sr-only">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Your Email"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors duration-300"
                />
              </div>
              <div>
                <label htmlFor="message" className="sr-only">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  placeholder="Your Message"
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-orange-500 transition-colors duration-300 resize-none"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-orange-500 hover:bg-orange-600 text-white py-3 rounded-lg font-semibold transition-colors duration-300"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 border-t border-gray-800 bg-gray-900 text-white">
        <div className="max-w-6xl mx-auto text-center">
          <p className="text-gray-400">
            © 2024 Dharalingam Nandakishore. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
