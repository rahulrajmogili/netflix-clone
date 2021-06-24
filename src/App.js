import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Hey! Let's build netflix clone.</h1>

      <Row title="Popular on Netflix" fetchURL = {requests.fetchPopular}></Row>
      <Row title="Top Rated Movies" fetchURL = {requests.fetchTopRated}></Row>
      <Row title="Popular Movies" fetchURL = {requests.fetchPopular}></Row>
      <Row title="Trending Movies" fetchURL = {requests.fetchTrending}></Row>
      <Row title="Top Rated TV" fetchURL = {requests.fetchTopRatedTV}></Row>
    </div>
  );
}

export default App;