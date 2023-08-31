import { createClient } from '@/prismicio'
import { AboutDocument } from '@/prismicio-types'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'
import { redirect } from 'next/navigation'

/**
 * Props for `AboutHero`.
 */
export type AboutHeroProps = SliceComponentProps<Content.AboutHeroSlice>

/**
 * Component for "AboutHero" Slices.
 */
const AboutHero = ({ slice }: AboutHeroProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="md:px-[40px]">
                <div className="flex flex-col-reverse lg:flex-row bg-peach md:rounded-[15px]">
                    <div className="flex flex-col justify-center px-[58px] lg:px-[80px] text-white gap-[32px] py-[64px] items-center lg:items-start text-center lg:text-start">
                        <h1>{slice?.primary?.title}</h1>
                        <p>{slice?.primary?.desc}</p>
                    </div>
                    <Image
                        src={slice?.primary?.img?.url ?? ''}
                        alt={slice?.primary?.img?.alt ?? ''}
                        width={slice?.primary?.img?.dimensions?.width}
                        height={slice?.primary?.img?.dimensions?.height}
                        className="w-full lg:w-auto h-[320px] lg:h-auto object-cover md:rounded-t-[15px] lg:rounded-l-none lg:rounded-r-[15px]"
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutHero
