import { Route, Switch, useLocation } from 'wouter';
import { Home } from './pages/Home';
import { AuthGuard } from './components/AuthGuard';

function App() {
    const [location] = useLocation()
    return (
        <div>
            <AuthGuard key={location}>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </AuthGuard>
        </div>
    );
}

export default App;
