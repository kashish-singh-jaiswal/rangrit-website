import { Link } from "react-router-dom";

function StoryCard({ story }) {
  return (
    <Link to={`/story/${story.slug}`} className="story-card">

      <img src={story.cover} alt={story.title} />

      <div className="story-overlay">

        <span>{story.location}</span>

        <h3>{story.title}</h3>

        <p>{story.couple}</p>

        <button>View Story →</button>

      </div>

    </Link>
  );
}

export default StoryCard;