import { Link } from 'react-router-dom';
import '../App.css'; // Assicurati che il percorso del CSS sia corretto

function Home() {
    return (
        <div className="home-container">
            <h1>Se vuoi divertirti sei nel posto giusto!</h1>
            <p style={{ textAlign: 'center', fontSize: '1.2rem', color: '#64748b' }}>
                Seleziona una categoria!
            </p>

            <div className="card-container">
                {/* Card Programming */}
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1515879218367-8466d910aaa4?w=500" alt="Programming" />
                    <div className="card-content">
                        <h3>Programming</h3>
                        <Link to='/pages/SeeTenJokesProg' className="card-link">Esplora</Link>
                    </div>
                </div>

                {/* Card General */}
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1527224857830-43a7acc85260?w=500" alt="General" />
                    <div className="card-content">
                        <h3>General</h3>
                        <Link to='/pages/SeeTenJokesGeneral' className="card-link">Esplora</Link>
                    </div>
                </div>

                {/* Card Knock-knock */}
                <div className="card">
                    <img src="https://img.freepik.com/free-vector/hand-knocking-door-concept-illustration_114360-14304.jpg" alt="Knock-knock" />
                    <div className="card-content">
                        <h3>Knock-knock</h3>
                        <Link to='/pages/SeeJokesKK' className="card-link">Esplora</Link>
                    </div>
                </div>

                {/* Card Dad */}
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500" alt="Dad Jokes" />
                    <div className="card-content">
                        <h3>"Dad Jokes"</h3>
                        <Link to='/pages/SeeJokesDad' className="card-link">Esplora</Link>
                    </div>
                </div>

                {/* Card Joke of the Day */}
                <div className="card">
                    <img src="https://images.unsplash.com/photo-1533738363-b7f9aef128ce?w=500" alt="Joke of the Day" />
                    <div className="card-content">
                        <h3>Joke of the Day</h3>
                        <Link to='/pages/JokeOfTheDay' className="card-link">Guarda ora</Link>
                    </div>
                </div>

                {/* Card Send Your Joke */}
                <div className="card" style={{ border: '2px dashed #6e8efb' }}>
                    <img src="https://images.unsplash.com/photo-1517842645767-c639042777db?w=500" alt="Send Joke" />
                    <div className="card-content">
                        <h3>Send Your Joke</h3>
                        <p>Inviaci la tua battuta!</p>
                        <Link to='/pages/SendYourJoke' className="card-link" style={{ background: '#ffff' }}>CREA LA TUA BATTUTA</Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Home;