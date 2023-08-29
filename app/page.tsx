import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { Content, asText } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import { Metadata } from 'next'

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient()
    const page = await client.getSingle<Content.HomeDocument>('home')

    return {
        title: page?.data?.meta_title?.toString(),
        description: page?.data?.meta_description?.toString(),
        openGraph: {
            title: page.data.meta_title?.toString(),
            description: page?.data?.meta_description?.toString(),
        },
    }
}

export default async function Home() {
    const client = createClient()
    const page = await client.getSingle<Content.HomeDocument>('home')
    return (
        <div className="flex flex-col gap-[120px] lg:gap-[160px] pb-[160px]">
            <SliceZone slices={page.data.slices} components={components} />
        </div>
    )
}
