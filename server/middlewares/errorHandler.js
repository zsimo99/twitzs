const errorHandler = (err, req, res, next) => {
  let customError = {
    statusCode: err.statusCode || 500,
    msg: err.message || "somthing wronge please try again",
  };

  if (err.name === "ValidationError") {
    customError.msg = `please provide a ${Object.values(err.errors)
      .map((value) => {
        if (value.kind === "required") return `${value.path}`;
        if (value.kind === "regexp") return `valide ${value.path}`;
      })
      .join(" & ")}`;
    customError.statusCode = 401;
  }

  if (err.code === 11000) {
    customError.msg =
      Object.keys(err.keyValue)[0] === "email"
        ? "this email already exists, try to login instead"
        : `${Object.values(
            err.keyValue
          )} already in use , please choose another ${Object.keys(
            err.keyValue
          )}`;
    customError.statusCode = 401;
  }

  if (
    customError.msg === "please provide a name and email" ||
    "Invalide credentials" ||
    "Wronge Password"
  ) {
    customError.statusCode = 401;
  }
  res.status(customError.statusCode).json({ msg: customError.msg });
  // res.json(err.message);
};

module.exports = errorHandler;
