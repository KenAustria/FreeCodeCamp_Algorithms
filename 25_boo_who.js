// Check if a value is classified as a boolean primitive. Return true or false.
// Boolean primitives are true and false.

function booWho(bool) {
  // typeof operator returns a string indicating the type of the unevaluated operand
  // check if typeof returns boolean
  if (typeof(bool) === "boolean") {
    return true;
  } else {
    // typeOf is not a boolean, so returns false
    return false;
  }
}

booWho(null);