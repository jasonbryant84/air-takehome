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
      <div className="input-group grow max-w-[560px]">
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
  