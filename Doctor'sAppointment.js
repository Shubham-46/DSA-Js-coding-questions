function runProgram(input){
    input=input.trim().split("\n")
    var len=+input[0]
    let list = input[1].trim().split(" ").map(Number)  
    let arr = input[2].trim().split(" ").map(Number)
    console.log(shubham(len,list,arr))
    
}
function shubham(len,list,arr){
    let moves = 0;
    for(let i=0; i<list.length; i++) {
        for(let j=0; j<arr.length-1; j++) {
            if(arr[j] == list[i]) {
                arr.splice(j, 1);
                break;
            }
            moves++;
        }
    }
    return moves;
}


 

if (process.env.USER === "") {
  runProgram(``);
} else {
  process.stdin.resume();
  process.stdin.setEncoding("ascii");
  let read = "";
  process.stdin.on("data", function (input) {
    read += input;
  });
  process.stdin.on("end", function () {
    read = read.replace(/\n$/, "");
    read = read.replace(/\n$/, "");
    runProgram(read);
  });
  process.on("SIGINT", function () {
    read = read.replace(/\n$/, "");
    runProgram(read);
    process.exit(0);
  });
}
