import {useState} from 'react';
import {useRef} from 'storybook/preview-api';

export default {
    title: 'input',

}
export const UncontrolledInput = () => <input/>
export const TrackedValueOfUncontrolledInputWith = () => {
    const [value, setValue] = useState('')

   return <>  <input onChange={e => {
     const actualValue =  e.currentTarget.value;
   setValue(actualValue)
   }}/>-{value}</>

}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null);

return <>
    <input ref={inputRef} />
    <button onClick={() => {setValue(inputRef.current.value)}}>Save</button>
    - actual value {value}
</>

}



export const ControlledInputWithFixedValue = () => <input value={'incubator'}/>