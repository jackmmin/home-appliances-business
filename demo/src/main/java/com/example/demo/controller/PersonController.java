package com.example.demo.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import com.example.demo.model.Person;
import com.example.demo.repository.PersonRepository;

import java.util.List;

@RestController
@RequestMapping("/api/persons")
public class PersonController {

    @Autowired
    private PersonRepository personRepository;

    @GetMapping
    public List<Person> getAllPersons() {
        return personRepository.findAll();
    }

    @PostMapping
    public Person createPerson(@RequestBody Person person) {
        return personRepository.save(person);
    }

    @GetMapping("/name/{name}")
    public List<Person> getPersonsByName(@PathVariable String name) {
        return personRepository.findByName(name);
    }

    @GetMapping("/older-than/{age}")
    public List<Person> getPersonsOlderThan(@PathVariable int age) {
        return personRepository.findPersonsOlderThan(age);
    }
}
