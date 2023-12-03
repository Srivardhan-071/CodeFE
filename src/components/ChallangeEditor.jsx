import React, { useState } from 'react'
import Editor from './Editor'
import '../styles/ChallangeEditor.css'
import image from "../images/best.png"

export default function ChallangeEditor() {

    const [code, setCode] = useState("")

    const defualtJS = "document.body.style.background = 'white'"

    const srcDoc = `
        <html>${code}</html>
        <script>${defualtJS}</script>
    `

    function onChangeCode(newValue) {
        setCode(newValue)
    }
    return (
        <div className='ChallangeEditor'>
            <div>
                <Editor language="html" onChange={onChangeCode} displayName="Code Here" width="800px" height="95%" codes={true} />
            </div>
            <div className="images">
                <iframe
                    className='challange'
                    title='challange'
                    srcDoc={srcDoc}
                    width="400px"
                    height="300px"
                    frameBorder="0"
                />
                <img src={image} alt="challange" />
            </div>
        </div>
    )
}
