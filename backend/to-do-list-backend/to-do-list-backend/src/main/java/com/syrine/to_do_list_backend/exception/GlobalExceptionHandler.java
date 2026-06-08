package com.syrine.to_do_list_backend.exception;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;

import java.time.LocalDateTime;
@ControllerAdvice
public class GlobalExceptionHandler {

    @ExceptionHandler(DuplicateTask.class)
    public ResponseEntity<ErrorResponse> handleDuplicateTask(DuplicateTask duplicateTask){
        ErrorResponse err=new ErrorResponse(duplicateTask.getMessage(), HttpStatus.CONFLICT.value(),LocalDateTime.now());
        return new ResponseEntity<>(err,HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(InvalidDate.class)
    public ResponseEntity<ErrorResponse> handleInvalidDate(InvalidDate invalidDate){
        ErrorResponse err=new ErrorResponse(invalidDate.getMessage(), HttpStatus.BAD_REQUEST.value(),LocalDateTime.now());
        return new ResponseEntity<>(err,HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(IdNotFound.class)
    public ResponseEntity<ErrorResponse> handleIdNotFound(IdNotFound idNotFound){
        ErrorResponse err=new ErrorResponse(idNotFound.getMessage(), HttpStatus.NOT_FOUND.value(),LocalDateTime.now());
        return new ResponseEntity<>(err,HttpStatus.NOT_FOUND);
    }
    @ExceptionHandler(InvalidTitle.class)
    public ResponseEntity<ErrorResponse> handleInvalidTitle(InvalidTitle invalidTitle){
        ErrorResponse err=new ErrorResponse(invalidTitle.getMessage(), HttpStatus.BAD_REQUEST.value(),LocalDateTime.now());
        return new ResponseEntity<>(err,HttpStatus.BAD_REQUEST);
    }
    @ExceptionHandler(Exception.class)
    public ResponseEntity<ErrorResponse> handleException(Exception ex){
        ErrorResponse err=new ErrorResponse(ex.getMessage(), HttpStatus.BAD_REQUEST.value(),LocalDateTime.now());
        return new ResponseEntity<>(err,HttpStatus.BAD_REQUEST);
    }
}
