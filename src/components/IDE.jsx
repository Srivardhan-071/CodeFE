import React, { useState } from 'react'
import Editor from './Editor'

export default function IDE() {
    const [html, sethtml] = useState("")
    const [css, setcss] = useState("")
    const [JS, setJS] = useState("")

    const defualtJS = "document.body.style.background = 'white'"

    const srcDoc = `
    <html>${html}</html>
    <style>${css}</style>
    <script>${defualtJS}</script>
    <script>${JS}</script>
    `

    function onChangeHtml(newValue) {
        sethtml(newValue)
    }
    function onChangeCss(newValue) {
        setcss(newValue)
    }
    function onChangeJS(newValue) {
        setJS(newValue)
    }

    return (
        <div className='ide'>
            <div className="editors">
                <Editor language="html" onChange={onChangeHtml} displayName="HTML" height="300px" width="400px" />
                <Editor language="css" onChange={onChangeCss} displayName="CSS" height="300px" width="400px" />
                <Editor language="javascript" onChange={onChangeJS} displayName="JS" height="300px" width="400px" />
            </div>

            <iframe
                className='frame'
                srcDoc={srcDoc}
                title="code"
                frameBorder="0"
            />
        </div>
    )
}
