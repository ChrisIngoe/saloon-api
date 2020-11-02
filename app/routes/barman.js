'use strict';

exports.single = function (req, res) {
  return res.status(200).json({ name: 'Moonshine' });
  var test = 'asdjkas lajksdasdjk dfdf dlakjsd alksdj lka jsdklajsd lkj asdlkaj sdklajs dl aklsdj aklsdja lsdkja sdas  aasd asd asd asd ad asd asd as ';
  console.log(test);
};

exports.double = function (req, res) {
  return res.status(200).json({ name: 'Bourbon' });
};

exports.bottle = function (req, res) {
  return res.status(200).json({ name: 'Firewater Whiskey' });
};
