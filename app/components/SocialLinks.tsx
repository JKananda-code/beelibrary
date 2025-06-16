'use client'
import Link from 'next/link'

function SocialLinks(){
    return(
        <div className="flex gap-4 justify-center bg-blue-500">
            <Link href="https://facebook.com/yourhandle" target="_blank" rel="nonopener noreferrer">Facebook</Link>
            <Link href="https://twitter.com/yourhandle" target="_blank" rel="nonopener noreferrer">Twitter</Link>
            <Link href="https://instagram.com/yourhandle"target="_blank" rel="nonopener noreferrer">Instagram</Link>
            <Link href="https://instagram.com/yourhandle"target="_blank" rel="nonopener noreferrer">Tiktok</Link>
        </div>
    )
}
export default SocialLinks