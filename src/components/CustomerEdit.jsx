import { useForm} from "react-hook-form";
import { useNavigate,useParams } from "react-router-dom";
import api from "../axiosconfig";
import { useEffect } from "react";
export function CustomerEdit()
{
    const navigate=useNavigate();

    const {register,handleSubmit,reset, formState:{errors,isValid,isDirty}} =useForm({mode:"onChange"});
    const cstyle={color:'red'};
     
    const {id}=useParams();
    
    useEffect(()=>{
        api.get("CustomerAPI/"+ id)
        .then((response)=>{
            console.log(response.data);
            reset(response.data);
        }).catch((err)=>{
            alert("Error!");
            console.log(err);
        });
     
    },[]);


    function onSubmit(data)
    {
       // console.log(data);
        //alert("Form Submitted");
      api.put("CustomerAPI",data).then((response)=>{
        alert(response.data);
        navigate("/");
      }).catch((err)=>{
         alert("Error");
         console.log(err);
        });
    }
    return(<>
    <h1> Edit Customer</h1>
   <form onSubmit={handleSubmit(onSubmit)}>
    <input type="hidden" {...register('customerID')} />
       <div>
        <label>Customer Name</label>
        <div>
            <input {...register('customerName',{
                required:'Customer Name Required',
                minLength:{
                    value:6,
                    message:'Minimum 6 Characters!'
                }
            })} type="text" />
            {errors.customerName&&<div style={cstyle}>{errors.customerName.message}</div>}
        </div>
      </div>

      

      <div>
        <label>Address: </label>
        <div>
            <textarea {...register('address',{
                required:'Address Required',
                minLength:{value:6,message:'Minimum 6 Charactes Required'},
                maxLength:{value:10,message:'Maximum 10 Characters Required'}
            })}></textarea>
            {errors.address&&<div style={cstyle}>{errors.address.message}</div>}
        </div>
      </div>

      <div>
        <label>Email </label>
        <div>
            <input type="text" {...register('emailID',{
                required:'Please Input Email!',
                pattern:{
                    value:/^\S+@\S+$/i,
                    message:'Invalid Email ID'
                }
            })} />
            {errors.emailID&&<div style={cstyle}>{errors.emailID.message}</div>}
        </div>
      </div>

      <div>
        <label>  Mobile No: </label>
        <div>
            <input type="text" {...register('mobileNo',{
            required:'Mobile No requried'
            })} />
            {errors.mobileNo&&<div style={cstyle}>{errors.mobileNo.message}</div>}
        </div>
      </div>

      <div>
        <label>  Credit Limit: </label>
        <div>
            <input type="text" {...register('creditLimit',{
            required:'creditLimit requried'
            })} />
            {errors.creditLimit&&<div style={cstyle}>{errors.creditLimit.message}</div>}
        </div>
      </div>

      <div>
         <input type="submit" disabled={!isValid} value="Update" />
      </div>
   </form>
    </>);
}

