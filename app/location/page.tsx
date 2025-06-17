
import Image from 'next/image'

export default function Location() {
  return (
    <div>
        <main className="container mx-auto py-10 px-4">
        <h1 className="text-4xl font-bold text-yellow-500 text-center mb-4">Our Location</h1>
        <h2 className="text-lg font-bold text-center mt-4">Nairobi Central Business District (CBD)</h2>
        <p className="text-lg font-bold  text-green-500 text-center mt-4 mb-4">Telephone: 0710 878421</p>
    <div className='flex justify-center mb-10'>
        <Image
        src="/CBD-Image.jpeg"
        alt='Nairobi Central'
        width={600}
        height={300}
        priority
         />
    </div> 
    <div>
      <p className="text-lg font-bold  text-center mt-4 mb-4">Next to Tea Room Guest House</p>
    </div> 
    <div className="text-4xl text-center italic text-green-600 mb-10">
          “Nairobi CBD: The beating heart of our bookshop logistics”
    </div>   
        <section className="max-w-4xl mx-auto space-y-6">
          <p className="text-gray-700 text-lg">
            At <span className="font-semibold text-yellow-600">The Literary Bee</span>, our location is not just a spot on the map—it’s our most valuable asset. Nestled in the heart of the <span className="font-medium">Nairobi Central Business District (CBD)</span>, we’re surrounded by Kenya’s leading publishers, distributors, and book vendors. This proximity fuels our business model and makes us the logistical bridge between great books and eager readers across the nation.
          </p>

          <p className="text-gray-700 text-lg">
            When readers place orders from distant regions—be it <span className="italic">Mombasa</span>, <span className="italic">Kisumu</span>, <span className="italic">Mandera</span>, or <span className="italic">Turkana</span>—we do the legwork. We gather their requested titles locally and consolidate them at our central hub here in Nairobi.
          </p>

          <p className="text-gray-700 text-lg">
            Customers have the convenience of picking up their books at our shop, or choosing to have them sent via <span className="font-medium">messenger, courier, or postal services</span>. The result? Our community saves countless hours of travel and transportation costs.
          </p>

          <p className="text-gray-700 text-lg">
            For this hands-on service, our pricing is simple and transparent:
          </p>

          <ul className="list-disc pl-6 text-gray-700 text-lg">
            <li>📚 Customers pay for the actual cost of the books</li>
            <li>🚚 Add applicable shipping costs (courier, post, etc.)</li>
            <li>🧾 Plus a modest <span className="font-semibold text-yellow-600">10% handling fee</span> for coordination and collection</li>
          </ul>

          <div className="text-4xl text-center italic text-bold text-yellow-700 text-lg">
            Our location gives us the power to serve booklovers across Kenya—not just with stories, but with seamless, personalized delivery.
          </div>
        </section>
      </main>
    </div>
  );
}
