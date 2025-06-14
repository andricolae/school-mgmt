import React from 'react'

const InputField = ({ label, name, type = 'text', register, error, ...props }: any) => {
    return (
        <div>
            <label htmlFor={name}>{label}</label>
            <input
                id={name}
                name={name}
                type={type}
                {...(register ? register(name) : {})}
                {...props}
            />
            {error && <span>{error.message}</span>}
        </div>
    )
}

export default InputField