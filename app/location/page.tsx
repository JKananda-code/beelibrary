import React from 'react'
import Image from 'next/image'

function Location() {
  return (
 <main className="container mx-auto py-10">
    <h1 className="text-3xl font-bold text-center">Our Location</h1>
    <h2 className="text-lg font-bold text-center mt-4">Nairobi Central Business District (CBD)</h2>
    <p className="text-lg font-bold  text-center mt-4 mb-4">Next to Tea Room Guest House</p>
   <div className='flex justify-center'>
   <Image
        src="/CBD-Image.jpeg"
        alt='Nairobi Central'
        width={600}
        height={300}
        priority
         />
    </div>
  </main>
  )
}

export default Location