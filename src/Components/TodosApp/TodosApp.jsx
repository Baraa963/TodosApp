import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Divider,
  Stack,
  ToggleButton,
  ToggleButtonGroup,
  Typography,
} from "@mui/material";
import { useState } from "react";
import TodosList from "../TodosList/TodosList";

export default function TodosApp() {
  const [alignment, setAlignment] = useState("web");

  const handleChange = (e, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
      console.log(newAlignment);
    }
  };
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
                fontSize: 70,
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
              <ToggleButton value="web">Web</ToggleButton>
              <ToggleButton value="android">Android</ToggleButton>
              <ToggleButton value="ios">iOS</ToggleButton>
            </ToggleButtonGroup>
          </Box>

          {/* Todos section*/}

          <Stack sx={{ width: "100%" }}>
            <TodosList /> 
          </Stack>
        </CardContent>

        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </Card>
    </Box>
  );
}
