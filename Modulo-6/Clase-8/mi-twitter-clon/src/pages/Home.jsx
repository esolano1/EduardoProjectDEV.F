import { useState } from "react";
import TweetForm from "../components/TweetForm";
import TweetList from "../components/TweetList";
import { Link } from "react-router-dom";

const Home = ({ user, logout }) => {
  const [tweets, setTweets] = useState([]);

  const handleAddTweet = (text) => {
    const newTweet = {
      id: Date.now(),
      text,
      likes: 0,
    };
    setTweets([newTweet, ...tweets]);
  };

  const handleLike = (id) => {
    const updatedTweets = tweets.map((tweet) =>
      tweet.id === id ? { ...tweet, likes: tweet.likes + 1 } : tweet
    );
    setTweets(updatedTweets);
  };

  return (
    <div>
      <h1>Bienvenido a Twitter</h1>

      {user ? (
        <>
          <p>Hola, {user.username}!</p>
          <button onClick={logout}>Cerrar sesión</button>
          <p><Link to="/profile">Ir a mi perfil</Link></p>

          <h2>Timeline</h2>
          <TweetForm onAddTweet={handleAddTweet} />
          <TweetList tweets={tweets} onLike={handleLike} />
        </>
      ) : (
        <p>
          No has iniciado sesión. <Link to="/login">Inicia sesión aquí</Link>
        </p>
      )}
    </div>
  );
};

export default Home;
