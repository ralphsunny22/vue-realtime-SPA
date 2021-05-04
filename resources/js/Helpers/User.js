import Token from "./Token";
import AppStorage from "./AppStorage";

class User {
    login(data) {
        axios
            .post("/api/auth/login", data)
            .then(res => this.responseAfterLogin(res))
            .catch(error => console.log(error.response.data));
    }
    /////////////////////////
    responseAfterLogin(res) {
        const access_token = res.data.access_token;
        const username = res.data.user;
        if (Token.isValid(access_token)) {
            AppStorage.store(username, access_token);
            window.location = "/forum"; //refreshes the browser
        }
    }

    hasToken() {
        const storedToken = AppStorage.getToken();
        if (storedToken) {
            return Token.isValid(storedToken) ? true : false;
        }

        return false;
    }

    loggedIn() {
        return this.hasToken();
    }

    logout() {
        AppStorage.clear();
        window.location = "/forum";
    }

    name() {
        if (this.loggedIn()) {
            return AppStorage.getUser();
        }
    }

    id() {
        if (this.loggedIn()) {
            const payload = Token.payload(AppStorage.getToken());
            return payload.sub;
        }
    }

    //check if foreign user_id equals loggedIn user_id
    own(user_id) {
        return this.id() == user_id; //returns true/false
    }
}

export default User = new User();
