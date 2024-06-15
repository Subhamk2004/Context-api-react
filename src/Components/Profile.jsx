import React, {useContext} from "react";
import UserContext from "../Context/UserContext.js";

function Profile() {
    let {user} = useContext(UserContext);

    if (!user){
        return (
            <div>
                Please Login
            </div>
        )
    }
    return (
        <div>
            Welcome {user.username}
        </div>
    )

}
export default Profile;

// the very first if condition checks if there exists a user or not