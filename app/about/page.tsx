import Image from "next/image";
export default function About() {
  return (
    <div>
      <main className="container mx-auto py-10 px-4">
        <div className="">
        <div className="flex items-center justify-center">  
        <Image
          src="/The-Bee.png"
          alt="Book Ride Image"
          height="1000"
          width="500"
        />
        </div>
        </div>
       <section className="mt-10 text-center"> 
        <div className="text-lg text-center text-orange-500 mt-4 max-w-3xl mx-auto">
            When readers place orders from distant regions—be it <span className="italic">Mombasa</span>, <span className="italic">Kisumu</span>, <span className="italic">Mandera</span>, or <span className="italic">Turkana</span>—we do the legwork. We gather their requested titles locally and consolidate them at our central hub here in Nairobi.
        </div>
          <div className="text-lg text-center text-orange-500 mt-4 max-w-3xl mx-auto">
            Customers have the convenience of picking up their books at our shop, or choosing to have them sent, saving a ton of time!
         </div>  
        </section>
        {/* Vision Section */}
        <section className="mt-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">VISION</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            To create a beloved haven where imagination flourishes, diversity is celebrated, and every reader—young or old—embarks on meaningful journeys of self-discovery. A place where the love of literature spreads like wings on the breeze, making every visitor feel truly at home.
          </p>
        </section>
        {/* Mission Section */}
        <section className="mt-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">MISSION</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            To spark curiosity and transformation through the magic of books, offering a warm and welcoming space that connects people through rich storytelling, personalized service, and an inspiring selection of literature that fosters growth and wonder.
          </p>
        </section>
        {/* Values Section */}
        <section className="mt-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">VALUES</h2>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <div className="p-4 bg-white shadow-md rounded-md">
              <h3 className="text-xl font-bold text-cyan-600">Accessibility</h3>
              <p className="text-gray-600 mt-2">A bookshop for everyone. We are committed to inclusivity, ensuring that every reader feels valued and at home.</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-md">
              <h3 className="text-xl font-bold text-cyan-600">Inspiration</h3>
              <p className="text-gray-600 mt-2">Each book, each visit, is an opportunity to dream, reflect, and grow. We aim to spark new ideas and make every page feel like the beginning of something extraordinary.</p>
            </div>
            <div className="p-4 bg-white shadow-md rounded-md">
              <h3 className="text-xl font-bold text-cyan-600">Community</h3>
              <p className="text-gray-600 mt-2">Stories connect us. We cultivate a space where readers, writers, and thinkers come together, bound by a shared love for literature and the transformative power of storytelling.</p>
            </div>
          </div>
        </section>
        {/* About Us Section */}
        <section className="mt-10 text-center">
          <h2 className="text-3xl font-semibold text-gray-800">ABOUT US</h2>
          <p className="text-lg text-gray-600 mt-4 max-w-3xl mx-auto">
            The vision for this bookshop began with a simple yet magical moment—watching my children’s eyes light up as they discovered my favorite books. That joy, that spark, inspired a dream: to create a place where wonder is rediscovered, where children find their first adventure, and where adults reconnect with stories that move the soul.
          </p>
          <p className="text-xl font-semibold text-cyan-500 mt-6">
            Welcome to a world of endless possibilities—welcome to The Literary Bee.
         </p>
        </section>
      </main>
    </div>
  );
}
 
