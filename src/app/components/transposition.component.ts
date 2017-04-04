import { Component } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'transposition',
    templateUrl: 'transposition.component.html',
})
export class TranspositionComponent  {
    public mode: boolean;
    public text: string;
    public textClean: string;
    public colums: number;
    public matrix: Array<any>;
    public space: string;
    public keys: Array<number>;
    public encrypted: string;
    
    constructor(){
        this.mode = true;
        this.text = "";
        this.textClean = "";
        this.colums = 0;
        this.matrix = [[]];
        this.space = "*";
        this.keys = [];
        this.encrypted = "";
    }

    public encrypt(): void{
        this.matrix = [];
        this.textClean = this.text.replace(/ /g,'');
        this.colums = Math.ceil(Math.sqrt(this.textClean.length));
        this.getMatrix();
        this.getKey();
    }

    public getMatrix(): any {
        let tempArray: Array<string> = [];
        let counter: number = 0;
        for(let i=0; i < this.colums; i++) {
            tempArray = [];
            for(let j=0; j < this.colums; j++) {
                tempArray.push(this.getValue(counter));
                counter++;
            }
            this.matrix.push(tempArray);
        }
    }

    public getValue(counter: number): string {
        if(this.textClean[counter]) {
            return this.textClean[counter];
        } else {
            return this.space;
        }
    }

    public getKey(): void{
        let a: Array<number> = [];
        for (let i=0; i<this.colums; ++i) {
            a[i]=i;
        }
        this.keys = this.shuffle(a);
        this.getEncryptText();
    }

    public shuffle(array: any): any {
        var tmp, current, top = array.length;
        if(top) while(--top) {
            current = Math.floor(Math.random() * (top + 1));
            tmp = array[current];
            array[current] = array[top];
            array[top] = tmp;
        }
        return array;
    }
    
    public getEncryptText(): void{
        if(this.mode){
            this.encryptBytext();
        } else {
            this.encryptBytext(false);
        }
    }

    public encryptBytext(byColumn: boolean = true): void{
        this.encrypted = "";
        for(let i of this.keys){
            for( let j=0; j<this.colums; j++){
                if(byColumn){
                    this.encrypted += this.matrix[j][i];
                } else {
                    this.encrypted += this.matrix[i][j];
                }
            }
        }
    }
}
