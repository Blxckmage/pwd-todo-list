import { DeleteIcon } from "@chakra-ui/icons";
import { Box, Checkbox, Flex, Text } from "@chakra-ui/react";

type TodoProps = {
  todos: {
    taskName: string;
    isCompleted: boolean;
  }[];

  setTodos: React.Dispatch<
    React.SetStateAction<{ taskName: string; isCompleted: boolean }[]>
  >;
  setDoneCount: React.Dispatch<React.SetStateAction<number>>;
};

const Todo = ({ todos, setTodos, setDoneCount }: TodoProps) => {
  const handleDelete = (index: number) => {
    setTodos((prev) => prev.filter((_, i) => i !== index));
  };

  const handleToggle = (index: number) => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = !newTodos[index].isCompleted;
    setTodos(newTodos);
    setDoneCount(newTodos.filter((todo) => todo.isCompleted).length);
  };

  return (
    <>
      {todos.map((todo, index) => (
        <Flex flexDirection="column" gap="4" m="2" key={index}>
          <Flex justifyContent="space-between" alignItems="center">
            <Box as="div">
              <Checkbox
                colorScheme="green"
                spacing={8}
                isChecked={todo.isCompleted}
                onChange={() => handleToggle(index)}
              >
                <Text color="#cdd6f4">
                  {todo.isCompleted ? <s>{todo.taskName}</s> : todo.taskName}
                </Text>
              </Checkbox>
            </Box>
            <Box
              border="1.5px"
              borderRadius="sm"
              px={2}
              py={1}
              borderColor="red.500"
              onClick={() => handleDelete(index)}
              _hover={{ cursor: "pointer" }}
            >
              <DeleteIcon color="red.500" />
            </Box>
          </Flex>
        </Flex>
      ))}
    </>
  );
};

export default Todo;
