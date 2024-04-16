import { Box, Button, Typography } from "@mui/material";
import "./App.css";
import ArrowOutwardIcon from '@mui/icons-material/ArrowOutward';
import logoRaptor from '../public/logoRaptor.webp'
import LanguageIcon from '@mui/icons-material/Language';
function App() {
  return (
    <Box
      sx={{
        bgcolor: "black",
        width: "100%",
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
    <img src={logoRaptor} alt="logopagina" style={{width:'90%',maxWidth:'50rem'}} />
      <Typography
        variant="h1"
        color={"white"}
        fontSize={"2rem"}
        textAlign={"center"}
        p={'1rem'}
        mt={'2rem'}
      >
        {" "}
        Visita Nuestra Web :D
        </Typography>
        <Button
        sx={{
          bgcolor: "red",
          mt: "2rem",
          color: "black",
          textTransform: "capitalize",
          fontWeight: "bold",
        }}
        href="https://raptorstore.netlify.app/"
        target="blank"
        >
        Ir a la pagina
        <ArrowOutwardIcon/>
      </Button>
    </Box>
  );
}

export default App;
