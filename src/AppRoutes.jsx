import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLogin from "./pages/PageLogin/PageLogin";
import HomePage from "./pages/HomePage/HomePage";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/login" element={<PageLogin />} />
        <Route path="/" element={<HomePage />}/>
      </Routes>
    </BrowserRouter>
  )
}

export default AppRoutes