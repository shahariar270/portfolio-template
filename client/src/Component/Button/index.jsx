
import React from 'react'

const Button = ({
    label,
    onClick,
    styles,
    variants = 'primary',
    disabled = false,
    size,
    border,
    icon,
    type,
    children
}) => {
    return (
        <button
            style={styles}
            type={type}
            onClick={disabled ? undefined : onClick}
            className={`st-btn st-btn--${variants} 
            ${disabled ? 'st-btn--disabled' : ''}
            ${size ? `st-btn--${size}` : ''}
            ${border ? `st-btn--${border}` : ''}
            `}
            disabled={disabled}
        >
            {label}
            {icon && <span className="st-btn--icon">{icon}</span>}
            {children}
        </button>
    )
}

export default Button
