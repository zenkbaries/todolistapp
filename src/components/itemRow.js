import React, { Component } from 'react';
import axios from 'axios';

export default class ItemRow extends Component {
    
    constructor (props) {
        super(props);
        this.state = {
            list_complete: false,
        };
    }
    
    async handleToggleComplete() {
        axios.post(
            'http://localhost:4000/lists/complete/'+this.props.list.id,
            { 
                list_complete: !this.props.list.list_complete,
            }
        )
        .then(res => console.log(res.data))
        .then(console.log("Now redirecting..."))
        this.props.history.push("/");

    }
        // const response = await axios.post(
        //     '/complete/THE_ID', 
        //     { 
        //         list_complete: !this.props.list.list_complete,
        //     }
        // );
        // console.log(response);

    render() {

        return (
            <tr>
                <td>{this.props.list.list_item}</td>
                <td>
                    {new Date(this.props.list.list_due).toDateString()}
                </td>
                <td>
                    <a href={"/edit/"+this.props.list._id} className="btn btn-info" role="button">Edit</a>
                    <a href={"/delete/"+this.props.list._id} className="btn btn-danger" role="button">Delete</a>
                    <button  onClick={() => this.toggleComplete()} className="btn btn-primary" >Complete</button>

                </td>

            </tr>
        );
    }

}


