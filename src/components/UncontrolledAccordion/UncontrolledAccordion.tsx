import {useState} from 'react';

type AccordionPropsType = {
    titleValue: string;
    //collapsed: boolean

}

export function UncontrolledAccordion(props: AccordionPropsType) {
    const [collapsed, setCollapsed] = useState(false);


        return (
            <div>
                <AccordionTitle title={props.titleValue} onClick={() => {setCollapsed(!collapsed)}}/>

                {!collapsed && <AccordionBody/>}
            </div>
        )
    }


type AccordionTitlePropsType = {
    title: string;
    onClick: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('Accordion title rendering');
    return <h3 onClick={() => {props.onClick()}}>---{props.title}---</h3>;
}

function AccordionBody() {

    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>;
}

export default UncontrolledAccordion;