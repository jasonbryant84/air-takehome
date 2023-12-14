import { Button } from '@/components'

export default function GalleryControls() {
    return (
        <div className='flex flex-row justify-end border-b-[1px] pt-[40px] w-full px-[12px] sm:px-[70px] pb-[12px]'>
            <Button
                label='Date modified'
                className='mx-[4px] text-[0.75em] p-[6px] rounded-md'
            />
            <Button
                label='details'
                className='mx-[4px] p-[6px] rounded-md'
                icon='settings'
            />
            <Button
                label='view'
                className='mx-[4px] p-[6px] rounded-md'
                icon='view'
            />
        </div>
    )
}
