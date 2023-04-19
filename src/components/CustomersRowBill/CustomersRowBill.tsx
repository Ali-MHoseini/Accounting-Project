import React, {useEffect,useState} from 'react';
interface CustomersRow{
    Title: string;
}
export const CustomersRowBill = ({Title}:CustomersRow)=> {

    const [bcgColor,setBcgColor] = useState<string>('')

    useEffect(()=>{
        switch (Title) {
            case 'غیر مالیاتی':
                setBcgColor('#269958')
                break;
            case 'مالیاتی':
                setBcgColor('#DD0F10')
                break;
            default:
                console.log(null)
        }
    },[])
    return (
        <>
            <tr>
                <td>
                    <span style={{padding:'0.25rem',backgroundColor:bcgColor,borderRadius:'0.5rem'}}>{Title}</span>
                </td>
                <td>1245</td>
                <td>علی حسینی</td>
                <td>111111111111</td>
                <td>225566</td>
                <td>6581822369</td>
                <td>256378</td>
            </tr>
        </>
    )
}