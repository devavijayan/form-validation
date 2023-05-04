import FormSignup from "./FormSignup"
import './Form.css';

const Form = () => {
  return (
    <>
    <div className="form-container">
        <span className="close-btn">x</span>
        <div className="form-content-left">
           <img src="https://th.bing.com/th/id/OIP.l-0Tn5rWDr0X3_KxYWFiAwHaEK?pid=ImgDet&rs=1" width='100px' height='500px' 
           alt="left" 
           className="form-img" />
        </div>
        <FormSignup />
    </div>
    </>
  )
}

export default Form
