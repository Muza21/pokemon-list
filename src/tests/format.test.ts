import { expect, test } from "vitest";

import { formatHeight, formatWeight } from "../utils/format";

test("should work as expected", () => {
  expect(formatHeight(70)).toBe("7 m");
  expect(formatWeight(50)).toBe("5 kg");
});
