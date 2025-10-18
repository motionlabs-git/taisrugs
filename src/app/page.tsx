import About from '@/components/Sections/Home/About'
import Contact from '@/components/Sections/Home/Contact'
import FavouriteProducts from '@/components/Sections/Home/FavoutiteProducts/FavouriteProducts'
import Hero from '@/components/Sections/Home/Hero'
import TransitionProvider from '@/components/Sections/Home/TransitionProvider'
// import { getFavoriteProducts } from '@/utils/shopify/products'

export default async function Home() {
    // const products = await getFavoriteProducts()
    // console.log(products)

    return (
        <div className='w-full'>
            <Hero></Hero>

            <TransitionProvider>
                <>
                    <About />
                    <FavouriteProducts />
                </>
            </TransitionProvider>
            <Contact />
        </div>
    )
}
