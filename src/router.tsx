import { Route, Routes } from "react-router-dom";

import { DefaultLayout } from "./lauyouts";
import { Blog, Post } from "./pages";

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path="/" element={<Blog />} />
        <Route path="/:id" element={<Post />} />
      </Route>
    </Routes>
  );
}
