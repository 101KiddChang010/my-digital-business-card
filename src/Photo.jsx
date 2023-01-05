import './App.css'
import HeadShot from './assets/headshot.jpg';

function Photo() {
    return (
        <div className="photo">
            <img src={HeadShot} />
        </div>
    )
}

export default Photo;