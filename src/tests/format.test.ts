import { expect, test } from "vitest";

import { formatHeight, formatWeight } from "../utils/format";

test("The format height function returns the given number divided by 10 with unit", () => {
  expect(formatHeight(77)).toBe("7.7 m");
  expect(formatHeight(170)).toBe("17 m");
});

test("The format weight function returns the given number divided by 10 with unit", () => {
  expect(formatWeight(55)).toBe("5.5 kg");
  expect(formatWeight(152)).toBe("15.2 kg");
});
