
type UserServiceProps = {
    isAuthenticated: () => boolean,
    isAdmin: boolean,
    isUser: boolean,
    authenticate: (login: string, password: string) => void,
    logOut: () => void
}

export const UserService: UserServiceProps =
{
    isAuthenticated: () => true,
    isAdmin: false,
    isUser: false,
    authenticate: (login, password) => authenticateUser(login, password),
    logOut: () => logOut(),
}

const authenticateUser = (login: string, password: string) => {
    console.log("auth", login, password);
}

const logOut = () => {
    console.log("logout");
}