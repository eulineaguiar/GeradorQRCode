import React, { useState } from 'react';
import QRCode from 'qrcode.react';
import './App.css';

function App() {
  const [text, setText] = useState('');

  return (
    <div className="App">
      <h1>Gerador de QR Code</h1>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Digite o texto ou URL"
      />
      <div className="qr-code">
        {text && <QRCode value={text} size={256} />}
      </div>
    </div>
  );
}

export default App;
