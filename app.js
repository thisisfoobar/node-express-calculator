const express = require("express");
const ExpressError = require("./ExpressErrors");
const MathFunctions = require("./mathFunctions");

const app = express();

//app.use(express.json());

app.get("/mean", (req, res, next) => {
  try {
    let nums = req.query.nums;
    if (!nums) throw new ExpressError("Nums are required", 400);
    let numArray = [];
    const mathFuncs = new MathFunctions(nums);
    numArray = mathFuncs.numsArray;
    if (numArray.some((num) => isNaN(num))) {
      throw new ExpressError("Only submit numbers", 400);
    } else {
      const meanVal = mathFuncs.mean(numArray);
      const response = {
        response: {
          operations: "mean",
          value: meanVal,
          array: numArray,
        },
      };
      return res.json(response);
    }
  } catch (error) {
    next(error);
  }
});

app.get("/median", (req, res, next) => {
  try {
    let nums = req.query.nums;
    if (!nums) throw new ExpressError("Nums are required", 400);
    const mathFuncs = new MathFunctions(nums);
    if (numArray.some((num) => isNaN(num))) {
      throw new ExpressError("Only submit numbers", 400);
    } else {
      const medianVal = mathFuncs.median(mathFuncs.numsArray);
      const response = {
        response: {
          operations: "median",
          value: medianVal,
        },
      };
      return res.json(response);
    }
  } catch (error) {
    next(error);
  }
});

app.get("/mode", (req, res, next) => {
  try {
    let nums = req.query.nums;
    if (!nums) throw new ExpressError("Nums are required", 400);
    const mathFuncs = new MathFunctions(nums);
    if (numArray.some((num) => isNaN(num))) {
      throw new ExpressError("Only submit numbers", 400);
    } else {
      const modeVal = mathFuncs.mode(mathFuncs.numsArray);
      const response = {
        response: {
          operations: "mode",
          value: modeVal,
        },
      };
      return res.json(response);
    }
  } catch (error) {
    next(error);
  }
});

// If no other route matches, respond with a 404
app.use((req, res, next) => {
  const e = new ExpressError("Page Not Found", 404);
  next(e);
});

// Error handler
app.use(function (err, req, res, next) {
  // the default status is 500 Internal Server Error
  let status = err.status || 500;
  let message = err.msg;

  // set the status and alert the user
  return res.status(status).json({
    error: { message, status },
  });
});

app.listen(3000, () => {
  console.log("App on port 3000");
});
