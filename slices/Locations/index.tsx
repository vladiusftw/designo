import DarkButton from '@/components/shared/buttons/darkButton'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'
import Link from 'next/link'

/**
 * Props for `Locations`.
 */
export type LocationsProps = SliceComponentProps<Content.LocationsSlice>

/**
 * Component for "Locations" Slices.
 */
const Locations = ({ slice }: LocationsProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="px-[40px]">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[140px]">
                    {slice?.items?.map((item) => {
                        return (
                            <div className="flex flex-col items-center gap-[48px]">
                                <Image
                                    src={item?.img?.url ?? ''}
                                    alt={item?.img?.alt ?? ''}
                                    width={item?.img?.dimensions?.width}
                                    height={item?.img?.dimensions?.height}
                                />
                                <div className="flex flex-col gap-[32px] items-center">
                                    <h3 className="text-dark-grey whitespace-nowrap">
                                        {item?.title}
                                    </h3>
                                    <DarkButton
                                        text={item?.buttontext ?? ''}
                                        href={item?.buttonvalue ?? ''}
                                    />
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default Locations
