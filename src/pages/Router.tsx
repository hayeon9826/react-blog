import { useState } from "react";

import Home from "./home";
import PostList from "./posts";
import PostDetail from "./posts/detail";
import { Route, Routes, Navigate } from "react-router-dom";
import PostNew from "./posts/new";
import PostEdit from "./posts/edit";
import ProfilePage from "./profile";
import LoginPage from "./login";
import SignupPage from "./signup";

export default function Router() {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);

  return (
    <Routes>
      {isAuthenticated ? (
        <>
          <Route path="/" element={<Home />} />
          <Route path="/posts" element={<PostList />} />
          <Route path="/posts/:id" element={<PostDetail />} />
          <Route path="/posts/new" element={<PostNew />} />
          <Route path="/posts/edit/:id" element={<PostEdit />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<Navigate replace to="/" />} />
        </>
      ) : (
        <>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignupPage />} />
          <Route path="*" element={<LoginPage />} />
        </>
      )}
    </Routes>
  );
}
