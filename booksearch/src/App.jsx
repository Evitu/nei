import "./App.css";
import Layout from "./components/Layout";
import { Link } from "react-router-dom";
import TextField from '@mui/material/TextField'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import CssBaseline from '@mui/material/CssBaseline';
import { Button } from "@mui/material";

const darkTheme = createTheme({
  palette: {
    mode: 'dark',
  },
});

function App() {
  return (
    <>
    <ThemeProvider theme={darkTheme}> 
      <header>
        <nav>
          <ul>
            {/* TODO: Endre til <Li> med <Link to="" senere*/}
            <a>Hjem</a> 
            <a>Kolleksjon</a>
          </ul>
        </nav>
      </header>
      <main>
          <TextField id="filled-basic" label="Search" variant="filled"/>
          

        <article>
          <img src="/websiteimages/book-covers-big-2019101610.jpg" alt="bilde" />
          <h2>boktittel</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          <Button variant="contained">Amazon</Button>
        </article>

        <article>
          <img src="/websiteimages/book-covers-big-2019101610.jpg" alt="bilde" />
          <h2>boktittel</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          <Button variant="contained">Amazon</Button>
        </article>

        <article>
          <img src="/websiteimages/book-covers-big-2019101610.jpg" alt="bilde" />
          <h2>boktittel</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          <Button variant="contained">Amazon</Button>
        </article>

        <article>
          <img src="/websiteimages/book-covers-big-2019101610.jpg" alt="bilde" />
          <h2>boktittel</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          <Button variant="contained">Amazon</Button>
        </article>

        <article>
          <img src="/websiteimages/book-covers-big-2019101610.jpg" alt="bilde" />
          <h2>boktittel</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          <Button variant="contained">Amazon</Button>
        </article>

        <article>
          <img src="/websiteimages/book-covers-big-2019101610.jpg" alt="bilde" />
          <h2>boktittel</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          <Button variant="contained">Amazon</Button>
        </article>

        <article>
          <img src="/websiteimages/book-covers-big-2019101610.jpg" alt="bilde" />
          <h2>boktittel</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          <Button variant="contained">Amazon</Button>
        </article>

        <article>
          <img src="/websiteimages/book-covers-big-2019101610.jpg" alt="bilde" />
          <h2>boktittel</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          <Button variant="contained">Amazon</Button>
        </article>

        <article>
          <img src="/websiteimages/book-covers-big-2019101610.jpg" alt="bilde" />
          <h2>boktittel</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          <Button variant="contained">Amazon</Button>
        </article>

        <article>
          <img src="/websiteimages/book-covers-big-2019101610.jpg" alt="bilde" />
          <h2>boktittel</h2>
          <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. </p>
          <Button variant="contained">Amazon</Button>
        </article>
        
        </main>
      </ThemeProvider>
      </>
  );
}

export default App;
