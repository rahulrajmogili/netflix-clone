import "./App.css";
import NetflixLogo from "./images/netflix_logo.png";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <img src={NetflixLogo} alt="Neflix clone" class="logo__netflix" />
      <Row
        title="Popular on Netflix"
        fetchURL={requests.fetchPopular}
        isLargeRow
      ></Row>
      {/* here isLargeRow is true*/}
      <Row title="Top Rated Movies" fetchURL={requests.fetchTopRated}></Row>
      <Row title="Popular Movies" fetchURL={requests.fetchPopular}></Row>
      <Row title="Trending Movies" fetchURL={requests.fetchTrending}></Row>
      <Row title="Top Rated TV" fetchURL={requests.fetchTopRatedTV}></Row>
    </div>
  );
}

export default App;
