'use client'

import Image from 'next/image'
import { useEffect } from 'react'
import { Button } from '@/components'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { fetchBoards, BoardType } from '@/redux/boardsSlice'
import { fetchAssets } from '@/redux/assetsSlice'
import ImageGallery from './ImageGallery'
import { createThumbnails } from '@/utils/galleryHelpers'

interface GalleryType {
    type: string;
    className?: string;
}

export default function Gallery(galleryInfo: GalleryType) {
    const { type, className = '' } = galleryInfo
    const isBoards = type.toLowerCase().includes('boards')

    // Redux Implementation
    const dispatch = useAppDispatch()
    const thumbnails = createThumbnails(isBoards)

    useEffect(() => {
        if (isBoards) {
            dispatch(fetchBoards())
        } else {
            dispatch(fetchAssets())
        }
    }, [])

    return (
        <section
            className={`flex flex-row px-[70px] pt-[20px] w-full text-gray pb-[12px] ${className}`}
        >
            <div className='relative flex flex-col w-full pt-[20px]'>
                <Button
                    label={`${isBoards ? 'BOARDS' : 'ASSETS'} ${thumbnails?.length ? `(${thumbnails?.length})` : ''}`}
                    className='w-[110px] h-[24px] absolute top-0'
                />

                <ImageGallery
                    isBoards={isBoards}
                    thumbnails={thumbnails}
                />
            </div>
        </section>
    )
}