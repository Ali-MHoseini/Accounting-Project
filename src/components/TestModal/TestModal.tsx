import React, {ChangeEvent, useState} from 'react';
import Tooltip from "@mui/material/Tooltip";
import KeyboardBackspaceIcon from "@mui/icons-material/KeyboardBackspace";
import CloseIcon from "@mui/icons-material/Close";

interface Test {
    CloseModal:React.MouseEventHandler,
    ShowModal:boolean,
    ShowExcel:boolean,
    SetForm:React.MouseEventHandler,
    SetExcel:React.MouseEventHandler,
    SetNotExcel:React.MouseEventHandler
}
const TestModal = ({CloseModal,ShowModal,ShowExcel,SetForm,SetExcel,SetNotExcel}:Test)=> {

    const [showFileName,setFileName] = useState('')
    const setFile = (e:ChangeEvent):void => {
        const files = (e.target as HTMLInputElement).files;
        if (files && files[0]) {
            const file = files[0];
            setFileName(file.name)
        }
    }
    return (
        <>
                <div className='BackDrop' style={{display:ShowModal?'block':'none'}}/>
                <div className='ModalBox' style={{transform:ShowModal === true?'translateX(0)':'translateX(-100vw)',
                    opacity:ShowModal === true?'1':'0'}} >
                    <Tooltip title='بازگشت به صفخه قبل '>
                        <KeyboardBackspaceIcon
                            style={{color:'blue',cursor:'pointer',position:'absolute',left:'10px',top:'10px'}}
                            onClick={SetNotExcel}/>
                    </Tooltip>
                    <CloseIcon
                        onClick={CloseModal}
                        style={{color:'red',cursor:'pointer',position:'absolute',right:'10px',top:'10px'}}/>
                    <h2>افزودن صورتحساب جدید</h2>
                    <div className='ModalBoxes'>
                        {
                            ShowExcel?<div className='ModalBox__Child dragModal' style={{width:'100%'}}>
                                <input type="file" multiple draggable
                                       onChange={(e)=>setFile(e)} />
                                <p style={{textAlign:'center'}}>فایل اکسل مورد نظر را به روی این بخش بکشید یا بر روی اینجا کلیک کنید</p>
                                <p>{showFileName}</p>
                            </div>:<>
                                <div className='ModalBox__Child' onClick={SetExcel}>افزودن فایل Excel</div>
                                <div className='ModalBox__Child' onClick={SetForm}>افزودن از طریق فرم</div>
                            </>
                        }
                    </div>
                </div>

        </>
    )
}

export default React.memo(TestModal)