import React from "react";

const styles={
    loadingIcon:{
        right: "45px",
        position: "absolute"
    }
};

class SearchBox extends React.Component {
    render(){
        return (
            <form className="select-box form-inline my-2 my-lg-0">
                <input className="form-control mr-sm-2" type="text" placeholder="Search" aria-label="Search" />
                <img src="loading.gif" className="loading-icon" width={24} height={24} />
            </form>
        );
    }
}

export default SearchBox;