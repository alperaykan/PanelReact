import React from 'react';
import { withStyles } from '@material-ui/styles';
import {Paper,  Container, Collapse , Box , Button , Table,TableBody, TableCell, TableContainer, TableHead, TableRow} from '@material-ui/core';
// Component
import { withTheme } from '@material-ui/core/styles';
import BasitSelect from 'components/SelfmadeComponents/BasitSelect';
import InputWithLabel from 'components/SelfmadeComponents/InputWithLabel';
import useIlkSayfa from './useIlkSayfa';
// import { ToastContainer } from "react-toastify";
// import "react-toastify/dist/ReactToastify.css";

const styles = theme => ({
	// Paper: {
	// 	padding: '0.75rem',
	// 	backgroundColor: 'transparent',
	// 	boxShadow: 'none',
	// 	'&:first-child': {
	// 		paddingTop: '24px',
	// 	},
	// 	'&:last-child': {
	// 		paddingBottom: '30px',
	// 	}
	// }
  Paper: {
    padding : '1rem',
    backgroundColor : ''
  },

  Button:{
    color: "secondary"
  }
});

function IlkSayfa() {
  
  const controller = useIlkSayfa();

  return (
    <>
      <div className="webanalyics-dashboard">
        <Container maxWidth="lg">
          <div className="col-3" style={{ marginTop: "40px", padding: "5px" }}>
            {!controller.show ? (
              <Button
                id="yeniEkleButon"
                color="primary"
                className="btn"
                variant="contained"
                size="small"
                onClick={() => controller.boxControl()}
              >
                Yeni Ekle
              </Button>
            ) : null}
            <Collapse in={controller.show}>
              <Paper className={styles.Paper} square title="Yeni Ekleme">
                <Box>
                  {controller.editDataId === "" ? (
                    <p>
                      <b>Yeni Ekle</b>
                    </p>
                  ) : (
                    <p>
                      <b>Düzenle</b>
                    </p>
                  )}

                  <div style={{ alignItems: "center", display: "flex" }}>
                    <InputWithLabel
                      divStyle={{ paddingLeft: "80px", paddingTop: "20px" }}
                      label={"İsim"}
                      id={"isim"}
                    />

                    <BasitSelect
                      divStyle={{ paddingLeft: "80px", paddingTop: "20px" }}
                      id={"spordali"}
                      label={"Spor Dalı"}
                      size={"large"}
                      onChange={(e) => {
                        controller.SetSelected(e.target.value);
                      }}
                      autoWidth
                      value={controller.selected}
                      data={controller.sporDal}
                    />
                  </div>
                  <div
                    style={{
                      alignItems: "flex-end",
                      marginTop: "10px",
                      marginBottom: "10px",
                    }}
                  >
                    <Button
                      color="primary"
                      className="btn"
                      variant="contained"
                      size="small"
                      onClick={() => controller.kaydet()}
                    >
                      Kaydet
                    </Button>
                    <Button
                      color="secondary"
                      className="btn"
                      variant="contained"
                      size="small"
                      onClick={() => controller.boxControl()}
                    >
                      İptal
                    </Button>
                  </div>
                </Box>
              </Paper>
            </Collapse>
          </div>

          <Paper className={styles.Paper} square>
            <div className="row">
              <Box sx={{ padding: "2px", marginTop: "40px" }}>
                <div className="col-12">
                  <TableContainer>
                    <Table aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>İsim</TableCell>
                          <TableCell align="left">Spor Dal FK</TableCell>
                          <TableCell align="left">Tarih</TableCell>
                          <TableCell align="left">İşlemler</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {controller.response.map((row) => (
                          <TableRow key={row.id}>
                            <TableCell scope="row">{row.isim}</TableCell>
                            <TableCell align="left">{row.sporDalFK}</TableCell>
                            <TableCell align="left">
                              {row.olusturulanTarih}
                            </TableCell>
                            <React.Fragment>
                              <Button
                                className={styles.Button}
                                variant="contained"
                                size="small"
                                onClick={() => controller.editOpen(row.id)}
                              >
                                Düzenle
                              </Button>
                              <Button
                                className={styles.Button}
                                variant="contained"
                                size="small"
                                onClick={() => controller.sil(row.id)}
                              >
                                Sil
                              </Button>
                            </React.Fragment>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </TableContainer>
                </div>
              </Box>
            </div>
          </Paper>
        </Container>
      </div>
    </>
  );
}

export default withStyles(styles)(withTheme(IlkSayfa));