import React, { Component } from 'react';
// import axios from 'axios';

export default class ItemRow extends Component {
    
    // constructor (props) {
    //     super(props);
    //     this.state = {
    //         list_complete: false,
    //     };
    // }

    // toggleComplete = () => {
    //     this.setState (
    //         {
    //             list_complete: !this.state.list_complete
    //         }
    //     );
    // }
    
    // toggleComplete(id) {
    //     axios.post('http://localhost:4000/lists/complete'+this.props.match.params.id)
    //     .then(res => {
    //         this.setState({
    //             list_complete: !this.props.list_completed
    //             // list_status: '',
    //             // list_item: '',
    //             // list_due: '',
    //             // new_item: newItem
                
    //         })
    //     });
    // }

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
                    {/* <a href={"/complete/"+this.props.list._id} onClick={this.toggleComplete(this.props.list._id)} className="btn btn-primary" role="button">Complete</a> */}
                    {/* <button  onClick={this.toggleComplete()} className="btn btn-primary" >Complete</button> */}

                </td>

            </tr>
        );
    }

}


