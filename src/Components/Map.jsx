import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
  Annotation,
  ZoomableGroup
} from 'react-simple-maps';
import { useState, useEffect, useRef, memo } from 'react';
import libraryLocations from '../assets/locations.json';
import USMap from '../assets/north-america.json';
// const USMap = 'https://cdn.jsdelivr.net/npm/us-atlas@3/states-10m.json';
// import USMap from '../assets/us-albers-counties.json';
// import USMap from '../assets/5m-US-counties.json';
// import USMap from '../assets/10m.json';

const Map = ({ setTooltipContent }) => {
  const populateMapRate = 500;
  const timerRef = useRef(null);
  const [mappedLibraries, setMappedLibraries] = useState([]);
  const [position, setPosition] = useState({ coordinates: [0, 0], zoom: 1 });

  let index = -1;

  function handleMoveEnd(position) {
    setPosition(position);
  }

  useEffect(() => {
    // Sets interval to populate map with markers
    timerRef.current = setInterval(() => {
      index++;
      if (index > libraryLocations.length - 1) {
        clearInterval(timerRef.current);
      } else {
        setMappedLibraries((prevState) => {
          return [...prevState, libraryLocations[index]];
        });
      }
    }, populateMapRate);
    return () => {
      clearInterval(timerRef.current);
    };
  }, [index]);

  return (
    <div data-tip="">
      <ComposableMap projection="geoAlbers">
        <ZoomableGroup
          zoom={position.zoom}
          onMoveEnd={handleMoveEnd}
          center={position.coordinates}
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
              <>
                <Marker
                  key={library.longitude + Math.random()}
                  coordinates={[library.longitude, library.latitude]}
                  onMouseEnter={() =>
                    setTooltipContent(`${library.googleMapsName}`)
                  }
                  onMouseLeave={() => setTooltipContent('')}
                >
                  <circle r={0.5} fill="#F10" stroke="#fff" strokeWidth={0} />
                </Marker>
                <Annotation
                  subject={[
                    mappedLibraries[mappedLibraries.length - 1].longitude,
                    mappedLibraries[mappedLibraries.length - 1].latitude
                  ]}
                  dx={0}
                  dy={0}
                >
                  <text fontSize={10} alignmentBaseline="middle">
                    {mappedLibraries[mappedLibraries.length - 1].googleMapsName}
                  </text>
                </Annotation>
              </>
            ))}
        </ZoomableGroup>
      </ComposableMap>
    </div>
  );
};

export default memo(Map);
