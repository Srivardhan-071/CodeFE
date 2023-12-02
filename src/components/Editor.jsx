import React from "react";
import AceEditor from "react-ace";

import "ace-builds/src-noconflict/mode-html";
import "ace-builds/src-noconflict/mode-css";
import "ace-builds/src-noconflict/mode-javascript";
import "ace-builds/src-noconflict/theme-dracula";

export default function Editor(props) {

    const {
        language,
        onChange,
        displayName
    } = props
    return (
        <>
            <h4 className="mode-name">{displayName}</h4>
            <AceEditor
                className="ace-editor"
                height="300px"
                width="400px"
                setOptions={{
                    useWorker: false
                }}
                mode={language}
                theme="dracula"
                onChange={onChange}
                name="UNIQUE_ID_OF_DIV"
                defaultValue={null}
                fontSize="15px"
                editorProps={{ $blockScrolling: true }}
            />
        </>
    );
};