const car = require("../models/carModel");
const AppError = require("../utils/appError");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");
exports.getAllcar = catchAsync(async (req, res, next) => {
  let features = new APIFeatures(car.find(), req.query)
    .filter()
    .sort()
    .limitFields()
    .paginate();
  const doc = await features.query;
  res.status(200).json({
    status: "success",
    doc,
  });
});
exports.getcar = catchAsync(async (req, res, next) => {
  // console.log(req.params.id);
  const doc = await car.findById(req.params.id);
  res.status(200).json({
    status: "success",
    doc,
  });
});
exports.createcar = catchAsync(async (req, res, next) => {
  // console.log(req.body);
  const doc = await car.create(req.body);
  res.status(201).json({
    status: "success",
    doc,
  });
});
exports.updatecar = catchAsync(async (req, res, next) => {
  const doc = await car.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
  });
  res.status(200).json({
    status: "success",
    doc,
  });
});
exports.deletecar = catchAsync(async (req, res, next) => {
  const doc = await car.findByIdAndDelete(req.params.id);
  res.status(200).json({
    status: "success",
    doc,
  });
});
