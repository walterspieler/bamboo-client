import jwt_decode from "jwt-decode";
export default {
  user: {
    authenticated: false
  },
  logout() {
    localStorage.removeItem("token");
  },
  checkAuth() {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      this.user.authenticated = true;
      return true;
    } else {
      this.user.authenticated = false;
      return false;
    }
  },
  getAuthHeader() {
    return {
      Authorization: "Bearer " + localStorage.getItem("token")
    };
  },
  getCurrentUserId() {
    const jwt = localStorage.getItem("token");
    if (jwt) {
      const decoded = jwt_decode(jwt);
      return decoded._id;
    }
  }
};
