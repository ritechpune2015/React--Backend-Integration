import api from '../axiosconfig'
import { useEffect } from 'react';
import { useState } from 'react';
export function CustomerList()
{
    const [customers,setCustomer] =useState([]);
  useEffect(()=>{
     api.get()
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

    return(<>
       <h2> Customer List </h2>
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
            </tr>)}
        </tbody>
       </table>
    </>);
}