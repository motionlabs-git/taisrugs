import About from '@/components/Sections/Home/About'
import FavouriteProducts from '@/components/Sections/Home/FavouriteProducts'
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
        </div>
    )
}
