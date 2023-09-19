// import "./App.css";
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Link,
  Outlet
} from "react-router-dom";
import Dashboard from "./components/dashbord/Dashboard";
import Nav from "./components/layout/Nav";
const Root = () => {
  return (
    <>
      <div>
        <Nav />
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
};
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<Root />}>
      <Route index element={<Dashboard />}></Route>
    </Route>
  )
);
function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
