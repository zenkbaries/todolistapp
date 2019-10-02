import React, { Component } from 'react';
import axios from 'axios';

export default class CreateList extends Component {

    constructor(props) {
        super(props);

        this.onChangeListStatus = this.onChangeListStatus.bind(this);
        this.onChangeListItem = this.onChangeListItem.bind(this);
        this.onChangeListDue = this.onChangeListDue.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            list_status: '',
            list_item: '',
            list_due: '',
            created_on: ''
        }
    }

    onChangeListStatus(e) {
        this.setState({
            list_status: e.target.value
        });
    }

    onChangeListItem(e) {
        this.setState({
            list_item: e.target.value
        });
    }

    onChangeListDue(e) {
        this.setState({
            list_due: e.target.value
        });
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log(`Form submitted:`);
        console.log(`Item Status: ${this.state.list_status}`);
        console.log(`Item: ${this.state.list_item}`);
        console.log(`Item Due: ${this.state.list_due}`);
     
        const newItem = {
            list_status: this.state.list_status,
            list_item: this.state.list_item,
            list_due: this.state.list_due,
        };

        axios.post('http://localhost:4000/lists/add', newItem)
            .then(res => console.log(res.data));

        this.setState({
            list_status: '',
            list_item: '',
            list_due: '',
        })
    }

    render() {
        return (
            <div style={{marginTop: 10}}>
                <h3>Create New Item</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.list_status}
                                onChange={this.onChangeListStatus}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.list_item}
                                onChange={this.onChangeListItem}
                                />
                    </div>
                    <div className="form-group">
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityLow" 
                                    value="Low"
                                    checked={this.state.list_due==='Low'} 
                                    onChange={this.onChangeListDue}
                                    />
                            <label className="form-check-label">Low</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityMedium" 
                                    value="Medium" 
                                    checked={this.state.list_due==='Medium'} 
                                    onChange={this.onChangeListDue}
                                    />
                            <label className="form-check-label">Medium</label>
                        </div>
                        <div className="form-check form-check-inline">
                            <input  className="form-check-input" 
                                    type="radio" 
                                    name="priorityOptions" 
                                    id="priorityHigh" 
                                    value="High" 
                                    checked={this.state.list_due==='High'} 
                                    onChange={this.onChangeListDue}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>

                    <div className="form-group">
                        <input type="submit" value="Create Item" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}