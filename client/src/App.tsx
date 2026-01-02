import { Route, Switch, useLocation } from 'wouter';
import { Home } from './pages/Home';
import { AuthGuard } from './components/AuthGuard';
import { contract } from '../../api-server/src/contracts' 

function App() {
    const [location] = useLocation();
    console.log(contract)
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
