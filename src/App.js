import './App.css'
import { Provider } from 'react-redux'
import AppHeader from './features/AppHeader'
import AppFooter from './features/AppFooter'
import Counter from './features/Counter'
import store from './store'

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <AppHeader />
        <div className="App-body">
          <div className="container">
            <Counter />
          </div>
        </div>
        <AppFooter />
      </div>
    </Provider>
  );
}

export default App
