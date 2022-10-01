import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from 'react-simple-maps';
import USMap from './assets/us-albers-counties.json';
import { libraries } from './assets/coordinates.js';
// import USMap from './assets/5m-US-counties.json';
// import USMap from './assets/10m.json';

function App() {
  const geoURL = USMap;
  console.log(libraries);
  return (
    <div className="App">
      <ComposableMap
        project="geoAlbers"
        projectionConfig={{
          scale: 800,
          center: [-98, 35]
        }}
      >
        <Geographies geography={geoURL}>
          {({ geographies }) =>
            geographies.map((geo) => (
              <Geography key={geo.rsmKey} geography={geo} />
            ))
          }
        </Geographies>
        {libraries.map((library) => (
          <Marker
            key={library.longitude + Math.random()}
            coordinates={[library.longitude, library.latitude]}
          >
            <circle r={2} fill="#F00" stroke="#fff" strokeWidth={1} />
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}

export default App;
