import React from 'react';


class Customer extends React.Component{
    render(){ 
     return(
        <fragment>
        <h1>Customer Details</h1>
        <label>Customer ID</label>
        <input type="text"></input> <br/>
        <label>Customer Name</label>
        <input type="text"></input><br/>
        <label>Phone number</label>
        <input type="number"></input><br/>
        </fragment>
     );
    }
}


export  default Customer;