export default function Band263Website() {
  return (
    <div className="min-h-screen bg-black text-white font-sans">
      {/* Hero Section */}
      <section
        className="relative h-screen flex items-center justify-center text-center bg-cover bg-center"
        style={{
          backgroundImage:
            "url('/img_2231.png')",
        }}
      >
        <div className="absolute inset-0 bg-black/70"></div>

        <div className="relative z-10 px-6 max-w-4xl">
          <img
            src="/BAND263 NEW BLACK LOGO.png"
            alt="The Band 263 Logo"
            className="w-32 md:w-40 mx-auto mb-6"
          />
          <p className="uppercase tracking-[0.4em] text-sm text-gray-300 mb-4">
            Dallas • Zimbabwean Live Band
          </p>

          <h1 className="text-6xl md:text-8xl font-black mb-6 tracking-tight">
            THE BAND 263
          </h1>

          <p className="text-lg md:text-2xl text-gray-200 leading-relaxed max-w-3xl mx-auto mb-8">
            Bringing Urban Grooves classics and live Zimbabwean energy to stages across Texas and beyond.
          </p>

          <div className="flex flex-wrap gap-4 justify-center">
            <a
              href="mailto:theband263@gmail.com?subject=Booking Inquiry - The Band 263"
              className="bg-white text-black px-8 py-4 rounded-2xl text-lg font-semibold hover:scale-105 transition inline-block"
            >
              Book The Band
            </a>

            <a
              href="https://www.youtube.com/@TheBand263"
              target="_blank"
              rel="noopener noreferrer"
              className="border border-white px-8 py-4 rounded-2xl text-lg font-semibold hover:bg-white hover:text-black transition inline-block"
            >
              Watch Performances
            </a>
          </div>
        </div>
      </section>

      {/* About */}
      <section className="py-24 px-6 max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <div>
          <p className="text-yellow-400 uppercase tracking-[0.3em] mb-4">
            About Us
          </p>

          <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
            More Than A Band.
          </h2>

          <p className="text-gray-300 text-lg leading-8 mb-6">
            The Band 263 is a Dallas-based Zimbabwean live music group blending Urban Grooves, Afro Fusion, Gospel, and contemporary African sounds into unforgettable live performances.
          </p>

          <p className="text-gray-400 text-lg leading-8">
            From weddings and concerts to church events and festivals, our mission is to connect cultures through music, energy, and authentic live experiences.
          </p>
        </div>

        <div>
          <img
            src="/photo-1501386761578-eac5c94b800a.jpeg"
            alt="Live performance"
            className="rounded-3xl shadow-2xl w-full object-cover h-[500px]"
          />
        </div>
      </section>

      <section className="py-24 px-6 bg-black">
  <div className="max-w-6xl mx-auto">

    <div className="text-center mb-16">
      <p className="uppercase tracking-[0.3em] text-yellow-400 mb-4">
        Meet The Band
      </p>

      <h2 className="text-4xl md:text-5xl font-bold">
        The Faces Behind The Music
      </h2>
    </div>

    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10">

      {/* Dumisani */}
      <div className="bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-105 hover:shadow-yellow-500/20 hover:shadow-2xl transition duration-300">
        <img
          src="/dumi.png"
          alt="Dumisani Manyange"
          className="w-full h-80 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">
            Dumisani Manyange
          </h3>

          <p className="text-yellow-400">
            Piano
          </p>
        </div>
      </div>

      {/* Tendekai */}
      <div className="bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-105 hover:shadow-yellow-500/20 hover:shadow-2xl transition duration-300">
        <img
          src="/Tende.jpg"
          alt="Tendekai Mano"
          className="w-full h-80 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">
            Tendekai Mano
          </h3>

          <p className="text-yellow-400">
            Bass
          </p>
        </div>
      </div>

      {/* Nigel */}
      <div className="bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-105 hover:shadow-yellow-500/20 hover:shadow-2xl transition duration-300">
        <img
          src="/tepaz.png"
          alt="Nigel Kutepa"
          className="w-full h-80 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">
            Nigel Kutepa
          </h3>

          <p className="text-yellow-400">
            Guitar
          </p>
        </div>
      </div>

      {/* Simbarashe */}
      <div className="bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-105 hover:shadow-yellow-500/20 hover:shadow-2xl transition duration-300">
        <img
          src="/bond.png"
          alt="Simbarashe Dembedza"
          className="w-full h-80 object-cover"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">
            Simbarashe Dembedza
          </h3>

          <p className="text-yellow-400">
            Lead Drummer
          </p>
        </div>
      </div>

      {/* Judah */}
      <div className="bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-105 hover:shadow-yellow-500/20 hover:shadow-2xl transition duration-300">
        <img
          src="/Judah Nortey.jpg"
          alt="Judah M."
          className="w-full h-80 object-cover object-center"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">
            Judah Nortey
          </h3>

          <p className="text-yellow-400">
            Drums
          </p>
        </div>
      </div>

      {/* MacDonald */}
      <div className="bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-105 hover:shadow-yellow-500/20 hover:shadow-2xl transition duration-300">
        <img
          src="/Chandoz.png"
          alt="MacDonald Charles"
          className="w-full h-80 object-cover object-center"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">
            MacDonald Charles
          </h3>

          <p className="text-yellow-400">
            Audio Engineer
          </p>
        </div>
      </div>

      {/* Adonijah */}
      <div className="bg-zinc-950 rounded-3xl overflow-hidden border border-zinc-800 hover:scale-105 hover:shadow-yellow-500/20 hover:shadow-2xl transition duration-300">
        <img
          src="/Ado.PNG"
          alt="Adonijah Manyange"
          className="w-full h-80 object-cover object-center"
        />

        <div className="p-6">
          <h3 className="text-2xl font-bold mb-2">
            Adonijah Manyange
          </h3>

          <p className="text-yellow-400">
            Media Management
          </p>
        </div>
      </div>

    </div>
  </div>
</section>

      {/* Services */}
      <section className="py-24 px-6 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <p className="uppercase tracking-[0.3em] text-yellow-400 mb-4">
              Events
            </p>

            <h2 className="text-4xl md:text-5xl font-bold">
              Available For
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: 'Concerts & Festivals',
                desc: 'High-energy live performances for festivals, nightlife, and entertainment events.',
              },
              {
                title: 'Weddings & Private Events',
                desc: 'Elegant live music experiences tailored for unforgettable celebrations.',
              },
              {
                title: 'Church & Community Events',
                desc: 'Spirit-filled and uplifting performances for ministries and gatherings.',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-black border border-zinc-800 rounded-3xl p-8 hover:border-yellow-400 transition"
              >
                <h3 className="text-2xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-400 leading-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Socials */}
      <section className="py-24 px-6 max-w-5xl mx-auto text-center">
        <p className="uppercase tracking-[0.3em] text-yellow-400 mb-4">
          Connect
        </p>

        <h2 className="text-4xl md:text-5xl font-bold mb-10">
          Follow The Journey
        </h2>

        <div className="flex flex-wrap justify-center gap-6 text-lg">
          <a
            href="https://www.instagram.com/theband263?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
          >
            Instagram
          </a>

          <a
            href="https://www.youtube.com/@TheBand263"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
          >
            YouTube
          </a>

          <a
            href="https://www.facebook.com/profile.php?id=61561458203302"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
          >
            Facebook
          </a>

          <a
            href="https://www.tiktok.com/@the_band_263?is_from_webapp=1&sender_device=pc"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-zinc-700 px-8 py-4 rounded-2xl hover:bg-white hover:text-black transition"
          >
            TikTok
          </a>
        </div>
      </section>

      {/* Contact */}
      <section className="py-24 px-6 bg-zinc-950 text-center">
        <div className="max-w-3xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-yellow-400 mb-4">
            Booking
          </p>

          <h2 className="text-4xl md:text-6xl font-bold mb-6">
            Let’s Bring The Energy To Your Event
          </h2>

          <p className="text-gray-400 text-lg leading-8 mb-10">
            Available for concerts, festivals, weddings, church events, and private bookings across the United States.
          </p>

          <a
            href="mailto:theband263@gmail.com?subject=Booking Inquiry - The Band 263"
            className="bg-white text-black px-10 py-5 rounded-2xl text-lg font-bold hover:scale-105 transition inline-block"
          >
            Contact The Band
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-8 px-6 text-center text-gray-500">
        <p>© 2026 The Band 263. All Rights Reserved.</p>
      </footer>
    </div>
  );
}
