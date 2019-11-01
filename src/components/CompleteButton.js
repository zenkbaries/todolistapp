import React, {Component} from 'react';
import axios from 'axios';


class CompleteButton extends Component {

    constructor(props){
        super(props);
        this.state = {
            complete: null,
            isLoading: false,
        };
        this.click = this.click.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/lists/'+this.props.item)
            .then(
                response => {
                    this.setState(
                        {
                            complete: response.data.list_complete
                        }
                    )
                    console.log('response:'+response.data.list_complete);
                    console.log('complete:'+this.state.complete);  
                },
            )
            .then (console.log('get:'+this.state.complete))
            .catch(
                function (error) {
                    console.log(error);
                }
            )
    }

    // componentDidUpdate() {

    //     const obj = {
    //         list_complete: this.state.list_complete
    //     }
    //     axios.post('http://localhost:4000/lists/complete/'+this.props.item, obj)
    //         .then(
    //             (response) => {
    //               this.setState({ isLoading: false });
    //               console.log('response:',response);
    //             }
    //         )
    //         .then(
    //             console.log('axiosed')
    //         )
    //         .catch(
    //             (err) => {
    //               this.setState({ isLoading: false });
    //               console.log(err);
    //               console.log('id:'+this.props.item);
    //             }
    //          );
    // }

    click() {
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
       return  (
            <div>
                <button className="btn btn-primary" onClick={ this.click} disabled={this.state.isLoading}> Completed?</button>
            </div>
           );
    }
}

export default CompleteButton;

// /// Notes ///
// Got the idea from stackoverflow
// https://stackoverflow.com/questions/49445911/how-to-get-axios-post-info-after-click-a-button-once