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
