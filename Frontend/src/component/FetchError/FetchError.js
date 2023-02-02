import React, {Component} from 'react'
// import errorimg from "./bounc.png"

class FetchError extends React.Component{
    constructor(props){
        super(props);
        // console.log(props);
    }
    render(){
        return (
            <div className='error-div'>
                {/* <img src={errorimg}/> */}
                <p>We are not able to get the captions at the moment!</p>
                <p>please try again</p>
                <button onClick={this.props.retry}>Retry</button>
            </div>
        );
    }
}
export default FetchError