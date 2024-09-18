import React, {useEffect, useState} from 'react';
import Select from "../../pages/create/Select.jsx";
import Input from "../../pages/create/Input.jsx";
import {sortOpt, statusOpt, typeOpt} from "../../constants.js";
import "../../pages/create/create.scss";
import api from "../../api/index.js";
import {useDispatch} from "react-redux";
import {setError, setJobs, setLoading} from "../../redux/slice/jobSlice.js";

const Filter = () => {

    const [text, setText] = useState();
    const [debouncedText, setDebouncedText] = useState();
    const [status, setStatus] = useState();
    const [type, setType] = useState();
    const [sort, setSort] = useState();

    const dispatch = useDispatch();

    // DEBOUNCE YONTEMI
    useEffect(() => {
        if(text === undefined || text === "") return;

        const timer = setTimeout(()=>{
            setDebouncedText(text);
        }, 500)

        // sure bitmeden tusa basilirsa sayac iptal et, sure sifirlansin
        return ()=> clearTimeout(timer)
    }, [text]);

    useEffect(() => {

        const params = {
            q: debouncedText,
            status,
            type,
            _sort : sort === "a-z" || sort === "z-a" ? "company" : "date",
            _order : sort === "a-z" || sort === "En Eski" ? "asc" : "desc",
        }

        dispatch(setLoading(true))

        api.get("/jobs", {params})
            .then((res) => {dispatch(setJobs(res.data))})
            .catch((err) => {dispatch(setError(err.message));
            })
    }, [debouncedText, status, type, sort]);


    const handleReset = (e)=>{
        e.target.reset();

        setText();
        setDebouncedText();
        setSort();
        setType();
        setStatus();
    }


    return (
        <div className="filter-sec">
           <h2>Filtreleme Formu</h2>

            <form action="" onReset={handleReset}>
                <Input label="Ara" handleChange={(e) => setText(e.target.value)} />

                <Select label="Durum" options={statusOpt} name={name} handleChange={(e) => setStatus(e.target.value)} />
                <Select label='Tur' options={typeOpt} name={name} handleChange={(e) => setType(e.target.value)} />
                <Select label='Sirala' options={sortOpt} name={name} handleChange={(e) => setSort(e.target.value)} />

                <div className='send-button'>
                    <button className="learn-more" type='reset'>
                              <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                              </span>
                        <span className="button-text">Filtre Sifirla</span>
                    </button>
                </div>
            </form>

        </div>
    );
};

export default React.memo(Filter);
