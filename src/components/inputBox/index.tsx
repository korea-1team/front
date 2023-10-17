import { ChangeEvent, Dispatch, KeyboardEvent, SetStateAction, forwardRef, useState } from 'react';
import './style.css';
import { INPUT_ICON } from 'constant';

//           interface: Input Box 컴포넌트           //
interface Props {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  helper?: string;
  icon?: INPUT_ICON;
  error?: boolean;
  setValue: Dispatch<SetStateAction<string>>;
  buttonHandler?: () => void;
}

//          component          //
// description: 인풋 상자 컴포넌트 //
export default function InputBox({ label, type, placeholder, value, helper, icon, error, setValue, buttonHandler }: Props) {

  //          state          //
  
  //          function          //
  
  //          event handler          //
  // description: 입력값 변경 이벤트 //
  const onChangeHandler = (value: string) => {
    setValue(value);
  }

  //          component          //

  //          effect          //
  
  //          render          //

  
          
      

  return (
    <div className='input-box'>
      <div className='inputbox-label'>{ label }</div>
      <div className={error ? 'inputbox-container-error' : 'inputbox-container'}>
        <input className='input' type={type} placeholder={placeholder} value={value} onChange={(event) => onChangeHandler(event.target.value)} />
        {
          icon && (
            <div className='input-box-icon' onClick={buttonHandler}>
              {
                icon === INPUT_ICON.ON ? (<div className='eye-light-on-icon'></div>) :
                icon === INPUT_ICON.OFF ? (<div className='eye-light-off-icon'></div>) :
                icon === INPUT_ICON.ARROW ? (<div className='input-rigth-arrow-icon'></div>) : 
                (<></>)
              }
            </div>
          )
        }
      </div>
      { helper && (<div className='input-box-helper'>{ helper }</div>) }
    </div>
  )
}

