import "./App.css";
import Row from "./Row";
import requests from "./requests";

function App() {
  return (
    <div className="App">
      <h1>Hey! Let's build netflix clone.</h1>

      <Row title="Latest Movies" fetchURL = {requests.fetchLatest}></Row>
      <Row title="Popular Movies" fetchURL = {requests.fetchPopular}></Row>
      <Row title="Top Rated Movies" fetchURL = {requests.fetchTopRated}></Row>
      <Row title="Trending Movies" fetchURL = {requests.fetchTrendingAllDay}></Row>
      <Row title="Trending Movies" fetchURL = {requests.fetchTrendingAllDay}></Row>
      <Row title="Popular Movies" fetchURL = {requests.fetchPopular}></Row>
      <Row title="Top Rated TV" fetchURL = {requests.fetchTopRatedTV}></Row>
      <Row title="Top Rated"></Row>
    </div>
  );
}

export default App;