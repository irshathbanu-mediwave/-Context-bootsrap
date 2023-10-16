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

      <NamePrinterP name={name} />

      <NameChanger name={name} onNameChange={setName} />
      {/* <NamePrinterP name={lastname} />

      <NameChanger name={lastname} onNameChange={setValue} /> */}
    </>
  );
}

function NamePrinterP(props) {
  return <p>{props.name}</p>;
}

function NameChanger(props) {
  const { onNameChange } = props;
  const [newName, setNewName] = useState(props.name);
  // const [LastName, setlatname] = useState(props.lastname);
  function handleSubmit(e) {
    e.preventDefault();
    onNameChange(newName);
    setNewName("");
    setlatname("");
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>Name:</label>
      <input
        type="text"
        value={newName}
        onChange={(e) => setNewName(e.target.value)}
        required
      />
      <label>ImageUrl</label>
      <input type="url" onChange={(e) => setlatname(e.target.value)} required />
      <input type="submit" />
    </form>
  );
}

export default App;
