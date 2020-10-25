'use strict';

exports.index = function (req, res) {
  console.log(
    'test a  really really really really really really really really really really really really really really really really really really really really really really really long literal string',
  );
  return res.status(200).json({ service: 'OK' });
};
