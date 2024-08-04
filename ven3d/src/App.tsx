import React from 'react';
import './App.css';
import { Cartesian3 } from "cesium";
import { Viewer, Entity } from "resium";

const position = Cartesian3.fromDegrees(-74.0707383, 40.7117244, 100);
const pointGraphics = { pixelSize: 10 };

function App() {
  return (
    <Viewer
      fullscreenButton={false} //全屏按钮
      homeButton={false} // 主页按钮
      infoBox={false} // 信息框
      sceneModePicker={false} // 场景模式选择器
      timeline={false} // 时间轴
      navigationHelpButton={false} // 导航帮助按钮
      animation={false} // 动画控件
      geocoder={false} // 地理编码器
      baseLayerPicker={false} // 基础图层选择器
      vrButton={false} // 虚拟现实按钮
      full>
      <Entity position={position} point={pointGraphics} />
    </Viewer>
  );
}

export default App;
