import React, { Component } from 'react';

export default class ItemRow extends Component {

    render() {
        
        return (
            <tr>
                <td>{this.props.list.list_status}</td>
                <td>{this.props.list.list_item}</td>
                <td>{this.props.list.list_due}</td>
                <td>{this.props.list.list_created}</td>
                <td>actual misc2</td>
            </tr>
        );
    }
}



