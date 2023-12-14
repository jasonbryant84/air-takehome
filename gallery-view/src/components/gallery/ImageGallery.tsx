import Image from 'next/image'
import React, { useState } from 'react';
import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd'

import { BoardType } from '../../redux/boardsSlice'
import { AssetType } from '../../redux/assetsSlice'

interface ThumbnailType {
    id: string,
    url: string
}

interface ImageGalleryType {
    isBoards: boolean,
    thumbnails: ThumbnailType[]
}

// Define the type for each image in the array
type ImageItem = {
  id: string;
  url: string;
};

// The initial array of images
const initialImages: ImageItem[] = [
  { id: 'image-1', url: 'https://example.com/image1.jpg' },
  { id: 'image-2', url: 'https://example.com/image2.jpg' },
  // Add more images here
];

export default function ImageGallery(galleryInfo: ImageGalleryType) {
    const { isBoards, thumbnails } = galleryInfo

    const [images, setImages] = useState(initialImages);

    // Function to handle the end of a drag event
    const onDragEnd = (result: any) => {
        if (!result.destination) return;

        const items = Array.from(images);
        const [reorderedItem] = items.splice(result.source.index, 1);
        items.splice(result.destination.index, 0, reorderedItem);

        setImages(items);
    }

    return (
        <DragDropContext onDragEnd={onDragEnd}>
             <Droppable droppableId="droppable" direction="horizontal">
                 {(provided, snapshot) => (
                <div
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                    className='flex flex-row flex-wrap justify-between mt-[30px] mb-[20px]'
                >
                    {thumbnails.map((item, index) => (
                        <Draggable key={item.id} draggableId={item.id} index={index}>
                            {(provided, snapshot) => {
                                return (
                                    <div
                                        className={`flex overflow-hidden mb-[20px] rounded-md`}
                                    >
                                        {/* <div className='absolute top-0 left-0 bg-[#000000]/[0.1] w-full h-full'></div> */}
                                        <div
                                            className='relative min-w-[200px] max-h-[200px] rounded-md'
                                            ref={provided.innerRef}
                                            {...provided.draggableProps}
                                            {...provided.dragHandleProps}
                                            style={{
                                                // userSelect: 'none',
                                                margin: '0 8px 0 0',
                                                backgroundColor: snapshot.isDragging ? 'blue' : 'transparent',
                                                color: 'white',
                                                ...provided.draggableProps.style,
                                            }}
                                        >
                                            <Image
                                                className="relative min-w-[200px] rounded-md"
                                                src={item.url || '/images/no-image.jpg'}
                                                alt={item?.id}
                                                width={180}
                                                height={37}
                                                loading='lazy'
                                            />
                                            <div className='absolute bottom-[20px] text-[14px] w-[80%] left-[10%]'>{item.id}</div>
                                        </div>
                                    </div>
                                )
                            }}
                        </Draggable>
                    ))}
                    {provided.placeholder}
                </div>
                )}
            </Droppable>
        </DragDropContext>
    )
}
