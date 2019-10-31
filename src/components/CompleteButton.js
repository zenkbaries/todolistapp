import React, {Component} from 'react';
import axios from 'axios';


class CompleteButton extends Component {

    constructor(props){
        super(props);
        this.state = {
            list_complete: false,
            isLoading: false,
        };
        this.click = this.click.bind(this);
    }

    componentDidMount() {
        axios.get('http://localhost:4000/lists/'+this.props.match.params.id)
            .then(response => {
                this.setState({
                    list_complete: response.data.list_complete
                })   
            })
            .catch(function (error) {
                console.log(error);
            })
    }

    click() {

        this.setState({ isLoading: true });

        const obj = {
            list_complete: this.state.list_complete
        };

        axios.post('http://localhost:4000/lists/'+this.props.match.params.id, obj)
            .then(
                (response) => {
                  this.setState({ isLoading: false });
                  console.log(response);
                }
            )
            .catch(
                (err) => {
                  this.setState({ isLoading: false });
                  console.log(err);
                }
             );
    }

    render() {
       return  (
            <div>
                <button onClick={this.click} disabled={this.state.isLoading}> Completed?</button>
            </div>
           );
    }
}

export default CompleteButton;

// /// Notes ///
// Got the idea from stackoverflow
// https://stackoverflow.com/questions/49445911/how-to-get-axios-post-info-after-click-a-button-once