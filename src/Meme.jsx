import React from "react"

export default function Meme () {
    const [meme, setMeme] = React.useState({
        topText: "",
        bottomText: "",
        randomImage: "http://i.imgflip.com/1bij.jpg" 
    })
    const [allMemes, setAllMemes] = React.useState([])

    React.useEffect(() => {
        async function getMemes() {
            const res = await fetch("https://api.imgflip.com/get_memes")
            const data = await res.json()
            setAllMemes(data.data.memes)
        }
        getMeme()
    }, [])
    
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