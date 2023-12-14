import Image from 'next/image'

interface InputType {
    label?: string,
    type: string,
    placeholder?: string,
    value: string,
    className?: string,
    onChange: (event: React.ChangeEvent<HTMLInputElement>) => void
}

export default function Input({ label, type, placeholder, value, className, onChange }: InputType) {
    return (
      <div className="relative grow max-w-[560px]">
        <Image
            className="absolute top-[13px] left-[13px]"
            // src={`images/${icon}.svg`}
            src={`images/search.svg`}
            alt="search icon"
            width={20}
            height={20}
            priority
        />
        <label htmlFor={label}>{label}</label>
        <input
          type={type}
          placeholder={placeholder}
          id={label}
          value={value}
          onChange={onChange}
          className={className}
        />
      </div>
    )
}
  