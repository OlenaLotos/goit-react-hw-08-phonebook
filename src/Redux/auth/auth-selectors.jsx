const getIsRefresh = state => state.auth.isRefresh;
const getUsername = state => state.auth.user.name;
const isLoggedIn = state => state.auth.isLoggedIn;

const authSelectors = {
  getUsername,
  isLoggedIn,
  getIsRefresh,
};

export default authSelectors;
