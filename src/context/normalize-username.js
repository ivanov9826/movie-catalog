const usernameNormalizer = (data) => {
  return data.email.split("@")[0];
};

export default usernameNormalizer;
