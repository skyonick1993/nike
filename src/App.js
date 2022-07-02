import HomePage from "./pages/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { HomeLayout } from "./layouts/HomeLayout";

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route
            path="/"
            caseSensitive={true}
            element={
              <HomeLayout>
                <HomePage />
              </HomeLayout>
            }
          />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
