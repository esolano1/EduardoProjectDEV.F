import { useState } from "react";
import { useNavigate } from "react-router-dom";
import TweetForm from "../components/TweetForm";
import TweetList from "../components/TweetList";

const Profile = ({ user }) => {
  const [tweets, setTweets] = useState([]);
  const navigate = useNavigate(); // ⬅️ Aquí está la magia

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
      <h1>Perfil</h1>

      <button onClick={() => navigate(-1)}>← Volver</button> {/* 👈 Botón de retroceso */}

      {user ? (
        <>
          <p>Nombre de usuario: {user.username}</p>
          <h2>Mis Tweets</h2>
          <TweetForm onAddTweet={handleAddTweet} />
          <TweetList tweets={tweets} onLike={handleLike} />
        </>
      ) : (
        <p>No estás autenticado.</p>
      )}
    </div>
  );
};

export default Profile;
