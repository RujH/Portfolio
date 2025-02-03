export default function Contact() {
    return (
      <div id="contact" className="grid gap-4 max-w-4xl text-left pb-8 px-4">
        <div>
          <h1 className="text-6xl font-black text-white">
            LET'S WORK
          </h1>
          <h1 className="text-6xl font-black text-gray-800 mt-2">
            TOGETHER
          </h1>
        </div>

        <div className="grid grid-cols-1 gap-4 mt-8">
          <div className="grid grid-cols-2 gap-4">
            <input
              type="text"
              placeholder="Name"
              className="rounded-lg p-2 bg-[rgba(255,255,255,0.03)] text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
            <input
              type="email"
              placeholder="your@email.com"
              className="rounded-lg p-2 bg-[rgba(255,255,255,0.03)] text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
            />
          </div>
          <textarea
            placeholder="Message"
            rows={4}
            className="rounded-lg p-2 bg-[rgba(255,255,255,0.03)] text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
          <button className="bg-orange-500 text-white font-bold py-2 px-4 rounded-lg hover:bg-orange-600 transition duration-200">
            Send Message
          </button>
        </div>
      </div>
    );
  }