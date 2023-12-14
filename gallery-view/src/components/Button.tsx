import Image from 'next/image'

interface ButtonType {
    label: string;
    onClick?: (e: React.FormEvent) => void;
    className?: string;
    icon?: string
}

export default function Button(buttonInfo: ButtonType) {
    const { icon = '', label, onClick, className = '' } = buttonInfo

    return (
        <button
            className={`transition duration-300 ease-out hover:ease-in hover:bg-button-bkg ${className}`}
            onClick={onClick}
        >
            {!icon && label}
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
