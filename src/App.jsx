import { useState } from "react";
import "@picocss/pico";
import { ThemeProvider } from "./contexts/ThemeContext";

import IndexPage from "./pages/IndexPage";

function App() {
  const [name, setName] = useState("");
  const [lastname, setValue] = useState("");
  return (
    <>
      <ThemeProvider>
        <IndexPage />
      </ThemeProvider>

      {/* <NamePrinterP name={name} />
      <NamePrinterH1 name={name} />
      <NameChanger name={lastname} onNameChange={setName} />
      <NamePrinterP name={lastname} />
      <NamePrinterH1 name={lastname} />
      <NameChanger name={lastname} onNameChange={setValue} /> */}
    </>
  );
}

function NamePrinterP(props) {
  return <p>{props.name}</p>;
}

function NamePrinterH1(props) {
  return <h5>{props.name}</h5>;
}

function NameChanger(props) {
  const { onNameChange } = props;
  const [newName, setNewName] = useState(props.name);

  function handleSubmit(e) {
    e.preventDefault();
    onNameChange(newName);
    setNewName("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
      />
      <input type="submit" />
    </form>
  );
}

export default App;
