import React from 'react'
import { Grid, Paper, Box, Container, Typography, CardContent } from '@material-ui/core';
import { CustomCard} from 'components/GlobalComponents';
import useAnasayfa from './useAnasayfa';

function Anasayfa() {

  const controller = useAnasayfa();
  
  return (
    <Container maxWidth="lg">
      <Grid container spacing={3} className="res-wa-row">
        <Grid item xs={12} sm={12} md={3} className="res-wa-row--col">
          <Box pt={3} px={2} pb={2}>
            <a href="/app/sporcular">
              <CustomCard>
                <CardContent className="p-0">
                  <Box mb={1} style={{ width: "calc(100% - 90px" }}>
                    <Typography variant="h6" className="">
                      Sporcular
                    </Typography>
                  </Box>
                  <Box mb="9px">
                    <Typography variant="h2" className=" font-weight-med">
                      1172
                    </Typography>
                  </Box>
                </CardContent>
              </CustomCard>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3} className="res-wa-row--col">
          <Box pt={3} px={2}>
            <a href="/app/kullanicilar">
              <CustomCard>
                <CardContent
                  className="p-0"
                  pb={2} /*style={{ background: "cyan"}}*/
                >
                  <Box mb={1} style={{ width: "calc(100% - 90px" }}>
                    <Typography variant="h6" className="">
                      Kullanıcılar
                    </Typography>
                    {/* <Typography className=" font-sm">(Last 30 Days)</Typography> */}
                  </Box>
                  <Box mb="9px">
                    <Typography variant="h2" className=" font-weight-med">
                      3
                    </Typography>
                  </Box>
                </CardContent>
              </CustomCard>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3} className="res-wa-row--col">
          <Box pt={3} px={2} pb={2}>
            <a href="/app/cihazlar">
              <CustomCard>
                <CardContent className="p-0">
                  <Box mb={1} style={{ width: "calc(100% - 90px" }}>
                    <Typography variant="h6" className="">
                      Cihaz Sayısı
                    </Typography>
                    {/* <Typography className=" font-sm">(Last 30 Days)</Typography> */}
                  </Box>
                  <Box mb="9px">
                    <Typography variant="h2" className=" font-weight-med">
                      26
                    </Typography>
                  </Box>
                </CardContent>
              </CustomCard>
            </a>
          </Box>
        </Grid>
        <Grid item xs={12} sm={12} md={3} className="res-wa-row--col">
          <Box pt={3} px={2} pb={2}>
            <a href="/app/raporlar">
              <CustomCard>
                <CardContent className="p-0">
                  <Box mb={1} style={{ width: "calc(100% - 90px" }}>
                    <Typography variant="h6" className="">
                      Test Sayısı
                    </Typography>
                    {/* <Typography className=" font-sm">(Last 30 Days)</Typography> */}
                  </Box>
                  <Box mb="9px">
                    <Typography variant="h2" className=" font-weight-med">
                      5005
                    </Typography>
                  </Box>
                </CardContent>
              </CustomCard>
            </a>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Anasayfa;