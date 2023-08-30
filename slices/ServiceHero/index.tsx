import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'

/**
 * Props for `ServiceHero`.
 */
export type ServiceHeroProps = SliceComponentProps<Content.ServiceHeroSlice>

/**
 * Component for "ServiceHero" Slices.
 */
const ServiceHero = ({ slice }: ServiceHeroProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="md:px-[40px]">
                <div className="py-[105px] md:py-[64px] flex flex-col items-center bg-peach md:rounded-[15px] gap-[24px]">
                    <h1 className="text-white">{slice?.primary?.title}</h1>
                    <p className="text-white max-w-[420px] text-center">
                        {slice?.primary?.desc}
                    </p>
                </div>
            </div>
        </section>
    )
}

export default ServiceHero
