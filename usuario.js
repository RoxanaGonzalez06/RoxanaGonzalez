class User {
    constructor(name, surname, books, pets) {
        this.name = name;
        this.surname = surname;
        this.books = books;
        this.pets = pets
    }

    getFullName() {
        return `${this.name} ${this.surname}`
    }

    addPets (pets) {
        this.pets.push(pets);
    }

    countPets() {
        return this.pets.length;

    }

    addBooks(title, author){
        this.books.push({title: title, author: author});
    }

    getBooksTitle() {
        let array = [];
        for(let i = 0; i < this.books.length; i++){
            array.push(this.books[i].title);
        }
        return array;
    }
}

let Roxana = new User ("Roxana", "Gonzalez", [
    {title: "Romeo y Julieta", author: "William Shakespeare"},
    {title: "Frankenstein o el moderno Prometeo", author: "Mary Shelley"}
], ["Poly", "Luna", "Arty"]);

console.log (Roxana.getFullName());
Roxana.addPets ("Galan");
console.log (Roxana.countPets());
Roxana.addBooks("Orgullo y prejuicio", "Jane Austen");
console.log(Roxana.getBooksTitle());