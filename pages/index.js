import Head from 'next/head';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>BookMe: Mohammad Jiladger | Account Manager Maldives</title>
        <meta name="description" content="400+ properties | Market Penetration Expert | Maldives-based" />
      </Head>
      <main className="bg-[#f0f2f5] min-h-screen font-sans">
        {/* Header */}
        <section className="bg-[#003580] text-white py-12 text-center shadow-md">
          <Image
            src="/profile.jpg"
            alt="Mohammad Jiladger"
            width={128}
            height={128}
            className="rounded-full mx-auto border-4 border-white shadow-lg"
          />
          <h1 className="text-4xl font-bold mt-4">BookMe: Mohammad Jiladger </h1>
          <p className="mt-2 text-blue-100 text-lg">400+ Clients Relationship • 4+ years in Maldives • Local Market Specialist</p>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto p-6">
          {/* Listing */}
          <div className="bg-white rounded-2xl p-6 my-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#003580]">🏝️ Listing Details</h2>
            <ul className="space-y-2 text-gray-700">
              <li><strong>📍 Location:</strong> Male&apos;, Maldives</li>
              <li><strong>🏘️ Partner Network:</strong> 400+ properties</li>
              <li><strong>✈️ Travel Flexibility:</strong> Up to 50% travel</li>
            </ul>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-2xl p-6 my-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#003580]">💼 Amenities & Skills</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div>✔ Market Penetration Expert</div>
              <div>✔ CRM: HubSpot &amp; Zoho</div>
              <div>✔ Webinar &amp; Demo Hosting</div>
              <div>✔ B2B Sales &amp; Objection Handling</div>
              <div>✔ Fluent in English, Hindi, Gujarati</div>
              <div>✔ Solution-Oriented &amp; Self-Directed</div>
            </div>
          </div>

          {/* Reviews */}
          <div className="bg-white rounded-2xl p-6 my-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#003580]">🌟 Reviews & Metrics</h2>
            <ul className="space-y-2 text-gray-700">
              <li>⭐ 30% YoY client acquisition growth</li>
              <li>📊 40% cloud market share in Maldives</li>
              <li>🎤 Hosted 20+ training webinars</li>
            </ul>
          </div>

          {/* Pitch */}
          <div className="bg-white rounded-2xl p-6 my-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#003580]">🧠 Why Book Me?</h2>
            <p className="text-gray-700">
              With 4 years of dedicated experience in the Maldives hospitality market, a robust network
              of 400+ property partners, and a proven record of revenue growth, I&apos;m the account manager
              you need to drive Booking.com&apos;s local success. Let&apos;s make every guest&apos;s stay effortless—together.
            </p>
          </div>

          {/* CTA */}
          <div className="text-center mt-8">
            <a
              href="mailto:jiladger.9@gmail.com"
              className="inline-block px-8 py-4 bg-[#003580] text-white rounded-full shadow-lg hover:bg-blue-800 transition"
            >
              📩 Let&apos;s Talk
            </a>
          </div>
        </section>
      </main>

      <script
        dangerouslySetInnerHTML={{
          __html: `
            (function () {
              var options = {
                whatsapp: "+919913398771",
                call_to_action: "Chat with me",
                position: "right",
              };
              var proto = document.location.protocol, host = "getbutton.io", url = proto + "//static." + host;
              var s = document.createElement('script'); s.type = 'text/javascript'; s.async = true; s.src = url + '/widget-send-button/js/init.js';
              s.onload = function () { WhWidgetSendButton.init(host, proto, options); };
              var x = document.getElementsByTagName('script')[0]; x.parentNode.insertBefore(s, x);
            })();
          `,
        }}
      />
    </>
  );
}
