const { localStorage } = global.window;

const auth = {
    login(datas) {
        const { data, status, access_token, refresh_token } = datas;
        localStorage.access_token = access_token;

        const { phone, email, role, updatedAt, _id } = data;
        localStorage._id = _id;
        localStorage.phone = phone;
        localStorage.email = email;
        localStorage.role = role;
        localStorage.updatedAt = updatedAt;
        localStorage.role = role;
    },

    getAccessToken() {
        return localStorage.access_token;
    },

    userId() {
        return localStorage.userId;
    },

    username() {
        return localStorage.userName;
    },

    role() {
        return localStorage.role;
    },

    logout() {
        localStorage.clear();
    },
};

export default auth;

