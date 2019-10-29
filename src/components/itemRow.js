import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class ItemRow extends Component {


    render() {

        return (
            <tr>
                <td>{this.props.list.list_status}</td>
                <td>{this.props.list.list_item}</td>
                <td>
                    {new Date(this.props.list.list_due).toDateString()}
                </td>
                <td><a href={"/edit/"+this.props.list._id} className="btn btn-info" role="button">Edit</a></td>
            </tr>
        );
    }
}



