function solution(a) {
  let treePositions = [];
  console.log(a);

  while (a.includes(-1)) {
    a.splice(a.indexOf(-1), 1);
  }

  console.log(a);
}

a = [-1, 150, 160, 170, -1, -1, 180, 190];
solution(a);
