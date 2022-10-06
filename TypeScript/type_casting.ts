
type BirthYear = number
type NameType = string
type AddressType = string
type Person = {
  year: BirthYear,
  name: NameType,
  address: AddressType
}


const birthYear: BirthYear = 1999
const nameType: NameType  = "Subhan Khaliq"
const addressType: AddressType = "Street # 02 House # 05"

const person: Person = {
  year: birthYear,
  name: nameType,
  address: addressType
};

console.log(person.name,"is born in",person.year,"and currently living at",person.address);

