import React, { Component } from 'react';
// import DeleteButton from './DeleteButton';
// import axios from 'axios';

export default class ItemRow extends Component {
    
    constructor(props){
        super(props);
        this.state = {
            isLoading: false,
        };
        // this.deleteItem = this.deleteItem.bind(this);
    }

    // deleteItem() {

    //     this.setState(
    //         { 
    //             isLoading: true
    //         }
    //     );
  
    //     // const obj = {
    //     //     list_complete: this.state.complete
    //     // }

    //     axios.post('http://localhost:4000/lists/delete/'+this.props.list._id)
    //         .then(
    //             (response) => {
    //               this.setState({ isLoading: false });
    //             }
    //         )
    //         .catch(
    //             (err) => {
    //               this.setState({ isLoading: false });
    //               console.log(err);
    //             }
    //          );
    // } 
    // end deleteItem()


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
                    {/* <DeleteButton onCLick={this.deleteItem()} /> */}
                </td>

            </tr>
        );
    }
}



