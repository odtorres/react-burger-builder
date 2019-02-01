import React from 'react'
import clasess from './BuildControls.css'
import BuildControl from './BuildControl/BuildControl'

const controls = [
    { label: 'Salad', type: 'salad' },
    { label: 'Bacon', type: 'bacon' },
    { label: 'Cheese', type: 'cheese' },
    { label: 'Meat', type: 'meat' }
]

const buildControls = (props) => ( 
    <div className={clasess.BuildControls}>
    <p>Current Price: <strong> {props.price.toFixed(2)}</strong> php</p>
    {controls.map(control=>(
        <BuildControl 
            key={control.label} 
            label={control.label} 
            added={()=>props.ingredientAdded(control.type)}
            removed={()=>props.ingredientRemoved(control.type)}
            disabled={props.disabled[control.type]}/>
    ))}
    <button className={clasess.OrderButton} 
            disabled={!props.purchaseable}
            onClick={props.ordered}> ORDER NOW</button>
    </div>
)

export default buildControls;