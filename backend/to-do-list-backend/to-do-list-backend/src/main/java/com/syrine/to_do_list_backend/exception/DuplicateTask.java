package com.syrine.to_do_list_backend.exception;

public class DuplicateTask extends RuntimeException{
    public DuplicateTask(String message){
        super(message);
    }
}
