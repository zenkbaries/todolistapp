import React, { Component } from 'react';
import CompleteButton from './CompleteButton';

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
                    <a href={"/delete/"+this.props.list._id} className="btn btn-danger" role="button">Delete</a>
                    <CompleteButton item={this.props.list._id} />
                </td>
                <td>{(this.props.list.list_complete) ? 'Yes' : 'No'}</td>

            </tr>
        );
    }

}


