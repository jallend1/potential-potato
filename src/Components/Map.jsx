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
  return (
    <ComposableMap
      projection="geoAlbers"
      projectionConfig={{ scale: 450, center: [-10, 45] }}
    >
      <Geographies geography={USMap}>
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
          <circle r={1.2} fill="#F10" stroke="#fff" strokeWidth={1} />
        </Marker>
      ))}
      {/* {setInterval(() => {
        const newDiv = document.createElement('div');
        newDiv.innerHTML = 'This is gonna be a marker someday!';
        document.body.appendChild(newDiv);
      }, 1000)} */}
    </ComposableMap>
  );
};

export default Map;
