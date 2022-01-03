import { Routes as Router, Route } from 'react-router-dom';
import Home from '../pages/Home';

const Routes = () => {
    return(
        <Router>
            <Route exact path='/' element={<Home />}></Route>
        </Router>
    );
};

export default Routes;