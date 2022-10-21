import './styles.css';
import { Content } from './Content'
import {Nav} from './Nav'
import './image/pepsi.png';
import './image/pepsiClip.png';

export const Wrapper = () => {
    return(
    <div className='wrapper'>
        <div className='hero-bg'></div>
        <div className='clip-video'></div>
        < Nav />
        < Content />
        </div>
    );
}