import React, {Component} from 'react';

class DeleteButton extends Component {

    render() {
       return  (
            <div>
                <button 
                    className="btn btn-danger" 
                    onClick={this.props.onClick} 
                    disabled={this.props.isLoading}
                >
                    Delete
                </button>
            </div>
           );
    }
}

export default DeleteButton;

// /// Notes ///
// Got the idea from stackoverflow
// https://stackoverflow.com/questions/49445911/how-to-get-axios-post-info-after-click-a-button-once