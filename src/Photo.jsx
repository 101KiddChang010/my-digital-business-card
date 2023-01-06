import './App.css'
import HeadShot from './assets/headshot.jpg';

function Photo() {
    return (
        <div>
            <img className="photo" src={HeadShot} alt="Portrait of a business woman" />
        </div>
    )
}

export default Photo;