// currying previous sum

const sumCurry = () => {
  let prevValue = 0;
  return (value = 0) => {
    prevValue += value;
    return prevValue;
  };
};

const sum = sumCurry();
console.log(sum(1));
console.log(sum(2));
console.log(sum(3));
console.log(sum(4));
console.log(sum());
