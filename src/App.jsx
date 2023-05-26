import axios from "axios";
import { Route, Routes } from "react-router-dom";
import IndexPage from "./pages/IndexPage";
import ActivityPage from "./pages/ActivityPage";
import Layout from "./components/Layout";

axios.defaults.baseURL = "https://todo.api.devcode.gethired.id/";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<IndexPage />} />
        <Route path="/activities/:id" element={<ActivityPage />} />
      </Route>
    </Routes>
  );
}

export default App;
