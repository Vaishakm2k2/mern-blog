import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import About from "./pages/About"
import SignUp from "./pages/SignUp"
import Projects from "./pages/Projects"
import Dashboard from "./pages/Dashboard"
import Signin from "./pages/Signin"
import Header from "./components/Header"
import FooterCom from "./components/Footer"
import PrivateRoute from "./components/PrivateRoute"
import OnlyAdminPrivateRoute from "./components/OnlyAdminPrivateRoute"
import CreatePostt from "./pages/CreatePostt"
import UpdatePost from "./pages/UpdatePost"
import PostPage from "./pages/PostPage"
import ScrollToTop from "./components/ScrollToTop"
import Search from "./pages/Search"

function App() {
  return (
    <BrowserRouter>
    <ScrollToTop/>
    <Header />
    <Routes>
      <Route path="/" element={<Home />}/>
      <Route path="/about" element={<About />}/>
      <Route path="/signin" element={<Signin />}/>
      <Route path="/signup" element={<SignUp />}/>
      <Route path="/search" element={<Search />}/>
      <Route element={<PrivateRoute/>}>
        <Route path="/dashboard" element={<Dashboard />}/>
      </Route>
      <Route element={<OnlyAdminPrivateRoute/>}>
        <Route path="/create-post" element={<CreatePostt />}/>
        <Route path="/update-post/:postId" element={<UpdatePost />}/>
      </Route>
      <Route path="/projects" element={<Projects />}/>
      <Route path="/post/:postSlug" element={<PostPage />}/>
    </Routes>
    <FooterCom/>
    </BrowserRouter>
  )
}

export default App
