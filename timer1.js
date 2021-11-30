let arr = process.argv.slice(2)

let timer = function() {
  for(let secs of arr){
    setTimeout(() => {
      process.stdout.write('\x07');
    }, secs * 1000);
  }
}

timer()
