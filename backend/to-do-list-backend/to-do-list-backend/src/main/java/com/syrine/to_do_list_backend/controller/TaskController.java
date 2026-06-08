package com.syrine.to_do_list_backend.controller;

import com.syrine.to_do_list_backend.dto.CreateTaskDTO;
import com.syrine.to_do_list_backend.dto.TaskResponseDTO;
import com.syrine.to_do_list_backend.dto.UpdateTaskDTO;
import com.syrine.to_do_list_backend.entity.TaskEntity;
import com.syrine.to_do_list_backend.service.TaskService;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDate;
import java.util.List;
@CrossOrigin(origins = "http://localhost:5173")
@RestController
@RequestMapping("/api/tasks")
public class TaskController {
    private final TaskService taskService;
    public TaskController(TaskService taskService) {
        this.taskService = taskService;
    }
    @GetMapping
    public ResponseEntity<List<TaskResponseDTO>> findAll() {
        List<TaskResponseDTO> res=taskService.getAllTasks();
        return ResponseEntity.ok(res);
    }
    @GetMapping("/{id}")
    public ResponseEntity<TaskResponseDTO> findById(@PathVariable int id) {
        return ResponseEntity.ok(taskService.findById(id));
    }
    @GetMapping("/filter")
    public ResponseEntity<List<TaskResponseDTO>> findByFilter(@RequestParam(required = false) String title,
                                                              @RequestParam (required = false)LocalDate dateTask,
                                                              @RequestParam (required = false)TaskEntity.Level level
    ) {
        return ResponseEntity.ok(taskService.findByFilter(title,dateTask,level ));
    }
    @PostMapping
    public ResponseEntity<TaskResponseDTO> createTask(@RequestBody CreateTaskDTO createTaskDTO) {
        return ResponseEntity.status(HttpStatus.CREATED).body(taskService.createTask(createTaskDTO));
    }
    @DeleteMapping("/{id}")
    public void deleteTask(@PathVariable int id) {
        taskService.deleteById(id);
    }
    @PutMapping("/{id}")
    public ResponseEntity<TaskResponseDTO> updateTask(@PathVariable int id, @RequestBody UpdateTaskDTO updateTaskDTO) {
        return ResponseEntity.ok(taskService.updateTask(id,updateTaskDTO));
    }
}
