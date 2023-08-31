import { createClient } from '@/prismicio'
import { LocDocument } from '@/prismicio-types'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import React from 'react'

type Props = {}

export async function generateMetadata(): Promise<Metadata> {
    const client = createClient()
    let page: LocDocument | null = null
    try {
        page = await client.getSingle<LocDocument>('loc')
    } catch (e) {}

    return {
        title: page?.data?.meta_title?.toString() ?? '',
        description: page?.data?.meta_description?.toString() ?? '',
        keywords: [
            'web development',
            'application development',
            'graphic design',
        ],
        openGraph: {
            type: 'website',
            url: process.env.VERCEL_URL ?? '',
            title: page?.data?.meta_title?.toString() ?? '',
            description: page?.data?.meta_description?.toString() ?? '',
            images: [
                {
                    url: page?.data?.meta_image?.url ?? '',
                    alt: page?.data?.meta_image?.alt ?? '',
                },
            ],
        },
    }
}

const page = async (props: Props) => {
    const client = createClient()
    let page: LocDocument | null = null
    try {
        page = await client.getSingle<LocDocument>('loc')
    } catch (e) {
        redirect('/404')
    }
    return (
        <div className="flex flex-col gap-[120px] lg:gap-[160px] pb-[160px]">
            <SliceZone slices={page?.data?.slices} components={components} />
        </div>
    )
}

export default page
