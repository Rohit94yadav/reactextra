import { useReducer } from "react";
import "./App.css";
import { initialState } from "./initialState";
import {reducer} from "./reducer"
import{Success,fail,req,Email,Password} from "./actionCreators"
import axios from "axios"

function App() {
  //use the useReducer function here; import the reducer function and initial state variable here.
  const [reducerState, dispatch] = useReducer(reducer,initialState);

const hsubmit=(e)=>{
  e.preventDefault()
dispatch(req)
let ra={email:reducerState.email,password:reducerState.password}
axios.post(`https://reqres.in/api/login`, ra).then((res) => {
   
  dispatch(Success(res.data.token))
}).catch((err) => {
  dispatch(fail)
  console.log(err)
})
}
  return (
    <div className="main-app">
      <div className="login-wrapper">
        <div style={{ textAlign: "center" }}>
          <h1>LOGIN</h1>
          <div className="welcome-text">
            Welcome to the RCT-211 E1 Evaluation
          </div>
          {/* if the user is authenticated as per the reducerState, THEN ONLY show div with the token data, OTHERWISE show the Incorrect Credentials div */}
          
          {reducerState.isAuth ? <div data-cy="token">Token:{reducerState.token}</div>:
          <div data-cy="incorrect-credentials" style={{ color: "red" }}>
            Incorrect Credentials
          </div>}
        </div>
        <form onSubmit={hsubmit}>
          <div className="email-wrapper">
            <label>Email</label>
            <input value={reducerState.Email} data-cy="email" onChange={(e)=>dispatch(Email(e.target.value))} />
          </div>
          <div className="password-wrapper">
            <label>Password</label>
            <input value={reducerState.Password} data-cy="password" onChange={(e)=>dispatch(Password(e.target.value))} />
          </div>
          <div className="submit-button-wrapper">
            <button onClick={(e)=>hsubmit(e)} data-cy="submit-button" type="submit">
              LOGIN
            </button>
          </div>
        </form>
        <div className="social-media-icons">
          <img src="/facebook.png" alt="facebook-icon" />
          <img src="/instagram.png" alt="facebook-icon" />
          <img src="/linkedin.png" alt="facebook-icon" />
          <img src="/twitter.png" alt="facebook-icon" />
          <img src="/github.png" alt="facebook-icon" />
        </div>
      </div>
    </div>
  );
}

export default App;
