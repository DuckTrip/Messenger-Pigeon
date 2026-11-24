package com.example.accessingdatarest;

import org.springframework.data.annotation.Id;
import java.time.Instant;

@Document(collection = "message")
public class Message {

  @Id
  private String id;

  private String senderId;
  private String text;
  private Instant timestamp;

  public Message(String senderId, String text, Instant timestamp) {
    this.senderId = senderId;
    this.text = text;
    this.timestamp = timestamp;
  }

  public String getId() {
    return id;
  }

  public void setId(String id) {
    this.id = id;
  }

  public String getSenderId() {
    return senderId;
  }

  public void setSenderId(String senderId) {
    this.senderId = senderId;
  }

  public String getText() {
    return text;
  }

  public void setText(String text) {
    this.text = text;
  }

  public Instant getTimestamp() {
    return timestamp;
  }

  public void setTimestamp(Instant timestamp) {
    this.timestamp = timestamp;
  }
}
