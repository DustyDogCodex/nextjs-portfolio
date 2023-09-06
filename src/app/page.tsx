import Hero from './components/Hero'

export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center bg-black text-white mx-auto">
            <div className='container'>
                <Hero />
            </div>
        </main>
    )
}
