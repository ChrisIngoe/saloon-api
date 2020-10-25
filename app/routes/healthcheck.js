'use strict';

exports.index = function (req, res) {
const val = 'this is a really long string'.includes('test')    ? 'this is another long text'    : 'this is  long piece of text';
    return res.status(200).json({ service: 'OK', val: val });
};
