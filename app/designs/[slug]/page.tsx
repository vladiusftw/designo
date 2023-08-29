import { createClient } from '@/prismicio'
import { components } from '@/slices'
import { Content } from '@prismicio/client'
import { SliceZone } from '@prismicio/react'
import React from 'react'

type Props = {
    params: { slug: string }
}

const page = async ({ params }: Props) => {
    const { slug } = params
    const client = createClient()
    const page = await client.getByUID<Content.ServicesDocument>(
        'services',
        slug
    )
    return (
        <div className="flex flex-col gap-[120px] lg:gap-[160px] pb-[160px]">
            <SliceZone slices={page?.data?.slices} components={components} />
        </div>
    )
}

export default page
