import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Head>
        <title>BookMe: Mohammad Jiladger | Business Development Manager Maldives</title>
        <meta
          name="description"
          content="Experienced Business Development Manager with strong professional network in Maldives hospitality."
        />
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
          <h1 className="text-4xl font-bold mt-4">Mohammad Jiladger</h1>
          <p className="text-xl mt-1 font-semibold">Business Development Manager</p>

          {/* Navigation Buttons */}
          <nav className="mt-6 flex justify-center space-x-4">
            <Link href="/experience" legacyBehavior>
              <a className="px-6 py-2 bg-white text-[#003580] rounded-full shadow-md hover:bg-blue-100 transition cursor-pointer">
                Experience
              </a>
            </Link>

            <Link href="/key-clients" legacyBehavior>
              <a className="px-6 py-2 bg-white text-[#003580] rounded-full shadow-md hover:bg-blue-100 transition cursor-pointer">
                Key Clients
              </a>
            </Link>

            <Link href="/about-me" legacyBehavior>
              <a className="px-6 py-2 bg-white text-[#003580] rounded-full shadow-md hover:bg-blue-100 transition cursor-pointer">
                About Me
              </a>
            </Link>
          </nav>

          <p className="mt-4 text-blue-100 text-lg">
            Strong professional relationships with 400+ hotels in Maldives • 4+ years local expertise • Market Specialist
          </p>
        </section>

        {/* Content Section */}
        <section className="max-w-4xl mx-auto p-6">
          {/* Listing */}
          <div className="bg-white rounded-2xl p-6 my-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#003580]">Listing Details</h2>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>Location:</strong> Male’, Maldives
              </li>
              <li>
                <strong>Professional Network:</strong> 400+ hotels
              </li>
              <li>
                <strong>Travel Flexibility:</strong> Up to 50% travel
              </li>
            </ul>
          </div>

          {/* Skills */}
          <div className="bg-white rounded-2xl p-6 my-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#003580]">Skills & Expertise</h2>
            <div className="grid grid-cols-2 gap-4 text-gray-700">
              <div>Market Penetration Strategy</div>
              <div>CRM: HubSpot & Zoho</div>
              <div>Webinar & Training Hosting</div>
              <div>B2B Sales & Objection Handling</div>
              <div>Data-driven Decision Making</div>
              <div>Strong Communication & Negotiation</div>
              <div>Solution-oriented & Self-directed</div>
              <div>Event & Partner Relationship Management</div>
            </div>
          </div>

          {/* Languages */}
          <div className="bg-white rounded-2xl p-6 my-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#003580]">Languages</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              <li>English (Fluent)</li>
              <li>Hindi (Fluent)</li>
              <li>Gujarati (Fluent)</li>
            </ul>
          </div>

          {/* Reviews & Metrics */}
          <div className="bg-white rounded-2xl p-6 my-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#003580]">Performance Highlights</h2>
            <ul className="space-y-2 text-gray-700">
              <li>30% YoY client acquisition growth</li>
              <li>40% cloud market share in Maldives</li>
              <li>20+ training webinars hosted</li>
            </ul>
          </div>

          {/* Why Me */}
          <div className="bg-white rounded-2xl p-6 my-6 shadow-md">
            <h2 className="text-2xl font-semibold mb-4 text-[#003580]">Why Work With Me?</h2>
            <p className="text-gray-700">
              I bring 4+ years of business development expertise in the Maldives hospitality sector,
              supported by a strong professional network and a data-driven, solution-oriented approach.
              I am committed to driving growth, nurturing partnerships, and representing Booking.com with professionalism and dedication.
            </p>
          </div>

          {/* Contact CTA */}
          <div className="text-center mt-8">
            <a
              href="mailto:jiladger.9@gmail.com"
              className="inline-block px-8 py-4 bg-[#003580] text-white rounded-full shadow-lg hover:bg-blue-800 transition"
            >
              Get in Touch
            </a>
          </div>
        </section>

        {/* WhatsApp Widget Script */}
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
      </main>
    </>
  );
}
