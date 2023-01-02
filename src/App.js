import './App.css'
import { Provider } from 'react-redux'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Counter from './components/Counter'
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
