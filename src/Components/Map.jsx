import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import { useState, useEffect, useRef } from 'react';
// import libraryLocations from '../assets/libraryLocations.json';
import libraryLocations from '../assets/locations.json';
import USMap from '../assets/north-america.json';
// const USMap = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';
// import USMap from './assets/us-albers-counties.json';
// import USMap from './assets/5m-US-counties.json';
// import USMap from './assets/10m.json';

const Map = () => {
  const timerRef = useRef(null);
  const [mappedLibraries, setMappedLibraries] = useState([]);
  let index = 0;

  useEffect(() => {
    timerRef.current = setInterval(() => {
      index++;
      if (index > libraryLocations.length - 1) {
        clearInterval(timerRef.current);
      } else {
        setMappedLibraries((prevState) => {
          return [...prevState, libraryLocations[index]];
        });
      }
    }, 100);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [index]);

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
      {mappedLibraries.length > 0 &&
        mappedLibraries.map((library) => (
          <Marker
            onClick={() => console.log(library.library)}
            key={library.longitude + Math.random()}
            coordinates={[library.longitude, library.latitude]}
          >
            <circle r={2} fill="#F10" stroke="#fff" strokeWidth={1} />
          </Marker>
        ))}
    </ComposableMap>
  );
};

export default Map;
