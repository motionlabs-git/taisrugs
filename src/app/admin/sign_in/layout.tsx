export default function AdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='cs' className='dark'>
            <body
                className={`antialiased w-screen h-screen overflow-x-hidden bg-stone-950 text-stone-300
                   
                `}
            >
                {children}
            </body>
        </html>
    )
}
