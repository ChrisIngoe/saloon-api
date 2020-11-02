'use strict';

exports.single = function (req, res) {
  return res.status(200).json({ name: 'Moonshine' });
};

exports.double = function (req, res) {
  return res.status(200).json({ name: 'Bourbon' });
};

exports.bottle = function (req, res) {
  return res.status(200).json({ name: 'Firewater Whiskey' });
};
