import About from '@/components/Sections/Home/About'
import Hero from '@/components/Sections/Home/Hero'
import { getFavoriteProducts } from '@/utils/shopify/products'

export default async function Home() {
    const products = await getFavoriteProducts()
    console.log(products)

    return (
        <div className='w-full'>
            <Hero></Hero>

            <About></About>
        </div>
    )
}
