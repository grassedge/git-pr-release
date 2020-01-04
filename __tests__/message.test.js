const messageUtils = require('../lib/message');

test('checked pull requests from existing pull-req body', async() => {
  const body1 = `
- [ ] #123
- [x] #456
- [x] #789
- [ ] #100
piyopiyo`;

  const checked = messageUtils.checkedPrNumsFromExistingPrBody(body1);
  expect(checked).toEqual({
    "456": true,
    "789": true,
  });
});
