//  Print Matrix Rows II
// Ended

// Description

// You are given a matrix of size N x M. You have to print all the odd indexed rows.

// Note: Indexing in the matrix starts from 0.

// Input

// The first line of the input contains N and M, the dimensions of the matrix.

// The next N lines contain M elements each denoting the elements of the matrix.

// Constraints

// 1 <= N, M <= 100

// 1 <= A[i][j] <= 100

// Output

// Print all the even indexed rows in the matrix. Each row must be printed on a single line.

// Sample Input 1

// 4 3
// 1 2 3 
// 4 5 6
// 7 8 9
// 10 11 12

// Sample Output 1

// 4 5 6
// 10 11 12

// Hint

// In the given matrix, there is only one row with odd indexes, with index 1.

// Therefore, the output is4 5 6, the elements in the first row.



function runProgram(input){// this is the code for input
    input=input.trim().split("\n")
    let [row,col]=input[0].trim().split(" ").map(Number)
    let line=1;
    let mat=[]
    for(let i=0;i<row;i++){
        mat.push(input[line++].trim().split(" ").map(Number))
    }
    // console.log(mat)
    shubham(row,col,mat)
}
function shubham(row,col,mat){// this is main code or output code
       for(let i=0;i<mat.length;i++){
        if(i%2!==0){// here I want even rows so hence I have the condition for that
            console.log(mat[i].join(" "))// here i am printing my matrix which have even rows
        }
    }
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
