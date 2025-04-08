module.exports = (err, req, res, next) => {
  res.status(400).json({
    status: "error",
    err: err,
  });
  console.log(err);
};
