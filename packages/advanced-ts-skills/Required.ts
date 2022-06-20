{
  interface Contact{
    name: string;
    phone?: string;
    email?: string;
    avatar?: string;
    userid?: string;
  }
  type Reqired<T> = {
    [P in keyof T]-?: T[P]
  }

  type RequiredContact = Reqired<Contact>
  // type RequiredContact = {
  //   name: string;
  //   phone: string;
  //   email: string;
  //   avatar: string;
  //   userid: string;
  // }
}