import React from 'react'

export const AddTransaction = () => {
  return (
    <>
      <h3>Add new transaction</h3>
      <form>
        <div class="form-control">
          <label for="text">Text</label>
          <input type="text" placeholder="Enter text..."/>
        </div>
        <div class="form-control">
          <label htmlFor="amount"
          >Amount <br />
          (negative - expense, positive - income)</label
          >
          <input type="number" placeholder = "Enter amount..."/>
          <button className="btn">Add transaction</button>
      </form>

    <>
  )
}
