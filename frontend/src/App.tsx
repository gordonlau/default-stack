import { Route, Switch } from 'wouter';
import { Home } from './pages/Home';
import { AuthGuard } from './components/AuthGuard';

function App() {
    return (
        <div>
            <AuthGuard>
                <Switch>
                    <Route path="/" component={Home} />
                </Switch>
            </AuthGuard>
        </div>
    );
}

export default App;
