var matrix = /** @class */ (function () {
    function matrix(m, n, data) {
        this.m = m;
        this.n = n;
        this.data = data;
    }
    matrix.prototype.output = function () {
        console.log(this.m);
        console.log(this.n);
        for (var i = 0; i < this.m; i++) {
            for (var j = 0; j < this.n; j++) {
                process.stdout.write(this.data[i][j] + " ");
            }
            console.log("");
        }
    };
    return matrix;
}());
var m1 = new matrix(2, 2, [[1, 2], [2, 2]]);
m1.output();
