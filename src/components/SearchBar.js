import './style/VideoItem.css';
import React from 'react';

class SearchBar extends React.Component {
    state = { textInput: ''};

    onChangeInput = event => {
        this.setState({ textInput: event.target.value });
    };

    onFormSubmit = event => {
        event.preventDefault();
        
        this.props.onFormSubmit(this.state.textInput);
    };

    render() {
        return(
        <div className="search-bar ui segment">
            <form onSubmit={this.onFormSubmit} className="ui form">
                <div className="field">
                    <label>Video Search</label>
                <input 
                className="text" 
                value={this.state.textInput}
                onChange={this.onChangeInput}
                onSubmit={this.onFormSubmit} />
                </div>
            </form>
        </div>
        );
    }
}

export default SearchBar;