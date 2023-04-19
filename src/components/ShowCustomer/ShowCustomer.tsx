import React, {useState} from 'react';
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import {CustomersRowBill} from "../CustomersRowBill/CustomersRowBill";
import AddModal from "../AddModal/AddModal";
import {Autocomplete, TextField} from "@mui/material";
import {SearchBox} from "../SearchBox/SearchBox";

export const ShowCustomer = ()=> {
    const [showPrevCustomer, setPrevCustomer] = useState<boolean>(false)
    const customerModel = [{label:'مالیاتی',id:'1'},{label:'غیرمالیاتی',id:'2'}]
    return(
        <>
            {showPrevCustomer?<div className='table__boxCus'>

                <div style={{display:'flex',alignItems: 'center',justifyContent:'space-between',width:'100%'}}>
                    <SearchBox SearchPlaceholder='جستجو بر اساس نام مشتری...'/>

                    <Button
                        variant='outlined'
                        color='info'
                        onClick={()=>setPrevCustomer(false)}>
                        + افزودن مشتری جدید
                    </Button>
                </div>
                <table>
                    <thead>
                    <th>نوع خریدار</th>
                    <th>شناسه اقتصادی</th>
                    <th>نام و نام خانوادگی</th>
                    <th>شناسه ملی</th>
                    <th>کد شعبه</th>
                    <th>کد پستی</th>
                    <th>شماره گذرنامه</th>
                    </thead>
                    <tbody>
                    <CustomersRowBill Title='مالیاتی'/>
                    <CustomersRowBill Title='مالیاتی'/>
                    <CustomersRowBill Title='غیر مالیاتی'/>
                    <CustomersRowBill Title='مالیاتی'/>
                    <CustomersRowBill Title='غیر مالیاتی'/>
                    <CustomersRowBill Title='غیر مالیاتی'/>
                    </tbody>
                </table>
                <Pagination count={10} color="primary" className='pagination'/>
            </div>:
                <div className='addNew__Customer'>
                    <Button
                        style={{position: 'absolute',top:'0',left: '0'}}
                        variant='outlined'
                        color='info'
                        onClick={()=>setPrevCustomer(true)}>+ افزودن از مشتری های سابق</Button>
                    <div className='ModalBox__Items'>
                        <label>نوع خریدار:</label>
                        <Autocomplete
                            disablePortal
                            options={customerModel}
                            sx={{ width: '20rem',justifySelf: 'start'}}
                            renderInput={(params) =>
                                <TextField {...params} placeholder="مالیاتی یا غیر مالیاتی"/>}
                        />
                    </div>
                    <div className='ModalBox__Items'>
                        <label htmlFor=''>شناسه ملی خریدار:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label >نام و نام خانوادگی خریدار:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label htmlFor=''>شماره گذرنامه:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label >کد شعبه:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label htmlFor=''>کد پستی:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
            </div>}
        </>

    )
}