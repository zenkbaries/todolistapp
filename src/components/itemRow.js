import React, { Component } from 'react';
import CompleteButton from './CompleteButton';

export default class ItemRow extends Component {

    handleClick() {
        console.log('clicked');
        console.log('complete:'+this.state.complete);

        this.setState(
            { 
                isLoading: true,
                complete: !this.state.complete
            }
        );
        console.log('setstate');
        console.log('complete:'+this.state.complete);
        // console.log('list_complete:'+response.data.list_complete);
  
        const obj = {
            list_complete: this.state.complete
        }
        console.log(this.state.complete);

        axios.post('http://localhost:4000/lists/complete/'+this.props.item, obj)
            .then(
                (response) => {
                  this.setState({ isLoading: false });
                  console.log('response:',response);
                }
            )
            .then(
                console.log('axiosed')
            )
            .catch(
                (err) => {
                  this.setState({ isLoading: false });
                  console.log(err);
                  console.log('id:'+this.props.item);
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
                    <CompleteButton onClick={() => this.handleClick()} />
                </td>
                <td>{(this.props.list.list_complete) ? 'Yes' : 'No'}</td>

            </tr>
        );
    }

}


