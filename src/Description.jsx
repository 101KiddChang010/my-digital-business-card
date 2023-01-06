import './App.css'

function Description() {
    return (
        <div>
            <div className="title">
                <h1>Laura Smith</h1>
                <h3>Frontend Developer</h3>
                <p>lauraSmith.website</p>
            </div>
            <div className="button">
                <form action="">
                    <button href="" className="email">
                        <i className="fa-solid fa-envelope"></i><span>Email</span>
                    </button>
                </form>
                <form action="">
                    <button href="" className="linkedin">
                        <i className="fa-brands fa-linkedin"></i><span>LinkedIn</span>
                    </button>
                </form>
            </div>
            <div className="about">
                <h2>About</h2>
                <p>
                    I am a frontend developer with a particular interest in making things simple and automating daily tasks. I try to keep up with security and best practices, and am always looking for new things to learn.
                </p>
                <h2>Interests</h2>
                <p>
                    Food expert. Music scholar. Reader. Internet fanatic. Bacon buff. Entrepreneur. Travel geek. Pop culture ninja. Coffee fanatic.
                </p>
            </div>
        </div>
    )
}

export default Description;