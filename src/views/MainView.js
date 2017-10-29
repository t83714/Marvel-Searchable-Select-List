import React from "react";
import MediaQuery from 'react-responsive';
import SearchBox from './SearchBox';

class MainView extends React.Component {
    render(){
        return (
            <main role="main">
                <MediaQuery query="(max-width: 576px)">
                    <div  className="container">
                        <div className="row">
                            <div className="col-md-12">
                            <SearchBox />
                            </div>
                        </div>
                    </div>
                </MediaQuery>
            </main>
        );
    }
}

export default MainView;