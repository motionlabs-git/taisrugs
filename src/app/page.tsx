import About from '@/components/Sections/Home/About/About'

import FavouriteProducts from '@/components/Sections/Home/FavoutiteProducts/FavouriteProducts'
import Hero from '@/components/Sections/Home/Hero'
import TransitionProvider from '@/components/Sections/Home/TransitionProvider'

export default function Home() {
    return (
        <div className='w-full'>
            <Hero></Hero>

            <TransitionProvider>
                <>
                    <About />
                    <FavouriteProducts />
                </>
            </TransitionProvider>
        </div>
    )
}
