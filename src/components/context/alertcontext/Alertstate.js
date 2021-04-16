import react,{useReducer} from 'react';
import AlertContext from './alertcontext';
import alertreducer from './alertreducer';
import {v4 as uuidv4} from 'uuid';
import {REMOVE_ALERT, SET_ALERT} from '../../types/types';

const AlertState=(props)=>{

    const initialState=[];

    const [state,dispatch]=useReducer(alertreducer,initialState);

    //SET ALERT && REMOVE_ALERT

    const settingAlert=(msg,type,timeout=5500)=>{
        const id =uuidv4();
        const alert ={
            msg,
            type,
            id
        }
        dispatch({type:SET_ALERT,payload:alert});
        //REMOVING_ALERT

        setTimeout(() => {
           dispatch({type:REMOVE_ALERT,payload:id}); 
        }, timeout);
    };

 return(
    <AlertContext.Provider value={{
        state,
        settingAlert
    }}>
        {props.children}
    </AlertContext.Provider>
 )

}//AlertState

export default AlertState;