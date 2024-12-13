# JavaScript Null Handling Error

This repository demonstrates a common error in JavaScript where null values are not handled properly, leading to unexpected behavior when dealing with undefined values.

## Bug Description

The `foo()` function returns `null` if either `a` or `b` is `null`. However, it does not handle cases where either `a` or `b` is `undefined`. This can lead to unexpected behavior if the function is called with undefined values.

## Solution

The solution modifies the function to explicitly check for both `null` and `undefined` values using the loose equality operator (`==`). This ensures the function correctly handles cases where either `a` or `b` is `null` or `undefined`.
