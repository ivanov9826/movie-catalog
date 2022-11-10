const usrNorm = (data) => {
  return data.email.split("@")[0];
};

export default usrNorm;
