class matrix<T>{
    m:number
    n:number
    data: T[][]
    constructor(m:number,n:number,data:T[][]){
        this.m = m
        this.n = n
        this.data = data
    }
    output(){
        console.log(this.m) 
        console.log(this.n)
        for(let i =0;i<this.m;i++){
            for(let j=0;j<this.n;j++){
                process.stdout.write(this.data[i][j] + " ")
            }
            console.log("")
        }
    }

}
let m1 = new matrix<number>(2,2,[[1,2],[2,2]])
m1.output()
