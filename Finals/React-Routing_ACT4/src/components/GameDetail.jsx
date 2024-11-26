// GameDetail.jsx
import React from 'react';
import { useParams } from 'react-router-dom';

const gamesData = [
  {
    id: 1,
    name: 'Minecraft',
    description: 'A sandbox game that allows players to build and explore their own worlds using blocks.',
    image: '../src/assets/minecraft.png',
    reviews: [
      { username: 'Gamer123', comment: 'Incredible story and world-building!' },
      { username: 'RPGFan', comment: 'Best RPG I have ever played!' },
      { username: 'QuestLover', comment: 'The side quests are amazing!' },
      { username: 'FantasyGeek', comment: 'Graphics are stunning!' },
      { username: 'HeroOfTime', comment: 'A must-play for all RPG fans!' }
    ]
  },
  {
    id: 2,
    name: 'DOOM Eternal',
    description: 'A fast-paced first-person shooter where you fight demons across various locations while using a wide array of weapons.',
    image: '../src/assets/doom-eternal.jpg',
    reviews: [
      { username: 'ActionJunkie', comment: 'Non-stop action and adrenaline!' },
      { username: 'FPSMaster', comment: 'The gameplay is incredibly satisfying!' },
      { username: 'DemonSlayer', comment: 'Great level design and combat mechanics!' },
      { username: 'GamerX', comment: 'The soundtrack is epic!' },
      { username: 'SpeedRunner', comment: 'Perfect for speedrunning!' }
    ]
  },
  {
    id: 3,
    name: 'Stardew Valley',
    description: 'A farming simulation game where you can grow crops, raise animals, and build relationships in a charming village.',
    image: '../src/assets/stardew.jpg',
    reviews: [
      { username: 'FarmLife', comment: 'So relaxing and addictive!' },
      { username: 'NatureLover', comment: 'I love the pixel art style!' },
      { username: 'CozyGamer', comment: 'Perfect escape from reality!' },
      { username: 'HarvestQueen', comment: 'Endless possibilities in gameplay!' },
      { username: 'VillageHero', comment: 'Great for casual gaming!' }
    ]
  },
  {
    id: 4,
    name: 'Cyberpunk 2077',
    description: 'An open-world RPG set in a dystopian future where you play as V, a mercenary navigating the streets of Night City.',
    image: '../src/assets/cyberpunk.jpg',
    reviews: [
      { username: 'TechWizard', comment: 'The world is so immersive!' },
      { username: 'StorySeeker', comment: 'Great narrative and character depth!' },
      { username: 'NightCityDweller', comment: 'A bit buggy but still enjoyable!' },
      { username: 'FutureFan', comment: 'Visuals are outstanding!' },
      { username: 'RogueAgent', comment: 'Love the customization options!' }
    ]
  },
  {
    id: 5,
    name: 'Among Us',
    description: 'A multiplayer game where players work together to complete tasks on a spaceship while trying to identify the impostors among them.',
    image: '../src/assets/among-us.jpg',
    reviews: [
      { username: 'SocialGamer', comment: 'So much fun with friends!' },
      { username: 'ImpostorHunter', comment: 'Great for parties!' },
      { username: 'CrewmateMaster', comment: 'Love the teamwork aspect!' },
      { username: 'SneakyPlayer', comment: 'The tension is thrilling!' },
      { username: 'GameNightPro', comment: 'Perfect for strategy lovers!' }
    ]
  }
];

const GameDetail = () => {
  const { gameId } = useParams();
  const game = gamesData.find(g => g.id === parseInt(gameId));

  if (!game) {
    return <div>Game not found!</div>;
  }

  return (
    <div className="container">
      <h1>{game.name}</h1> <br></br>
      <img src={game.image} alt={game.name} /> 
      <p>{game.description}</p> <br></br>
      <h3>Reviews:</h3>
      <ul>
        {game.reviews.map((review, index) => (
          <li key={index}>
            <strong>{review.username}</strong>: {review.comment}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default GameDetail;