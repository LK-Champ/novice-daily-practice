with (this) {
  return _c('div', [
    isShow
      ? _c(
          'ul',
          { staticClass: 'list' },
          _l(list, function (item, index) {
            return _c(
              'li',
              {
                on: {
                  click: function ($event) {
                    return clickItem(item);
                  },
                },
              },
              [_v('\n              ' + _s(item) + ':' + _s(index) + '\n            ')],
            );
          }),
          0,
        )
      : _e(),
  ]);
}

_l(list, function (item, index, arr) {
  return _c('ul', [_c('li', [_v(_s(item))])]);
});

'[' +
  children
    .map(function (c) {
      return gen(c, state);
    })
    .join(',') +
  ']' +
  (normalizationType$1 ? ',' + normalizationType$1 : '');

[_e(' 注释 '), _v(' '), _c('div', [_v(_s(text))])];

_c(
  'div',
  {
    key: 'test-key',
    ref: 'test-ref',
    staticClass: 'text-clasee',
    class: { active: isActive, bindClass: hasBind },
    staticStyle: { color: 'red' },
    style: { color: activeColor, fontSize: fontSize + 'px' },
    attrs: { id: 'testId', 'data-a': 'test-a', 'data-b': 'test-b' },
  },
  [_v('\n          ' + _s(text) + '\n        ')],
);

with (this) {
  return _c('div', [
    _e(' 这是一段注释 '),
    _v(' \n        ' + _s(msg) + '\n        '),
    _c('div', [_v('hello, ' + _s(msg) + '.')]),
    _v(' \n        this is text.\n      '),
  ]);
}


const _Vue = Vue
const { createElementVNode: _createElementVNode, createCommentVNode: _createCommentVNode, createTextVNode: _createTextVNode } = _Vue

const _hoisted_1 = /*#__PURE__*/_createTextVNode(" this is text. ")

return function render(_ctx, _cache) {
  with (_ctx) {
    const { createCommentVNode: _createCommentVNode, toDisplayString: _toDisplayString, createElementVNode: _createElementVNode, createTextVNode: _createTextVNode, openBlock: _openBlock, createElementBlock: _createElementBlock } = _Vue

    return (_openBlock(), _createElementBlock("div", null, [
      _createCommentVNode(" 这是一段注释 "),
      _createTextVNode(_toDisplayString(msg) + " ", 1 /* TEXT */),
      _createElementVNode("div", null, "hello, " + _toDisplayString(msg) + ".", 1 /* TEXT */),
      _hoisted_1
    ]))
  }
}