import React from 'react';

export const MySelect = ({options, defaultValue, value, changeSelect}) => {
    return (
        <select
            value={value}
            onChange={e => changeSelect(e.target.value)}
        >
            <option disabled value="value1">{defaultValue}</option>
            {
                options.map(option => {
                    return (
                        <option key={option.value} value={option.value}>
                            {option.name}
                        </option>
                    )
                })
            }
        </select>
    );
};
