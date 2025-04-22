import {
  BrowserRouter,
  createBrowserRouter,
  Route,
  Router,
  RouterProvider,
  Routes,
} from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/hello" element={<h2>Hel1lo</h2>}></Route>
        <Route path="/movie" element={<Detail />} />
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
