import axios from 'axios';

interface Person {
  id: number;
  name: string;
  age: number;
}

async function getPersons() {
  try {
    const response = await axios.get<Person[]>('http://localhost:8080/api/persons');
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function createPerson(name: string, age: number) {
  try {
    const response = await axios.post<Person>('http://localhost:8080/api/persons', { name, age });
    console.log(response.data);
  } catch (error) {
    console.error(error);
  }
}

async function getPersonsByName(name: string) {
    try {
      const response = await axios.get<Person[]>(`http://localhost:8080/api/persons/name/${name}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }
  
  async function getPersonsOlderThan(age: number) {
    try {
      const response = await axios.get<Person[]>(`http://localhost:8080/api/persons/older-than/${age}`);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

getPersons();
createPerson('John Doe', 30);

getPersonsByName('John Doe');
getPersonsOlderThan(25);