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
            className={`flex flex-row fixed justify-between w-full pt-[16px] pb-[12px] px-[60px] z-10 bg-white ${className}`}
        >
            <Input
                type='search'
                placeholder='Search board'
                className='border-[1px] w-[512px] h-[46px] pl-[40px] pr-[8px] rounded-md'
                value={searchValue}
                onChange={(e) => setSearchValue(e.target.value)}
            />

            <div>
                <Button
                    label='>'
                    className='bg-air-blue text-white w-[46px] h-[46px] rounded-md text-[14px]'
                    // was height 40px in example
                />
                <Button
                    label='Save to...'
                    className='bg-air-blue text-white w-[94px] h-[46px] rounded-md text-[14px] ml-[12px]'
                    // was height 40px in example
                />
            </div>
        </header>
    )
}
