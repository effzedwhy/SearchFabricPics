import { Fragment, useState, useRef } from 'react'
import Images from './Images'
import classes from './SearchForm.module.css'

const SearchForm = () => {
  const [userInput, setUserInput] = useState('')

  const refInput = useRef()

  const searchHandler = e => {
    e.preventDefault()
    const input = refInput.current.value
    if (input !== '') {
      setUserInput(input)
      Images(userInput)
    }
  }

  const onChangeHandler = () => {
    setUserInput('')
  }
  return (
    <Fragment>
      <section className={classes['form-container']}>
        <form className={classes['search-form']} onSubmit={searchHandler}>
          <label className={classes['search-text']}>Search</label>
          <div className={classes['search-container']}>
            <input
              placeholder='Search by fabric name for e.g boat_navy1'
              className={classes['search-box']}
              ref={refInput}
              onChange={onChangeHandler}
            ></input>
            <button className={classes['search-btn']} type='submit'>
              Search
            </button>
          </div>
        </form>
      </section>
      <section>{userInput !== '' && <Images userInput={userInput} />}</section>
    </Fragment>
  )
}

export default SearchForm
