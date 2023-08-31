import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Form from '@/components/Form'
/**
 * Props for `ContactHero`.
 */
export type ContactHeroProps = SliceComponentProps<Content.ContactHeroSlice>

/**
 * Component for "ContactHero" Slices.
 */
const ContactHero = ({ slice }: ContactHeroProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="md:px-[40px]">
                <div className="py-[55px] px-[24px] md:px-[96px] flex flex-col lg:flex-row gap-[30px] justify-between bg-peach md:rounded-[15px] lg:items-center">
                    <div className="flex flex-col gap-[32px] lg:max-w-[480px]">
                        <h1 className="text-white">{slice?.primary?.title}</h1>
                        <p className="text-white">{slice?.primary?.desc}</p>
                    </div>
                    <Form />
                </div>
            </div>
        </section>
    )
}

export default ContactHero
