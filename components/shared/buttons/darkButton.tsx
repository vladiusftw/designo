import React from 'react'

type Props = {
    text: string
    className?: string
}

const DarkButton = ({ text, className }: Props) => {
    return (
        <button
            className={`bg-peach text-white hover:bg-light-peach font-medium text-[15px] ${className}`}
        >
            {text}
        </button>
    )
}

export default DarkButton
