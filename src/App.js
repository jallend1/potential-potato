import { ComposableMap, Geographies, Geography } from 'react-simple-maps';
import USMap from './assets/us-albers-counties.json';
// import USMap from './assets/5m-US-counties.json';
// import USMap from './assets/10m.json';

function App() {
  const geoURL = USMap;

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
      </ComposableMap>
    </div>
  );
}

export default App;
