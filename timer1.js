// process.stdout.write('\x07');


for (const step of process.argv) {
  if (step >= 0){
    let delay = step * 1000
    setTimeout(() => process.stdout.write('\x07'), delay);
  }  
};