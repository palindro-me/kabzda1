import {UncontrolledRating} from './UncontrolledRating.tsx';
import {action} from 'storybook/actions';


export default {
    title: 'UncontrolledRating',
    component: UncontrolledRating
};

export const EmptyStarts = () => <UncontrolledRating defaultValue={0}   onChange = {action('cc')}/>
export const Rating1 = () => <UncontrolledRating defaultValue={1} onChange = {action('cc')}/>
export const Rating2 = () => <UncontrolledRating defaultValue={2} onChange = {action('cc')}/>
export const Rating3 = () => <UncontrolledRating defaultValue={3} onChange = {action('cc')}/>
export const Rating4 = () => <UncontrolledRating defaultValue={4} onChange = {action('cc')}/>
export const Rating5 = () => <UncontrolledRating defaultValue={5} onChange = {action('cc')}/>



