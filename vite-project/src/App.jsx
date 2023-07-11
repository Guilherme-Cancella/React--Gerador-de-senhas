import { useState } from "react";

function App() {
  const [password, setPassword] = useState("");
  const [copyText, setCopyText] = useState("Copiar");
  function generate() {
    const characteres =
      "123458554948=!@#$%|()+SCHQHCWCI/hgdcuywevuyefpiiucú+==hjbcycbippicvbpçq";
    const length = 12;
    let newPassword = "";
    for (let i = 0; i < length; i++) {
      const position = Math.floor(Match.random() * characteres.length);
      newPassword += characteres[position];
    }
    setPassword(newPassword);
    setCopyText("Copiar");
  }

  function copyToClipboard() {
    window.navigator.clipboard.writeText(password);
    setCopyText("Copiado!");
  }
  return (
    <div className="app">
      <h1>Gerador de senhas</h1>
      <button onClick={generate}>Gerar!</button>
      <button onClick={copyToClipboard}>{copyText}</button>
      <div>{password}</div>
    </div>
  );
}

export default App;
