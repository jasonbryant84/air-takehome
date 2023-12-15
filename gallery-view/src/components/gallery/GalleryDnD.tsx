import React, { useState, useCallback, useEffect } from 'react'
import GalleryDraggableImage from './GalleryDraggableImage'

interface ThumbnailType {
    id: string,
    title?: string,
    displayName?: string,
    url: string | null
}

interface GalleryDnDType {
    thumbnails: ThumbnailType[]
}

export default function GalleryDnD(galleryInfo: GalleryDnDType) {
    const { thumbnails } = galleryInfo
    const [images, setImages] = useState<any[]>([])

    const reorder = (
        list: any[],
        startIndex: number,
        endIndex: number
      ) => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    }

    const moveImage = useCallback((dragIndex: number, hoverIndex: number) => {
        const newOrder = reorder(images, dragIndex, hoverIndex)
        setImages(newOrder)
    }, [images])

    // Update images state when thumbnails prop changes
    useEffect(() => {
        setImages(thumbnails)
    }, [thumbnails])

    return (
        <div
            className='grid grid-cols-1 xs:grid-cols-2 xs:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 mt-[20px]'
        >
            {images.map((thumbnail, index) => (
                <GalleryDraggableImage
                    key={thumbnail?.id || index}
                    index={index}
                    moveImage={moveImage}
                    thumbnail={thumbnail}
                />
            ))}
        </div>
    );
}

