import LightButton from '@/components/shared/buttons/lightButton'
import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `TitleDescBtn`.
 */
export type TitleDescBtnProps = SliceComponentProps<Content.TitleDescBtnSlice>

/**
 * Component for "TitleDescBtn" Slices.
 */
const TitleDescBtn = ({ slice }: TitleDescBtnProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="px-[40px]">
                <div className="bg-peach px-[72px] py-[60px] lg:py-[96px] flex flex-col lg:flex-row items-center lg:justify-between gap-[32px] rounded-[15px] text-center lg:text-start">
                    <div className="flex flex-col items-center lg:items-start gap-[12px] text-white">
                        <h2 className="max-w-[320px] ">
                            {slice?.primary?.title}
                        </h2>
                        <p className="max-w-[460px]">{slice?.primary?.desc}</p>
                    </div>
                    <LightButton text="get in touch" className="uppercase" />
                </div>
            </div>
        </section>
    )
}

export default TitleDescBtn
