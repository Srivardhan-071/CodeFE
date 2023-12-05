import React, { useContext, useState } from 'react';
import Editor from './Editor';
import '../styles/ChallangeEditor.css';
import ChallangesContext from '../context/ChallangesContext';

export default function ChallangeEditor() {

    const { challangeImage } = useContext(ChallangesContext)

    const [code, setCode] = useState('');

    const defaultJS = "document.body.style.background = 'white';";

    const srcDoc = `
        <html>${code}</html>
        <script>${defaultJS}</script>
    `;

    function onChangeCode(newValue) {
        setCode(newValue);
    }

    return (
        <div className='ChallangeEditor'>
            <div>
                <Editor language="html" onChange={onChangeCode} displayName="Code Here" width="800px" height="95%" codes={true} />
            </div>
            <div className="images">
                <img src={challangeImage} alt="challenge" className='compare-image' />
                <iframe
                    className='challange'
                    title='challange'
                    srcDoc={srcDoc}
                    width="400px"
                    height="300px"
                    frameBorder="0"
                />
                <img src={challangeImage} alt="challenge" />
            </div>
        </div>
    );
}
