import React from 'react';
import {Header} from "../../layouts/Header/Header";
import {SideBar} from "../../layouts/SideBar/SideBar";
import {ColorBox} from "../../components/ColorBox/ColorBox";
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Tooltip } from 'recharts';
import Pagination from "@mui/material/Pagination";
import {PrevBillRow} from "../../components/PervBillRow/PrevBillRow";
import {SearchBox} from "../../components/SearchBox/SearchBox";

export const PervBill = () => {
    document.title = 'گزارش صورتحساب ها';
    //---------------PieChart-----------------------
    const data = [
        { name: 'تایید خریدار', value: 25 },
        { name: 'رد خریدار', value: 25 },
        { name: 'نیاز به استعلام', value:25},
        { name: 'تایید سیستمی', value:25},
    ];
    const COLORS = ['#269958', '#DD0F10', '#F19200', '#757575'];
    const RADIAN = Math.PI / 180;
    const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }:any) => {
        const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
        const x = cx + radius * Math.cos(-midAngle * RADIAN);
        const y = cy + radius * Math.sin(-midAngle * RADIAN);

        return (
            <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
                {`${(percent * 100).toFixed(0)}%`}
            </text>
        );
    };

        //----------------------------------------------

    return(
        <div style={{display:'flex'}}>
            <SideBar/>
            <div className='dashboard'>
                <Header Title={`صورتحساب های قبلی`}/>
                <div className='dashboard__Box'>
                    <div className='bill__chartBox'>
                        <div className='bill__chartBoxRight'>
                            <p>نمودار وضعیت صورتحساب ها</p>
                            <div>
                                <ResponsiveContainer width={400} height={400}>
                                    <PieChart>
                                        <Pie dataKey="value"
                                             data={data}
                                             fill="#8884d8"
                                             label={renderCustomizedLabel}>
                                            {data.map((entry, index) => (
                                                <Cell
                                                    key={`cell-${index}`}
                                                    fill={COLORS[index % COLORS.length]}
                                                />
                                            ))}
                                        </Pie>
                                        <Tooltip />
                                    </PieChart>
                                </ResponsiveContainer>
                            </div>
                        </div>
                        <div className='bill__chartBoxLeft'>
                            <ColorBox
                                key={crypto.randomUUID()}
                                Title={"تایید خریدار"}
                                IconColor={"#00fd72"}
                                BackColor={"#269958"}
                                BackColor2={"#55ef9c"}
                                Icon={<ReceiptLongIcon/>}/>
                            <ColorBox
                                key={crypto.randomUUID()}
                                Title={"رد خریدار"}
                                IconColor={"red"}
                                BackColor={"#DD0F10"}
                                BackColor2={"#d89898"}
                                Icon={<ReceiptLongIcon/>}/>
                            <ColorBox
                                key={crypto.randomUUID()}
                                Title={"در انتظار واکنش"}
                                IconColor={"orange"}
                                BackColor={"#F19200"}
                                BackColor2={"#e5a77e"}
                                Icon={<ReceiptLongIcon/>}/>
                            <ColorBox
                                key={crypto.randomUUID()}
                                Title={"تایید سیستمی"}
                                IconColor={"#cccccc"}
                                BackColor={"#757575"}
                                BackColor2={"#d5d5d5"}
                                Icon={<ReceiptLongIcon/>}/>
                        </div>
                    </div>
                    <div className='bill__tableBox'>
                        <SearchBox SearchPlaceholder='جستجو بر اساس شماره صورتحساب...'/>
                        <table>
                            <thead>
                            <th>شماره صورتحساب</th>
                            <th>نام و نام خانوادگی</th>
                            <th>شناسه اقتصادی</th>
                            <th>شماره ثبت</th>
                            <th>تاریخ صورتحساب</th>
                            <th>وضعیت</th>
                            <th>#</th>
                            </thead>
                            <tbody>
                            <PrevBillRow Title='تایید خریدار'/>
                            <PrevBillRow Title='تایید خریدار'/>
                            <PrevBillRow Title='رد خریدار'/>
                            <PrevBillRow Title='تایید سیستمی'/>
                            <PrevBillRow Title='در انتظار واکنش'/>
                            <PrevBillRow Title='رد خریدار'/>
                            </tbody>
                        </table>
                        <Pagination count={10} color="primary" className='pagination'/>
                    </div>
                </div>
            </div>
        </div>
    )
}