// import Login from "./components/LoginorLogout/Login";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Createaccount from "./components/LoginorLogout/createaccount";
import NavbarComponent from "./components/Navbar/Navbar";
import News from "./components/news/news";
import { NewsProvider } from "./contextAPI/newsappContext";
import DetailView from "./components/news/detailedView/DetailView";
import Favourite from "./components/Favourite/favourite";
import Login from "./components/LoginorLogout/Login";
import Protected from "./components/protectedRoute/protectedRoute";
import { useEffect } from "react";

function App() {
  const router = createBrowserRouter([

    {path:"/",
     element:<Protected><NavbarComponent /></Protected>,
     children:[
      { index: true,element :<News />},
      { path: "/home" , element:<News />},
      { path: "/detailedview" , element:<DetailView />},
      { path: "/favourite" , element:<Favourite />},
     ]
    },
    {path:"/login", element:<Login />},
    {path:"/signup", element:<Createaccount />},
  ])

  return (
      <div className="App">
        <RouterProvider router={router} />
      </div>
  );
}
export default App;