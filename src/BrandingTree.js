// // import React, { useState, useEffect } from 'react';
// // import Tree from 'react-d3-tree';
// // import './TreeDisplay.css'; // Import the CSS file
// // import axios from 'axios';

// // // const staticData = {
// // //   name: 'Sahil Ajmeri',
// // //   referralId: '918981994883',
// // //   treeId: 'AO343RF', // Add treeId
// // //   children: [
// // //     {
// // //       name: 'Bhavin',
// // //       referralId: 'REF234',
// // //       treeId: '234', // Add treeId
// // //       children: [
// // //         {
// // //           name: 'Dinesh',
// // //           referralId: 'REF345',
// // //           treeId: '345', // Add treeId
// // //           children: [
// // //             { name: 'Hardik', referralId: 'REF456', treeId: '456' },
// // //             { name: 'Iran', referralId: 'REF456', treeId: '456' },
// // //           ],
// // //         },
// // //         { name: 'Emran', referralId: 'REF456', treeId: '456' },
// // //       ],
// // //     },
// // //     {
// // //       name: 'Chirag',
// // //       referralId: 'REF567',
// // //       treeId: '567', // Add treeId
// // //       children: [
// // //         { name: 'Faizan', number: 'REF678', treeId: '678' },
// // //         {
// // //           name: 'Vaibhav',
// // //           referralId: 'REF789',
// // //           treeId: '789', // Add treeId
// // //           children: [
// // //             { name: 'Hardik', referralId: 'REF456', treeId: '456' },
// // //             {
// // //               name: 'Iran',
// // //               referralId: 'REF456',
// // //               treeId: '456',
// // //               children: [
// // //                 { name: 'Jit', referralId: 'REF456', treeId: '456' },
// // //                 { name: 'Jit', referralId: 'REF456', treeId: '456' },
// // //               ],
// // //             },
// // //           ],
// // //         },
// // //       ],
// // //     },
// // //   ],
// // // };

// // const staticData = {
// //   "fullName": "A100",
// //   "number": "100",
// //   "parent_id": "50",
// //   "referral_id": "50",
// //   "total_earn": "0",
// //   "green_wallet": "1500",
// //   "red_wallet": "0",
// //   "total_member": "0",
// //   "right_side": "1",
// //   "left_side": "1",
// //   "total_right_side": "1",
// //   "total_left_side": "1",
// //   "add_side": "left",
// //   "user_leval": "B",
// //   "leval_no": "6",
// //   "last_paid_L_count": "0",
// //   "last_paid_R_count": "0",
// //   "today_right_side": "0",
// //   "today_left_side": "0",
// //   "last_paid_pair_today": "0",
// //   "royalty_total_count_L": "0",
// //   "royalty_total_count_R": "0",
// //   "royalty_monthly_count_L": "0",
// //   "royalty_monthly_count_R": "0",
// //   "royalty_last_paid_L": "0",
// //   "royalty_last_paid_R": "0",
// //   "royalty_end_count_L": "0",
// //   "royalty_end_count_R": "0",
// //   "director_monthly_count_R": "0",
// //   "director_monthly_count_L": "0",
// //   "director_total_count_R": "0",
// //   "director_total_count_L": "0",
// //   "date": "2021-12-06 13:20:41",
// //   "register_date": "2021-12-06",
// //   "V1": "0",
// //   "V2": "0",
// //   "V3": "0",
// //   "V4": "0",
// //   "V5": "0",
// //   "V6": "0",
// //   "V7": "0",
// //   "g_roylty_get_count": "0",
// //   "director_date": "",
// //   "children": [
// //     {
// //       "0": "A200",
// //       "1": "200",
// //       "2": "100",
// //       "3": "100",
// //       "4": "0",
// //       "5": "0",
// //       "6": "0",
// //       "7": "0",
// //       "8": "0",
// //       "9": "0",
// //       "10": "0",
// //       "11": "0",
// //       "12": "left",
// //       "13": "B",
// //       "14": "7",
// //       "15": "0",
// //       "16": "0",
// //       "17": "0",
// //       "18": "0",
// //       "19": "0",
// //       "20": "0",
// //       "21": "0",
// //       "22": "0",
// //       "23": "0",
// //       "24": "0",
// //       "25": "0",
// //       "26": "0",
// //       "27": "0",
// //       "28": "0",
// //       "29": "0",
// //       "30": "0",
// //       "31": "0",
// //       "32": "2021-12-20 13:21:27",
// //       "33": "2021-12-20",
// //       "34": "0",
// //       "35": "0",
// //       "36": "0",
// //       "37": "0",
// //       "38": "0",
// //       "39": "0",
// //       "40": "0",
// //       "41": "0",
// //       "42": "",
// //       "fullName": "A200",
// //       "number": "200",
// //       "parent_id": "100",
// //       "referral_id": "100",
// //       "total_earn": "0",
// //       "green_wallet": "0",
// //       "red_wallet": "0",
// //       "total_member": "0",
// //       "right_side": "0",
// //       "left_side": "0",
// //       "total_right_side": "0",
// //       "total_left_side": "0",
// //       "add_side": "left",
// //       "user_leval": "B",
// //       "leval_no": "7",
// //       "last_paid_L_count": "0",
// //       "last_paid_R_count": "0",
// //       "today_right_side": "0",
// //       "today_left_side": "0",
// //       "last_paid_pair_today": "0",
// //       "royalty_total_count_L": "0",
// //       "royalty_total_count_R": "0",
// //       "royalty_monthly_count_L": "0",
// //       "royalty_monthly_count_R": "0",
// //       "royalty_last_paid_L": "0",
// //       "royalty_last_paid_R": "0",
// //       "royalty_end_count_L": "0",
// //       "royalty_end_count_R": "0",
// //       "director_monthly_count_R": "0",
// //       "director_monthly_count_L": "0",
// //       "director_total_count_R": "0",
// //       "director_total_count_L": "0",
// //       "date": "2021-12-20 13:21:27",
// //       "register_date": "2021-12-20",
// //       "V1": "0",
// //       "V2": "0",
// //       "V3": "0",
// //       "V4": "0",
// //       "V5": "0",
// //       "V6": "0",
// //       "V7": "0",
// //       "g_roylty_get_count": "0",
// //       "director_date": "",
// //       "children": []
// //     },
// //     {
// //       "0": "A201",
// //       "1": "201",
// //       "2": "100",
// //       "3": "100",
// //       "4": "0",
// //       "5": "0",
// //       "6": "0",
// //       "7": "0",
// //       "8": "0",
// //       "9": "0",
// //       "10": "0",
// //       "11": "0",
// //       "12": "right",
// //       "13": "B",
// //       "14": "7",
// //       "15": "0",
// //       "16": "0",
// //       "17": "0",
// //       "18": "0",
// //       "19": "0",
// //       "20": "0",
// //       "21": "0",
// //       "22": "0",
// //       "23": "0",
// //       "24": "0",
// //       "25": "0",
// //       "26": "0",
// //       "27": "0",
// //       "28": "0",
// //       "29": "0",
// //       "30": "0",
// //       "31": "0",
// //       "32": "2021-12-20 13:21:27",
// //       "33": "2021-12-20",
// //       "34": "0",
// //       "35": "0",
// //       "36": "0",
// //       "37": "0",
// //       "38": "0",
// //       "39": "0",
// //       "40": "0",
// //       "41": "0",
// //       "42": "",
// //       "fullName": "A201",
// //       "number": "201",
// //       "parent_id": "100",
// //       "referral_id": "100",
// //       "total_earn": "0",
// //       "green_wallet": "0",
// //       "red_wallet": "0",
// //       "total_member": "0",
// //       "right_side": "0",
// //       "left_side": "0",
// //       "total_right_side": "0",
// //       "total_left_side": "0",
// //       "add_side": "right",
// //       "user_leval": "B",
// //       "leval_no": "7",
// //       "last_paid_L_count": "0",
// //       "last_paid_R_count": "0",
// //       "today_right_side": "0",
// //       "today_left_side": "0",
// //       "last_paid_pair_today": "0",
// //       "royalty_total_count_L": "0",
// //       "royalty_total_count_R": "0",
// //       "royalty_monthly_count_L": "0",
// //       "royalty_monthly_count_R": "0",
// //       "royalty_last_paid_L": "0",
// //       "royalty_last_paid_R": "0",
// //       "royalty_end_count_L": "0",
// //       "royalty_end_count_R": "0",
// //       "director_monthly_count_R": "0",
// //       "director_monthly_count_L": "0",
// //       "director_total_count_R": "0",
// //       "director_total_count_L": "0",
// //       "date": "2021-12-20 13:21:27",
// //       "register_date": "2021-12-20",
// //       "V1": "0",
// //       "V2": "0",
// //       "V3": "0",
// //       "V4": "0",
// //       "V5": "0",
// //       "V6": "0",
// //       "V7": "0",
// //       "g_roylty_get_count": "0",
// //       "director_date": "",
// //       "children": []
// //     }
// //   ]
// // }

// // const gradientBackground = 'linear-gradient(to bottom, #20AE5C, #000000)';

// // // Define the component
// // const TreeDisplay = () => {

// //   const [treeData, setTreeData] = useState(null);
// //   const [treeId, setTreeId] = useState(null);

// //   const getData = () => {
// //     axios
// //       .get(`https://brandingprofitable-uat-89aac59cca6c.herokuapp.com//mlm/tree/${treeId}`)
// //       .then((response) => {
// //         // If the request is successful, set the treeData state variable with the response data
// //         setTreeData(response.data);
// //       })
// //       .catch((error) => {
// //         // Handle any errors here
// //         console.error('Error fetching tree data:', error);
// //       });
// //   }


// //   useEffect(() => {
// //     const handleMessage = (event) => {
// //       try {
// //         const receivedData = JSON.parse(event.data);
// //         const { treeId } = receivedData;
// //         setTreeId(treeId);
// //         alert("treeId:", treeId);

// //         getData()

// //       } catch (error) {
// //         console.error('Error parsing received data:', error);
// //         alert("error:", error.toString());
// //       }
// //     };

// //     window.addEventListener('message', handleMessage);

// //     return () => {
// //       window.removeEventListener('message', handleMessage);
// //     };
// //   }, []);

// //   // send message to react native app 
// //   const handleClick = (nodeDatum) => {
// //     const messageData = {
// //       action: 'customNodeClicked',
// //       number: nodeDatum.number,
// //     };

// //     // Send the message to the parent window (assuming it's a WebView)
// //     window.postMessage(JSON.stringify(messageData), '*');

// //     alert("clicked")
// //   };


// //   const CustomNodeElement = ({ nodeDatum }) => {
// //     const dotStyle = {
// //       fill: 'blue',
// //       r: 5,
// //     };

// //     const nameLength = nodeDatum.name ? nodeDatum.name?.length : 0;
// //     const referralIdLength = nodeDatum.referralId ? nodeDatum.referralId?.length : 0;
// //     const textLength = Math.max(nameLength, referralIdLength) * 10;
// //     const rectWidth = textLength + 100;
// //     const rectX = -(rectWidth / 2);

// //     const rectStyle = {
// //       fill: 'gray',
// //       stroke: 'black',
// //       strokeWidth: 1,
// //     };

// //     const cornerRadius = 10; // Adjust this value to change the radius of the corners

// //     return (
// //       <g onClick={() => { handleClick(nodeDatum) }}>
// //         <circle cx="0" cy="0" {...dotStyle} />
// //         <rect
// //           x={rectX}
// //           y="-46" // Adjust the y position to center the text vertically
// //           width={rectWidth}
// //           height="65" // Increase the height to accommodate the extra text
// //           rx={cornerRadius}
// //           ry={cornerRadius}
// //           {...rectStyle}
// //         />
// //         <text x="0" y="-22" className="tree-node-text">
// //           {nodeDatum.fullName}
// //         </text>
// //         <text x={rectX + 50} y="4" className="tree-tree-id" textAnchor="start" dominantBaseline="middle">
// //           {nodeDatum.number}
// //         </text>
// //         {/* <text x={rectX + rectWidth - 60} y="4" className="tree-referral-id" textAnchor="end" dominantBaseline="middle">
// //           {nodeDatum.referralId}
// //         </text> */}
// //       </g>
// //     );
// //   };

// //   // Define the custom path function for square links
// //   const customPathFunc = (linkData, orientation) => {
// //     const { source, target } = linkData;
// //     const sourceX = orientation === 'horizontal' ? source.y : source.x;
// //     const sourceY = orientation === 'horizontal' ? source.x : source.y;
// //     const targetX = orientation === 'horizontal' ? target.y : target.x;
// //     const targetY = orientation === 'horizontal' ? target.x : target.y;

// //     const centerX = (sourceX + targetX) / 2;
// //     const centerY = (sourceY + targetY) / 2;

// //     if (orientation === 'horizontal') {
// //       return `
// //       M${sourceX},${sourceY}
// //       L${centerX},${sourceY}
// //       L${centerX},${targetY}
// //       L${targetX},${targetY}
// //     `;
// //     } else {
// //       return `
// //       M${sourceX},${sourceY}
// //       L${sourceX},${centerY}
// //       L${targetX},${centerY}
// //       L${targetX},${targetY}
// //     `;
// //     }
// //   };


// //   const separation = { siblings: 2, nonSiblings: 2 }; // Adjust these values as needed

// //   return (
// //     <div style={{ width: '100%', height: '100vh'  , background: gradientBackground }}>
// //       <div style={{ width: '100%', height: '100vh' }}>
// //         <Tree
// //           data={treeData || staticData}
// //           orientation="vertical"
// //           translate={{ x: 190, y: 100 }}
// //           renderCustomNodeElement={CustomNodeElement} // Use custom rendering function for nodes
// //           separation={separation}
// //           pathFunc={customPathFunc} // Use the custom path function for links
// //           linkAttributes={{ stroke: 'white', 'stroke-dasharray': '5,5' }} // Set white dashed line style
// //         />
// //       </div>
// //     </div>
// //   );
// // };

// // export default TreeDisplay;


// import React, { useEffect, useState } from 'react';

// function App() {
//   const [number, setNumber] = useState(1)
//   useEffect(() => {
//     const handleMessage = (event) => {
//       try {
//         const data = JSON.parse(event.data);
//         if (data.number) {
//           // Display an alert with the passed number
//           alert(`Received number from React Native: ${data.number}`);
//         }
//       } catch (error) {
//         console.error('Error parsing received data:', error);
//       }
//     };

//     window.addEventListener('message', handleMessage);

//     return () => {
//       window.removeEventListener('message', handleMessage);
//     };
//   }, []);

//   return (
//     <div className="App">
//       <p>{number}</p>
//     </div>
//   );
// }

// export default App;

import React, { useState, useEffect } from "react";
import Tree from "react-d3-tree";
import "./TreeDisplay.css";
import axios from "axios";
import { ColorRing } from "react-loader-spinner";

const gradientBackground = "linear-gradient(to bottom, #20AE5C, #000000)";

const TreeDisplay = () => {
  const [loading, setLoading] = useState(true);
  const [treeData, setTreeData] = useState({ "children": [{ "greenWallet": 1500, "name": "shivam shukla", "redWallet": 1000, "referralId": "9106636361", "side": "right", "treeId": 37452 }], "greenWallet": 0, "name": "Mj", "redWallet": 2500, "referralId": "8490803632", "side": "right", "statusCode": 200, "treeId": 88346 });
  const [view, setView] = useState("api1");
  const [loadingClickedNumber, setLoadingClickedNumber] = useState(false);
  const [clickedNumber, setClickedNumber] = useState(null);

  const [isDirect, setIsDirect] = useState(false)

  // Handle receiving the number from React Native
  useEffect(() => {
    const handleMessage = (event) => {
      try {
        const data = JSON.parse(event.data);

        if (data.isDirect) {
          setIsDirect(true)
          // alert(data.treeData.children[0].name.toString())
          fetchData(
            `https://api.brandingprofitable.com/user/directresponce/${data.number}`
            // `https://branding-clone-e48aa7e67749.herokuapp.com/mlm/tree/${data.number}`
          );
          setLoadingClickedNumber(false);
        }

        else if (data.number) {
          setIsDirect(false)
          setClickedNumber(data.number);
          fetchData(
            // `https://brandingprofitable-uat-89aac59cca6c.herokuapp.com//user/directresponce/1`
            `https://api.brandingprofitable.com/mlm/tree/${data.number}`
            // `https://brandingprofitable-uat-89aac59cca6c.herokuapp.com/mlm/tree/${data.number}`
          );
          setLoadingClickedNumber(false);
        }

      } catch (error) {
        console.error("Error parsing received data:", error);
      }
    };

    window.addEventListener('message', handleMessage);

    return () => {
      window.removeEventListener('message', handleMessage);
    };
  }, []);

  const fetchData = async (url) => {
    try {
      setLoading(true);
      const response = await axios.get(url);
      setTreeData(response.data);
      setLoading(false);
    } catch (error) {
      setLoading(false);
      console.error("Error fetching data:", error);
    }
  };

  // ... (rest of your code)

  const handleNumberClick = (number) => {
    if (!isDirect) {
      setLoadingClickedNumber(true);
      fetchData(
        `https://branding-clone-e48aa7e67749.herokuapp.com/mlm/tree/${number}`
      )
    }
  };

  useEffect(() => {
    const handleMessage = (event) => {
      try {
        const receivedData = JSON.parse(event.data);
        setTreeData(receivedData);
      } catch (error) {
        console.error("Error parsing received data:", error);
      }
    };

    window.addEventListener("message", handleMessage);

    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []);

  const CustomNodeElement = ({ nodeDatum }) => {
    const dotStyle = {
      fill: "blue",
      r: 5,
    };

    const number = nodeDatum?.number;
    const name = nodeDatum.fullName || nodeDatum?.name || "-";
    const nameLength = name.length;

    // Calculate the width of the rectangle based on name length
    const rectWidth = Math.max(200, nameLength * 12); // Adjust the minimum width (200) as needed
    const rectX = -(rectWidth / 2);

    const rectStyle = {
      fill: "white",
      stroke: "black",
      strokeWidth: 1,
    };

    const cornerRadius = 10; // Adjust this value to change the radius of the corners

    return (
      <g onClick={() => handleNumberClick(nodeDatum.number)}>
        <circle cx="0" cy="0" {...dotStyle} />
        <rect
          x={rectX}
          y="-40" // Adjust the y position to center the text vertically
          width={rectWidth}
          height="63" // Increase the height to accommodate the extra text
          rx={cornerRadius}
          ry={cornerRadius}
          {...rectStyle}
        />
        <text
          x="0"
          y="-15" // Adjust the vertical position for the number
          className="tree-node-text"
        >
          {number?.length > 4
            ? `******${number?.substring(6, 10)}`
            : number || "-"}
        </text>
        <text
          x="0"
          y="10" // Adjust the vertical position for the name
          className="tree-node-text"
        >
          {name.length > 17 ? `${name.substring(0, 17)}...` : name}
        </text>
      </g>
    );
  };


  // Define the custom path function for square links
  const customPathFunc = (linkData, orientation) => {
    const { source, target } = linkData;
    const sourceX = orientation === "horizontal" ? source.y : source.x;
    const sourceY = orientation === "horizontal" ? source.x : source.y;
    const targetX = orientation === "horizontal" ? target.y : target.x;
    const targetY = orientation === "horizontal" ? target.x : target.y;

    const centerX = (sourceX + targetX) / 2;
    const centerY = (sourceY + targetY) / 2;

    if (orientation === "horizontal") {
      return `
      M${sourceX},${sourceY}
      L${centerX},${sourceY}
      L${centerX},${targetY}
      L${targetX},${targetY}
    `;
    } else {
      return `
      M${sourceX},${sourceY}
      L${sourceX},${centerY}
      L${targetX},${centerY}
      L${targetX},${targetY}
    `;
    }
  };

  const separation = { siblings: 3, nonSiblings: 3 }; // Adjust these values as needed

  return (
    <div style={{ width: "100%", height: "100vh", background: gradientBackground }}>
      {loading ? (
        <div className="d-flex flex-direction-row justify-content-center align-items-center">
          <ColorRing
            visible={true}
            height="80"
            width="80"
            ariaLabel="blocks-loading"
            wrapperStyle={{}}
            wrapperClass="blocks-wrapper"
            colors={["#e15b64", "#f47e60", "#f8b26a", "#abbd81", "#849b87"]}
          />
        </div>
      ) : (
        <div style={{ width: "100%", height: "100vh" }}>
          <Tree
            data={treeData}
            orientation="vertical"
            translate={{ x: 190, y: 100 }}
            renderCustomNodeElement={CustomNodeElement}
            separation={separation}
            pathFunc={customPathFunc}
            linkAttributes={{ stroke: "white", "stroke-dasharray": "5,5" }}
            onClick={(node) => handleNumberClick(node.nodeDatum.number)}
          />
        </div>
      )}
    </div>
  );
};

export default TreeDisplay;
