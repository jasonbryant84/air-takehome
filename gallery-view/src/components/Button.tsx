import Image from 'next/image'

interface ButtonType {
    label?: string,
    onClick?: (e: React.FormEvent) => void,
    className?: string,
    textClassName?: string,
    icon?: string,
    isBlue?: boolean
}

export default function Button(buttonInfo: ButtonType) {
    const { isBlue = false, icon = '', label, onClick, className = '', textClassName = '' } = buttonInfo

    return (
        <button
            className={`flex transition duration-300 ease-out hover:ease-in ${!isBlue ? 'hover:bg-button-bkg' : ''} ${className}`}
            onClick={onClick}
        >
            <span className={`text-[12px] ${textClassName}`}>{label}</span>
            {icon.length > 0 && (
                <>
                    <Image
                        className="relative"
                        // src={`images/${icon}.svg`}
                        src={`images/${icon}.svg`}
                        alt="Air Logo"
                        width={15}
                        height={15}
                        priority
                    />
                </>
            )}
        </button>
    )
}
