import Image from 'next/image'

interface ThumbnailType {
    title: string,
    displayName: string,
    url: string,
    className?: string
}

export default function GalleryBoardThumbnail(thumbnailInfo: ThumbnailType) {
    const { title, url, className = '' } = thumbnailInfo

    return (
        <div
            className={`flex flex-row border-[1px] text-gray rounded-md max-w-[300px] ${className}`}
        >
            <Image
                className="relative dark:invert animate-bounce"
                src={url}
                alt={title}
                width={180}
                height={37}
                loading='lazy'
            />
        </div>
    )
}
