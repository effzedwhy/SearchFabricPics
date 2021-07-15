import { Fragment, useState, useRef } from 'react'
import Images from './Images'
import classes from './SearchForm.module.css'

const SearchForm = () => {
  const [userInput, setUserInput] = useState('')

  const refInput = useRef()

  console.log(userInput)

  const searchHandler = e => {
    e.preventDefault()
    const input = refInput.current.value

    setUserInput(input)
    Images(userInput)
  }

  return (
    <Fragment>
      <section className={classes['form-container']}>
        <form className={classes['search-form']} onSubmit={searchHandler}>
          <label className={classes['search-text']}>Search</label>
          <div className={classes['search-container']}>
            <input
              placeholder='Search by name, author or keyword'
              className={classes['search-box']}
              ref={refInput}
            ></input>
            <button className={classes['search-btn']} type='submit'>
              Search
            </button>
          </div>
        </form>
      </section>
      <section>
        <Images userInput={userInput} />
      </section>
    </Fragment>
  )
}

export default SearchForm