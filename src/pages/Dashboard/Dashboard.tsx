import React from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Filler,
    Legend,
    BarElement,
} from 'chart.js';
import { Line,Bar } from 'react-chartjs-2';
import faker from 'faker';
import '../../assets/styles/styles.scss'
import {Header} from "../../layouts/Header/Header";
import {SideBar} from "../../layouts/SideBar/SideBar";
import PeopleIcon from "@mui/icons-material/People";
import LocalMallIcon from "@mui/icons-material/LocalMall";
export const Dashboard = () => {


    //---------------------Chart------------------------------
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Filler,
        Legend,
        BarElement,
    );
    //--------------LineChart Date--------------------------------

    const options = {
        responsive: true,
        // plugins: {
        //     legend: {
        //         position: 'top' as const,
        //     },
        //     title: {
        //         display: true,
        //         text: 'Chart.js Line Chart',
        //     },
        // },
    };

    const labels = ['فروردین', 'اردیبهشت', 'خرداد', 'تیر', 'مرداد', 'شهریور'];

    const data = {
        labels,
        datasets: [
            {
                fill: true,
                label: 'صورتحساب',
                data: labels.map(() => faker.datatype.number({ min: -1000, max: 1000 })),
                borderColor: 'rgb(53, 162, 235)',
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    //-----------------------------------------------------------------
    //-----------------VerChart----------------------------------------
    const Veroptions = {
        responsive: true,
        // plugins: {
        //     legend: {
        //         position: 'top' as const,
        //     },
        //     title: {
        //         display: true,
        //         text: 'Chart.js Bar Chart',
        //     },
        // },
    };

     const Verdata = {
        labels,
        datasets: [
            {
                label: '',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(255, 99, 132, 0.5)',
            },
            {
                label: '',
                data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
                backgroundColor: 'rgba(53, 162, 235, 0.5)',
            },
        ],
    };
    //-----------------------------------------------------------------

    return (

        <div className='dashboard__box'>
            <Header/>

            <div className='dashboard'>
                <SideBar/>
                <div className='dashboard__Box'>
                    <h1>داشبورد مدیریت</h1>
                    <div className='chartBox'>
                        <div className='chart__rightBox'>
                            <div className='chart__rightBoxItem'>
                                <h2>صورتحساب های قبلی</h2>
                                <Line options={options} data={data} />
                            </div>
                            <div className='chart__rightBoxItem'>
                                <div style={{display:"flex",justifyContent:'space-between'}}>
                                    <h4>مشتری ها</h4>
                                    <div className='chart__ItemIcon'>
                                        <PeopleIcon/>
                                    </div>
                                </div>
                                <h2>25</h2>
                            </div>
                            <div className='chart__rightBoxItem'>
                                <div style={{display:"flex",justifyContent:'space-between'}}>
                                    <h4>کالاها</h4>
                                    <div className='chart__ItemIcon'>
                                        <LocalMallIcon style={{color: '#5046E5'}}/>
                                    </div>
                                </div>
                                <h2>125</h2>
                            </div>
                        </div>
                        <div className='chart__leftBox'>
                            <h2>فروش ماهیانه</h2>
                            <Bar options={Veroptions} data={Verdata} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}