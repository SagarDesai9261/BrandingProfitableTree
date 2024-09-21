import logo from './logo.svg';
import './App.css';
import TreeDisplay from './BrandingTree';

function App() {
  return (
    <div className="App">
      <TreeDisplay />
    </div>
  );
}

export default App;

// import React, { useState } from 'react';

// const jsonData = {
//     "id": "OWirINLLxpdrcik_hGxGS",
//     "type": "GRAPHIC",
//     "name": "Untitled Design",
//     "frame": {
//       "width": 300,
//       "height": 300
//     },
//     "scenes": [
//       {
//         "id": "9983puGyrGsEN-T4hadfF",
//         "layers": [
//           {
//             "id": "background",
//             "name": "Initial Frame",
//             "angle": 0,
//             "stroke": null,
//             "strokeWidth": 0,
//             "left": 0,
//             "top": 0,
//             "width": 300,
//             "height": 300,
//             "opacity": 1,
//             "originX": "left",
//             "originY": "top",
//             "scaleX": 1,
//             "scaleY": 1,
//             "type": "Background",
//             "flipX": false,
//             "flipY": false,
//             "skewX": 0,
//             "skewY": 0,
//             "visible": true,
//             "shadow": {
//               "color": "#fcfcfc",
//               "blur": 4,
//               "offsetX": 0,
//               "offsetY": 0,
//               "affectStroke": false,
//               "nonScaling": false
//             },
//             "fill": "#ffffff",
//             "bold": false,
//             "italic": false,
//             "fontWeight": "",
//             "fontStyle": ""
//           },
//           {
//             "id": "DW31AyTB7LS0fC9ttALox",
//             "name": "StaticImage",
//             "angle": 0,
//             "stroke": null,
//             "strokeWidth": 0,
//             "left": 233.09000000000003,
//             "top": -0.6599999999999966,
//             "width": 64,
//             "height": 64,
//             "opacity": 1,
//             "originX": "left",
//             "originY": "top",
//             "scaleX": 1,
//             "scaleY": 1,
//             "type": "StaticImage",
//             "flipX": false,
//             "flipY": false,
//             "skewX": 0,
//             "skewY": 0,
//             "visible": true,
//             "shadow": null,
//             "src": "https://cdn.brandingprofitable.com/upload/65f2ef1883645star.png",
//             "cropX": 0,
//             "cropY": 0,
//             "bold": false,
//             "italic": false,
//             "fontWeight": "",
//             "fontStyle": ""
//           },
//           {
//             "id": "rHaqDNpG75xfmmjG5j6gD",
//             "name": "StaticImage",
//             "angle": 0,
//             "stroke": null,
//             "strokeWidth": 0,
//             "left": 1.8099999999999454,
//             "top": 3.3700000000000045,
//             "width": 180,
//             "height": 180,
//             "opacity": 1,
//             "originX": "left",
//             "originY": "top",
//             "scaleX": 0.29,
//             "scaleY": 0.29,
//             "type": "StaticImage",
//             "flipX": false,
//             "flipY": false,
//             "skewX": 0,
//             "skewY": 0,
//             "visible": true,
//             "shadow": null,
//             "src": "https://cdn.brandingprofitable.com/upload/65d82fc6b1a1aprofile%20(1).png?auto=compress&cs=tinysrgb&h=30",
//             "cropX": 0,
//             "cropY": 0,
//             "bold": false,
//             "italic": false,
//             "fontWeight": "",
//             "fontStyle": ""
//           },
//           {
//             "id": "2jJ3fImGefDPPxRD23KU6",
//             "name": "StaticImage",
//             "angle": 0,
//             "stroke": null,
//             "strokeWidth": 0,
//             "left": 255.60000000000002,
//             "top": 257.66,
//             "width": 200,
//             "height": 200,
//             "opacity": 1,
//             "originX": "left",
//             "originY": "top",
//             "scaleX": 0.21,
//             "scaleY": 0.21,
//             "type": "StaticImage",
//             "flipX": false,
//             "flipY": false,
//             "skewX": 0,
//             "skewY": 0,
//             "visible": true,
//             "shadow": null,
//             "src": "https://cdn.brandingprofitable.com/upload/65f2ef2f8fa5cprofileee-removebg-preview.png",
//             "cropX": 0,
//             "cropY": 0,
//             "bold": false,
//             "italic": false,
//             "fontWeight": "",
//             "fontStyle": ""
//           },
//           {
//             "id": "qNhx4TKOcxxutyHUl0zzv",
//             "name": "StaticImage",
//             "angle": 0,
//             "stroke": null,
//             "strokeWidth": 0,
//             "left": -1.4700000000000273,
//             "top": 243.76,
//             "width": 900,
//             "height": 700,
//             "opacity": 1,
//             "originX": "left",
//             "originY": "top",
//             "scaleX": 0.08,
//             "scaleY": 0.08,
//             "type": "StaticImage",
//             "flipX": false,
//             "flipY": false,
//             "skewX": 0,
//             "skewY": 0,
//             "visible": true,
//             "shadow": null,
//             "src": "https://cdn.brandingprofitable.com/upload/65f2ef70232d4png-clipart-coca-cola-fizzy-drinks-chennight-restaurant-plastic-bottle-coca-cola-barbecue-plastic-bottle.png",
//             "cropX": 0,
//             "cropY": 0,
//             "bold": false,
//             "italic": false,
//             "fontWeight": "",
//             "fontStyle": ""
//           },
//           {
//             "id": "Gu_DS39Pa7FwwpKi-W_Bj",
//             "name": "StaticImage",
//             "angle": 0,
//             "stroke": null,
//             "strokeWidth": 0,
//             "left": 67.21000000000004,
//             "top": 87.38999999999999,
//             "width": 1000,
//             "height": 1000,
//             "opacity": 1,
//             "originX": "left",
//             "originY": "top",
//             "scaleX": 0.21,
//             "scaleY": 0.21,
//             "type": "StaticImage",
//             "flipX": false,
//             "flipY": false,
//             "skewX": 0,
//             "skewY": 0,
//             "visible": true,
//             "shadow": null,
//             "src": "https://cdn.brandingprofitable.com/upload/65f2ef4da43a8781686f789a-4fb8-4a2a-b719-cbb08b1ddd7c-removebg%20(2).png",
//             "cropX": 0,
//             "cropY": 0,
//             "bold": false,
//             "italic": false,
//             "fontWeight": "",
//             "fontStyle": ""
//           }
//         ],
//         "name": "Untitled design"
//       }
//     ],
//     "preview": "",
//   "frameImage": "upload/65f2ef8e72805.png",
//   "createDate": "14-03-2024",
//   "createTime": "18:07:34",
//   "updateDate": "14-03-2024",
//   "addDate": "2024-03-14 18:07:35",
//   "__v": 0
// }

// const BrandingTree = () => {

//   const widthPixels = 300;
//   const heightPixels = 300;

//   const staticTextLayers = jsonData.scenes[0].layers.filter(layer => layer.type === 'StaticText');
//   const staticImageLayers = jsonData.scenes[0].layers.filter(layer => layer.type === 'StaticImage');

//   console.log('Static Text Layers:', staticTextLayers);
//   console.log('Static Image Layers:', staticImageLayers);

//   const TextItem = ({ text, style }) => {
//     return (
//       <div style={style}>
//         <p>{text}</p>
//       </div>
//     );
//   };

//   const ImageItem = ({ src, style }) => {
//     return (
//       <div style={style}>
//         <img src={src} alt="Static Image" />
//       </div>
//     );
//   };

//   return (
//     <div style={{ width: '100vw', height: '100vh', justifyContent: 'center', alignItems: 'center', display: 'flex' }}>

//       <div style={{ border: '1px solid black', width: widthPixels, height: heightPixels, position: 'relative' }}>

//         {staticImageLayers.map((layer) => (
//           <ImageItem
//             key={layer.id}
//             src={layer.src}
//             style={{
//               position: 'absolute',
//               left: layer.left,
//               top: layer.top,
//               width: layer.width,
//               height: layer.height,
//               transform: `scale(${layer.scaleX}, ${layer.scaleY})`,
//               transformOrigin: '0 0',
//             }}
//           />
//         ))}

//         {staticTextLayers.map((layer) => (
//           <TextItem
//             key={layer.id}
//             text={layer.text}
//             style={{
//               position: 'absolute',
//               left: layer.left,
//               top: layer.top,
//               color: layer.fill,
//               fontFamily: layer.fontFamily,
//               fontSize: layer.fontSize,
//               lineHeight: layer.lineHeight,
//               textAlign: layer.textAlign,
//               fontWeight: layer.fontWeight,
//               fontStyle: layer.fontStyle
//             }}
//           />
//         ))}

//       </div>

//     </div>
//   );
// };

// export default BrandingTree