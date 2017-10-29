import React from "react";
import { connect } from "react-redux";
import debounce from "lodash/debounce";
import { userInputChange, optionSelected } from "../actions/index";
import ResultBoxLarge from "./ResultBoxLarge";
import ResultBoxSmall from "./ResultBoxSmall";
import MediaQuery from "react-responsive";

export class SearchBox extends React.Component {
    constructor(props) {
        super(props);
        this.debouncedDispatch = debounce(textInput => this.props.dispatch(userInputChange(textInput)), 500);
    }

    // Avoid pass event to debounced function as event object may be recycled by React later
    onUserInputChange(textInput) {
        this.debouncedDispatch(textInput);
    }

    getResultContent() {
        return (
            <div>
                <MediaQuery query="(max-width: 576px)">
                <ResultBoxSmall
                    options={this.props.options} userInput={this.props.userInput}
                        isLoadingIconShown={this.props.isLoadingIconShown}
                        onClick={
                            itemId => this.props.dispatch(optionSelected(itemId))
                        }
                  />
              </MediaQuery>
                <MediaQuery query="(min-width: 576px)">
                    <ResultBoxLarge
                        options={this.props.options} userInput={this.props.userInput}
                        isLoadingIconShown={this.props.isLoadingIconShown}
                        onClick={
                            itemId => this.props.dispatch(optionSelected(itemId))
                        }
                  />
              </MediaQuery>
          </div>
        );
    }

    render() {
        return (
            <form className="select-box form-inline my-2 my-lg-0">
            {this.getResultContent()}
            <input
                    className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search"
                    onChange={e => this.onUserInputChange(e.target.value)}
                />
                {
                    this.props.isLoadingIconShown ? (
                        <img src="loading.gif" className="loading-icon" width={24} height={24} />
                    ) : null
                }
          </form>
        );
    }
}

const mapStateToProps = state => ({
    options: state.options,
    userInput: state.userInput,
    isLoadingIconShown: state.isLoadingIconShown,
});

export default connect(mapStateToProps)(SearchBox);
