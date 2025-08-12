import api from '../axiosconfig'
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
export function CustomerList()
{
    const [customers,setCustomer] =useState([]);
  useEffect(()=>{
     api.get("CustomerAPI")
     .then((response)=>{
        //alert("Success!");
      //console.log(response.data);
      setCustomer(response.data);
     })
     .catch((err)=>{
        //alert("Error!");
       console.log(err);
     });
     
    },[]);

    const handleClick=(id)=>{
       api.delete("CustomerAPI/"+ id)
       .then((response)=>
        {
            alert(response.data);
            setCustomer(customers.filter(p=>p.customerID!=id));
        })
       .catch((err)=> 
        {
            alert("Error");
            console.log(err);
        });
    }
    return(<>
       <h2> Customer List </h2>
       <Link to="/new"> New Customer </Link>
       <table border="1">
        <thead>
            <tr>
                <th>Customer ID </th>
                <th>Customer Name</th>
                <th> Address </th>
                <th> Email ID </th>
                <th> Mobile No</th>
                <th> Credit Limit</th>
            </tr>
        </thead>
        <tbody>
            {customers.map((item)=>
            <tr key={item.customerID}>
                <td> {item.customerID}</td>
                <td>{item.customerName}</td>
                <td>{item.address}</td>
                <td>{item.emailID}</td>
                <td>{item.mobileNo}</td>
                <td>{item.creditLimit}</td>
                <td>
                    <Link to={`/edit/${item.customerID}`}>Edit</Link>
                </td>

                <td>
                    <Link to="/editnew" state={item}>Edit New</Link>
                 </td>
                <td>
                    <button type='button' onClick={()=>handleClick(item.customerID)}>Delete</button>
                </td>

            </tr>)}
        </tbody>
       </table>
    </>);
}