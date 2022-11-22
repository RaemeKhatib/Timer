// process.stdout.write('\x07');


for (const step of process.argv) {
  if (step >= 0) {
    setTimeout(() => process.stdout.write('\x07'), step);
  }
}
