package com.syrine.to_do_list_backend.exception;

public class InvalidTitle extends RuntimeException{
    public InvalidTitle(String message) {
        super(message);
    }
}
