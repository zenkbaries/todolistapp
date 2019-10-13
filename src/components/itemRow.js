import React, { Component } from 'react';
import { Link } from 'react-router-dom';
export default class ItemRow extends Component {

    render() {
        
        return (
            <tr>
                <td>{this.props.list.list_status}</td>
                <td>{this.props.list.list_item}</td>
                <td>{this.props.list.list_due}</td>
                <td>
                    <Link to={"/edit/"+this.props.list._id}>Edit</Link>
                </td>
            </tr>
        );
    }
}



