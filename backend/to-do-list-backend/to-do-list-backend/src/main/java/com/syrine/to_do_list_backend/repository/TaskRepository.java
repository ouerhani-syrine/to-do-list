package com.syrine.to_do_list_backend.repository;

import com.syrine.to_do_list_backend.entity.TaskEntity;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.time.LocalDate;
import java.util.List;

@Repository
public interface TaskRepository extends JpaRepository<TaskEntity,Integer> {
    List<TaskEntity> findByTitle(String title);
    List<TaskEntity> findByTitleAndDateTask(String title, LocalDate dateTask);
    List<TaskEntity> findByDateTask(LocalDate dateTask);
    List<TaskEntity> findByLevel(TaskEntity.Level level);
    Boolean existsByTitleAndDateTask(String title, LocalDate dateTask);
}
