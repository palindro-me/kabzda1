type AccordionPropsType = {
    titleValue: string;
    collapsed: boolean
    onChange: () => void

}

function Accordion(props: AccordionPropsType) {


    return (
        <div>
            <AccordionTitle title={props.titleValue} onChange={props.onChange}/>
            {!props.collapsed && <AccordionBody/>}
        </div>
    );
}


// function Accordion2(props: AccordionPropsType) {
//     if (props.collapsed === true) {
//         return (
//             <div>
//                 {true}
//                 {1}
//                 {false}
//                 <AccordionTitle title={props.titleValue}/>
//             </div>
//         );
//     } else {
//         return (
//             <div>
//                 <AccordionTitle title={props.titleValue}/>
//                 <AccordionBody/>
//             </div>
//         );
//     }
//
// }

type AccordionTitlePropsType = {
    title: string;
    onChange: () => void
}

function AccordionTitle(props: AccordionTitlePropsType) {
    console.log('Accordion title rendering');
    return <h3 onClick={() => props.onChange()}>{props.title}</h3>;
}

function AccordionBody() {
    console.log('AccordionBody title rendering');
    return <ul>
        <li>1</li>
        <li>2</li>
        <li>3</li>
    </ul>;
}

export default Accordion;