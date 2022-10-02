import {
  ComposableMap,
  Geographies,
  Geography,
  Marker
} from 'react-simple-maps';
import USMap from './assets/north-america.json';

const Map = ({ libraries }) => {
  const geoURL = USMap;
  return (
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
  );
};

export default Map;
