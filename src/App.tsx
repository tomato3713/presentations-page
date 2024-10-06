// import "./App.css";
import Data from "./assets/list.json";

function App() {
  const slides = Data.proposal;

  return (
    <>
      <h1>Presentations</h1>
      <div className="card">
        {slides.map((slide) => {
          return (
            <article>
              <a href={slide.url} target="_blank">
                <img src={slide.ogimage} alt={slide.title} loading="lazy" />
              </a>
              <h3>{slide.title}</h3>
              <p>{slide.event.date}</p>
            </article>
          );
        })}
      </div>
    </>
  );
}

export default App;
