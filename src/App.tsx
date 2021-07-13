import { lazy, Suspense } from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch } from 'react-router-dom';

import Loader from './pages/LoaderPage';
import ErrorAlert from './components/error';

const LoginPage = lazy(() => import('./pages/LoginPage'));
const GamePage = lazy(() => import('./pages/GamePage'));

function App() {
    return (
        <Router>
            <Suspense fallback={<Loader />}>
                <ErrorAlert />
                <Switch>
                    <Route path="/game" component={GamePage} />
                    <Route path="/login" component={LoginPage} />
                    <Redirect to="/login" />
                </Switch>
            </Suspense>
        </Router>
    );
}

export default App;
