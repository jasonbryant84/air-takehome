import { Button } from '@/components'

export default function GalleryControls() {
    return (
        <div
            className='gallery-controls flex flex-row justify-end border-b-[1px] pt-[20px] w-full px-[12px] sm:px-[70px] pb-[12px]'
        >
            <Button
                label='Date modified'
                className=' text-[0.75em] p-[6px] rounded-md'
            />
            <Button
                className='mr-[4px] text-[0.75em] p-[6px] rounded-md'
                icon='down-arrow'
            />
            <Button
                className='mx-[4px] p-[6px] rounded-md hidden sm:flex'
                icon='settings'
            />
            <Button
                className='mx-[4px] p-[6px] rounded-md'
                icon='view'
            />
        </div>
    )
}
