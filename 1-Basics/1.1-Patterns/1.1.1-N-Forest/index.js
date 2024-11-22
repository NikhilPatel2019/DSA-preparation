function nForest(n) {
	let forest = '\n'
  for(let i=0; i < n; i++){
    for(let j=0; j < n; j++){
      forest+='* '
    }
    forest += '\n'
  }
  return forest
}

console.log(nForest(2))