'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { fetchBoards, BoardType } from '@/redux/boardsSlice'
import { fetchAssets, AssetType } from '@/redux/assetsSlice'
import ImageGallery from './ImageGallery'
import { createAssetThumbnails, createBoardThumbnails } from '@/utils/galleryHelpers'

interface GalleryType {
    type: string;
    className?: string;
}

export default function Gallery(galleryInfo: GalleryType) {
    const { type, className = '' } = galleryInfo
    const isBoards = type.toLowerCase().includes('boards')
    const [showImages, setShowImages] = useState<boolean>(true)

    // Redux Implementation
    const dispatch = useAppDispatch()
    const boardItems = useAppSelector((state) => state.boards.items) as BoardType[]
    const assetItems = useAppSelector((state) => state.assets.items) as AssetType[]
    const thumbnails = isBoards ? createBoardThumbnails(boardItems) : createAssetThumbnails(assetItems) //useCreateThumbnails(isBoards)

    const toggleView = () => {
        setShowImages(!showImages)
    }

    useEffect(() => {
        if (isBoards) {
            dispatch(fetchBoards())
        } else {
            dispatch(fetchAssets())
        }
    }, [])

    return (
        <section
            className={`flex flex-row px-[12px] sm:px-[70px] pt-[20px] w-full text-gray pb-[12px] ${className}`}
        >
            <div className='relative flex flex-col w-full pt-[20px]'>
                <Button
                    label={`${isBoards ? 'BOARDS' : 'ASSETS'} ${thumbnails?.length ? `(${thumbnails?.length})` : ''}`}
                    // className='flex w-[130px] h-[24px] top-0 hover:bg-button-bkg rounded-md pr-[20px]'
                    className='mr-[4px] text-[0.75em] p-[6px] w-[100px] w-initial rounded-md'
                    textClassName='font-semibold text-slate-500'
                    onClick={toggleView}
                />

                {showImages && <ImageGallery
                    isBoards={isBoards}
                    thumbnails={thumbnails}
                />}
            </div>
        </section>
    )
}
