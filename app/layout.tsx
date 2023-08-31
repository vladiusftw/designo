import Header from '@/components/layout/header'
import './globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import Footer from '@/components/layout/footer'
import { createClient } from '@/prismicio'
import { Content } from '@prismicio/client'
import { NavigationDocument } from '@/prismicio-types'
import { redirect } from 'next/navigation'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
    title: 'Create Next App',
    description: 'Generated by create next app',
}

export default async function RootLayout({
    children,
}: {
    children: React.ReactNode
}) {
    const client = createClient()
    let nav: NavigationDocument | null = null
    try {
        nav = await client.getSingle<Content.NavigationDocument>('navigation')
    } catch (e) {
        redirect('/404')
    }

    return (
        <html lang="en">
            <body className="bg-white">
                <Header
                    headerLogo={nav?.data?.headerlogo}
                    links={nav?.data?.navlinks}
                />
                <div className="flex flex-col items-center justify-between pt-[120px] md:pt-[160px] min-h-screen">
                    <div className="max-w-[1300px] w-full">{children}</div>
                    <Footer
                        footerLogo={nav?.data?.footerlogo}
                        links={nav?.data?.navlinks}
                        contacts={nav?.data?.footercontacts}
                        locs={nav?.data?.footerlocations}
                        socials={nav?.data?.footersocials}
                    />
                </div>
            </body>
        </html>
    )
}
