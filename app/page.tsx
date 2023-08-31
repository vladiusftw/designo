import { createClient } from '@/prismicio'
import { HomeDocument } from '@/prismicio-types'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient()
    let page: HomeDocument | null = null
    try {
        page = await client.getSingle<HomeDocument>('home')
    } catch (e) {}

    return {
        title: page?.data?.meta_title?.toString() ?? '',
        description: page?.data?.meta_description?.toString() ?? '',
        openGraph: {
            title: page?.data?.meta_title?.toString() ?? '',
            description: page?.data?.meta_description?.toString() ?? '',
        },
    }
}

export default async function Home() {
    const client = createClient()
    let page: HomeDocument | null = null
    try {
        page = await client.getSingle<HomeDocument>('home')
    } catch (e) {
        redirect('/404')
    }

    return (
        <div className="flex flex-col gap-[120px] lg:gap-[160px] pb-[160px]">
            <SliceZone slices={page.data.slices} components={components} />
        </div>
    )
}
