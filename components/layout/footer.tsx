import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { GroupField, ImageField } from '@prismicio/client'
import {
    NavigationDocumentDataFootercontactsItem,
    NavigationDocumentDataFooterlocationsItem,
    NavigationDocumentDataFootersocialsItem,
    NavigationDocumentDataNavlinksItem,
    Simplify,
} from '@/prismicio-types'
import { PrismicRichText } from '@prismicio/react'
// import FB from '@/public/fb.svg'
type Props = {
    footerLogo: ImageField
    links: GroupField<Simplify<NavigationDocumentDataNavlinksItem>>
    locs: GroupField<Simplify<NavigationDocumentDataFooterlocationsItem>>
    contacts: GroupField<Simplify<NavigationDocumentDataFootercontactsItem>>
    socials: GroupField<Simplify<NavigationDocumentDataFootersocialsItem>>
}

const Footer = ({ footerLogo, links, locs, contacts, socials }: Props) => {
    return (
        <footer
            className={`bg-black w-full flex flex-col items-center px-[40px] pt-[64px] md:pt-[80px] lg:pt-[72px] pb-[64px]`}
        >
            <div className="max-w-[1200px] w-full flex flex-col">
                <div className="w-full flex flex-col md:flex-row justify-between items-center pb-[40px] border-b-[1px] border-[#ffffff1a] border-none md:border-solid ">
                    <div className="border-b-[1px] border-[#ffffff1a] w-full items-center flex flex-col md:w-auto md:border-none py-[32px] md:py-0">
                        <Image
                            src={footerLogo?.url ?? ''}
                            alt={footerLogo?.alt ?? ''}
                            width={footerLogo?.dimensions?.width}
                            height={footerLogo?.dimensions?.height}
                        />
                    </div>

                    <div className="flex flex-col md:flex-row gap-[42px] items-center py-[32px] md:py-0">
                        {links.map(
                            (link: NavigationDocumentDataNavlinksItem) => {
                                return (
                                    <Link
                                        key={link.value}
                                        href={link?.value ?? '#'}
                                        className="text-[14px] text-white uppercase"
                                    >
                                        {link?.text}
                                    </Link>
                                )
                            }
                        )}
                    </div>
                </div>

                <div className="flex flex-col md:flex-row items-center justify-between text-[#8E8D8E] md:pt-[30px] gap-[40px]">
                    <div className="flex flex-col items-center md:items-start">
                        {locs?.map(
                            (
                                elem: NavigationDocumentDataFootercontactsItem,
                                index: number
                            ) => {
                                return (
                                    <PrismicRichText
                                        field={elem?.text}
                                        key={index}
                                    />
                                )
                            }
                        )}
                    </div>
                    <div className="flex flex-col items-center md:items-start ">
                        {contacts?.map(
                            (
                                elem: NavigationDocumentDataFootercontactsItem,
                                index: number
                            ) => {
                                return (
                                    <PrismicRichText
                                        field={elem?.text}
                                        key={index}
                                    />
                                )
                            }
                        )}
                    </div>
                    <div className="flex items-center gap-[16px] md:items-start">
                        {socials.map(
                            (
                                social: NavigationDocumentDataFootersocialsItem,
                                index: number
                            ) => {
                                return (
                                    <Image
                                        src={social?.img?.url ?? ''}
                                        alt={social?.img?.alt ?? ''}
                                        key={index}
                                        width={social?.img?.dimensions?.width}
                                        height={social?.img?.dimensions?.height}
                                    />
                                )
                            }
                        )}
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer
