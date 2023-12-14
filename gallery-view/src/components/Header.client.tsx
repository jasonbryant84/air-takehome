'use client'

import Image from 'next/image'
import { useState } from 'react'
import { Button, Input } from '@/components'

interface HeaderType {
    className?: string;
}

export default function Header(headingInfo: HeaderType) {
    const { className = '' } = headingInfo
    const [searchValue, setSearchValue] = useState<string>('')

    return (
        <div className='fixed flex flex-col z-10 w-full'>
            <div className='flex flex-row justify-between items-center w-full bg-gray-100 h-[56px] px-[12px] w-full'>
                <div className='flex flex-row items-center'>
                    <Image
                        className="relative mr-[10px] rounded-md"
                        src={`/images/no-image.jpg`}
                        alt="Air Logo"
                        width={32}
                        height={32}
                        priority
                    />
                    <span className='text-[15px] text-gray-600'>Restaurant Stock</span>
                </div>
                <div className='flex flex-row'>
                    <span className='hidden sm:inline-block text-[15px] text-gray-600'>User Name (usersemail@gmail.com)</span>
                    <span
                        className='flex h-[24px] w-[24px] sm:hidden text-[15px] text-gray-900 justify-center items-center bg-[#c0a1ff] text-[9px] font-semibold rounded-xl'
                    >UN</span>
                    <Image
                        className="relative ml-[20px]"
                        src={`images/air-blue.svg`}
                        alt="Air Logo"
                        width={42}
                        height={17}
                        priority
                    />
                </div>
            </div>
            <header
                className={`flex flex-row justify-between w-full pt-[16px] pb-[12px] px-[12px] sm:px-[60px] z-10 bg-white ${className}`}
            >
                <div className='flex flex-row w-full sm:w-[80%]'>
                    <Input
                        type='search'
                        placeholder='Search board'
                        className='border-[1px] w-full h-[46px] pl-[40px] pr-[8px] rounded-md'
                        value={searchValue}
                        onChange={(e) => setSearchValue(e.target.value)}
                    />

                    <Button
                        className='flex justify-center items-center ml-[8px] h-[46px] w-[46px] rounded-md'
                        icon='filter'
                    />
                </div>

                <div className='flex-row hidden min-w-[152px] sm:flex sm:ml-[20px]'>
                    <Button
                        className='flex justify-center items-center bg-button-bkg text-white w-[46px] h-[46px] rounded-md justify-center items-center'
                        icon='turn-arrow'
                    />
                    <Button
                        label='Save to...'
                        className='flex justify-center items-center bg-air-blue text-white w-[94px] h-[46px] rounded-md text-[14px] ml-[12px] hover:bg-air-blue-hover'
                        textClassName='text-[14px]'
                        isBlue
                    />
                </div>
            </header>
        </div>
    )
}
