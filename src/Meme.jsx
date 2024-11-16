import React from "react"

export default function Meme () {
    return (
        <main>
            <form className = "form">
                <input className = "form--input" placeholder = "Shut up" type = "text" />
                <input className = "form--input" placeholder = "and take my money" type = "text" />
                <button className = "form--button">Get a new meme image🖼️</button>
            </form>
        </main>
    )
}