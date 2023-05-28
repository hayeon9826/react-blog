import { useState, useEffect } from "react";
import { app } from "firebaseApp";
import { getAuth, onAuthStateChanged } from "firebase/auth";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

import Router from "./pages/Router";

function App() {
  const auth = getAuth(app);
  const [init, setInit] = useState<boolean>(false);
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(!!auth?.currentUser);

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        setIsAuthenticated(true);
      } else {
        setIsAuthenticated(false);
      }
    });
    setInit(true);
  }, [auth]);

  return (
    <>
      <ToastContainer position="top-right" autoClose={1000} hideProgressBar newestOnTop closeOnClick rtl={false} pauseOnFocusLoss draggable pauseOnHover />
      <Router isAuthenticated={isAuthenticated} init={init} />;
    </>
  );
}

export default App;
