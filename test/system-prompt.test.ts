import { expect, test } from "bun:test";
import { systemPrompt } from "../src/brain";

test("the chat system prompt uses the configured owner name, not a hardcoded one", () => {
  expect(systemPrompt("Ada")).toContain("The owner (Ada, CEO)");
  expect(systemPrompt()).toContain("The owner (the owner, CEO)"); // [owner] name unset → neutral fallback
  expect(systemPrompt("  ")).toContain("The owner (the owner, CEO)"); // blank → neutral fallback
  expect(systemPrompt("Ada")).not.toContain("Jason");
});
