interface HeadingType {
    title: string;
    subTitle?: string;
    className?: string;
}

export default function GalleryHeader(headingInfo: HeadingType) {
    const { title, subTitle, className = '' } = headingInfo

    return (
        <section
            className={`flex flex-row bg-white pt-[130px] px-[12px] sm:px-[70px] w-[100%] ${className}`}
        >
            <div className='flex flex-col w-full'>
                <h1 className='text-[24px] my-[6px] mr-[16px] font-medium -tracking-[.019em]'>{title}</h1>
                <p className='text-[14px] text-gray-500	'>{subTitle}</p>
            </div>
        </section>
    )
}

//class="my-[6px] mr-4 break-words text-24 font-semibold text-pigeon-700"
