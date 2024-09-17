import React, {useEffect} from 'react';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/home/index.jsx";
import Create from "./pages/create/index.jsx";
import Header from "./components/header/index.jsx";
import api from "./api/index.js";
import {useDispatch} from "react-redux";
import {setError, setJobs, setLoading} from "./redux/slice/jobSlice.js";



const App = () => {

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(setLoading(true));

        api.get("/jobs")
            .then((res) => {dispatch(setJobs(res.data))})
            .catch((err) => {dispatch(setError(err.message))})
    }, []);


    return(
    <BrowserRouter>
        <Header />

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path="/create"  element={<Create/>} />
        </Routes>
    </BrowserRouter>
    )
};

export default App;
