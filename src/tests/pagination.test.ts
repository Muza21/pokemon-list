import { describe, expect, test } from "vitest";

import { getTotalPages, getPageNumbers } from "../utils/pagination";

test("getTotalPages takes total items amount as an argument and returns the pages number amount", () => {
  expect(getTotalPages(100)).toEqual(5);
});

describe("getPageNumbers", () => {
  test("returns an array where only single page number is inlcuded", () => {
    expect(getPageNumbers(10, 1)).toEqual([1]);
  });
  test("returns all pages when totalPages less or equal to 3", () => {
    expect(getPageNumbers(50, 3)).toEqual([1, 2, 3]);
    expect(getPageNumbers(100, 3)).toEqual([1, 2, 3, 4, 5]);
  });
  test("for a lot of pages include ellipsis", () => {
    expect(getPageNumbers(200, 1)).toEqual([1, 2, "...", 10]);
    expect(getPageNumbers(200, 5)).toEqual([1, "...", 4, 5, 6, "...", 10]);
    expect(getPageNumbers(200, 10)).toEqual([1, "...", 9, 10]);
  });
});
