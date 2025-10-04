import { MetadataRoute } from 'next'

export default function sitemap(): MetadataRoute.Sitemap {
    const baseUrl = 'https://taisrugs.cz'

    // const products = products.map((project) => {
    //     return {
    //         url: `${baseUrl}/projects/${project.slug}`,
    //         lastModified: new Date(),
    //         changeFrequency: 'monthly' as ChangeFrequencyType,
    //         priority: 0.7,
    //     }
    // })

    return [
        {
            url: baseUrl,
            lastModified: new Date(),
            changeFrequency: 'yearly',
            priority: 1,
        },
        {
            url: `${baseUrl}/koberce-na-zakazku`,
            lastModified: new Date(),
            changeFrequency: 'monthly',
            priority: 0.8,
        },
        // ...products,
    ]
}
