import LightButton from '@/components/shared/buttons/lightButton'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'

/**
 * Props for `TitleDescImgBtn`.
 */
export type TitleDescImgBtnProps =
    SliceComponentProps<Content.TitleDescImgBtnSlice>

/**
 * Component for "TitleDescImgBtn" Slices.
 */
const TitleDescImgBtn = ({ slice }: TitleDescImgBtnProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="md:px-[40px]">
                <div className="bg-peach relative h-auto flex flex-col gap-[60px] lg:gap-[24px] items-center lg:items-end justify-between lg:flex-row w-full md:rounded-[15px] text-white  px-[58px] lg:px-[95px] ">
                    <div className="pt-[60px] lg:py-[145px] flex flex-col gap-[40px] items-center lg:items-start  lg:max-w-[550px]">
                        <h1 className="text-center lg:text-start">
                            {slice?.primary?.title}
                        </h1>
                        <p className="text-center lg:text-start">
                            {slice?.primary.desc}
                        </p>
                        <LightButton
                            text={'learn more'}
                            className="uppercase"
                            href={slice?.primary?.buttonvalue ?? ''}
                        />
                    </div>
                    <div className="min-w-[280px] min-h-[380px] lg:min-h-[500px] relative flex flex-col items-end">
                        <Image
                            src={slice?.primary?.img?.url ?? ''}
                            alt="Phone"
                            fill
                            className="object-cover object-top"
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}

export default TitleDescImgBtn
