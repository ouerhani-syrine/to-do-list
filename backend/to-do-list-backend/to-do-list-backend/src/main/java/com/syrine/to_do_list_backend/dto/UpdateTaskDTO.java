package com.syrine.to_do_list_backend.dto;

import com.syrine.to_do_list_backend.entity.TaskEntity;

import java.time.LocalDate;

public class UpdateTaskDTO {
    private String title;
    private TaskEntity.Level level;
    private LocalDate dateTask;
    private Boolean completed;
    public UpdateTaskDTO(String title, TaskEntity.Level level, LocalDate dateTask, Boolean completed) {
        this.title = title;
        this.level = level;
        this.dateTask = dateTask;
        this.completed=completed;
    }
    public String getTitle() {
        return title;
    }
    public void setTitle(String title) {
        this.title = title;
    }
    public TaskEntity.Level getLevel() {
        return level;
    }
    public void setLevel(TaskEntity.Level level) {
        this.level = level;
    }
    public LocalDate getDateTask() {
        return dateTask;
    }
    public void setDateTask(LocalDate dateTask) {
        this.dateTask = dateTask;
    }
    public Boolean getCompleted() {
        return completed;
    }

    public void setCompleted(Boolean completed) {
        this.completed = completed;
    }
}
