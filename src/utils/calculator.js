export default (display, i) => {

  let secondLast = display.slice(-2, -1);
  let last = display.slice(-1);
  let output = {
    display: display
  }

  // if display is at 9 characters and entry is not = or C
  if(display.length === 9 && i !== "=" && i !== "C") {
    return (
      output
    )
  }

  // if current entry is C, clear the display
  if(i === "C") {
    output.display = "";
    return (
      output
    )
  }

  // if current entry is an operation
  if(i === "/" || i === "*" || i === "-" || i === "+") {
    // if this is the first entry and it was not -
    if(!last && i !== "-") {
      return (
        output
      )
    }

    // if previous entry is -
    if(last === "-") {
      // if the - was the first entry
      if(!secondLast) {
        return (
          output
        )
      }
      // if - represented an operation
      if(secondLast !== "/" && secondLast !== "*" && secondLast !== "-" && secondLast !== "+") {
        display = display.replace(/.$/,i)
        output.display = display
        return (
          output
        )
      }
      // if - represented a negative number
      if(secondLast === "/" || secondLast === "*" || secondLast === "+") {
        // if current entry
        if(i === "-") {
          return
        } else {
          let endOf = display.length - 2
          display = display.slice(0, endOf)
          display = display.concat(i)
          output.display = display
          return (
            output
          )
        }
      }
    }

    // if previous entry is an /, * or +
    if(last === "/" || last === "*" || last === "+") {
      //if current entry is -
      if(i === "-") {
        display = display.concat(i)
        output.display = display
        return (
          output
        )
      }
      // replace previous operation with new operation
      display = display.replace(/.$/,i)
      output.display = display
      return (
        output
      )
    }
  }

  // if entry is 0
  if(i === 0) {
    // if the 0 was the first entry
    if(!last) {
      return (
        output
      )
    }
    // if previous entry was an operation
    if(last === "/" || last === "*" || last === "-" || last === "+") {
      return (
        output
      )
    }
  }

  // if entry is =
  if(i === "=") {
    // if previous entry is an operation
    if(last === "/" || last === "*" || last === "-" || last === "+") {
      return (
        output
      )
    }
    display =  (Math.round(eval(display)*100)/100).toString()
    output.display = display
  } else {
    display = display.concat(i)
    output.display = display
  }

  return output
}