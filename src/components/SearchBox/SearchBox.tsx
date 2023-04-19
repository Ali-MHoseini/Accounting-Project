import React from 'react';
import SearchIcon from '@mui/icons-material/Search';
import FilterAltIcon from '@mui/icons-material/FilterAlt';
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import {
    DatePicker,
    DateTimePicker,
    DateRangePicker,
    DateTimeRangePicker
} from "react-advance-jalaali-datepicker";

interface SearchBox {
    SearchPlaceholder:string
}
export const SearchBox = ({SearchPlaceholder}:SearchBox)=> {
    const DatePickerInput = (props:any) => {
        return <input className="DatePicker" {...props} />;
    }
    const change = (unix:any, formatted:any) => {
        console.log(unix); // returns timestamp of the selected value, for example.
        console.log(formatted); // returns the selected value in the format you've entered, forexample, "تاریخ: 1396/02/24 ساعت: 18:30".
    }
    return(
        <div className="searchBox">
            <div className='searchBox__items'>
                <SearchIcon fontSize='medium'/>
                <input className='searchBox__input' type='search' placeholder={SearchPlaceholder}/>
            </div>
            <div className='searchBox__items'>
                <FilterAltIcon fontSize='medium'/>
                <select className='searchBox__input' style={{fontSize:'0.8rem',width:'100%'}} >
                    <option value='#'>جدیدترین</option>
                    <option value='#'>قدیمی ترین</option>
                </select>
            </div>
            <div className='searchBox__items'>
                <CalendarMonthIcon fontSize='medium'/>
                <DatePicker
                    inputComponent={DatePickerInput}
                    placeholder="...انتخاب از تاریخ"
                    format="jYYYY/jMM/jDD"
                    onChange={change}
                    id="datePicker"
                />
            </div>
            <div className='searchBox__items'>
                <CalendarMonthIcon fontSize='medium'/>
                <DatePicker
                    inputComponent={DatePickerInput}
                    placeholder="...انتخاب تا تاریخ"
                    format="jYYYY/jMM/jDD"
                    onChange={change}
                    id="datePicker"
                />
            </div>
        </div>
    )
}