import { BrowserRouter, Route, Routes } from "react-router";
import Register from "./pages/Auth/Register";
import Login from "./pages/Auth/Login";
import AuthLayout from "./components/AuthLayout";
import DefaultLayout from "./components/DefaultLayout";
import Home from "./pages/Home";
import HOCDemo from "./pages/HOCDemo";
import RenderPropsDemo from "./pages/RenderPropsDemo";

function App() {
  return (
    <BrowserRouter basename="/Day_43_react/">
      <Routes>
        <Route element={<AuthLayout />}>
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
        </Route>
        <Route element={<DefaultLayout />}>
          <Route index element={<Home />} />
          <Route path="/hocdemo" element={<HOCDemo />} />
          <Route path="/renderpropsdemo" element={<RenderPropsDemo />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
