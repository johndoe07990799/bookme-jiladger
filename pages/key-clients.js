import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';

const clients = [
  { name: 'Arena Hotels', logo: '/logos/Arena-logo-120x120-1.png', url: 'https://arenabeachmaldives.com//' },
  { name: 'Client Two', logo: '/logos/client2.png', url: '/clients/client-two' },
  { name: 'Client Three', logo: '/logos/client3.png', url: '/clients/client-three' },
  { name: 'Client Four', logo: '/logos/client4.png', url: '/clients/client-four' },
  { name: 'Client Five', logo: '/logos/client5.png', url: '/clients/client-five' },
  { name: 'Client Six', logo: '/logos/client6.png', url: '/clients/client-six' },
  { name: 'Client Seven', logo: '/logos/client7.png', url: '/clients/client-seven' },
  { name: 'Client Eight', logo: '/logos/client8.png', url: '/clients/client-eight' },
];

export default function KeyClients() {
  return (
    <>
      <Head>
        <title>Key Clients | Mohammad Jiladger</title>
        <meta name="description" content="Maintained portfolio of 400+ clients including key clients" />
      </Head>

      <main className="bg-[#f0f2f5] min-h-screen font-sans p-6">
        <section className="max-w-5xl mx-auto">
          <h1 className="text-3xl font-bold text-[#003580] mb-6">
            Maintained portfolio of 400+ clients including some key clients below
          </h1>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-8">
            {clients.map((client) => (
              <Link
                key={client.name}
                href={client.url}
                aria-label={`Visit ${client.name} page`}
                title={client.name}
              >
                <div
                  className="w-40 h-40 flex items-center justify-center bg-white rounded-lg shadow-md transition-transform duration-300 hover:scale-125 cursor-pointer"
                >
                  <Image
                    src={client.logo}
                    alt={client.name}
                    width={140}
                    height={140}
                    className="object-contain"
                    priority={true}
                  />
                </div>
              </Link>
            ))}
          </div>
        </section>
      </main>
    </>
  );
}
