import React, {useState} from 'react';
import Pagination from "@mui/material/Pagination";
import Button from "@mui/material/Button";
import {StuffRowBill} from "../StuffRowBill/StuffRowBill";
import {TextField} from "@mui/material";
import {SearchBox} from "../SearchBox/SearchBox";

export const ShowStuffs = ()=> {
    const [showPrevProducts, setPrevProducts] = useState<boolean>(false)

    return(
        <>
            {
                showPrevProducts?<div className='table__boxStuff'>
                    <div style={{display:'flex',alignItems: 'center',justifyContent:'space-between',width:'100%'}}>
                        <SearchBox SearchPlaceholder='جستجو بر اساس نام کالا...'/>
                        <Button variant='outlined' color='info' onClick={()=>setPrevProducts(false)}>+ افزودن کالا</Button>
                    </div>
                    <table>
                        <thead>
                        <th>انتخاب</th>
                        <th>نوع خریدار</th>
                        <th>شناسه اقتصادی</th>
                        <th>نام و نام خانوادگی</th>
                        <th>شناسه ملی</th>
                        <th>کد شعبه</th>
                        <th>کد پستی</th>
                        <th>شماره گذرنامه</th>
                        </thead>
                        <tbody>
                        <StuffRowBill />
                        <StuffRowBill />
                        <StuffRowBill />
                        <StuffRowBill />
                        <StuffRowBill />
                        <StuffRowBill />
                        </tbody>
                    </table>
                    <Pagination count={10} color="primary" className='pagination'/>
                </div>:<div className='addNew__Product'>
                    <Button
                        style={{position: 'absolute',top:'0',left: '0'}}
                        variant='outlined'
                        color='info'
                        onClick={()=>setPrevProducts(true)}>+ افزودن از کالا های سابق</Button>

                    <div className='ModalBox__Items'>
                        <label>شناسه کالا:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label htmlFor=''>نام کالا:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                            <label >شناسه یکتای ثبت قرارداد حق العمل کاری:</label>
                            <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                            <label htmlFor=''>واحد اندازه گیری:</label>
                            <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label >وزن خالص:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label htmlFor=''>تعداد/مقدار:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label>مبلغ واحد:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label htmlFor=''>مبلغ ارز:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label >نوع ارز:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label htmlFor=''>نرخ برابری ارز با ریال:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label >فروش ریالی کالا:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label htmlFor=''>ارزش ارزی کالا:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label htmlFor=''>اجرت ساخت:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label >سود فروشنده:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label htmlFor=''>حق العمل:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label >مجموع اجرت سود و حق العمل:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label htmlFor=''>نرخ مالیات بر ارزش افزوده:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label htmlFor=''>مبلغ مالیات برا ارزش افزوده:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label >نرخ سایر مالیات و عوارض:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label htmlFor=''>مبلغ سایر مالیات و عوارض:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label >مبلغ کل کالا:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>
                    <div className='ModalBox__Items'>
                        <label htmlFor=''>سهم نقدی از پرداخت:</label>
                        <TextField sx={{width: '20rem'}} />
                    </div>

                </div>
            }
        </>
    )

}