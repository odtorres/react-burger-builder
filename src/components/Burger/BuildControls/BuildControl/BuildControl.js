import React from 'react'
import clasess from './BuildControl.css'

const buildControl = (props) => (
    <div className={clasess.BuildControl }>
        <div className={clasess.Label}>{props.label}</div>
        <button 
            className={clasess.More} onClick={props.added} >More</button>
        <button 
            className={clasess.Less} onClick={props.removed} disabled={props.disabled}>Less</button>
    </div>
)

export default buildControl;