struct dog:
    var name: String
    var age: Int
    var owner: String
    fn __init__(inout self,name: String,age: Int,owner:String):
        self.name = name
        self.age = age
        self.owner = owner
    @always_inline
    fn  info(self):
        print("私わ",self.name,"です。")
        if self.age > 20:
            print("I am greater than 20")
        print(self.owner,"owns me")
        print(self.owner,"わMOJOを書くます")
fn main():
    try:
        let d = dog("Bella", 23, "キムさん")
        d.info()
    except:
        print("error")