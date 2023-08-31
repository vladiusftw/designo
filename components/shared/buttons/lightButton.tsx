import Link from 'next/link'
import React from 'react'

type Props = {
    text: string
    className?: string
    href?: string
}

const LightButton = ({ text, className, href }: Props) => {
    return (
        <span>
            <Link
                href={href ?? '#'}
                className={`bg-white text-dark-grey hover:bg-light-peach hover:text-white font-medium text-[15px] py-[18px] px-[24px] rounded-[8px] transition-colors duration-200 ${className}`}
            >
                {text}
            </Link>
        </span>
    )
}

export default LightButton
