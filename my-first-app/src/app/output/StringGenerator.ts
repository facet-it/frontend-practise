export class StringGenerator{

    textList: string[] = ["first string", "second string", "last string"];

    constructor(){}

    generateRandomString(){
        var random = Math.floor(Math.random() * 3);
        return this.textList[random];
    }

}