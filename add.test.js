function strictEquals(a, b) {
  return Object.is(a, b);
}
test("When it recieves 1 and 1, it should return true", function () {
  //ARRANGE
  const a = 1;
  const b = 1;
  const expected = true;

  //ACT
  const result = strictEquals(a, b);

  //ASSERT
  expect(result).toBe(expected);
});
test("When it recieves NaN and 1, it should return true", function () {
  //ARRANGE
  const a = 1;
  const b = 1;
  const expected = true;

  //ACT
  const result = strictEquals(a, b);

  //ASSERT
  expect(result).toBe(expected);
});
