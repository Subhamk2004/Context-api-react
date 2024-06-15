import React, {useState, useContext} from "react";
import UserContext from "../Context/UserContext";

// Think of contexts as a way to share data across components in your React
// application without having to explicitly pass props down through every level
// of the component tree (prop drilling).

// You create a context using the createContext function from React. This
// function returns a context object that you can use to define the data you
// want to share and provide access to it through a provider component.

// The useContext hook is what you use within functional components to consume
// the values from a context. It takes the context object (the one returned by
// createContext) as its argument.
// When you call useContext, React searches up the component tree and finds the
// nearest context provider above the component for that particular context. It
// then returns the current value of the context that the provider is making available.

function Login() {

    let [username, setUsername] = useState("");
    const [password, setPassword] = useState('')

    let {setUser} = useContext(UserContext)
    // in the above I have accessed the setUser context from the UserContext
    // to access the data

    let submitData = (e) => {
        e.preventDefault()
        setUser({username, password})
        // in the setUser I have passed the data of the user
    }
    // now just as I have passed the data through the setUser context I can
    // access the data through the User context

    // we have accessed the user data in the Profile.jsx go check in there

    return (
        <div>
            <h2>Login</h2>
            <input type="text" placeholder="username"
                   value={username}
                   onChange={(e) => {
                       return (
                           setUsername(e.target.value)
                       )
                   }}
            />
            <input type="password" placeholder="password"
                   value={password}
                   onChange={(e) => {
                       return (
                           setPassword(e.target.value)
                       )
                   }}
            />
            <button onClick={submitData}>Submit</button>
        </div>
    )
}

export default Login;