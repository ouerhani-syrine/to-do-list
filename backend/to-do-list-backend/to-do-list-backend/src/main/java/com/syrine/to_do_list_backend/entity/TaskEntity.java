package com.syrine.to_do_list_backend.entity;

import jakarta.persistence.*;
import lombok.Getter;
import lombok.Setter;

import java.time.LocalDate;
@Getter
@Setter
@Entity
@Table(name="task")
public class TaskEntity {
    public enum Level{
        Low,
        Medium,
        High
    }
    @Id
    @GeneratedValue(strategy = GenerationType.SEQUENCE)
    private int id;
    @Column(nullable = false)
    private String title;
    @Column(name = "date_task")
    private LocalDate dateTask;
    private Boolean completed = Boolean.FALSE;
    @Column(length=20)
    @Enumerated(EnumType.STRING)
    private Level level;
    public TaskEntity() {
    }
    public TaskEntity(String title, LocalDate dateTask, Boolean completed, Level level) {
        this.title = title;
        this.dateTask = dateTask;
        this.completed = completed;
        this.level = level;
    }


}
