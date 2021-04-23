import react,{ useContext } from 'react';
import AlertContext from './context/alertcontext/alertcontext';

const Alert=()=>{

  const alertContext = useContext(AlertContext);
  
  console.log(alertContext.state.length);

 return(
  alertContext.state.length>0 ? alertContext.state.map(
    (eachalert)=>{
       return(
        <div key={eachalert.id} className={`alert alert-danger`}>
        <i class="fa fa-info-circle" aria-hidden="true"></i>  {eachalert.msg}
      </div>
       );
    }
 ):""//alertcontextmap
 );
}//Alert

export default Alert