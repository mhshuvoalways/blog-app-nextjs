const postsValidation = (value) => {
  const error = {};
  if (!value.title) {
    error.title = "Please provide title";
  }
  if (!value.description) {
    error.description = "Please provide description";
  }
  if (!value.category) {
    error.category = "Please provide category";
  }
  if (!value.image) {
    error.image = "Please provide image";
  }

  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

export default postsValidation