import {useState} from 'react'

export const useTestHook = ()=> {
    const [text, setText] = useState() as [any, (e:React.ChangeEvent<Element>)=>void]
    return [text, setText]
}