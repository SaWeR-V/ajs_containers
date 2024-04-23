export default class Team {
    constructor() {
        this.members = new Set();
    }
    add(name){
        if (!this.members.has(name)) {
            this.members.add(name);
            return this.members;
        }
        else {
            throw new Error('Такой персонаж уже существует!')
        }
    }
    addAll(...names){
        for (let name of names) {
            this.members.add(name)
        }
        return this.members;
    }
    toArray(){
        const array = [];
        for (const names of this.members) {
            array.push(names)
        }
        return array;
    }
}
