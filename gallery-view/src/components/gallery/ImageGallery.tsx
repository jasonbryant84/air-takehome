import React, { useState } from 'react';
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
    const { isBoards, thumbnails } = galleryInfo;

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
        const items = reorder(
            thumbnails,
            result.source.index,
            result.destination.index
        );
        // Update the thumbnails state here if necessary
    };

    return (
        <DragDropContext onDragEnd={onDragEnd}>
            <Droppable droppableId="droppable">
                {(provided) => (
                    <div
                        {...provided.droppableProps}
                        ref={provided.innerRef}
                        className='flex flex-row flex-wrap justify-between mt-[20px]'
                    >
                        {thumbnails.map((item, index) => (
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
