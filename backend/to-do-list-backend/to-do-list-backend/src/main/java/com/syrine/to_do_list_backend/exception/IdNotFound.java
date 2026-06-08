package com.syrine.to_do_list_backend.exception;

public class IdNotFound extends RuntimeException{
    public IdNotFound(String message){
        super(message);
    }
}
