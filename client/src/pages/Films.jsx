import films from "../data/filmsData";
import FilmCard from "../components/films/FilmCard";
import "../styles/films.css";

function Films() {
  return (
    <section className="films-page">

      <div className="films-content">

        <p className="films-text">
          Cinema is all about leaving the viewer awestruck and that's what we believe
          our wedding films to do. They have a thousand things to tell you when you
          watch them and the essence of emotion in every wedding movie makes it
          special for the spectator.
        </p>

        <p className="films-text">
          We base our work on the content we gather in a wedding and our idea is
          always to give a refreshing look to the movie while keeping up with the
          vivid emotions of each wedding.
        </p>

        <p className="films-text">
          Moreover, it's amazing how some stories turn out to be so beautiful. It's
          just us capturing the warmth in their love that makes these wedding films
          look so mesmerizing.
        </p>

      </div>

      <div className="films-grid">
        {films.map((film) => (
          <FilmCard key={film.id} film={film} />
        ))}
      </div>

    </section>
  );
}

export default Films;