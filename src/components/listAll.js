import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';

const List = props => (
    <tr>
        <td>{props.list.list_status}</td>
        <td>{props.list.list_item}</td>
        <td>{props.list.list_due}</td>
        <td>{props.list.created_on}</td>

    </tr>
)

export default class TaskList extends Component {

    constructor(props) {
        super(props);
        this.state = {lists: []};
    }

    componentDidMount() {
        axios.get('http://localhost:4000/lists/')
            .then(response => {
                this.setState({ lists: response.data });
            })
            .catch(function (error){
                console.log(error);
            })
    }

    listoftask() {
        return this.state.lists.map(function(currentList, i){
            return <List list={currentList} key={i} />;
        })
    }

    render() {
        return (
            <div>
                <table className="table table-striped" style={{ marginTop: 20 }} >
                    <thead>
                        <tr>
                            <th>Status</th>
                            <th>Item</th>
                            <th>Due</th>
                            <th>Date Created</th>
                        </tr>
                    </thead>
                    <tbody>
                        { this.listoftask() }
                    </tbody>
                </table>
            </div>
        )
    }
}