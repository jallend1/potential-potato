import Map from './Map';
import { libraries } from './assets/coordinates.js';

function App() {
  return (
    <div className="App">
      <Map libraries={libraries} />
    </div>
  );
}

export default App;
