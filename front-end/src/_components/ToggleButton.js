import React, { Fragment } from 'react'

export default function ToggleButton(props) {
    const { options, onChange, activeOption } = props;
    
    return (
        <div className="btn-group btn-group-toggle" data-toggle="buttons">
            {options.map((option, index) => {
                return <label key={index} className={"btn app-toggle-btn btn-sm ".concat(activeOption == option.title ? 'active' : '')}>
                    <input type="radio" name="options" id={'tp-'.index} autoComplete="off" checked={activeOption == option.title} onClick={() => onChange(option)} /> {option.title}
                    </label>
            })}
        </div>
    );
}