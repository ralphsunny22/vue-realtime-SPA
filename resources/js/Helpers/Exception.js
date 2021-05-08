import User from "./User";

//Expired token check. Token Expired. Used in AppNotification.vue, to catch error for auth user "read and unRead" msgs
class Exception {
    handle(error) {
        this.isExipred(error.response.data.error);
    }

    isExipred(error) {
        if (error == "Token is invalid") {
            User.logout();
        }
    }
}

export default Exception = new Exception();
