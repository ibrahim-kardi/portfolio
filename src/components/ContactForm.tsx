export default function ContactForm() {
  return (
    <section id="contact" className="py-10 bg-gray-200">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-center mb-6">Contact Me</h2>
        <form className="max-w-lg mx-auto bg-white p-6 rounded-lg shadow">
          <input
            type="text"
            placeholder="Your Name"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          />
          <textarea
            placeholder="Your Message"
            className="w-full mb-4 p-2 border border-gray-300 rounded"
          ></textarea>
          <button
            type="submit"
            className="w-full bg-purple-500 text-white py-2 rounded"
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
