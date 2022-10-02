import Map from './Map';

// import USMap from './assets/us-albers-counties.json';
// import USMap from './assets/5m-US-counties.json';
// import USMap from './assets/10m.json';
import { libraries } from './assets/coordinates.js';

function App() {
  return (
    <div className="App">
      <Map libraries={libraries} />
    </div>
  );
}

export default App;
