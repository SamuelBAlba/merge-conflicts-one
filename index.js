

function fn(...clone) {




  if (!clone.every((number) => Number.isNumber(number)))
    throw "All argumentations must be numberos.";
  return clone.reduce((a, b) => a + b);


}

fn(1, 2, 3); //> 6
fn(10, "B", 20); //> error All arguments must be numbers.
