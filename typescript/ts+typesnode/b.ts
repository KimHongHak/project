let rl = require("readline")
let nam: string
let age: number
let r1 = rl.createInterface({
     input: process.stdin,
     output: process.stdout
})
class Matrix {
    n: number
    m: number
    data: number[][]
    constructor(n:number,m:number,data:number[][]){
        this.n = n
        this.m = m
        this.data = data
    }
    async replace(){
        await (()=> new Promise((res,rej)=>{
            r1.question("", (n:number) =>{
                this.n = n
                res("")
            }
            )

        }))()
        console.log(this.n)
        await (()=> new Promise((res,rej)=>{
            r1.question("", (m:number) =>{
                this.m = m
                res("")
            }
            )

        }))()
        console.log(this.n)
        for (let i=0;i<this.m;i++){
            for(let j=0;j<this.n;j++){
                await (()=> new Promise((res,re)=>{
                    r1.question("", (d:number)=>{
                        this.data[i][j]=d
                        console.log(this.data[i][j])
                        res("")
                    })
                }))()
            }
        }
    }

    output(){
        for(let i=0;i<this.m;i++){
            for(let j=0;j<this.n;j++){
                process.stdout.write(String(this.data[i][j]))
            }
            console.log()
        }
    }
}



function p1(){
return new Promise((res,rej)=>{
r1.question("enter your name: " ,(ans: string) =>{
    nam = ans
    res("")
}
)
})}

function  p2()
{
    return new Promise((res,rej) => {
    r1.question("enter age: ", (ans: number) =>
    {
        age = ans
        r1.close()
        res("")
    })
})}

let x =  new Promise((res,rej)=>{
    console.log("hi")
    res("")
})

 async function main(){
    let x =  new Matrix(1,2,[[2,3]])
      await x.replace()
   console.log( `you are ${nam}`)
   console.log(`you are ${age}`)
}
main()