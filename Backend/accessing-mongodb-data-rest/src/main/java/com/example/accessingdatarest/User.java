package com.example.accessingdatarest;

import java.lang.annotation.Inherited;

import org.springframework.data.annotation.Id;

@Document(collection = "users")
public class User {

  @Id
  private String id;

  private String username;
  private String password;
  private String displayName;

  public User(String username, String password, String displayName) {
    this.username = username;
    this.password = password;
    this.displayName = displayName;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getPassword() {
    return password;
  }

  public void setPassword(String password) {
    this.password = password;
  }

  public String getDisplayName() {
    return displayName;
  }

  public void setDisplayName(String displayName) {
    this.displayName = displayName;
  }
}
