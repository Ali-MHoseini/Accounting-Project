import React, {ReactNode} from 'react';
import ReceiptLongIcon from "@mui/icons-material/ReceiptLong";

interface DashBoardBox {
    Title:string,
    IconColor:string,
    BackColor:string,
    Icon:ReactNode,
    BackColor2:string

}
export const ColorBox = ({Title,IconColor,BackColor,Icon,BackColor2}:DashBoardBox)=> {
    return(
        <div className='DashBoardBox' style={{backgroundImage:`linear-gradient(to left,${BackColor},${BackColor2})`}}>
            <div style={{display:"flex",justifyContent:'space-between'}}>
                <h2>25</h2>
                <div className='chart__ItemIcon' style={{backgroundColor:`${IconColor}`,color:'white'}} >
                    {Icon}
                </div>
            </div>
            <p>{Title}</p>
        </div>
    )
}