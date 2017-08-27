export class StringGenerator{

    private textList: string[] = ["first string", "second string", "last string"];
    private randomNumber: number;
    

    constructor(lowest: number, highest: number) {
        if(highest < lowest){
            console.log("Borders are not correct!");
            /*differenc in java, you always have to type 'this' or field cannot be found. Weird!! :-)*/
            this.randomNumber = Math.floor(Math.random() * ((lowest-highest)+1) + highest);
        }
        else{
            this.randomNumber = Math.floor(Math.random() * ((highest-lowest)+1) + lowest);
        }
        
    }
    

    generateRandomString(){
        return this.textList[this.randomNumber];
    }

}