import React, { useState } from "react";
import MaterialTable from "material-table";
import { makeStyles } from "@material-ui/core/styles";
import {
  Grid,
  Box,
  Typography,
  Avatar,
  Tooltip,
  IconButton,
  withStyles,
  Collapse
} from "@material-ui/core";

//Data
import customTable from "assets/Data/CustomTable";
import moment from 'moment';
import IntlMessages from "Shared/util/IntlMessages";

// Components
import { CustomCard, SocialIcons } from "components/GlobalComponents";

const styles = theme => ({
	root: {
		'& .MuiTableCell-paddingNone': {
			padding: '0 16px',
		},
		'& .MuiTableCell-body': {
			lineHeight: 1,
		},
		'& .MuiToolbar-root': {
			paddingRight: 20,
			'& >div:first-child': {
				fontSize: '1.25rem',
				fontFamily: "'Roboto', sans-serif",
				fontWeight: 500,
			}
		}
	},
	content: {

	},
	menuButton: {

	}
});

const SporcularTable = ({
    data,
    columns,
    selectedRow,
    collapseShow
}) => {

  return (
    <Grid container spacing={0} className="res-custom-table">
      <Grid item xs={12} sm={12} md={8}>
        <Box className={`custom-table-wrap ${styles.root}`}>
          <MaterialTable
            title={<IntlMessages id="title.sporcular" />}
            columns={columns}
            data={data}
            options={{
              rowStyle: (rowData) => ({
                backgroundColor:
                  selectedRow &&
                  selectedRow.tableData.id === rowData.tableData.id
                    ? "#f3f7fa"
                    : "#FFF",
              }),
            }}
            // onRowClick={(e) => {
            //     console.log(e.data);
            //     handleRowClick(e.target.value)}}
          />
        </Box>
      </Grid>
      {collapseShow ? (
        <Grid item xs={12} sm={12} md={4}>
          <CustomCard cardClasses="preview-panel">
            {selectedRow ? (
              <>
                <Box mb={2} textAlign="center">
                  <Avatar
                    alt="user-thumb"
                    className="avatar-wrap"
                    src={
                      selectedRow.imageUrl
                        ? require(`assets/Images/avatars/${selectedRow.imageUrl}`)
                            .default
                        : require(`assets/Images/avatars/performanzlogo.png`)
                            .default
                    }
                  />
                  <Box pl={2}>
                    <Box fontWeight={500}>
                      {selectedRow.ad} {selectedRow.soyad}
                    </Box>
                    <Typography variant="subtitle2">
                      {selectedRow.mevki ? selectedRow.mevki : "MevkiYok"}
                    </Typography>
                  </Box>
                </Box>
                <Box mb={2} textAlign="center">
                  <Tooltip title="Print" placement="bottom">
                    <IconButton className="preview-icon-btn" variant="outlined">
                      <i className="material-icons-outlined">print</i>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Delete" placement="bottom">
                    <IconButton className="preview-icon-btn" variant="outlined">
                      <i className="material-icons">delete_outline</i>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="Edit" placement="bottom">
                    <IconButton className="preview-icon-btn" variant="outlined">
                      <i className="material-icons">edit</i>
                    </IconButton>
                  </Tooltip>
                  <Tooltip title="PageView" placement="bottom">
                    <IconButton className="preview-icon-btn" variant="outlined">
                      <i className="material-icons-outlined">pageview</i>
                    </IconButton>
                  </Tooltip>
                </Box>
                <Box mb={2} className="preview-content">
                  <Typography variant="body2">
                    <span>TcKimlik No :</span>
                    <span>{selectedRow.tcKimlikNo}</span>
                  </Typography>
                  <Typography variant="body2">
                    <span>Doğum Tarihi :</span>
                    <span>
                      {moment(selectedRow.dogumTarihi).format("DD/MM/YYYY")}
                    </span>
                  </Typography>
                  <Typography variant="body2">
                    <span>Cinsiyet :</span>
                    <span>
                      {selectedRow.cinsiyet === true ? "Erkek" : "Kadın"}
                    </span>
                  </Typography>
                  <Typography variant="body2">
                    <span>Sağlık Durumu :</span>
                    <span>
                      {selectedRow.saglikDurumu === true ? "Sağlıklı" : "Sakat"}
                    </span>
                  </Typography>
                  <Typography variant="body2">
                    <span>Lakap :</span>
                    <span>{selectedRow.lakap}</span>
                  </Typography>
                </Box>
              </>
            ) : null}
          </CustomCard>
        </Grid>
      ) : null}
    </Grid>
  );
};
export default withStyles(styles)(SporcularTable);