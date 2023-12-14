interface ButtonType {
    label: string;
    onClick?: (e: React.FormEvent) => void;
    className?: string;
}

export default function Button(buttonInfo: ButtonType) {
    const { label, onClick, className = '' } = buttonInfo

    return (
        <button
            className={`transition duration-300 ease-out hover:ease-in hover:bg-cta-hover-bkg ${className}`}
            onClick={onClick}
        >
            {label}
        </button>
    )
}
