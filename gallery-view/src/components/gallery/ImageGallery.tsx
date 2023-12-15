import React, { useEffect, useState } from 'react';
import { DragDropContext, Droppable, Draggable, DropResult } from 'react-beautiful-dnd'

import GalleryLazyImage from './GalleryLazyImage';

interface ThumbnailType {
    id: string,
    title?: string,
    displayName?: string,
    url: string | null
}

interface ImageGalleryType {
    isBoards: boolean,
    thumbnails: ThumbnailType[]
}

export default function ImageGallery(galleryInfo: ImageGalleryType) {
    const { isBoards, thumbnails } = galleryInfo
    const [images, setImages] = useState<ThumbnailType[]>(thumbnails)

    let droppableId = 'droppable-'
    droppableId += isBoards ? 'boards' : 'assets'

    // Function to reorder the array when an item is dragged
    const reorder = (
        list: ThumbnailType[],
        startIndex: number,
        endIndex: number
      ): ThumbnailType[] => {
        const result = Array.from(list);
        const [removed] = result.splice(startIndex, 1);
        result.splice(endIndex, 0, removed);
        return result;
    };

    // Handle drag end event
    const onDragEnd = (result: DropResult) => {
        if (!result.destination) {
            return;
        }
        console.log('result', result)
        const items = reorder(
            thumbnails,
            result.source.index,
            result.destination.index
        );
        setImages(items)
    }

    useEffect(() => {
        setImages(thumbnails)
    }, [thumbnails])

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId={droppableId}>
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        // className='flex flex-row flex-wrap justify-between mt-[20px]'
                        className='grid grid-cols-1 xs:grid-cols-2 xs:gap-2 md:grid-cols-3 md:gap-3 lg:grid-cols-4 lg:gap-4 mt-[20px]'
                    >
                        {images.map((item, index) => (
                            <Draggable key={item.id} draggableId={item.id} index={index}>
                                {(provided) => (
                                    <div
                                        ref={provided.innerRef}
                                        {...provided.draggableProps}
                                        {...provided.dragHandleProps}
                                    >
                                        <GalleryLazyImage
                                            imageUrl={item.url || '/images/no-image.jpg'}
                                            overlayText={item.displayName}
                                            title={item.title}
                                        />
                                    </div>
                                )}
                            </Draggable>
                        ))}
                        {provided.placeholder}
                    </div>
                )}
            </Droppable>
        </DragDropContext>
    );
}
