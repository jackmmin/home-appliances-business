package com.example.demo.repository;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import com.example.demo.model.Person;

import java.util.List;

public interface PersonRepository extends JpaRepository<Person, Long> {
    List<Person> findByName(String name);

    @Query("SELECT p FROM Person p WHERE p.age > :age")
    List<Person> findPersonsOlderThan(@Param("age") int age);

    Person save(Person person);
}
