import type { Metadata } from 'next'
import './admin.css'
import localFont from 'next/font/local'

export const metadata: Metadata = {
    metadataBase: new URL('https://taisrugs.cz'),
    title: {
        default: 'Admin | Tais Rugs',
        template: 'Tais Rugs | %s',
    },
    robots: {
        index: false,
        follow: false,
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

const satoshiRegular = localFont({
    src: './assets/fonts/Satoshi-Regular.woff2',
    variable: '--font-satoshi-regular',
})

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='cs'>
            <body>
                <main
                    className={`w-full flex-1 flex justify-center antialiased ${satoshiRegular.className}`}
                >
                    {children}
                </main>
            </body>
        </html>
    )
}
