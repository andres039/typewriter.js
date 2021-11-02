const sentence = "hello there from lighthouse labs\n";
let timer = 0;
 [...sentence].forEach(char => {
timer += 500;
setTimeout(()=> {
  process.stdout.write(char)
 }, timer)
})
