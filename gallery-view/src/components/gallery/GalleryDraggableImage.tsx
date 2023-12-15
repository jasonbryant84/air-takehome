import { useDrag, useDrop } from 'react-dnd'
import GalleryLazyImage from './GalleryLazyImage'

interface ImageType {
  thumbnail: any,
  index: number,
  moveImage: (dragIndex: number, hoverIndex: number) => void
}

export default function GalleryDraggableImage({ thumbnail, index, moveImage }: ImageType) {
  const [, drag] = useDrag(() => ({
    type: "image",
    item: { index },
  }));

  const [, drop] = useDrop({
    accept: "image",
    drop: (item: { index: number }) => {
      if (item.index !== index) {
        moveImage(item.index, index)
        item.index = index
      }
    },
  });

  return (
    <div
      data-index={index}
      ref={(node) => drag(drop(node))}
    >
      <GalleryLazyImage
          imageUrl={thumbnail?.url || '/images/no-image.jpg'}
          overlayText={thumbnail?.displayName}
          title={thumbnail?.title}
      />
    </div>
  )
}