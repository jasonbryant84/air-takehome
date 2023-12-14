import { Button } from '../'

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
                <h1 className='text-[22px] mb-[6px] mr-[16px] font-medium -tracking-[.019em]'>{title}</h1>
                <p className='text-[14px] text-gray-500	'>{subTitle}</p>
                
                <div className='flex flex-row mt-[20px] sm:hidden'>
                    <Button
                        label='Share'
                        className='flex justify-center items-center bg-air-blue text-white w-[63px] h-[40px] rounded-md text-[14px] mr-[8px] hover:bg-air-blue-hover'
                        textClassName='text-[14px]'
                        isBlue
                    />
                    <Button
                        className='flex justify-center items-center bg-button-bkg text-white w-[40px] h-[40px] rounded-md text-[14px] border-[1px]'
                        icon='ellipsis'
                    />
                </div>
            </div>
        </section>
    )
}

//class="my-[6px] mr-4 break-words text-24 font-semibold text-pigeon-700"
