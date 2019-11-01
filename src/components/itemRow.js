import React, { Component } from 'react';
import DeleteButton from './DeleteButton';

export default class ItemRow extends Component {
    
    render() {

        return (
            <tr>
                <td>{this.props.list.list_item}</td>
                <td>
                    {new Date(this.props.list.list_due).toDateString()}
                </td>
                <td>
                    <a href={"/edit/"+this.props.list._id} className="btn btn-info" role="button">Edit</a>
                    {/* <a href={"/delete/"+this.props.list._id} className="btn btn-danger" role="button">Delete</a> */}
                    <DeleteButton onCLick={this.deleteItem()} />
                </td>

            </tr>
        );
    }
}



