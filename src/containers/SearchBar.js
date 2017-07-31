import React, { Component } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import fetchWeather from '../actions/index'

//goal is to hook up our acion creator fetchWeather to SearchBar

//binding fetchWeather (with bindActionCreators) with dispatch and mapping it to props (mapDispatchToProps)
//gives us access to function this.props.fetchWeather inside our component (in onFormSubmit)
class SearchBar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            term: ''
        };
        this.onInputChange = this.onInputChange.bind(this);
        this.onFormSubmit = this.onFormSubmit.bind(this);
    }

    onInputChange = e => {
        const inputValue = e.target.value;
        this.setState({ term: inputValue });
    };

    onFormSubmit = e => {
        e.preventDefault();
        //fetch weather data, passing into fetchWeather func actual city as an argument which is city we going to
        //write down into search input
        this.props.fetchWeather(this.state.term);
        //clearing search input
        this.setState({ term: ''})
    };

    render(){
        return (
            <form
                onSubmit={this.onFormSubmit}
                className="input-group">
                <input
                    placeholder="Get a forecast"
                    className="form-control"
                    value={this.state.term}
                    onChange={this.onInputChange}/>
                <span className="input-group-btn">
                    <button className="btn btn-secondary">Search</button>
                </span>
            </form>
        )
    }
}
const mapDispatchToProps = dispatch => {
    //we are binding acion creator with dispatch and make sure that action creator(fetchWeather)
    // flows down to middleware and reducers
    return bindActionCreators(
        {fetchWeather: fetchWeather},
        dispatch
    )
};

export default connect(
    //first argument is null because we don't have any state in this component, we don't need mapStateToProps func
    null,
    mapDispatchToProps
)(SearchBar)
