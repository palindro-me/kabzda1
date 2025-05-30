import {Rating, RatingValueType} from './components/Rating/Rating.tsx';
import {useState} from 'react';
import {UncontrolledRating} from './components/UncontrolledRating/UncontrolledRating.tsx';
import Accordion from './components/Accordion/Accordion.tsx';
import {OnOff} from './components/OnOff/OnOff.tsx';

function App() {
    console.log('App rendered');


    const [ratingValue, setRatingValue] = useState<RatingValueType>(0);
    const [accordionCollapsed, setAccordionCollapsed] = useState<boolean>(false);
    const [switchOn, setSwitchOn] = useState<boolean>(false);




    return (
        <div className={'App'}>
            <OnOff on={switchOn} onClick={() => setSwitchOn(!switchOn)}/>

            <Rating value={ratingValue} onClick={setRatingValue}/>
            <UncontrolledRating/>

            <Accordion titleValue={'Menu'}
                       collapsed={accordionCollapsed}
                       onChange={() => setAccordionCollapsed(!accordionCollapsed)}/>

            {/*<Accordion titleValue={'Menu'} collapsed={false}/>*/}
            {/*<UncontrolledAccordion titleValue={'Menu'}/>*/}

            {/*<UncontrolledRating/>*/}

            {/*<Rating value={3}/>*/}

            {/*<Accordion titleValue="Menu" collapsed={true}/>*/}
            {/*<Accordion titleValue="Users" collapsed={false}/>*/}

        </div>
    );
}

export default App;
// type PageTitlePropsType = {
//     title: string
// }

// function PageTitle(props: PageTitlePropsType) {
//
//     console.log('PageTitle rendered');
//     return <h1>{props.title}</h1>;
// }



