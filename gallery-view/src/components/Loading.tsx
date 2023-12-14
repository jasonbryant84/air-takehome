import Image from 'next/image'

export default function Loading() {
    return (
        <div className='absolute flex justify-center items-center w-[100vw] h-[100vh] z-50 left-0 top-0 bg-air-blue'>
            <Image
                className="relative dark:invert animate-bounce"
                src="images/air.svg"
                alt="Air Logo"
                width={180}
                height={37}
                priority
            />
        </div>
    )
}
