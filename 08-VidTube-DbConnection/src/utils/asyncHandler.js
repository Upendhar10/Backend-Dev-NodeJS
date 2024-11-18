/*
# Higher Order Function
const asyncHandler = (fn) => {
  () => {};
};

*/

// # Using promises
const asyncHandler = (requestHandler) => {
  (req, res, next) => {
    Promise.resolve(requestHandler(req, res, next)).catch((err) => next(err));
  };
};

export default asyncHandler;

// # Using async/await

/*

const asyncHandler = (fn) => async (req, res, next) => {
  try {
    await fn(req, res, next);
  } catch (error) {
    res.status(error.code || 500);
    res.json({
      success: false,
      message: error.message,
    });
  }
};

*/
