import './App.css'
import HeadShot from './assets/headshot.jpg';

function Photo() {
    return (
        <div>
            <img className="photo" src={HeadShot} />
        </div>
    )
}

export default Photo;