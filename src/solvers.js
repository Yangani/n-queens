/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// Hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space.)
// Take a look at solversSpec.js to see what the tests are expecting




// Return the number of nxn chessboards that exist, with n rooks placed such that none
// of them can attack each other.
window.countNRooksSolutions = function(n) {
  var factorial = function(x) {
    return x > 1 ? x * factorial(x-1) : 1;
  }
  return factorial(n);
};


// Return the number of nxn chessboards that exist, with n queens placed such that none
// of them can attack each other.
window.countNQueensSolutions = function(n) {
  if (n<2) return 1;
  var testObj = function(array) {
    var board = new Board({n:n})
    for (var i=0;i<array.length;i++){
      board.togglePiece(i, parseInt(array[i]));
    }
    return board.hasAnyQueensConflicts();
  }
  var ObjGen = function (n){
    if (n < 1) {return []}
    else {
      //var items = ["r","p","s"]
      var items = [];
      for (var i=0;i<n;i++){
        var num = i;
        items.push(num.toString());
      }
      var results = items.slice();
      for (var p=1;p<n;p++){
        var newResults = [];
        for (var r=0;r<results.length;r++){
          for (var i=0;i<items.length;i++){
            if (!results[r].includes(items[i])){
              newResults.push(results[r]+items[i]);
            }
          }
        }
      results = newResults;
      }
    }
    count =0;
    for (var i=0;i<results.length;i++){
      if (!testObj(results[i].split(""))) solutionCount++;
      console.log("boards tested: "+count);
      count++;
    }
  }
  var solutionCount=0;
  ObjGen(n);
  return solutionCount;
};


// Return a matrix (an array of arrays) representing a single nxn chessboard,
// with n rooks placed such that none of them can attack each other.
// (If no solution, return an empty matrix.)
window.findNRooksSolution = function(n) {
  var testObj = function(array) {
    var board = new Board({n:n})
    for (var i=0;i<array.length;i++){
      board.togglePiece(i, parseInt(array[i]));
    }
    return board.hasAnyRooksConflicts();
  }
  var ObjGen = function (n){
    if (n < 1) {return []}
    else {
      //var items = ["r","p","s"]
      var items = [];
      for (var i=0;i<n;i++){
        var num = i;
        items.push(num.toString());
      }
      var results = items.slice();
      for (var p=1;p<n;p++){
        var newResults = [];
        for (var r=0;r<results.length;r++){
          for (var i=0;i<items.length;i++){
            if (!results[r].includes(items[i])){
              newResults.push(results[r]+items[i]);
            }
          }
        }
      results = newResults;
      }
    }
    count =0;
    for (var i=0;i<results.length;i++){
      if (!testObj(results[i].split(""))) {
        solutionArray = results[i].split("");
        var board = new Board({n:n})
        for (var i=0;i<solutionArray.length;i++){
          board.togglePiece(i, parseInt(solutionArray[i]));
        }
        solution = board.allRowsCopy();
        return null;
      }
      console.log("boards tested: "+count);
      count++;
    }
  }
  var solution = undefined;

  ObjGen(n);

  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  if (solution) {return solution}
  else {
    var foo = new Board({n:n});
    return foo.allRowsCopy();
  }
};


// Return a matrix (an array of arrays) representing a single nxn chessboard,
// with n queens placed such that none of them can attack each other.
// (If no solution, return an empty matrix.)
window.findNQueensSolution = function(n) {
//  if (n<2) return 1;
  var testObj = function(array) {
    var board = new Board({n:n})
    for (var i=0;i<array.length;i++){
      board.togglePiece(i, parseInt(array[i]));
    }
    return board.hasAnyQueensConflicts();
  }
  var ObjGen = function (n){
    if (n < 1) {return []}
    else {
      //var items = ["r","p","s"]
      var items = [];
      for (var i=0;i<n;i++){
        var num = i;
        items.push(num.toString());
      }
      var results = items.slice();
      for (var p=1;p<n;p++){
        var newResults = [];
        for (var r=0;r<results.length;r++){
          for (var i=0;i<items.length;i++){
            if (!results[r].includes(items[i])){
              newResults.push(results[r]+items[i]);
            }
          }
        }
      results = newResults;
      }
    }
    count =0;
    for (var i=0;i<results.length;i++){
      if (!testObj(results[i].split(""))) {
        solutionArray = results[i].split("");
        var board = new Board({n:n})
        for (var i=0;i<solutionArray.length;i++){
          board.togglePiece(i, parseInt(solutionArray[i]));
        }
        solution = board.allRowsCopy();
        return null;
      }
      console.log("boards tested: "+count);
      count++;
    }
  }
  var solution = undefined;

  ObjGen(n);

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  if (solution) {return solution}
  else {
    var foo = new Board({n:n});
    return foo.allRowsCopy();
  }
};
