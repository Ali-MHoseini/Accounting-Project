import React from 'react';
import Checkbox from '@mui/material/Checkbox';
import {common} from "@mui/material/colors";


export const StuffRowBill = ()=> {
    const label = { inputProps: { 'aria-label': 'Checkbox demo' } };
    return (
        <>
            <tr style={{cursor:'default'}}>
                <td>
                    <Checkbox {...label} color='success'/>
                </td>
                <td>1122334455</td>
                <td>تلویزیون 65 اینچی LG</td>
                <td>200</td>
                <td>عدد</td>
                <td>2500000</td>
                <td>نوع استثنایی</td>
                <td>0</td>

            </tr>
        </>
    )
}