import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'

/**
 * Props for `Properties`.
 */
export type PropertiesProps = SliceComponentProps<Content.PropertiesSlice>

/**
 * Component for "Properties" Slices.
 */
const Properties = ({ slice }: PropertiesProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="px-[40px] flex flex-col lg:flex-row items-center justify-between gap-[80px] md:gap-[32px] lg:gap-[30px]">
                {slice?.items?.map((property) => {
                    return (
                        <div className="flex flex-col md:flex-row lg:flex-col items-center gap-[48px]">
                            <Image
                                src={property?.img?.url ?? ''}
                                alt={property?.title ?? ''}
                                width={202}
                                height={202}
                            />
                            <div className="flex flex-col gap-[32px] items-center">
                                <h3 className="text-dark-grey">
                                    {property?.title}
                                </h3>
                                <p className="text-[16px] text-dark-grey text-center">
                                    {property?.desc}
                                </p>
                            </div>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default Properties
