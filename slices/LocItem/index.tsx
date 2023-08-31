import { Content } from '@prismicio/client'
import { PrismicRichText, SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'

/**
 * Props for `LocItem`.
 */
export type LocItemProps = SliceComponentProps<Content.LocItemSlice>

/**
 * Component for "LocItem" Slices.
 */
const LocItem = ({ slice }: LocItemProps): JSX.Element => {
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
                    } md:gap-[30px]`}
                >
                    <div className="flex flex-col py-[88px] px-[24px] md:px-[75px] lg:px-[95px] bg-[#FEF3F0] w-full gap-[24px] md:rounded-[15px] items-center sm:items-start">
                        <h1 className="text-peach">{slice?.primary?.title}</h1>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-[24px] w-full">
                            <div className="text-center sm:text-start w-full">
                                {slice?.items?.map((item) => {
                                    return (
                                        <PrismicRichText
                                            field={item?.address}
                                        />
                                    )
                                })}
                            </div>

                            <div className="text-center sm:text-start w-full">
                                {slice?.items?.map((item) => {
                                    return (
                                        <PrismicRichText
                                            field={item?.contact}
                                        />
                                    )
                                })}
                            </div>
                        </div>
                    </div>
                    <Image
                        src={slice?.primary?.img?.url ?? ''}
                        alt={slice?.primary?.img?.alt ?? ''}
                        width={slice?.primary?.img?.dimensions?.width}
                        height={slice?.primary?.img?.dimensions?.height}
                        className="md:rounded-[15px] w-full lg:w-auto h-[320px] lg:h-auto object-cover object-center"
                    />
                </div>
            </div>
        </section>
    )
}

export default LocItem
