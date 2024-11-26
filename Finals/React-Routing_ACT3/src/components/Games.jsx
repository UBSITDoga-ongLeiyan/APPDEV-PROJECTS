import { Link } from 'react-router-dom'

const games = [
    {id: 1, name: 'Teamfight Tactics', description: 'This is number 1 auto battling game.'},
    {id: 2, name: 'Valorant', description: 'This is the number one FPS game.'},
    {id: 3, name: '2XKO', description: 'This is the number one tag team fighting game.'},
    {id: 4, name: 'League of Legends', description: 'This is the number one moba game.'}
];

export default function Games() {
    return (
        <>
            <h1>Games List: </h1>
            <ul>
                {games.map((game) => (
                    <li key = {game.id}>
                        <Link to = {`/games/${game.id}`} state={{ game }}><strong>{game.name}</strong></Link>= {game.description}
                    </li>
                ))}
            </ul>
        </>
    );
}