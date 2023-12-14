import Image from 'next/image'

export default function Loading() {
    return (
        <div className='flex justify-center items-center w-[100%] h-[100%] bg-button-bkg'>
            <Image
                className="relative animate-bounce"
                src="images/air-blue.svg"
                alt="Air Logo"
                width={40}
                height={0}
                priority
            />
        </div>
    )
}
