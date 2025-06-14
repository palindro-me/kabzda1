import {useState} from 'react';
import {RatingValueType} from '../Rating/Rating.tsx';

type RatingPropsType = {
defaultValue?: RatingValueType
    onChange: (value: RatingValueType) => void
}

export function UncontrolledRating(props: RatingPropsType) {
    console.log('rating rendered');

    const [value, setValue] = useState<RatingValueType>(props.defaultValue ?  props.defaultValue : 0);
    return (
        <div>
            <Star selected={value > 0} setValue={ ()=> {setValue(1);
              props.onChange(1);} }/>
            <Star selected={value > 1} setValue={ ()=> {setValue(2); props.onChange(2)} }/>
            <Star selected={value > 2} setValue={ ()=> {setValue(3); props.onChange(3)} }/>
            <Star selected={value > 3} setValue={ ()=> {setValue(4); props.onChange(4)} }/>
            <Star selected={value > 4} setValue={ ()=> {setValue(5); props.onChange(5)} }/>


        </div>);
}

type StarPropsType = {
    selected: boolean
    setValue: () => void
}

export function Star(props: StarPropsType) {
    console.log('start rendering');

    return <span onClick={() => {
        props.setValue();
    }}>
        {props.selected ? <b>star </b> : 'star '}
    </span>;

    // if (props.selected === true) {
    //     return <span><b>star </b></span>;
    // } else {
    //     return <span>star </span>;
    // }
    //
    // return <span><b>star </b></span>;
}