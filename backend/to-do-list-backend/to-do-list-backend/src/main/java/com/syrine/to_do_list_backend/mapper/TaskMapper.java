package com.syrine.to_do_list_backend.mapper;

import com.syrine.to_do_list_backend.dto.CreateTaskDTO;
import com.syrine.to_do_list_backend.dto.TaskResponseDTO;
import com.syrine.to_do_list_backend.dto.UpdateTaskDTO;
import com.syrine.to_do_list_backend.entity.TaskEntity;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Component;

import java.util.ArrayList;
import java.util.List;

import static java.util.stream.Collectors.toList;
@Component
public class TaskMapper {
    public TaskEntity toEntity(CreateTaskDTO createTaskDTO) {
        TaskEntity taskEntity = new TaskEntity();
        taskEntity.setTitle(createTaskDTO.getTitle());
        taskEntity.setLevel(createTaskDTO.getLevel());
        taskEntity.setDateTask(createTaskDTO.getDateTask());
        return taskEntity;
    }
    public TaskResponseDTO toDTO(TaskEntity taskEntity) {
        TaskResponseDTO taskResponseDTO=new TaskResponseDTO(taskEntity.getTitle(),taskEntity.getLevel(),taskEntity.getDateTask(),taskEntity.getCompleted(),taskEntity.getId());
        return taskResponseDTO;
    }
    public List<TaskResponseDTO> toDTOList(List<TaskEntity> taskEntityList) {
        List<TaskResponseDTO> listDTO= taskEntityList.stream().map(this::toDTO).toList();
        return listDTO;
    }
    public void updateTask(UpdateTaskDTO updateTaskDTO, TaskEntity taskEntity) {
        if(updateTaskDTO.getTitle() !=null && !updateTaskDTO.getTitle().equalsIgnoreCase(taskEntity.getTitle())) {
            taskEntity.setTitle(updateTaskDTO.getTitle());
        }
        if(updateTaskDTO.getLevel() !=null &&  !updateTaskDTO.getLevel().equals(taskEntity.getLevel())) {
            taskEntity.setLevel(updateTaskDTO.getLevel());
        }
        if(updateTaskDTO.getDateTask() !=null &&   !updateTaskDTO.getDateTask().equals(taskEntity.getDateTask())) {
            taskEntity.setDateTask(updateTaskDTO.getDateTask());
        }
        if(updateTaskDTO.getCompleted() !=null && !updateTaskDTO.getCompleted().equals(taskEntity.getCompleted())) {
            taskEntity.setCompleted(updateTaskDTO.getCompleted());
        }
    }
}
