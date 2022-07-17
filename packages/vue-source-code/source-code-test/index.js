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
