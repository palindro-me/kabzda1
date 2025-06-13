import {OnOff} from './OnOff.js';
import {useState} from 'react';
// import {action} from '@storybook/addon-actions';
// import {action} from '@storybook/preview-api';
// import {action} from '@storybook/addon-actions';
// import {actions} from '@storybook/addon-actions';
import {action} from 'storybook/actions';


export default {
    title: 'OnOff Component Story',
    component: OnOff
}
let callback = action('on or off clicked')
export const OnMode = () => {
   return <OnOff on={true} onChange={callback}/>
}


export const OffMode = () => {
   return  <OnOff on={false} onChange={callback}/>
}

export const ModeChanging = () => {
    const [value, setValue] = useState<boolean>(true)
    
    return <OnOff on={value} onChange={setValue}/>
}