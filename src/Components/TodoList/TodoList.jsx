import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  TextField,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useContext, useState } from "react";
import Todo from "../Todo/Todo";
import { v4 as uuidv4 } from "uuid";
import { TodosContext } from "../../Contexts/TodosContext";

export default function TodoList() {
  const { todos, setTodos } = useContext(TodosContext);
  const [alignment, setAlignment] = useState("جميع المهام");
  const [newTodoTitle, setNewTodoTitle] = useState("");
  const [newTodoDesc, setNewTodoDesc] = useState("");

  const handleChange = (e, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      console.log(newAlignment);
    }
  };
  function handleAddTodo() {
    const newtodo = {
      id: uuidv4(),
      title: newTodoTitle,
      description: newTodoDesc,
      status: false,
    };

    setTodos([...todos, newtodo]);
    setNewTodoTitle("");
    setNewTodoDesc("");
  }


  const filteredTodos =
    alignment === "الغير منجزة"
      ? todos.filter((todo) => !todo.status)
      : alignment === "المنجزة"
      ? todos.filter((todo) => todo.status)
      : todos;

  let todosData;
  if (filteredTodos.length === 0) {
    todosData = (
      <Typography sx={{ textAlign: "center", fontSize: 22 }}>
        لايوجد مهام لعرضها
      </Typography>
    );
  } else {
    todosData = filteredTodos.map((todo) => (
      <Todo key={todo.id} todo={todo}/>
    ));
  }

  return (
    <Box
      sx={{
        height: "97vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Card sx={{ width: "60%" }}>
        <CardContent
          sx={{
            p: 6,
            position: "relative",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            gap: 3,
          }}
        >
          {/* Card Title*/}

          <Box
            sx={{
              width: "100%",
              position: "relative",
              textAlign: "center",
              // backgroundColor:'red'
            }}
          >
            <Typography
              gutterBottom
              sx={{
                color: "text.secondary",
                fontSize: 60,
                fontWeight: "600",
                lineHeight: 0.6,
              }}
            >
              قائمة المهام
            </Typography>
            <Divider
              sx={{ position: "absolute", bottom: "20px", width: "90%" }}
            />
          </Box>

          {/* ToggleButtonGroup*/}
          <Box>
            <ToggleButtonGroup
              color="primary"
              value={alignment}
              exclusive
              onChange={handleChange}
              aria-label="Platform"
            >
              <ToggleButton
                value="الغير منجزة"
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "rgb(128 182 65 / 44%)",
                    color: "#1ca000",
                    "&:hover": {
                      backgroundColor: "rgb(128 182 65 / 44%)",
                    },
                  },
                }}
              >
                الغير منجزة
              </ToggleButton>
              <ToggleButton
                value="المنجزة"
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "rgb(128 182 65 / 44%)",
                    color: "#1ca000",
                    "&:hover": {
                      backgroundColor: "rgb(128 182 65 / 44%)",
                    },
                  },
                }}
              >
                المنجزة
              </ToggleButton>
              <ToggleButton
                value="جميع المهام"
                sx={{
                  "&.Mui-selected": {
                    backgroundColor: "rgb(128 182 65 / 44%)",
                    color: "#1ca000",
                    "&:hover": {
                      backgroundColor: "rgb(128 182 65 / 44%)",
                    },
                  },
                }}
              >
                جميع المهام
              </ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {/* Todos section*/}
          <Stack sx={{ width: "100%", gap: 1 }}>{todosData}</Stack>

          {/*Add Todo Section*/}
          <Stack
            sx={{
              width: "100%",
              display: "flex",
              gap: 3,
            }}
          >
            <Box sx={{ display: "flex", gap: 3 }}>
              <TextField
                id="outlined-basic"
                label=" تفاصيل المهمة "
                variant="outlined"
                value={newTodoDesc}
                onChange={(e) => setNewTodoDesc(e.target.value)}
                sx={{ width: "50%" }}
              />
              <TextField
                id="outlined-basic"
                label=" عنوان المهمة "
                variant="outlined"
                value={newTodoTitle}
                onChange={(e) => setNewTodoTitle(e.target.value)}
                sx={{ width: "50%" }}
              />
            </Box>
            <Button
              variant="contained"
              sx={{
                width: "100%",
                fontSize: 22,
                backgroundColor: "#8fa279",
                transition: "0.5s ease all",
                "&:hover": {
                  backgroundColor: "#1ca000",
                },
              }}
              onClick={handleAddTodo}
            >
              إضافة مهمة
            </Button>
          </Stack>
        </CardContent>
      </Card>
    </Box>
  );
}
