import classes from './App.module.css'
import SearchForm from './Components/SearchForm'

function App () {
  return (
    <div className='App'>
      <header>
        <div className={classes.header}>
          <h2>Crafty Cottons</h2>
        </div>
      </header>
      <SearchForm />
    </div>
  )
}

export default App
