import React, {Component} from 'react';

class CompleteButton extends Component {

    render() {
       return  (
            <div>
                <button 
                    className="btn btn-primary" 
                    onClick={this.props.onClick} 
                    disabled={this.props.isLoading}
                >
                    Complete
                </button>
            </div>
           );
    }
}

export default CompleteButton;

// /// Notes ///
// Got the idea from stackoverflow
// https://stackoverflow.com/questions/49445911/how-to-get-axios-post-info-after-click-a-button-once