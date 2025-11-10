import FloatingSphere from "./FloatingSphere";

export default function Contact() {
  return (
    <section id="contact" className="w-full py-20 bg-[#1F252E]">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

        {/* LEFT SIDE */}
        <div>
          <h1 className="text-4xl font-bold mb-4">
            Get In <span className="text-[#f9532d]">Touch</span>
          </h1>

          <p className="text-gray-300 mb-6 leading-relaxed">
            I'm always interested in new opportunities and exciting collaborations.
            Feel free to reach out.
          </p>

          <form className="flex flex-col gap-4">
            <input
              type="text"
              placeholder="Your Name"
              className="bg-[#111a22] border border-[#2c3a45] p-3 rounded-lg text-white focus:outline-none focus:border-[#f9532d]"
            />
            <input
              type="email"
              placeholder="Your Email"
              className="bg-[#111a22] border border-[#2c3a45] p-3 rounded-lg text-white focus:outline-none focus:border-[#f9532d]"
            />
            <textarea
              placeholder="Your Message"
              rows="4"
              className="bg-[#111a22] border border-[#2c3a45] p-3 rounded-lg text-white focus:outline-none focus:border-[#f9532d]"
            ></textarea>

            <button className="bg-[#f9532d] text-white font-semibold py-3 rounded-lg hover:opacity-90 transition">
              Send Message
            </button>
          </form>
        </div>

        {/* RIGHT SIDE */}
        <div className="w-full h-[350px] md:h-[450px] rounded-xl overflow-hidden">
          <FloatingSphere />
        </div>

      </div>
    </section>
  );
}
