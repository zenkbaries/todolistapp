import React, {Component} from 'react';

export default class ItemField extends Component {
    render() {
        return (
            <tr>
                <th>Status</th>
                <th>Item</th>
                <th>Due</th>
                <th>Created</th>
                <th>misc</th>
            </tr>
        );
    }
}
