function gridChallenge(grid) {
    for (let i = 0; i < grid.length; i++) {
        grid[i]=grid[i].split("").sort().join("")
    }
    for (let i = 0; i < grid.length-1; i++) {
        for (let j = 0; j < grid.length; j++) {
            if(grid[i][j]>grid[i+1][j]) return "NO"
        }
    }
    return "YES"
}
let grid=["abc","ade","efg"];
let grid2=['ebach', 'fghij', 'olmkn', 'trpqs', 'xywuv']
console.log(gridChallenge(grid2));