import './App.css';
import Row from './Row'
import requests from './requests';

function App() {
  return (
    <div className="App">
     hey What's up
     <Row 
     title="NETFLIX ORIGINALS"
     fetchURL={requests.fetchNetflixOriginals}
     isLarge></Row>
     <Row title="Trending Now" fetchURL={requests.fetchTrending}></Row>
     <Row title="Top Rated" fetchURL={requests.fetchTopRated}></Row>
     <Row title="Action Movies" fetchURL={requests.fetchActionMovies}></Row>
     <Row title="Comedy Movies" fetchURL={requests.fetchComedyMovies}></Row>
     <Row title="Horror Movies" fetchURL={requests.fetchHorrorMovies}></Row>
     <Row title="Romance Movies" fetchURL={requests.fetchRomanceMovies}></Row>
     <Row title="Documentries" fetchURL={requests.fetchDocumentaries}></Row>
    </div>
  );
}

export default App;
