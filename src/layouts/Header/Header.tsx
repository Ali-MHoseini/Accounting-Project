import React,{useState} from 'react';
import '../../assets/styles/styles.scss';
import Badge from '@mui/material/Badge';
import Tooltip from '@mui/material/Tooltip';
import {useNavigate} from "react-router-dom";
import ReceiptLongIcon from '@mui/icons-material/ReceiptLong';


export const Header = ()=> {
    const [exitLogo,setExitLogo] = useState(false)
    const navigate = useNavigate()

    return (
        <>
            <header className='header'>
                <h2>Sepanta</h2>
                <div className='header__leftBox'>


                    <Tooltip title="صورتسحاب های قبلی">
                        <Badge color="success" variant="dot">
                            <ReceiptLongIcon style={{width:'2rem',height:'2rem',cursor:'pointer'}}/>
                        </Badge>
                    </Tooltip>


                    <div className='header__avatar'></div>


                    <Tooltip title="خروج">
                        <div style={{cursor: 'pointer'}}
                             onMouseOver={()=>setExitLogo(true)}
                             onMouseOut={()=>setExitLogo(false)}
                             OnClick={()=>navigate('/')}>

                            {
                                !exitLogo?<svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                               className="bi bi-door-closed" viewBox="0 0 16 16">
                                    <path
                                        d="M3 2a1 1 0 0 1 1-1h8a1 1 0 0 1 1 1v13h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V2zm1 13h8V2H4v13z"/>
                                    <path d="M9 9a1 1 0 1 0 2 0 1 1 0 0 0-2 0z"/>
                                </svg>: <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" fill="currentColor"
                                             className="bi bi-door-open" viewBox="0 0 16 16">
                                    <path d="M8.5 10c-.276 0-.5-.448-.5-1s.224-1 .5-1 .5.448.5 1-.224 1-.5 1z"/>
                                    <path
                                        d="M10.828.122A.5.5 0 0 1 11 .5V1h.5A1.5 1.5 0 0 1 13 2.5V15h1.5a.5.5 0 0 1 0 1h-13a.5.5 0 0 1 0-1H3V1.5a.5.5 0 0 1 .43-.495l7-1a.5.5 0 0 1 .398.117zM11.5 2H11v13h1V2.5a.5.5 0 0 0-.5-.5zM4 1.934V15h6V1.077l-6 .857z"/>
                                </svg>
                            }
                        </div>
                    </Tooltip >


                </div>
            </header>

        </>

    )
}