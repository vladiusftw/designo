import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'

/**
 * Props for `AboutTalent`.
 */
export type AboutTalentProps = SliceComponentProps<Content.AboutTalentSlice>

/**
 * Component for "AboutTalent" Slices.
 */
const AboutTalent = ({ slice }: AboutTalentProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="md:px-[40px]">
                <div
                    className={`flex flex-col-reverse ${
                        slice?.primary?.imgleft
                            ? 'lg:flex-row-reverse'
                            : 'lg:flex-row'
                    }  bg-[#FDF3F0] md:rounded-[15px]`}
                >
                    <div className="flex flex-col justify-center px-[58px] lg:px-[80px]  gap-[32px] py-[64px] items-center lg:items-start text-center lg:text-start">
                        <h1 className="text-peach">{slice?.primary?.title}</h1>
                        <p className="text-dark-grey">{slice?.primary?.desc}</p>
                    </div>
                    <Image
                        src={slice?.primary?.img?.url ?? ''}
                        alt={slice?.primary?.img?.alt ?? ''}
                        width={slice?.primary?.img?.dimensions?.width}
                        height={slice?.primary?.img?.dimensions?.height}
                        className={`w-full lg:w-auto h-[320px] lg:h-auto object-cover object-center md:rounded-t-[15px] lg:rounded-none ${
                            slice?.primary?.imgleft
                                ? 'lg:rounded-l-[15px]'
                                : 'lg:rounded-r-[15px]'
                        }  `}
                    />
                </div>
            </div>
        </section>
    )
}

export default AboutTalent
