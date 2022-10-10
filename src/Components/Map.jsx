import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';

// import libraryLocations from '../assets/libraryLocations.json';
import libraryLocations from '../assets/locations.json';
import USMap from '../assets/north-america.json';
// const USMap = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';
// import USMap from './assets/us-albers-counties.json';
// import USMap from './assets/5m-US-counties.json';
// import USMap from './assets/10m.json';

const Map = () => {
  const geoURL = USMap;
  return (
    <ComposableMap
      project="geoEqualEarth"
      projectionConfig={{
        scale: 400,
        center: [-100, 55]
      }}
    >
      <Geographies geography={geoURL}>
        {({ geographies }) =>
          geographies.map((geo) => (
            <Geography
              key={geo.rsmKey}
              geography={geo}
              fill="#FFF"
              stroke="#06F"
              strokeWidth={1}
            />
          ))
        }
      </Geographies>
      {libraryLocations.map((library) => (
        <Marker
          onClick={() => console.log(library.library)}
          key={library.longitude + Math.random()}
          coordinates={[library.longitude, library.latitude]}
        >
          <circle r={2} fill="#F00" stroke="#fff" strokeWidth={1} />
        </Marker>
      ))}
    </ComposableMap>
  );
};

export default Map;
