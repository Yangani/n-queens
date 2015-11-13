function objGen (n){
  if (n < 1) {return []}
  else {
    var items = []
    for (i=0;i<n;i++){
      var num = i;
      items.push(num.toString());
    }
    var results = items.slice();
    for (n=1;n<n;n++){
      var newResults = [];
      for (r=0;r<results.length;r++){
        for (i=0;i<items.length;i++){
          console.log(results[r]);
          newResults.push(results[r]+items[i]);
        }
      }
      results = newResults;
    }
    return results;
  }
}

