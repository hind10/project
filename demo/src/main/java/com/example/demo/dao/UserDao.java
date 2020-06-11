package com.example.demo.dao;

import com.example.demo.model.User;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface UserDao {

    int insertUser(User user);

    List<User> selectAllUsers();

    Optional<User> selectUserByEmail(String USER_EMAIL);

}