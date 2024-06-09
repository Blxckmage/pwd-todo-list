import { Box, Container, Heading } from "@chakra-ui/react";
import Todo from "./components/Todo";
import { useState } from "react";
import TodoForm from "./components/TodoForm";

type Todo = {
  taskName: string;
  isCompleted: boolean;
};

function App() {
  const [todos, setTodos] = useState<Todo[]>([]);
  const [doneCount, setDoneCount] = useState<number>(0);
  console.log(doneCount);

  return (
    <>
      <Box as="main" h="100vh" p="4" alignItems="center" bg="#1E1E2E">
        <Container>
          <Heading
            as="h1"
            color="#cdd6f4"
            mb={10}
            fontWeight="bold"
            textAlign="center"
          >
            To Do List
          </Heading>
          <Todo todos={todos} setTodos={setTodos} setDoneCount={setDoneCount} />
          <TodoForm doneCount={doneCount} setTodos={setTodos} />
        </Container>
      </Box>
    </>
  );
}

export default App;
