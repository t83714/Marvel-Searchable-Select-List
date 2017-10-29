import React from "react";

class SearchBox extends React.Component {
    render(){
        return (
            <form className="form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
            </form>
        );
    }
}

export default SearchBox;