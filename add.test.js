function strictEquals(a, b) {
  if (Object.is(a, NaN) && Object.is(b, NaN)) {
    return false;
  } else if (Object.is(Math.abs(a), 0) && Object.is(Math.abs(b), 0)) {
    return true;
  } else if (Object.is(a, b)) {
    return true;
  } else {
    return false;
  }
}
describe("function strictEquals", function () {
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

  test("When it recieves NaN and NaN, it should return false", function () {
    //ARRANGE
    const a = NaN;
    const b = NaN;
    const expected = false;

    //ACT
    const result = strictEquals(a, b);

    //ASSERT
    expect(result).toBe(expected);
  });

  test("When it recieves 0 and -0, it should return true", function () {
    //ARRANGE
    const a = 0;
    const b = -0;
    const expected = true;

    //ACT
    const result = strictEquals(a, b);

    //ASSERT
    expect(result).toBe(expected);
  });
  test("When it recieves -0 and 0, it should return true", function () {
    //ARRANGE
    const a = -0;
    const b = 0;
    const expected = true;

    //ACT
    const result = strictEquals(a, b);

    //ASSERT
    expect(result).toBe(expected);
  });
  test("When it recieves 1 and '1', it should return false", function () {
    //ARRANGE
    const a = 1;
    const b = "1";
    const expected = false;

    //ACT
    const result = strictEquals(a, b);

    //ASSERT
    expect(result).toBe(expected);
  });
  test("When it recieves true and false, it should return false", function () {
    //ARRANGE
    const a = true;
    const b = false;
    const expected = false;

    //ACT
    const result = strictEquals(a, b);

    //ASSERT
    expect(result).toBe(expected);
  });
  test("When it recieves false and false, it should return true", function () {
    //ARRANGE
    const a = false;
    const b = false;
    const expected = true;

    //ACT
    const result = strictEquals(a, b);

    //ASSERT
    expect(result).toBe(expected);
  });
  test("When it recieves 'Water' and 'oil', it should return false", function () {
    //ARRANGE
    const a = "Water";
    const b = "oil";
    const expected = false;

    //ACT
    const result = strictEquals(a, b);

    //ASSERT
    expect(result).toBe(expected);
  });
});
