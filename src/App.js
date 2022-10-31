import Background from "./Components/Background/Background";
import NavbarMenu from "./Components/Navbar/Navbar";

function App() {
  return (
    <div
      className="App"
      style={{ fontFamily: "Epilogue", backgroundColor: `#fafafa` }}
    >
      <NavbarMenu />
      <Background />
    </div>
  );
}

export default App;
