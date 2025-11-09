import About from '@/app/(front)/components/Sections/Home/About/About'
import FavouriteProducts from '@/app/(front)/components/Sections/Home/FavoutiteProducts/FavouriteProducts'
import Hero from '@/app/(front)/components/Sections/Home/Hero'
import PageBackground from '@/app/(front)/components/Sections/Home/PageBackground'
import { getCollectionProducts } from '@/app/utils/shopify/getCollectionProducts'

export default async function Home() {
    const favouriteProducts = await getCollectionProducts(502318891295)

    return (
        <div className='w-full'>
            <Hero></Hero>

            <PageBackground>
                <>
                    <About />
                    <FavouriteProducts products={favouriteProducts} />
                </>
            </PageBackground>
        </div>
    )
}
