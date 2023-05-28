import { useState, useEffect, useContext } from "react";
import { app } from "firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Router from "./pages/Router";
import Loader from "components/Loader";
import ThemeContext from "context/ThemeContext";

function App() {
  const auth = getAuth(app);
  const context = useContext(ThemeContext);
  const [init, setInit] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
      setInit(true);
    });
  }, [auth]);

  return (
    <>
      <div className={context.theme === "dark" ? "Dark" : "White"}>
        <ToastContainer position="top-right" autoClose={1000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
        {init ? <Router isAuthenticated={isAuthenticated} /> : <Loader />}
      </div>
    </>
  );
}

export default App;
