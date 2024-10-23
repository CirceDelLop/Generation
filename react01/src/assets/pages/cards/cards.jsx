import { Button, Container } from "@mui/material";
import { Card } from "../../components/card/card";
import Grid from "@mui/material/Grid2";

export const Cards=()=>
{
  return (
    <>
      <Container maxWidth="md" sx={{my:3}}>
        {/* <Button variant="contained" sx={{my:2}}>Hello Ch46</Button>variant hace el color solido,sx es para aplicar estilos y m para aplicar margin, va del 0 al 5 */}
        <Grid container spacing={2}>
          <Grid size={{xs:6,md:4}}>
            <Card title="Shampoo" stock={50} /> 
          </Grid>

          <Grid size={{xs:6,md:4}}>
            <Card title="Shampoo" stock={50} />
          </Grid>

          <Grid size={{xs:6,md:4}}>
            <Card title="Desodorante" stock={10} />
          </Grid>

          <Grid size={{xs:6,md:4}}>
            <Card title="Jabón corporal" stock={5} />
          </Grid>

          <Grid size={{xs:6,md:4}}>
            <Card title="Perfume" stock={4} />
          </Grid>
        </Grid>
      </Container>
    </>
  );
};

//export{Cards} Se sutituye poniendo export eantes de const