import React, { createContext, useContext, useEffect, useState } from "react";
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword,onAuthStateChanged,  signOut } from "firebase/auth";
import { Navigate} from "react-router-dom";
import { auth } from "../firebase/firebaseinit";
import { db } from "../firebase/firebaseinit";
import { addDoc, collection, onSnapshot } from "firebase/firestore";

const NewsContext = createContext();

export function useValue() {
    const value = useContext(NewsContext);
    return value;
}

export const NewsProvider = ({ children }) => {
    const [newsData, setNewsData] = useState();
    const [viewElement, setViewElement] = useState({});
    const [toogleDataView, setToogleDataView] = useState(false);
    const [checkLogin, setCheckLogin] =  useState(false);
    const [favouriteData, setfavouriteData] = useState([]);
    const [currentUser , setcurrentUser] = useState({});

    const fetchdata = async () => {
        const res = await fetch("https://newsapi.org/v2/top-headlines?country=us&apiKey=252f6d35baf046a7b015278c757591ba");
        const data = await res.json();
        setNewsData(data.articles);
        console.log(newsData);
    }

    const setDetailedViewElement = (element)=>{
        setViewElement(element);
        console.log(newsData);
    }
    useEffect(() => {
        fetchdata()
        getFavouriteData();
        checkuserloggedIn();
    }, []);

    // Favourite component manage here
    const Addfavourite = async(data) =>{
        const docRef = await addDoc(collection(db, "favourite"), data);
        getFavouriteData();
    }

    const getFavouriteData = ()=>{
        const unsub = onSnapshot(collection(db, "favourite"), (Snapshot) => {
            const data = Snapshot.docs.map((doc) => (
            {
              ...doc.data()
            }));
            setfavouriteData(data,...favouriteData);
        });
    }

    // User Authentication 
    const checkuserloggedIn = ()=>{
        if(localStorage.getItem("token")){
            setCheckLogin(true);
            return <Navigate to="/" replace/>;
        }
        return <Navigate to="/login" replace/>;
        
    }
    const createSession = ()=>{
        window.localStorage.setItem("token","true");
    }
    const deleteSession = ()=>{
        window.localStorage.removeItem("token","true");
    }

    const createNewUser = (name,email,password)=>{
        const auth = getAuth();
        createUserWithEmailAndPassword(auth, email, password).then((userCredential)=> {
            const user = userCredential.user;
            setcurrentUser(user);
            createSession();
            return <Navigate to="/" replace/>
        }).catch((error)=> console.log(error));

    }
    const Login = (email,password)=>{
        const auth = getAuth();
        signInWithEmailAndPassword(auth, email, password).then((userCredential)=> {
            const user = userCredential.user;
            setcurrentUser(user);
            createSession();
            return <Navigate to="/" replace/>
        }).catch((error)=> console.log(error));

    }
    const Logout = ()=>{
        signOut(auth);
        deleteSession();
        checkuserloggedIn();
        return <Navigate to="/login" replace/>;
    }
    useEffect(()=>{
        const auth = getAuth();
        onAuthStateChanged(auth, (user) => {
            if (user) {
                setCheckLogin(true);
                createSession();
                setcurrentUser(user);
                return <Navigate to="/" />
            } else {
                deleteSession();
                setCheckLogin(false);
            }
        })
    },[]);

    return (
      <NewsContext.Provider value={{checkuserloggedIn,favouriteData,Addfavourite,checkLogin,newsData,toogleDataView,Logout,Login,createNewUser, setToogleDataView,viewElement, setDetailedViewElement}}>
        {children}
      </NewsContext.Provider>
    );
  };