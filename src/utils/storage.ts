const storage = {
  get(key) {
    const value = localStorage.getItem(key);
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  },

  set(key, value) {
    localStorage.setItem(key, JSON.stringify(value));
  },

  remove(key) {
    localStorage.removeItem(key);
  },

  clear() {
    localStorage.clear();
  },
  getSession(key) {
    const value = sessionStorage.getItem(key);
    if (!value) {
      return null;
    }
    return JSON.parse(value);
  },

  setSession(key, value) {
    sessionStorage.setItem(key, JSON.stringify(value));
  },

  removeSession(key) {
    sessionStorage.removeItem(key);
  },

  clearSession() {
    sessionStorage.clear();
  },
};

export default storage;
