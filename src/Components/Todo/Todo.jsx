import * as React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, IconButton, Stack } from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";
import { Check, EditNote } from "@mui/icons-material";

import { TodosContext } from "../../Contexts/TodosContext";
export default function Todo({todo}) {
  const { todos, setTodos } = React.useContext(TodosContext);
  function handleCheckTodoStatus(){
    const updatedTodos = todos.map((t) => {
      if (t.id === todo.id) {
        return { ...t, status: !t.status };
      }
      return t;
    });
    setTodos(updatedTodos);
  }
  return (
    <Stack>
      <Card
        sx={{
          width: "100%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "cadetblue",
        }}
      >
        <CardContent
          sx={{
            width:'100%',
            height: "100%",
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
          }}
        >
          <Box direction="row" sx={{ display: "flex", alignItems: "center" }}>
            <IconButton
              aria-label="delete"
              sx={{
                border: "2px solid #b23c17",
                backgroundColor: "#fff",
                "&:hover": {
                  boxShadow: `0 6px 8px #b23c17`,
                  backgroundColor: "#ddd",
                  scale: 1.05,
                },
                transition: "0.5s ease all",
              }}
            >
              <DeleteIcon sx={{ color: "#b23c17" }} />
            </IconButton>

            <IconButton
              aria-label="delete"
              sx={{
                border: "2px solid #1769aa",
                backgroundColor: "#fff",
                mx: 1,
                "&:hover": {
                  boxShadow: `0 4px 6px #1769aa`,
                  backgroundColor: "#ddd",
                  scale: 1.05,
                },
                transition: "0.5s ease all",
              }}
            >
              <EditNote sx={{ color: "#1769aa" }} />
            </IconButton>

            <IconButton
              aria-label="delete"
              sx={{
                border: todo.status?'2px solid green':"2px solid rgb(78, 132, 16)",
                backgroundColor: todo.status? 'green': "#fff",
                "&:hover": {
                  boxShadow: `0 4px 6px rgb(78, 132, 16)`,
                  backgroundColor: "#ddd",
                  scale: 1.05,
                },
                transition: "0.5s ease all",
              }}
              onClick={() => handleCheckTodoStatus(todo.id)}
              >
              <Check sx={{ color: todo.status? '#fff': "#8bc34a" }} />
            </IconButton>
          </Box>

          <Box sx={{ display: "flex", flexDirection: "column" }}>
            <Typography sx={{ color: "#fff", fontSize: 20, fontWeight: "500", textDecoration: todo.status ? "line-through" : "none" }}>
              {todo.title}
            </Typography>
            <Typography sx={{ color: "#fff", fontSize: 15, fontWeight: "500" }}>
              {todo.description}
            </Typography>
          </Box>
        </CardContent>
      </Card>
    </Stack>
  );
}

