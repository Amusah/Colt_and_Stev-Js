// Extends, Super, and Subclasses
class Pet{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    eat(){
        return `${this.name} is eating`;
    }
    sleep(){
        return `${this.name} is sleeping`;
    }
}

class Cat extends Pet{
    constructor(name, age, color){
        super(name, age);
        this.color = color;
    }
    meow(){
        return 'Meowww';
    }

}

class Dog extends Pet{
    bark(){
        return 'Wooff'
    }
}

let pet1 = new Cat('jupiter', 7);
let pet2 = new Dog('huskey', 7);
let pet3 = new Cat('venus', 4, 'red')

/*
    if you want to add some more information to a 
    particular class, eg. cat already has a name and age
    but we want to add an exclusive info like color
    we can create a seperate constructor function for
    cat but since it is already inheriting the name and 
    age attribute from the the parent class (Pet), we can 
    just invoke those attributes from the parent constructor
    with the super keyword... super(name)
*/