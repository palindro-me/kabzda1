// Replace your-framework with the framework you are using, e.g. react-vite, nextjs, nextjs-vite, etc.
import Accordion from './Accordion';
import {action} from 'storybook/actions';
import {useState} from 'react';

// в комментах код для сильных

// const meta = {
//   component: Accordion,
// } satisfies Meta<typeof Accordion>;
//
// export default meta;
//
// type Story = StoryObj<typeof Accordion>;
//
// export const FirstStory: Story = {
// args: {
//     titleValue: 'hello',
//     collapsed: true,
//     onChange: () => {
//         console.log('kkk');}
//   },
// }

//для учебного проекта используем так:

export default {
    title: 'Accordion',
    component: Accordion
}
const callback = action('accordion mode changes')

export const MenuCollapsedMode = () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} />
export const MenuUnCollapsedMode= () => <Accordion titleValue={'Menu'} collapsed={true} onChange={callback} />
export const ModeChanges = () => {
    const [value, setValue] = useState<boolean>(true);
    return <Accordion titleValue={'Users'} collapsed={value} onChange={() => setValue(!value)}/>
}


// const onChangeCallbackHandler = action('onChange')
// //action - позволяет логировать события (например, клики, изменения и т.п.) в интерфейсе Storybook
//
// export const CollapsedAccordion =() => {
//     return     <Accordion titleValue={'Collapsed Accordion'}
//                        collapsed={true}
//                        onChange={onChangeCallbackHandler}/>
// }
//
// export const OpenAccordion =() => {
//     return  <Accordion titleValue={'Opened Accordion'}
//                        collapsed={false}
//                        onChange={() => {}}/>
// }
//
// export const AccordionDemo =() => {
//     const [collapsed, setCollapsed] = useState(false);
//     return  <Accordion titleValue={'Accordion'}
//                        collapsed={collapsed}
//                        onChange={() => {setCollapsed(!collapsed)}}/>
// }
