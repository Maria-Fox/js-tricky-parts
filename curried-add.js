function curriedAdd(total) {

  // If no total is given to add - ONLY ON INITIAL CALL.
  if (total === undefined) return 0;

  // If there are args passed in

  // RETURN  added here as well in case the sequential calls don't have anything. For, "if."
  return function addMore(newNum) {
    if (newNum === undefined) {
      return total;
    } else {
      total += newNum;
      // return the function 
      return addMore
    }
  }


}

module.exports = { curriedAdd };
