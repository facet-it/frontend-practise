export class Data  {
    private title: string;
    private body: string;


    constructor(body:string, title:string) {
        this.title = title;
        this.body = body;
    }

    getTitle() {
        return this.title;
    }

    getBody() {
        return this.body;
    }
}