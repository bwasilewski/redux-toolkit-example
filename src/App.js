import './App.css'
import AppHeader from './components/AppHeader'
import AppFooter from './components/AppFooter'
import Counter from './components/Counter'

function App() {
  return (
    <div className="App">
      <AppHeader />
      <div className="App-body">
        <div className="container">
          <Counter />
        </div>
      </div>
      <AppFooter />
    </div>
  );
}

export default App
