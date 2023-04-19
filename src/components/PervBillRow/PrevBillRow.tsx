import React, {useEffect, useState} from "react";

interface BillRow {
    Title: string;
}

export const PrevBillRow = ({Title}:BillRow)=> {
    const [bcgColor,setBcgColor] = useState<string>('')

    useEffect(()=>{
        switch (Title) {
            case 'تایید خریدار':
                setBcgColor('#269958')
                break;
            case 'رد خریدار':
                setBcgColor('#DD0F10')
                break;
            case 'تایید سیستمی':
                setBcgColor('#757575')
                break;
            case 'در انتظار واکنش':
                setBcgColor('#F19200')
                break;
            default:
                console.log(null)
        }
    },[])


    return(
        <tr>
            <td>52367</td>
            <td>علی حسینی</td>
            <td>111111111111</td>
            <td>225566</td>
            <td>1401/12/25</td>
            <td style={{padding:'1rem'}}>
                <p
                    style={{backgroundColor:`${bcgColor}`,textAlign:"center",borderRadius:'0.5rem',padding:'0.25rem',color:'white'}}>
                    {Title}
                </p>
            </td>
            <td>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                     className="bi bi-chevron-down" viewBox="0 0 16 16">
                    <path fill-rule="evenodd"
                          d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
                </svg>
            </td>
        </tr>
    )
}
