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
  withStyles
} from "@material-ui/core";

//Data
import customTable from "assets/Data/CustomTable";

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



const TableWithPhoto = ({
    data,
    columns
}) => {
  const [selectedRow, setSelectedRow] = useState({
    firstName: "Zachery",
    lastName: "Terrell",
    designation: "Web Developer",
    city: "Chakwal",
    postal: "352950",
    address: "Ap #262-5976 Elementum Rd.",
    country: "Virgin Islands",
    imageUrl: "user-1.jpg",
    contactNo: "9876543210",
    lastModified: "17/3/2019",
    tableData: {
      id: 0
    }
  });


//   const columns = [
//     {
//       title: "Avatar",
//       field: "imageUrl",
//       render: (rowData) => (
//         <img
//           alt="user-thumb"
//           src={require(`assets/Images/avatars/${rowData.imageUrl}`).default}
//           className="img-50 bdr-rad-50"
//         />
//       ),
//     },
//     { title: "First Name", field: "firstName" },
//     { title: "Last Name", field: "lastName" },
//     { title: "Email", field: "email" },
//     {
//       title: "Date Added",
//       field: "dateAdded",
//       render: (rowData) => (
//         <div>
//           <span className="thisIsClass">{rowData.dateAdded}</span>
//           {rowData.icon ? (
//             <span className="custom-table-arrow">
//               <i className="material-icons">arrow_forward_ios</i>
//             </span>
//           ) : (
//             <span></span>
//           )}
//         </div>
//       ),
//     },
//   ];

  const [selectedRowForStyle, setSelectedRowForStyle] = useState(null);

  const handleRowClick = (event, rowData) => {
    let tableData = customTable.data;

    for (let i = 0; i < tableData.length; i++) {
      if (tableData[i].icon === true) {
        if (i === rowData.tableData.id) {
          tableData[i].icon = true;
        } else {
          tableData[i].icon = false;
        }
      } else {
        if (i === rowData.tableData.id) {
          tableData[i].icon = true;
        }
      }
    }
    setSelectedRow(rowData);
    setSelectedRowForStyle(rowData);
  };

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
            onRowClick={(e) => handleRowClick(e.target.value)}
          />
        </Box>
      </Grid>
    </Grid>
  )
};
export default withStyles(styles)(TableWithPhoto);