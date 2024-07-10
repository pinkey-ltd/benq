import React from 'react';
import './App.css';
import { Cartesian3 } from "cesium";
import { Viewer, Entity } from "resium";

const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
const pointGraphics = { pixelSize: 10 };


function App() {
  return (
    <Viewer full>
      <Entity position={position} point={pointGraphics} />
    </Viewer>
  );
}

export default App;
