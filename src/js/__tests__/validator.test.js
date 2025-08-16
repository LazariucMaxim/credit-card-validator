import validate from "../validator";

test("Card must be valid", () => {
    expect(validate({value: "4561261212345467"}, null, test=true)({})).toBe(true);
})

test("Card mustn't be valid", () => {
    expect(validate({value: "4561261212345464"}, null, test=true)({})).toBe(false);
})