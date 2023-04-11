import React from 'react'
import useSporcular from './useSporcular'
import { Grid, Button , Box, Container, Typography, CardContent } from '@material-ui/core';
import { CustomCard} from 'components/GlobalComponents';

function Sporcular() {

  const controller = useSporcular();
  
  return (
    <>
      <Typography variant="h1" style={{ paddingLeft: "20px" }}>
        Sporcular
      </Typography>

      <>
        {controller.doldu ? (
          controller.response.map((sporcu) => {
            <Container maxWidth="lg">
              <Grid container spacing={3} className="res-wa-row">
                <Grid item xs={12} sm={12} md={3} className="res-wa-row--col">
                  <Box pt={3} px={2} pb={2}>
                    <CustomCard>
                      <CardContent className="p-0">
                        <Box mb={1} style={{ width: "calc(100% - 90px" }}>
                          <Typography variant="h6" className="">
                            {sporcu.ad} {sporcu.soyad}
                          </Typography>
                        </Box>
                        <Box mb="9px">
                          {/* <Button
                          value={sporcu.id}
                          onClick={(e) => controller.Detay(e.target.value)}
                        >
                          Detay
                        </Button> */}
                        </Box>
                      </CardContent>
                    </CustomCard>
                  </Box>
                </Grid>
              </Grid>
            </Container>;
          })
        ) : (
          <p>Olmadı be</p>
        )}
      </>
    </>
  );
}

export default Sporcular