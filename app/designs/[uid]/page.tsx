import { createClient } from '@/prismicio'
import { ServicesDocument } from '@/prismicio-types'
import { components } from '@/slices'
import { SliceZone } from '@prismicio/react'
import { Metadata } from 'next'
import { redirect } from 'next/navigation'
import React from 'react'

type Params = { uid: string }

type Props = {
    params: Params
}

export async function generateMetadata({
    params,
}: {
    params: Params
}): Promise<Metadata> {
    const client = createClient()
    let page: ServicesDocument | null = null
    try {
        page = await client?.getByUID('services', params?.uid).catch()
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

export async function generateStaticParams() {
    const client = createClient()
    const pages = await client.getAllByType('services')

    return pages.map((page) => {
        return { uid: page.uid }
    })
}

const page = async ({ params }: Props) => {
    const { uid } = params
    const client = createClient()
    let page: ServicesDocument | null = null
    try {
        page = await client.getByUID<ServicesDocument>('services', uid)
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
