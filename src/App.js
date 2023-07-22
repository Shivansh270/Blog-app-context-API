import "./App.css";
import { useContext, useEffect } from "react";
import { AppContext } from "./context/AppContext";
import Header from "./components/Header";
import Blogs from "./components/Blogs";
import Pagination from "./components/Pageination";
import { Route, Routes, useLocation, useSearchParams } from "react-router-dom";
import blogpa


export default function App() {
  const { fetchBlogPosts } = useContext(AppContext);

  const location = useLocation();
  const[searchParams, setSearchParams] = useSearchParams();

  useEffect(() => {
    const page = searchParams.get("page") ?? 1;

    if(location.pathname.includes("tags")){
      const tag = location.pathname.split("/").at(-1).replaceALL("-"," ");
      fetchBlogPosts(Number(page), tag)
    }
    else if(location.pathname.includes("categories")){
      const category = location.pathname.split("/").at(-1).replaceALL("-"," ");
      fetchBlogPosts(Number(page),null, category)
    }
    else{
      fetchBlogPosts(Number(page))
    }
  }, [location.pathname, location,searh]);

  return (
    <Routes>
      <Route path="/" element={<Home/>} />
      <Route path="/blog/:blogId" element={<BlogPage/>} />
      <Route path="/tags/:tag" element={<TagPage/>} />
      <Route path="/categories/:category" element={<Category/>} />
    </Routes>
  );
}
