// this is a provider for UserContext

import React from "react";
import UserContext from "./UserContext";

let UserContextProvider = ({children}) => {

    // this children is just a prop that will be passed to this function
    let [user, setUser] = React.useState(null);


    // The
    // value prop is an object that contains the state variables you want to
    // make available to other components through this context:
    //
    //     user: The current user information.
    //     setUser: The function to update the user information.
    //
    // {children}: This is the content that will be wrapped inside the context
    // provider. It's likely where you'll place other components that need access
    // to the user data.

    return(
        <>
            <UserContext.Provider value={{user, setUser}}>
                {children}
            </UserContext.Provider>
        </>
    )
}

// now we have wrapped the elements in the useContext.provider but what are
// the values or the data we are giving in the useContext, so that also we
// will give as above

// in that we will pass a value also called as props(😂 as if I don't
// know it now )

// children are nothing, but it's like what we are passing to the provider, it
// can be div also

export default UserContextProvider;

// now saying that we have stored the data we will now export it to app or
// main.jsx