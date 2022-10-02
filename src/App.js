import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  ZoomableGroup
} from 'react-simple-maps';
// import USMap from './assets/us-albers-counties.json';
// import USMap from './assets/5m-US-counties.json';
// import USMap from './assets/10m.json';
import { libraries } from './assets/coordinates.js';
import USMap from './assets/north-america.json';

function App() {
  const geoURL = USMap;
  return (
    <div className="App">
      <ComposableMap
        project="geoAlbers"
        projectionConfig={{
          scale: 400,
          center: [-125, 50],
          rotate: [0, 0, 0]
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
            onClick={() => console.log(library.library)}
            key={library.longitude + Math.random()}
            coordinates={[library.longitude, library.latitude]}
          >
            <circle r={2} fill="#F00" stroke="#fff" strokeWidth={1} />
            {/* <text
              textAnchor="middle"
              y={-10}
              style={{ fontFamily: 'system-ui', fill: '#5D5A6D', fontSize: 2 }}
            >
              {library.library}
            </text> */}
          </Marker>
        ))}
      </ComposableMap>
    </div>
  );
}

export default App;
