package com.syrine.to_do_list_backend.exception;

import java.time.LocalDateTime;

public class ErrorResponse {
    private String message;
    private int status;
    private LocalDateTime timstamp;
    public ErrorResponse(String message, int status, LocalDateTime timstamp) {
        this.message = message;
        this.status = status;
        this.timstamp = timstamp;
    }
    public String getMessage() {
        return message;
    }
    public void setMessage(String message) {
        this.message = message;
    }
    public int getStatus() {
        return status;
    }
    public void setStatus(int status) {
        this.status = status;
    }
    public LocalDateTime getTimstamp() {
        return timstamp;
    }
    public void setTimstamp(LocalDateTime timstamp) {
        this.timstamp = timstamp;
    }
}
