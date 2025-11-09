import type { Metadata } from 'next'
import './admin.css'

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

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return <>{children}</>
}
