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

function App() {
  const router = createBrowserRouter([

    {path:"/",
     element:<NavbarComponent />,
     children:[
      { index: true,element :<Protected><News /></Protected>},
      { path: "/Home" , element:<Protected><News /></Protected>},
      { path: "/detailedview" , element:<Protected><DetailView /></Protected>},
      { path: "/favourite" , element:<Protected><Favourite /></Protected>},
     ]
    },
    {path:"/login", element:<Login />},
    {path:"/signup", element:<Createaccount />},
  ])
  return (
    <NewsProvider >
      <div className="App">
        <RouterProvider router={router} />
      </div>
    </NewsProvider>
  );
}
export default App;