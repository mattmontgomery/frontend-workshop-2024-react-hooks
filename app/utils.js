import { useDebugValue } from "react";

export const TARGET_VALUE = 255;
export   function calculateDiff(nav, tac) {
  return [
    TARGET_VALUE-nav,
    TARGET_VALUE-tac
  ]
}

export function checkResult(r) {
  return r ? "Success" : "Fail"
}

export function getResult(nav, tac, com) {
  return tac === TARGET_VALUE && com === TARGET_VALUE && nav === TARGET_VALUE;
}
