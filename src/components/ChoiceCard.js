import React from 'react'

export default function ChoiceCard(props) {
    console.log("kekek", props)

    return (
        <div className={`box`}>
            <h1> {props.title}</h1>
            <img src={props.choice.url} />

            <h3>{props.finalResult}</h3>




        </div>

    )
}
