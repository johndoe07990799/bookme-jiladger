export default function Experience() {
  return (
    <main className="bg-[#f0f2f5] min-h-screen font-sans p-6 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold text-[#003580] mb-12 text-center">
        My Professional Experience
      </h1>

      <div className="relative border-l-4 border-[#003580] ml-6">
        {/* Experience 1 */}
        <div className="mb-12 ml-6 relative">
          <div className="absolute -left-8 top-0 w-6 h-6 bg-[#003580] rounded-full border-4 border-white"></div>
          <h2 className="text-2xl font-bold text-[#003580]">
            Yaolja Cloud Solution X Acuity
          </h2>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Senior Business Development Manager — June 2021 (4 Years)
          </h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1">
            <li>Scaled customer base from 200 to 500+ within a short period, demonstrating strong client engagement and retention strategies.</li>
            <li>Captured a 40% market share, establishing the company as a market leader in Maldives for cloud-based hospitality solutions.</li>
            <li>Conducted multiple webinars to educate clients, enhance product adoption, and boost brand visibility across the region.</li>
            <li>Spearheaded lead generation through strategic cold calls, direct visits, and leveraging client referrals, leading to a consistent pipeline of qualified prospects.</li>
          </ul>
        </div>

        {/* Experience 2 */}
        <div className="mb-12 ml-6 relative">
          <div className="absolute -left-8 top-0 w-6 h-6 bg-[#003580] rounded-full border-4 border-white"></div>
          <h2 className="text-2xl font-bold text-[#003580]">
            Nilons Enterprises Pvt Ltd
          </h2>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Sales Executive — July 2017 to December 2019 (2 years 6 months)
          </h3>
          <ul className="text-gray-700 list-disc list-inside space-y-1">
            <li>Successfully expanded retail and distribution network, resulting in a 15% increase in regional sales and improved product availability across key markets.</li>
          </ul>
        </div>

        {/* Experience 3 */}
        <div className="mb-12 ml-6 relative">
          <div className="absolute -left-8 top-0 w-6 h-6 bg-[#003580] rounded-full border-4 border-white"></div>
          <h2 className="text-2xl font-bold text-[#003580]">
            Hindustan Unilever Pvt Ltd
          </h2>
          <h3 className="text-lg font-semibold text-gray-700 mb-2">
            Sales & Marketing Executive — January 2017 to June 2017 (6 months)
          </h3>
          {/* No bullet points for this short role */}
        </div>
      </div>
    </main>
  );
}
