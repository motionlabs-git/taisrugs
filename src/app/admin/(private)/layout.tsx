import Navbar from '../components/Navbar/Navbar'
import Sidebar from '../components/Sidebar/Sidebar'
import Main from '../components/Main/Main'

export default function PrivateAdminLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    return (
        <html lang='cs'>
            <body
                className={`antialiased w-screen h-screen overflow-hidden flex flex-col bg-stone-300 dark:bg-stone-950 text-stone-700 dark:text-stone-300
                  
                `}
            >
                <Navbar />

                <div className='flex-1 flex flex-row overflow-hidden'>
                    <Sidebar />

                    <Main>{children}</Main>
                </div>
            </body>
        </html>
    )
}
