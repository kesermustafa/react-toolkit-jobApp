import React from 'react';
import './create.scss'
import Input from "./Input.jsx";
import Select from "./Select.jsx";
import {statusOpt, typeOpt} from "../../constants.js";
import api from "../../api/index.js";
import {useDispatch} from "react-redux";
import {createJob} from "../../redux/slice/jobSlice.js";
import {useNavigate} from "react-router-dom";
import {toast} from "react-toastify";


const Create = () => {

    const dispatch = useDispatch()

    const navigate = useNavigate();

    const handleSubmit = (e)=>{
        e.preventDefault();

        const formData = new FormData(e.target);
        const jobData = Object.fromEntries(formData.entries())

        jobData.date = Date.now();

        api.post("/jobs", jobData)
            .then((res) => {
                dispatch(createJob(res.data))
                navigate("/");
                toast.success("Job created successfully.");
            })
            .catch((err) => {
                console.log(err.message);
                toast.error("Bir Hata olustu")
            });
    }

    return (
        <div className="add-page">
            <section className='container'>
                <h2>Yeni Is Ekle</h2>

                <form onSubmit={handleSubmit}>
                    <Input label='Pozisyon' name='position'/>
                    <Input label='Sirket' name='company'/>
                    <Input label='Lokasyon' name='location'/>
                    <Select label='Durum' name='status' options={statusOpt}/>
                    <Select label='Tur' name='type' options={typeOpt}/>

                    <div className='send-button'>
                        <button className="learn-more">
                              <span className="circle" aria-hidden="true">
                              <span className="icon arrow"></span>
                              </span>
                              <span className="button-text">Gonder</span>
                        </button>
                    </div>
                </form>
            </section>
        </div>
    );
};

export default Create;
