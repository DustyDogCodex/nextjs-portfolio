'use client'
import Hero from './components/Hero'
import NavBar from './components/Navbar'
import { useState } from 'react'

export default function Home() {
    //using state to identify the current page the user is browser
    const [ currentPage, setCurrentPage ] = useState<string>('home')

    return (
        <main className="flex min-h-screen flex-col items-center bg-black text-white mx-auto">
            <NavBar 
                page='N/A' 
                currentPage={currentPage} 
                setCurrentPage={setCurrentPage}
            />
            <div className='container mt-24'>
                <Hero />
            </div>
        </main>
    )
}
