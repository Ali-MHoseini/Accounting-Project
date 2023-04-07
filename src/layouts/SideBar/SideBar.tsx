 import React from 'react';
 import DashboardIcon from "@mui/icons-material/Dashboard";
 import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
 import PeopleIcon from "@mui/icons-material/People";
 import LocalMallIcon from "@mui/icons-material/LocalMall";

export const SideBar = ()=> {
    return(
        <div className='dashboard__menu'>
            <div className='userName'>
                <h3>علی حسینی</h3>
            </div>
            <button className='compose__bill'>+ ایجاد صورت حساب جدید</button>
            <div className='dashboard__menuItem'>
                <DashboardIcon/>
                <p>داشبورد مدیریت</p>
            </div>
            <div  className='dashboard__menuItem'>
                <ReceiptLongIcon/>
                <p>صورت حساب های قبلی</p>
            </div>
            <div  className='dashboard__menuItem'>
                <PeopleIcon/>
                <p>مشتری ها</p>
            </div>
            <div className='dashboard__menuItem'>
                <LocalMallIcon/>
                <p>کالاها و خدمات</p>
            </div>
        </div>
    )
}