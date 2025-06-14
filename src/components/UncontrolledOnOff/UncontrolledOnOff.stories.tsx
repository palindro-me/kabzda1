import {action} from 'storybook/actions';
import {UncontrolledOnOff} from './UncontrolledOnOff.tsx';


export default {
    title: 'OnOff Component Story',
    component: UncontrolledOnOff
};

const callback = action('fff')

export const onModeFunction = () => <UncontrolledOnOff onChange={callback}  defaultOn={true}/>
export const offModeFunction = () => <UncontrolledOnOff onChange={callback}  defaultOn={false}/>
// export const BugMode = () => <UncontrolledOnOff onChange={callback}  defaultOn={false}/>
// }
export const DefaultInputValue = () => <input defaultValue={'ya'} />