import type { Metadata } from 'next'
import { Poppins, Lilita_One } from 'next/font/google'
import localFont from 'next/font/local'
import './front.css'
import Navigation from '@/app/(front)/components/Layout/Navigation/Navigation'
import Footer from '@/app/(front)/components/Layout/Footer/Footer'
import GsapProvider from '@/app/(front)/components/Layout/GsapProvider'
import { cookies } from 'next/headers'
import { getOrder } from '@/app/utils/shopify/getOrder'
import ReactLenis from 'lenis/react'
import PageTransition from '@/app/(front)/components/Layout/Navigation/PageTransition'
import CookiesBar from '@/app/(front)/components/Layout/CookiesBar'

const poppins = Poppins({
    variable: '--font-poppins',
    weight: ['400'],
    subsets: ['latin'],
})

const archivo = Lilita_One({
    variable: '--font-archivo',
    weight: ['400'],
    subsets: ['latin'],
})

const superVibes = localFont({
    src: '../assets/fonts/SuperSunday.ttf',
    variable: '--font-superVibes',
})

export const metadata: Metadata = {
    metadataBase: new URL('https://taisrugs.cz'),
    title: {
        default: 'Tais Rugs | Koberce na míru a tufting kurzy v Praze',
        template: 'Tais Rugs | %s',
    },
    description:
        'Ručně vyráběné koberce a tufting kurzy v Praze. Originální dárky a design, který promění váš domov, kancelář i nápad na jedinečný koberec',
    authors: [{ name: 'Motionlabs', url: 'https://motionlabs.cz' }],
    keywords: [],
    twitter: {
        card: 'summary_large_image',
    },
    openGraph: {
        title: 'Tais Rugs | Koberce na míru a tufting kurzy v Praze',
        description:
            'Ručně vyráběné koberce a tufting kurzy v Praze. Originální dárky a design, který promění váš domov, kancelář i nápad na jedinečný koberec',
        images: '/seo/open-graph.png',
    },
    icons: {
        icon: [
            {
                url: '/seo/favicon.ico',
                href: '/seo/favicon.ico',
            },
        ],
        apple: {
            url: '/seo/apple-touch-icon.png',
            href: '/seo/apple-touch-icon.png',
        },
    },
}

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const cookieStore = await cookies()
    const orderId = cookieStore.get('orderId')?.value

    const order = orderId ? await getOrder(orderId) : null

    return (
        <html lang='cs'>
            <ReactLenis
                root
                options={{
                    lerp: 0.1,
                    duration: 1.5,
                    autoResize: true,
                    syncTouch: false,
                    touchMultiplier: 0,
                }}
            >
                <GsapProvider>
                    <body
                        className={`${poppins.className} ${archivo.variable} ${superVibes.variable} bg-black antialiased w-full min-h-[100lvh] overflow-x-hidden duration-200 transition-colors`}
                    >
                        <Navigation order={order} />
                        <CookiesBar />
                        <PageTransition></PageTransition>

                        <main className='w-full flex-1 flex justify-center'>
                            {children}
                        </main>

                        <Footer />
                    </body>
                </GsapProvider>
            </ReactLenis>
        </html>
    )
}
