import calculator from './calculator';

test("evalutate press when display is at 9 characters", () => {
  let output = calculator("123456789", "1")
  expect(output).toEqual({
    display: "123456789"
  });
});

test("evaluate C press with existing display", () => {
  let output = calculator("1", "C")
  expect(output).toEqual({
    display: ""
  });
})

test("evaluate first press as non-minus operation", () => {
  let output = calculator("", "+")
  expect(output).toEqual({
    display: ""
  })
})

test("evaluate first press as minus operation", () => {
  let output = calculator("", "-")
  expect(output).toEqual({
    display: "-"
  })
})

test("evalutate number press with empty display", () => {
  let output = calculator("", "1")
  expect(output).toEqual({
    display: "1"
  });
});

test("evaluate number press with existing display", () => {
  let output = calculator("1", "1")
  expect(output).toEqual({
    display: "11"
  });
})

test("evaluate operation press with existing display", () => {
  let output = calculator("1", "+")
  expect(output).toEqual({
    display: "1+"
  });
})

test("evaluate = press with existing display", () => {
  let output = calculator("1+1", "=")
  expect(output).toEqual({
    display: "2"
  });
})
