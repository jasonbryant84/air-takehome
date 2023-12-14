import { Button } from '@/components'

export default function GalleryControls() {
    return (
        <div className='flex flex-row justify-end border-b-[1px] pt-[40px] w-full px-[70px] pb-[12px]'>
            <Button
                label='Date modified'
                className='mx-[4px]'
            />
            <Button
                label='details'
                className='mx-[4px]'
            />
            <Button
                label='view'
                className='mx-[4px]'
            />
        </div>
    )
}
