import React from 'react';

function Signup(){
    return (
      <form>
        <h3>Sign Up</h3>
        <div className="mb-3">
          <label>First name</label>
          <input
            type="text"
            className="form-control"
            placeholder="Jane"
          />
        </div>
        <div className="mb-3">
          <label>Last name</label>
          <input type="text" className="form-control" placeholder="Doe" />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input
            type="email"
            className="form-control"
            placeholder="user@email.com"
          />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input
            type="password"
            className="form-control"
            placeholder="********"
          />
        </div>
        <div className="d-grid">
          <button type="submit" className="btn btn-primary">
            Sign Up
          </button>
        </div>
        <p className="forgot-password text-right">
          Already registered <a href="/login">Login?</a>
        </p>
      </form>
    )
  }

  export default Signup
