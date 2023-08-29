import React from 'react'

type Props = {
    text: string
    className?: string
}

const LightButton = ({ text, className }: Props) => {
    return (
        <span>
            <button
                className={`bg-white text-dark-grey hover:bg-light-peach hover:text-white font-medium text-[15px] py-[18px] px-[24px] rounded-[8px] transition-colors duration-200 ${className}`}
            >
                {text}
            </button>
        </span>
    )
}

export default LightButton
