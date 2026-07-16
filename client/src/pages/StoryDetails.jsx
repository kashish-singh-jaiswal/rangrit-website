import { useParams } from "react-router-dom";
import stories from "../data/stories";

function StoryDetails() {
  const { slug } = useParams();

  const story = stories.find((item) => item.slug === slug);

  if (!story) {
    return <h2>Story Not Found</h2>;
  }

  return (
    <>
      <img
        src={story.cover}
        alt={story.title}
        style={{ width: "100%", height: "80vh", objectFit: "cover" }}
      />

      <div className="container py-5">
        <h1>{story.title}</h1>

        <h4>{story.couple}</h4>

        <p>{story.location}</p>

        <p>{story.description}</p>

        {/* Later we'll add gallery, videos and reels here */}
      </div>
    </>
  );
}

export default StoryDetails;