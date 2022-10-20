import { useState } from 'react';
import Header from './Components/Header';
import Map from './Components/Map';
import ReactTooltip from 'react-tooltip';

function App() {
  const [tooltipContent, setTooltipContent] = useState('');
  return (
    <div className="App">
      <Header />
      <Map setTooltipContent={setTooltipContent} />
      <ReactTooltip>{tooltipContent}</ReactTooltip>
    </div>
  );
}

export default App;
