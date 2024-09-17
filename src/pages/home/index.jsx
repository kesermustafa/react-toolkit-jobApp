import React from 'react';
import './home.scss'
import Filter from "../../components/filter/index.jsx";
import {useSelector} from "react-redux";
import Loading from "../../components/loading/Loading.jsx";
import Error from "../../components/error/Error.jsx";
import Card from "../../components/card/index.jsx";

const Home = () => {

    const {isLoading, error, jobs} = useSelector((store) => store.jobReducer)

    return (
        <div className="home-page">
            <Filter/>

            <div>
                {isLoading ? (<Loading/>)
                    : error ? (<Error/>)
                        : ( <div className='cards-wrapper'>
                             {jobs.map((job) => <Card key={job.id} job={job} />)}
                            </div>)}
            </div>
        </div>
    );
};

export default Home;
