'use client'

import { useState } from 'react'
import { Button, Input } from '@/components'

interface HeaderType {
    className?: string;
}

export default function Header(headingInfo: HeaderType) {
    const { className = '' } = headingInfo
    const [searchValue, setSearchValue] = useState<string>('')

    return (
        <header
            className={`flex flex-row fixed justify-between w-full pt-[16px] pb-[12px] px-[12px] sm:px-[60px] z-10 bg-white ${className}`}
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
                    className='flex justify-center items-center bg-air-blue text-white w-[94px] h-[46px] rounded-md text-[14px] ml-[12px]'
                    both
                />
            </div>
        </header>
    )
}
