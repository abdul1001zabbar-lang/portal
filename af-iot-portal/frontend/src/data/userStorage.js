const defaultUsers = [
    {
        id: 1,
        username: "admin",
        password: "admin123",
        role: "ADMIN"
    },
    {
        id: 2,
        username: "operator",
        password: "operator123",
        role: "OPERATOR"
    },
    {
        id: 3,
        username: "viewer",
        password: "viewer123",
        role: "VIEWER"
    }
];

export const getUsers = () => {
    const storedUsers = localStorage.getItem("users");

    if (storedUsers) {
        return JSON.parse(storedUsers);
    }

    localStorage.setItem(
        "users",
        JSON.stringify(defaultUsers)
    );

    return defaultUsers;
};

export const saveUsers = (users) => {
    localStorage.setItem(
        "users",
        JSON.stringify(users)
    );
};

export const clearUsers = () => {
    localStorage.removeItem("users");
};