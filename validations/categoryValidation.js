const categoriesValidation = (value) => {
  const error = {};
  if (!value) {
    error.name = "Please provide category name";
  }

  let isValid = Object.keys(error).length === 0;
  return {
    error,
    isValid,
  };
};

export default categoriesValidation;
