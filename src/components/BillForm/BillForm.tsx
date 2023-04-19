import React from 'react';
import Button from "@mui/material/Button";
import {TextField} from "@mui/material";
import {DatePicker} from "react-advance-jalaali-datepicker";
import CalendarMonthIcon from "@mui/icons-material/CalendarMonth";

export const BillForm = ()=> {
    const DatePickerInput = (props:any) => {
        return <input className="DatePicker1" {...props} />;
    }
    const change = (unix:any, formatted:any) => {
        console.log(unix); // returns timestamp of the selected value, for example.
        console.log(formatted); // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
    }
    return (<div className='addNew__Product'>

                <div className='ModalBox__Items'>
                        <label>سریال صورتحساب:</label>
                        <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                        <label htmlFor=''>نوع صورتحساب:</label>
                        <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                        <label >نوع الگو:</label>
                        <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                        <label htmlFor=''>روش تسویه:</label>
                        <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                        <label >مبلغ نسیه:</label>
                        <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                        <label htmlFor=''>روش  پرداخت:</label>
                        <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                        <label>شماره پیگیری/شماره مرجع:</label>
                        <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                        <label htmlFor=''>سود فروشنده:</label>
                        <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                        <label >تاریخ پرداخت:</label>
                    <div className='searchBox__items'>
                        <CalendarMonthIcon fontSize='medium'/>
                        <DatePicker
                            inputComponent={DatePickerInput}
                            placeholder="...انتخاب تاریخ"
                            format="jYYYY/jMM/jDD"
                            onChange={change}
                            id="datePicker"
                        />
                    </div>
                </div>
                <div className='ModalBox__Items'>
                        <label htmlFor=''>مالیات موضوع 17:</label>
                        <TextField sx={{width: '20rem'}} />
                </div>
                <div className='ModalBox__Items'>
                        <label >مبلغ کل:</label>
                        <TextField sx={{width: '20rem'}} />
                </div>

        </div>
    )
}