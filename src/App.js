import Map from './Map';
import libraryLocations from './assets/libraryLocations.json';

function App() {
  console.log(libraryLocations);
  return (
    <div className="App">
      <Map libraries={libraryLocations} />
    </div>
  );
}

export default App;
