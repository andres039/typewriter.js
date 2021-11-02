const sentence = "hello there from lighthouse labs\n";
let timer = 500;
 [...sentence].forEach(char => {
timer += 500;
setTimeout(()=> {
  process.stdout.write(char)
 }, timer)
})
