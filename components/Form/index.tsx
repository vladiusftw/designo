'use client'
import React, { useState } from 'react'
import LightButton from '../shared/buttons/lightButton'

type Props = {}

const Index = (props: Props) => {
    const [form, setForm] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    })

    console.log(form)

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        console.log(e?.target?.value)

        setForm((prev) => ({
            ...prev,
            [e?.target?.name]: e.target?.value,
        }))
    }
    return (
        <div className="flex flex-col gap-[25px]">
            <input
                type="text"
                value={form?.name}
                name={'name'}
                onChange={handleChange}
                placeholder="Name"
                className="lg:min-w-[380px] py-[12px] border-b focus:border-b-[3px] border-b-white bg-transparent text-white placeholder:text-[#F3C0B5] outline-none"
            />

            <input
                type="text"
                value={form?.email}
                name={'email'}
                onChange={handleChange}
                placeholder="Email Address"
                className="lg:min-w-[380px] py-[12px] border-b focus:border-b-[3px] border-b-white bg-transparent text-white placeholder:text-[#F3C0B5]  outline-none"
            />

            <input
                type="tel"
                value={form?.phone}
                name={'phone'}
                onChange={handleChange}
                placeholder="Phone"
                className="lg:min-w-[380px] py-[12px] border-b focus:border-b-[3px] border-b-white bg-transparent text-white placeholder:text-[#F3C0B5] outline-none"
            />

            <textarea
                value={form?.message}
                name={'message'}
                onChange={handleChange}
                placeholder="Your Message"
                rows={3}
                className="lg:min-w-[380px] py-[12px] border-b focus:border-b-[3px] border-b-white bg-transparent text-white placeholder:text-[#F3C0B5] flex flex-col text-start  outline-none "
            />
            <div className="flex flex-col items-center md:items-end pt-[24px]">
                <LightButton text="SUBMIT" className="py-[18px] px-[48px]" />
            </div>
        </div>
    )
}

export default Index
