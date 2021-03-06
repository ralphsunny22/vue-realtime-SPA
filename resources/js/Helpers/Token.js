class Token {
    isValid(token) {
        const payload = this.payload(token);
        console.log(payload.iss);
        if (payload) {
            return payload.iss == "http://127.0.0.1:8000/api/auth/login" ||
                "http://127.0.0.1:8000/api/auth/register"
                ? true
                : false;
        }

        return false;
    }

    payload(token) {
        const payload = token.split(".")[1];
        //console.log(token);
        return this.decode(payload);
        //console.log(this.decode(payload));
    }

    // decode(payload) {
    //     const jwtDecode = JSON.parse(atob(payload));
    //     return jwtDecode;
    // }

    decode(payload) {
        if (this.isBase64(payload)) {
            const jwtDecode = JSON.parse(atob(payload));
            return jwtDecode;
        }
        return false;
    }

    //random token check. Token is invalid error.
    isBase64(str) {
        try {
            return btoa(atob(str)).replace(/=/g, "") == str;
        } catch (err) {
            return false;
        }
    }
}

export default Token = new Token();
