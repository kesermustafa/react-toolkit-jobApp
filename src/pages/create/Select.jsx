import React from 'react';

const Select = ({label, name, options, handleChange}) => {
    return (
        <div>
            <label htmlFor={label}>{label}</label>

            <select id={label} name={name} onChange={handleChange}>
                <option defaultValue='Seciniz' >Seciniz</option>

                {options.map((option) => <option key={option} value={option} >{option}</option>)}
            </select>
        </div>
    );
};

export default Select;
