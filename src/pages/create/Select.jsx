import React from 'react';

const Select = ({label, name, options}) => {
    return (
        <div>
            <label htmlFor={label}>{label}</label>

            <select id={label} name={name}>
                <option defaultValue='Seciniz' >Seciniz</option>

                {options.map((option) => <option key={option} value={option} >{option}</option>)}
            </select>
        </div>
    );
};

export default Select;
