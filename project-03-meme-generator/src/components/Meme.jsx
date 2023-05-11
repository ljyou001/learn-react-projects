import React from 'react'
import memesData from "../memesData.js"
export default function Header() {
    const [memeUrl, setMemeUrl] = React.useState()
    function getMemeImage(){
        let memeItem = Math.floor(Math.random() * memesData.data.memes.length)
        setMemeUrl(memesData.data.memes[memeItem].url)
    }

    return (
        <main>
            <div className="form">
                <input
                    type="text" 
                    className="form--input" 
                    defaultValue={"Shut up"} />
                <input
                    type="text" 
                    className="form--input"
                    defaultValue={"and take my money"} />
                <button 
                    className="form--button"
                    onClick={getMemeImage}
                >
                    Get a new meme image 🖼
                </button>
            </div>
            <img src={memeUrl} alt="meme" className="meme--image" />
        </main>
    )
}