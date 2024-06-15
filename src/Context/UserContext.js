// this context file is usually created in .js only

//In React,
//  context provides a way to share data across components without explicitly
//  passing props down through every level of the component tree

// This can be particularly useful for sharing data that is considered "global" to a subtree of components,
//
//  such as:
//
//     Authentication state: Whether a user is logged in or not, and their user information.
//     Theme: The current theme of your application (light, dark, etc.).
//     Locale: The preferred language of the user.

import React from "react";

let UserContext = React.createContext();

// every context is a provider which provides variables
// it is like a global variable

export default UserContext;

// it is used as below:

// <UserContext>
//     <Login/>
//     <Card>
//         <Data/>
//     </Card>
// </UserContext>

// in all the above, all the elements can access the variables in
// UserContext and there is no need of pass on props

// these elements inside the UserContext can be passed as a variable like
// with name children