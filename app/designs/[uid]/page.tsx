import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { Content } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import { Metadata } from 'next'
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
    const page = await client.getByUID('services', params?.uid)

    return {
        title: page.data.meta_title,
        description: page.data.meta_description,
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
    const page = await client.getByUID<Content.ServicesDocument>(
        'services',
        uid
    )
    return (
        <div className="flex flex-col gap-[120px] lg:gap-[160px] pb-[160px]">
            <SliceZone slices={page?.data?.slices} components={components} />
        </div>
    )
}

export default page
