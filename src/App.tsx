import { Weeks } from "./components/weeks/weeks";

function App() {
  return (
    <div className="container">
      <Weeks />
      <div style={{ marginTop: 30, textAlign: "center" }}>Memento Mori</div>
      <div style={{ marginTop: 20, textAlign: "center", fontSize: 30 }}>💀</div>
      <div>
        Gather ye rose-buds while ye may, Old Time is still a-flying; And this
        same flower that smiles today, Tomorrow will be dying
      </div>
    </div>
  );
}

export default App;
