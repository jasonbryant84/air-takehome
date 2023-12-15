'use client'

import { useEffect, useState } from 'react'
import { Button } from '@/components'
import { useAppSelector, useAppDispatch } from '@/redux/hooks'
import { fetchBoards, BoardType } from '@/redux/boardsSlice'
import { fetchAssets, AssetType } from '@/redux/assetsSlice'
import ImageGallery from './ImageGallery'
import GalleryDnD from './GalleryDnD'
import { createAssetThumbnails, createBoardThumbnails } from '@/utils/galleryHelpers'

import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'

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
    const searchTerm = useAppSelector((state) => state.search.value)
    const thumbnails = isBoards ? createBoardThumbnails(boardItems) : createAssetThumbnails(assetItems) //useCreateThumbnails(isBoards)

    const [filteredThumbnails, setFilteredThumbnails] = useState<any[]|null>(null)

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

    useEffect(() => {
        if (searchTerm.length > 0) {
            const tempThumbnails = thumbnails.filter((e: any) => {
                return e.displayName?.toLowerCase().includes(searchTerm.toLowerCase())
            })
            setFilteredThumbnails(tempThumbnails)
        } else {
            setFilteredThumbnails(null)
        }
    }, [searchTerm])

    return (
        <>
            { ((isBoards && filteredThumbnails?.length !== 0) || !isBoards) &&
                <section
                    className={`flex flex-row px-[12px] sm:px-[70px] pt-[20px] w-full text-gray pb-[12px] ${className}`}
                >
                    <div className='relative flex flex-col w-full pt-[20px]'>
                        <Button
                            label={`${isBoards ? 'BOARDS' : 'ASSETS'} ${filteredThumbnails?.length || thumbnails?.length ? `(${filteredThumbnails?.length || thumbnails?.length})` : ''}`}
                            className='mr-[4px] text-[0.75em] p-[6px] w-[100px] w-initial rounded-md'
                            textClassName='font-semibold text-slate-500'
                            onClick={toggleView}
                        />

                        {showImages &&
                            <DndProvider backend={HTML5Backend}>
                                <GalleryDnD
                                    thumbnails={filteredThumbnails || thumbnails}
                                />
                            </DndProvider>
                        }
                    </div>
                </section>
            }
        </>
    )
}
