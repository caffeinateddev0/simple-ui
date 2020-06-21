import React from 'react'
import {Header, useTestHook} from '../src/component-lib'

export default ()=>{
    const [text, setText] = useTestHook()
    return (
        <div>
            <Header>Hello</Header>
            <input 
                value={text as string}
                onChange={(e)=>setText(e.target.value)}
            />
        </div>
    )
}
