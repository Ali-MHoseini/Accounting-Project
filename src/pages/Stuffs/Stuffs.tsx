import React from "react";
// import {Menu} from "../../layouts/SideBar/SideBar";
import Pagination from "@mui/material/Pagination";

export const Stuffs = () => {
    return(
        <div className='dashboard'>
            {/*<Menu />*/}
            <div className='dashboard__box'>
                <div className='header__box'>
                    <h1>کالاها و خدمات</h1>
                    <div style={{display: 'grid',gridTemplateColumns:'repeat(4,10rem)',justifyContent:'space-around'}}>
                        <div className='header__customerItem '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                            </svg>
                            <p>افزودن کالا/خدمات</p>
                        </div>
                        <div className='header__customerItem '>
                            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                 className="bi bi-plus-circle-fill" viewBox="0 0 16 16">
                                <path
                                    d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8.5 4.5a.5.5 0 0 0-1 0v3h-3a.5.5 0 0 0 0 1h3v3a.5.5 0 0 0 1 0v-3h3a.5.5 0 0 0 0-1h-3v-3z"/>
                            </svg>
                            <p>افزودن دسته ای کالا/خدمات</p>
                        </div>
                        <div className='header__customerItem'>
                            <p>15</p>
                            <p>تعداد کالاهای ثبت شده</p>
                        </div>
                        <div className='header__customerItem'>
                            <p>15</p>
                            <p>تعداد کالاهای ناموحود</p>
                        </div>
                    </div>
                </div>
                <div className='table__box'>
                    <input type='text' placeholder='جستجو بر اساس نام کالا...'/>
                    <table>
                        <thead>
                        <th>کد کالا</th>
                        <th>نام کالا</th>
                        <th>موجودی</th>
                        <th>واحد</th>
                        <th>قیمت(ریال)</th>
                        <th>نوع کالا</th>
                        <th>درست مالیات</th>
                        <th>#</th>
                        </thead>
                        <tbody>
                        <tr>
                            <td>1122334455</td>
                            <td>تلویزیون 65 اینچی LG</td>
                            <td>200</td>
                            <td>عدد</td>
                            <td>2500000</td>
                            <td>نوع استثنایی</td>
                            <td>0</td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td>1122334455</td>
                            <td>تلویزیون 65 اینچی LG</td>
                            <td>200</td>
                            <td>عدد</td>
                            <td>2500000</td>
                            <td>نوع استثنایی</td>
                            <td>0</td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td>1122334455</td>
                            <td>تلویزیون 65 اینچی LG</td>
                            <td>200</td>
                            <td>عدد</td>
                            <td>2500000</td>
                            <td>نوع استثنایی</td>
                            <td>0</td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td>1122334455</td>
                            <td>تلویزیون 65 اینچی LG</td>
                            <td>200</td>
                            <td>عدد</td>
                            <td>2500000</td>
                            <td>نوع استثنایی</td>
                            <td>0</td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td>1122334455</td>
                            <td>تلویزیون 65 اینچی LG</td>
                            <td>200</td>
                            <td>عدد</td>
                            <td>2500000</td>
                            <td>نوع استثنایی</td>
                            <td>0</td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </td>
                        </tr>
                        <tr>
                            <td>1122334455</td>
                            <td>تلویزیون 65 اینچی LG</td>
                            <td>200</td>
                            <td>عدد</td>
                            <td>2500000</td>
                            <td>نوع استثنایی</td>
                            <td>0</td>
                            <td>
                                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                                     className="bi bi-chevron-down" viewBox="0 0 16 16">
                                    <path fill-rule="evenodd"
                                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                                </svg>
                            </td>
                        </tr>
                        </tbody>
                    </table>
                    <Pagination count={10} color="primary" style={{direction:'ltr'}}/>
                </div>
            </div>
        </div>
    )
}