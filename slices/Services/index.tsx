import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'
import Link from 'next/link'
import RightArrow from '@/public/right_arrow.svg'

/**
 * Props for `Services`.
 */
export type ServicesProps = SliceComponentProps<Content.ServicesSlice>

/**
 * Component for "Services" Slices.
 */
const Services = ({ slice }: ServicesProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="px-[40px] grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                {slice?.items.map((category) => {
                    return (
                        <Link href={`/designs/${category?.slug}`}>
                            <div className="group h-[250px] relative md:h-[200px] lg:h-[640px] w-full flex flex-col overflow-hidden rounded-[15px]">
                                <Image
                                    src={category?.img?.url ?? ''}
                                    alt={category?.img?.alt ?? ''}
                                    fill
                                    className={`absolute rounded-[15px] group-hover:scale-125 transition-transform duration-500 object-cover object-top`}
                                />

                                <div className="bg-[#00000080] hover:bg-[#e7816bcc] z-20 w-full h-full flex flex-col items-center justify-center gap-[24px] rounded-[15px]">
                                    <h2 className="text-white uppercase">
                                        {category?.title}
                                    </h2>
                                    <div className="flex items-center gap-[20px]">
                                        <span className="uppercase text-white font-medium">
                                            view projects
                                        </span>
                                        <Image src={RightArrow} alt="" />
                                    </div>
                                </div>
                            </div>
                        </Link>
                    )
                })}
            </div>
        </section>
    )
}

export default Services
