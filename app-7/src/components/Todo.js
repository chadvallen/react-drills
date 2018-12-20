import React from 'react';

export default function Todo(props) {
    let what = props.adder.map(element => {
        return (
            <div>
                <h2>{element}</h2>
            </div>
        )
    })
    return (
        <div>
            {what}
        </div>
    )
}