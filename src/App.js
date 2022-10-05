/** @format */
import "./App.css";
import Header from "./components/Header";
import Posts from "./components/Posts";
import Stories from "./components/Stories";

function App() {
  return (
    <div className="App">
      <Header />
      <div className="flex max-w-[1200px] mx-auto mt-6">
        <div className="max-w-[600px]">
          <Stories />
          <Posts />
        </div>
      </div>
    </div>
  );
}

export default App;
