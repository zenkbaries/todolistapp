import React, { Component } from 'react';
import axios from 'axios';

export default class EditTask extends Component {

    constructor(props) {
        super(props);

        this.onChangeTaskDescription = this.onChangeTaskDescription.bind(this);
        this.onChangeTaskResponsible = this.onChangeTaskResponsible.bind(this);
        this.onChangeTaskPriority = this.onChangeTaskPriority.bind(this);
        this.onChangeTaskCompleted = this.onChangeTaskCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            list_status: '',
            list_item: '',
            list_due: '',
            list_created: ''
        }
    }

    componentDidMount() {
        axios.get('http://localhost:4000/lists/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    list_status: response.data.list_status,
                    list_item: response.data.list_item,
                    list_due: response.data.list_due,
                    list_created: response.data.list_created
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    onChangeTaskDescription(e) {
        this.setState({
            list_status: e.target.value
        });
    }

    onChangeTaskResponsible(e) {
        this.setState({
            list_item: e.target.value
        });
    }

    onChangeTaskPriority(e) {
        this.setState({
            list_due: e.target.value
        });
    }

    onChangeTaskCompleted(e) {
        this.setState({
            list_created: !this.state.list_created
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const obj = {
            list_status: this.state.list_status,
            list_item: this.state.list_item,
            list_due: this.state.list_due,
            list_created: this.state.list_created
        };
        console.log(obj);
        axios.post('http://localhost:4000/lists/update/'+this.props.match.params.id, obj)
            .then(res => console.log(res.data));
        
        this.props.history.push('/');
    }

    render() {
        return (
            <div>
                <h3 align="center">Update Task</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group"> 
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.list_status}
                                onChange={this.onChangeTaskDescription}
                                />
                    </div>
                    <div className="form-group">
                        <label>Responsible: </label>
                        <input 
                                type="text" 
                                className="form-control"
                                value={this.state.list_item}
                                onChange={this.onChangeTaskResponsible}
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
                                    onChange={this.onChangeTaskPriority}
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
                                    onChange={this.onChangeTaskPriority}
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
                                    onChange={this.onChangeTaskPriority}
                                    />
                            <label className="form-check-label">High</label>
                        </div>
                    </div>
                    <div className="form-check">
                        <input  className="form-check-input"
                                id="completedCheckbox"
                                type="checkbox"
                                name="completedCheckbox"
                                onChange={this.onChangeTaskCompleted}
                                checked={this.state.list_created}
                                value={this.state.list_created}
                                />
                        <label className="form-check-label" htmlFor="completedCheckbox">
                            Completed
                        </label>                        
                    </div>

                    <br />

                    <div className="form-group">
                        <input type="submit" value="Update Task" className="btn btn-primary" />
                    </div>
                </form>
            </div>
        )
    }
}