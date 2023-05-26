/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PageLogin from "./pages/PageLogin/PageLogin";
import HomePage from "./pages/HomePage/HomePage";
import { AuthContext } from "./context/Auth";
import { useState } from "react";

const user = [
  { id: 123, email: 'teste@teste.com', password: '123456'}
]

const AppRoutes = () => {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    console.log('login', { email, password });
    setUser({ id: 123, email })
  }

  const logout = () => console.log('logout');

  return (
    <BrowserRouter>
      <AuthContext.Provider value={{ authenticated: !!user, user, login, logout }}>
        <Routes>
          <Route exact path="/login" element={<PageLogin />} />
          <Route path="/" element={<HomePage />}/>
        </Routes>
      </AuthContext.Provider>
    </BrowserRouter>
  )
}

export default AppRoutes