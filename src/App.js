import "./styles.css";

export default function App() {
  return (
    <div className="App">
      <h1>Aufgabe 1</h1>
      <button
        id="ButtonElement"
        onClick={(e) => console.log(e.target.id)}
        onMouseEnter={() => console.log("Mauszeiger auf Button")}
        onMouseLeave={() => console.log("Mauszeiger nicht mehr auf Button")}
      >
        {/* Ein Klick schreibt die id in Konsole. Da das Element kein Attribut "value" hat, wird im zweiten Fall ein leerer String geloggt. */}
        Klick mich
      </button>
      <h1>Aufgabe 2</h1>
      <input
        type="checkbox"
        onChange={(e) => console.log(e.target.checked)}
      ></input>
      {/* Die Änderung der Checkbox wird erkannt und der jeweilige Wert true (angewählt) oder false (abgewählt) wird in die Konsole geschrieben */}
      <h1>Aufgabe 3</h1>
      <input
        placeholder="Default wert"
        onKeyDown={(e) => console.log(e.key)}
      ></input>
      {/* onKeyDown registriert welche Taste gedrückt wurde. Der Event Handler kann nützlich sein, um z.B. Eingaben mit "Enter" abzuschliessen. Die Eingabe selbst sollte mit "onChange" verarbeitet werden (dazu später mehr) */}
    </div>
  );
}
