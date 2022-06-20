{
  interface Contact{
    name: string;
    phone: string;
    email: string;
    avatar: string;
    userid: string;
  }
  
  interface Person {
    name: string;
    phone: string;
  }
  
  type Exclude<T, U> = T extends U ? never : T
  
  {
    type ExtractContact = Extract<Person, Contact>
    // type ExtractContact = never
  }

  {
    type ExtractContact = Extract<Contact, Person>
    // type ExtractContact = Contact
  }
}

{
  type Animal = 'dog' | 'cat' | 'tiger' | 'rabbit'
  type LikeAnimal = 'dog' | 'rabbit'
  type Exclude<T, U> = T extends U ? never : T
  
  {
    type ExcludeAnimal = Exclude<Animal, LikeAnimal>
    // type ExcludeAnimal = "cat" | "tiger"
  }

  {
    type ExcludeAnimal = Exclude<LikeAnimal, Animal>
    // type ExcludeAnimal = never
  }

}