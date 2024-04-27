
import QRCode from 'react-qr-code';
import './App.css';
import {useState} from "react";

function App() {
  const[qrCode,setQrCode]=useState("");
  const[input,setInput]=useState("");

  function handleGenerateQrCode(){
 setQrCode(input);
  }

  return (
    <div className="App">
      <h1>QR Code Generator</h1>
      <div>
        <input onChange={(e)=>setInput(e.target.value)} type="text" name="qr-code" placeholder="Enter your value here" />
        <button disabled={input.trim() !== "" ? false : true} onClick={handleGenerateQrCode}>Generate</button>
      </div>
      <div className='code'>
        <QRCode id="qr-code-value" value={qrCode} />
      </div>
      
    </div>
  );
}

export default App;














// import QRCode from 'react-qr-code';
// import './App.css';
// import { useState, useEffect } from "react";

// function App() {
//   const [qrCode, setQrCode] = useState("");
//   const [input, setInput] = useState("");
//   const [isTyping, setIsTyping] = useState(false);

//   // Debounce function
//   function debounce(func, delay) {
//     let timer;
//     return function(...args) {
//       clearTimeout(timer);
//       timer = setTimeout(() => {
//         func.apply(this, args);
//       }, delay);
//     };
//   }

//   // Function to handle input change
//   const handleInputChange = (e) => {
//     setInput(e.target.value);
//     setIsTyping(true);
//   };

//   // Function to handle generating QR code
//   const generateQRCode = () => {
//     setQrCode(input);
//     setIsTyping(false);
//   };

//   // Debounce generating QR code when typing
//   const debouncedGenerateQRCode = debounce(generateQRCode, 500);

//   // Effect to generate QR code when typing stops
//   useEffect(() => {
//     if (!isTyping && input.trim() !== "") {
//       debouncedGenerateQRCode();
//     }
//   }, [isTyping, input, debouncedGenerateQRCode]);

//   // Function to handle generate button click
//   const handleGenerateQrCode = () => {
//     if (input.trim() !== "") {
//       generateQRCode();
//     }
//   };

//   return (
//     <div className="App">
//       <h1>QR Code Generator</h1>
//       <div>
//         <input 
//           onChange={handleInputChange} 
//           type="text" 
//           name="qr-code" 
//           placeholder="Enter your value here" 
//         />
//         <button 
//           disabled={input && input.trim() !== "" ? false : true} 
//           onClick={handleGenerateQrCode}
//         >
//           Generate
//         </button>
//       </div>
//       <div className='code'>
//         <QRCode id="qr-code-value" value={qrCode} />
//       </div>
//     </div>
//   );
// }

// export default App;