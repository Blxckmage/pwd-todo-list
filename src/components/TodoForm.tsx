import { Box, Text, Input, Button } from "@chakra-ui/react";
import React, { useState } from "react";

type TodoFormProps = {
  doneCount: number;
  setTodos: React.Dispatch<
    React.SetStateAction<{ taskName: string; isCompleted: boolean }[]>
  >;
};

const TodoForm = ({ doneCount, setTodos }: TodoFormProps) => {
  const [taskName, setTaskName] = useState<string>("");

  const handleAddTask = (e: any) => {
    e.preventDefault();
    const trimmedTask = taskName.trim();
    if (trimmedTask === "") return;
    if (trimmedTask && trimmedTask.length > 0) {
      setTodos((prev) => [
        ...prev,
        {
          taskName: trimmedTask,
          isCompleted: false,
        },
      ]);
    }

    setTaskName("");
  };

  return (
    <Box color="#cdd6f4" my={3} mx={1} gap={3}>
      <Text textAlign="center" fontSize="20px" fontWeight="bold">
        Done: {doneCount}
      </Text>
      <Box>
        <Text mb="0.5rem" fontSize="18px"></Text>
        <Input
          size="md"
          mb="1.3rem"
          value={taskName}
          onChange={(e) => setTaskName(e.target.value)}
        />
        <Button bg="#cba6f7" onClick={handleAddTask}>
          Add Task
        </Button>
      </Box>
    </Box>
  );
};

export default TodoForm;
