import data from "../../data/courses.json";

const numItems = data.length;

describe("Number test", () => {
  test("Number of items is 12", () => {
    expect(numItems).toBe(12);
    expect(numItems).not.toBe(11);
  });

  test("Number of items to be greater than or equal to 12", () => {
    expect(numItems).toBeGreaterThanOrEqual(12);
    expect(numItems).not.toBeGreaterThanOrEqual(13);
  });
});

const dataTest = data[0].title;

describe("Strings test", () => {
  test("There is a js in this title", () => {
    expect(dataTest).toMatch(/JS/);
    expect(dataTest).not.toMatch(/NG/);
  });

  test("The title contains react", () => {
    expect(dataTest).toContain("React");
    expect(dataTest).not.toContain("Angular");
  });
});

// Arrays
const data2 = ["React Native", "React"];

describe("Arrays test", () => {
  test("The list of courses contains React Native and React", () => {
    const expected = ["React", "React Native"];

    expect(data2).toEqual(expect.arrayContaining(expected));
    expect(data2).not.toEqual(expect.arrayContaining(["TEST"]));
  });
});

// Objects
describe("Objects tests", () => {
  test("The first course to have a property title", () => {
    expect(data[0]).toHaveProperty("title");
    expect(data[0]).not.toHaveProperty("xtitle");
  });

  test("Item id 1 should have 31,266 views", () => {
    expect(data[0]).toHaveProperty("views", "31,266");
  });
});
