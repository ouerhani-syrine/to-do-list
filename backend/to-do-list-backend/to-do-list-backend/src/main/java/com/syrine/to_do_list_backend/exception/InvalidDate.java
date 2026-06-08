package com.syrine.to_do_list_backend.exception;

public class InvalidDate extends RuntimeException{
    public InvalidDate(String message){
        super(message);
    }
}
