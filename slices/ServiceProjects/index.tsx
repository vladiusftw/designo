import { Content } from '@prismicio/client'
import { SliceComponentProps } from '@prismicio/react'
import Image from 'next/image'

/**
 * Props for `ServiceProjects`.
 */
export type ServiceProjectsProps =
    SliceComponentProps<Content.ServiceProjectsSlice>

/**
 * Component for "ServiceProjects" Slices.
 */
const ServiceProjects = ({ slice }: ServiceProjectsProps): JSX.Element => {
    return (
        <section
            data-slice-type={slice.slice_type}
            data-slice-variation={slice.variation}
        >
            <div className="px-[40px]">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-[30px]">
                    {slice?.items?.map((project) => {
                        return (
                            <div className="flex flex-col group rounded-t-[15px] overflow-hidden">
                                <Image
                                    src={project?.img?.url ?? ''}
                                    alt={project?.img?.alt ?? ''}
                                    width={project?.img?.dimensions?.width}
                                    height={project?.img?.dimensions?.height}
                                    className="object-cover object-center group-hover:scale-125 transition-transform duration-300 w-full"
                                />

                                <div className="bg-[#FDF3F0] group-hover:bg-peach py-[32px] px-[16px] h-full flex flex-col items-center rounded-b-[15px] z-10">
                                    <h3 className="text-peach group-hover:text-white">
                                        {project?.title}
                                    </h3>
                                    <p className="text-dark-grey group-hover:text-white text-center">
                                        {project?.desc}
                                    </p>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}

export default ServiceProjects
