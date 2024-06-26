import { lazy, Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import LayoutCommon from "./layout/LayoutCommon";
const HomePage = lazy(() => import("./pages/HomePage"));
const CategoryDetail = lazy(() => import("./pages/CategoryDetail"));
const PostDetail = lazy(() => import("./pages/PostDetail"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          loading
        </div>
      }
    >
      <Routes>
        <Route path="/" element={<LayoutCommon></LayoutCommon>}>
          <Route path="/" element={<HomePage />} />
          <Route path="/:slug" element={<CategoryDetail />} />
          <Route path="/post" element={<PostDetail />} />
        </Route>
      </Routes>
    </Suspense>
  );
}

export default App;
