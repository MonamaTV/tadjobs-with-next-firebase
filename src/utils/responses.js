export const authResponses = (error) => {
    console.log(error);
    let err = "";
    switch (error) {
        case "auth/email-already-exists": {
            err = "User aleady exists"
            break;
        }
        case "auth/invalid-email": {
            err = "Please provide a valid email"
            break;
        }
        case "auth/invalid-password": {
            err = "Please provide a valid password"
            break;
        }
        case "auth/user-not-found": {
            err = "User is not registered"
            break;
        }
        case "auth/wrong-password": {
            err = "Email or password do not match"
            break;
        }
        case "auth/email-already-in-use": {
            err = "User aleady exists."
            break;
        }
        default: {
            err = "Err bjale... what are you trying to happen?"
            break;
        }
    }
    return err;
}