export const TARGET_VALUE = 255;
export   function calculateDiff(nav, tac) {
  return [
    TARGET_VALUE-nav,
    TARGET_VALUE-tac
  ]
}
