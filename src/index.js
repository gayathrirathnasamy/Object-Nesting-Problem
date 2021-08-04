const getNestedValue = (obj, path, str) => {
  const pathArray = path.split(".");
  let tempObj = obj;
  for (let i = 0; i < pathArray.length; i++) {
    if (tempObj[pathArray[i]] === undefined) {
      if (i === pathArray.length - 1) {
        //console.log("no1", pathArray[i]);
        tempObj[pathArray[i]] = str;
      } else {
        tempObj[pathArray[i]] = {};
        tempObj = tempObj[pathArray[i]];
        //console.log("no2", pathArray[i], tempObj);
      }
    } else {
      if (i !== pathArray.length - 1) {
        //console.log(tempObj, i);
        tempObj = tempObj[pathArray[i]];
      } else {
        tempObj[pathArray[pathArray.length - 1]] = str;
      }
    }
  }
  return obj;
};

var obj1 = { a: { b: { c: { d: "hello" } } } };
var obj2 = { a: { b: { c: { p: "hello" } } } };

// var newHi1 = getNestedValue(obj1, "a.b.c.d", "hi");
// console.log("newHi1", newHi1);
//a.b.c.d path is there so replace "hello" with "hi"

// var newHi2 = getNestedValue(obj2, "a.b.c.d", "hi");
// console.log("newHi2", newHi2);
//a.b.c.d path is not there so create d under c and point to "hi"

var obj3 = { a: { b: { c: { p: "hello", d: "hi" } } } };

var newHi3 = getNestedValue(obj3, "a.b.d.e", "hi");
console.log("newHi3", newHi3);
//a.b.d.e path is not there so create d under b, e under d and e to "hi"
