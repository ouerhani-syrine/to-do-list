package com.syrine.to_do_list_backend.service;

import com.syrine.to_do_list_backend.dto.CreateTaskDTO;
import com.syrine.to_do_list_backend.dto.TaskResponseDTO;
import com.syrine.to_do_list_backend.dto.UpdateTaskDTO;
import com.syrine.to_do_list_backend.entity.TaskEntity;
import com.syrine.to_do_list_backend.exception.DuplicateTask;
import com.syrine.to_do_list_backend.exception.IdNotFound;
import com.syrine.to_do_list_backend.exception.InvalidDate;
import com.syrine.to_do_list_backend.exception.InvalidTitle;
import com.syrine.to_do_list_backend.mapper.TaskMapper;
import com.syrine.to_do_list_backend.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;

@Service
public class TaskService {
    private final TaskRepository taskRepository;
    private final TaskMapper taskMapper;
    public TaskService(TaskRepository taskRepository, TaskMapper taskMapper) {
        this.taskRepository = taskRepository;
        this.taskMapper = taskMapper;
    }
    public List<TaskResponseDTO> findByFilter(String title, LocalDate date, TaskEntity.Level level) {
        if(title != null) {
            List<TaskEntity> listFilter = taskRepository.findByTitle(title);
            return taskMapper.toDTOList(listFilter);
        }
        if(date != null) {
            List<TaskEntity> listFilter = taskRepository.findByDateTask(date);
            return taskMapper.toDTOList(listFilter);
        }
        if(level != null) {
            List<TaskEntity> listFilter = taskRepository.findByLevel(level);
            return taskMapper.toDTOList(listFilter);
        }
        List<TaskEntity> listFilter = taskRepository.findAll();
        return taskMapper.toDTOList(listFilter);
    }
    public TaskResponseDTO findById(int id) {
        TaskEntity taskEntity= taskRepository.findById(id).orElseThrow(() -> new IdNotFound("Task with id " + id + " not found !"));
        TaskResponseDTO taskDTO =taskMapper.toDTO(taskEntity);
        return taskDTO;
    }
    public List<TaskResponseDTO> getAllTasks() {
        return taskMapper.toDTOList(taskRepository.findAll());
    }
    public TaskResponseDTO createTask(CreateTaskDTO createTaskDTO) {
        if(createTaskDTO.getDateTask() == null || createTaskDTO.getDateTask().isBefore(LocalDate.now())) {
            throw new InvalidDate("Date task invalid !");
        }
        if(createTaskDTO.getTitle() == null || createTaskDTO.getTitle().isBlank() || createTaskDTO.getTitle().length() < 3) {
            throw new InvalidTitle("Title " + createTaskDTO.getTitle() + "invalid !");
        }
        if(taskRepository.existsByTitleAndDateTask(createTaskDTO.getTitle(), createTaskDTO.getDateTask())) {
            throw new DuplicateTask("task with title " + createTaskDTO.getTitle() + " already exists !");
        }
        TaskEntity taskEntity = taskMapper.toEntity(createTaskDTO);
        taskRepository.save(taskEntity);
        TaskResponseDTO taskDTO =taskMapper.toDTO(taskEntity);
        return taskDTO;
    }
    public TaskResponseDTO updateTask(int id, UpdateTaskDTO updateTaskDTO) {
        TaskEntity taskEntity = taskRepository.findById(id).orElseThrow(() -> new IdNotFound("Task with id " + id + " not found !"));
        taskMapper.updateTask(updateTaskDTO,taskEntity);
        if((updateTaskDTO.getTitle()!=null || updateTaskDTO.getDateTask()!=null) && !taskRepository.findByTitleAndDateTask(taskEntity.getTitle(),taskEntity.getDateTask()).isEmpty()) {
            throw new DuplicateTask("Task with title " + taskEntity.getTitle() + "and date "+ taskEntity.getDateTask() + " already exists !");
        }
        taskRepository.save(taskEntity);
        return  taskMapper.toDTO(taskEntity);
    }
    public void deleteById(int id) {
        TaskEntity taskEntity = taskRepository.findById(id).orElseThrow(() -> new IdNotFound("Task with id " + id + " not found !"));
        taskRepository.delete(taskEntity);
    }

}
