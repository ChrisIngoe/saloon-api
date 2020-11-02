'use strict';

exports.single = function (req, res) {
  var test =
    'asdjkas lajksdasdjk dfdf dlakjsd alksdj lk dfd a jsdklajsd lkj asdlkaj sdklajs dl aklsdj aklsdja lsdkja sdas  aasd asd asd asd ad asd asd as ';
  return res.status(200).json({ name: 'Moonshine', test });
};

exports.double = function (req, res) {
  return res.status(200).json({ name: 'Bourbon' });
};

exports.bottle = function (req, res) {
  return res.status(200).json({ name: 'Firewater Whiskey' });
};
