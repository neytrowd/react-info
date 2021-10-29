import './App.css';
import React from "react";
import {Switch, Route} from 'react-router-dom';
import Preview from "./pages/Preview";
import Form from "./pages/Form";
import NotFound from "./pages/NotFound";

function App() {
    return (
        <React.Fragment>
            <Switch>
                <Route exact path={'/'} component={Preview}/>
                <Route exact path={'/form'} component={Form}/>
                <Route path={'*'} component={NotFound}/>
            </Switch>
        </React.Fragment>
    );
}

export default App;
