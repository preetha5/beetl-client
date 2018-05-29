export const loadAuthToken = () => {
    return localStorage.getItem('authToken');
};

export const saveAuthToken = authToken => {
    try {
        localStorage.setItem('authToken', authToken);
    } catch (e) {}
};

export const clearAuthToken = () => {
    console.log("clearing authtoekn");
    try {
        console.log("removing authtoekn");
        localStorage.removeItem('authToken');
    } catch (e) {
        console.log("unable to remove authtoken");
    }
};