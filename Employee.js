import React, {component} from 'react';
//import {Button, from, Table} from 'react-bootstrap';


export class Employee extends React.Component {

    constructor (props){
        super(props);
        this.state = {employee : []};

    }

    getEmployeeList(){
        fetch('https://reqres.in/api/users?page=1')
        .then(response => response.json())
        .then(data => {
                this.setState({employee : data});

        })
        .catch(error =>
        {
            console.log(error);
        });
    }
    componentDidMount(){
        this.getEmployeeList();
    }

    render(){
        const{employee}=this.state;
        return(
            <div> 
                <h3 className= "m-3 d-flex justify-content-center">
                    React Grid Example

                </h3>
                <table>
                    <thread>
                        <tr>
                            <td>Id</td>
                            <td>Name</td>
                        </tr>
                    </thread>
                    <tbody>
                        {employee.map(emp =>
                            <tr key={emp.Id}>
                                <td> { emp.Id}</td>
                                <td> {emp.Name}</td>
                            </tr>
                            )}
                    </tbody>
                </table>
                <br></br>
                <br></br>

            </div>
        );
    }
}
export default Employee;