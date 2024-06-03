import { BrowserRouter, Route, Routes } from "react-router-dom";
import { RootLayout } from "./components";
import BLogPostPage from "./pages/BLogPostPage";
import HomePage from "./pages/HomePage";
import PageNotFound from "./pages/PageNotFound";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<RootLayout />}>
          <Route index element={<HomePage />} />
          <Route path="blog-post/:id" element={<BLogPostPage />} />
          <Route path="*" element={<PageNotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
