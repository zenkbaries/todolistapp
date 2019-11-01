import React, { Component } from 'react';
import CompleteButton from './CompleteButton';
import axios from 'axios';

export default class ItemRow extends Component {

    constructor(props){
        super(props);
        this.state = {
            complete: this.props.list.list_complete,
            isLoading: false,
        };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {

        this.setState(
            { 
                isLoading: true,
                complete: !this.state.complete
            }
        );
  
        const obj = {
            list_complete: this.state.complete
        }

        axios.post('http://localhost:4000/lists/complete/'+this.props.list._id, obj)
            .then(
                (response) => {
                  this.setState({ isLoading: false });
                }
            )
            .catch(
                (err) => {
                  this.setState({ isLoading: false });
                  console.log(err);
                }
             );
    } // end Click()

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
                    <CompleteButton onClick={() => this.handleClick() } />
                </td>
                <td>{(this.state.complete) ? 'Yes' : 'No'}</td>

            </tr>
        );
    }

}


