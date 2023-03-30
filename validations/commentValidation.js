const commentValidation = (value) => {
  const error = {};
  if (!value.postId) {
    error.postId = "Please provide postId";
  }
  if (!value.name) {
    error.name = "Please provide name";
  }
  if (!value.email) {
    error.email = "Please provide email";
  }
  if (!value.comment) {
    error.comment = "Please provide comment";
  }

  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

export default commentValidation;
