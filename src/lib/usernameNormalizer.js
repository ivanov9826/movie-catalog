const usernameNormalizer = (username) => {
  return username.split("@")[0];
};

export default usernameNormalizer;
