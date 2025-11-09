import { getAllProducts } from '@/app/utils/shopify/getAllProducts'
import { MetadataRoute } from 'next'

type ChangeFrequencyType =
    | 'monthly'
    | 'yearly'
    | 'always'
    | 'hourly'
    | 'daily'
    | 'weekly'
    | 'never'
    | undefined

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
    const baseUrl = 'https://taisrugs.cz'

    const products = await getAllProducts()

    const productsSitemap = products
        ? products.map((product) => {
              return {
                  url: `${baseUrl}/eshop/${product.handle}`,
                  lastModified: new Date(),
                  changeFrequency: 'monthly' as ChangeFrequencyType,
                  priority: 0.8,
              }
          })
        : []

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 1,
        },
        {
            url: `${baseUrl}/koberce-na-zakazku`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/eshop`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/kurzy`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/kontakt`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.9,
        },
        {
            url: `${baseUrl}/gdpr`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.1,
        },
        {
            url: `${baseUrl}/obchodni-podminky`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.1,
        },
        {
            url: `${baseUrl}/reklamacni-rad`,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 0.1,
        },
        ...productsSitemap,
    ]
}
