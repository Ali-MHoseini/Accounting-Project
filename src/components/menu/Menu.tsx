import React from "react";
import '../../assets/styles/styles.scss'
import {NavLink,useNavigate} from "react-router-dom";
export const Menu = ()=> {
    const navigate = useNavigate();
    return(
        <div className='dashboard__menu'>
            <div className='dashboard__img'>
                <img src='../../src/assets/images/avatar.png' alt='avatar'/>
                <h3>علی حسینی</h3>
            </div>
            <button className='compose__bill'>+ ایجاد صورت حساب جدید</button>
            <NavLink to='/dashboard' className='dashboard__menuItem'>
                <div className='item__circle'></div>
                <p>داشبورد مدیریت</p>
            </NavLink>
            <NavLink to='#' className='dashboard__menuItem'>
                <div className='item__circle'></div>
                <p>صورت حساب های قبلی</p>
            </NavLink>
            <NavLink to='/dashboard/customers' className='dashboard__menuItem'>
                <div className='item__circle'></div>
                <p>مشتری ها</p>
            </NavLink>
            <NavLink to='/dashboard/stuffs' className='dashboard__menuItem'>
                <div className='item__circle'></div>
                <p>کالاها و خدمات</p>
            </NavLink>
            <button className='exitBTN' onClick={()=>navigate('/')}>خروج</button>
        </div>
    )
}