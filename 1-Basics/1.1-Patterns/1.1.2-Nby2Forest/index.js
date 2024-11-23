function nby2Forest(n) {
	let forest = '\n'
  for(let i=0; i < n; i++){
    for(let j=0; j <=i; j++){
      forest+='* '
    }
    forest += '\n'
  }
  return forest
}

console.log(nby2Forest(5))