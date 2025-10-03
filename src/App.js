import { Fragment, useEffect, useState } from "react";
import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./Router";
import { useAuth } from "./Contexts/AuthContext";
import HomeLayout from "./Components/layouts/MainLayout";

function App() {
  const [mainRouters, setMainrouters] = useState([]);
  const { auth } = useAuth();

  useEffect(() => {
    document.title = "Đăng ký tổ hợp";
  }, []);

  useEffect(() => {
    if (auth.isAuthenticated) {
      setMainrouters([...publicRoutes, ...privateRoutes].filter((item) => item.roles.includes(auth.user.role)));
    } else {
      setMainrouters([...publicRoutes]);
    }
  }, [auth]);

  return (
    <Router>
      <div className="App">
        <Routes>
          {mainRouters &&
            mainRouters.map((routes, index) => {
              let Layout = HomeLayout;
              if (routes.layout) {
                Layout = routes.layout;
              } else if (routes.layout === null) {
                Layout = Fragment;
              }
              const Page = routes.component;
              return (
                <Route
                  key={index}
                  path={routes.path}
                  element={
                    <Layout>
                      <Page />
                    </Layout>
                  }
                />
              );
            })}
        </Routes>
      </div>
    </Router>
  );
}

export default App;
