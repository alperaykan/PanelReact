import React, { useMemo , useState} from 'react'
import useSporcular from './useSporcular'
import { Grid, Button , Box, Container, Typography, CardContent ,Tooltip, IconButton } from '@material-ui/core';
import { CustomCard} from 'components/GlobalComponents';
import { SmallTitleBar } from 'components/GlobalComponents';
import IntlMessages from 'Shared/util/IntlMessages';
import TableWithPhoto from 'components/SelfmadeComponents/TableWithPhoto';
import customTable from "assets/Data/CustomTable";

function Sporcular() {

  const controller = useSporcular();

  const columns = useMemo(
    () => [
      {
        title: "Avatar",
        field: "imageUrl",
        render: (rowData) => (
          <img
            alt="user-thumb"
            src={require(`assets/Images/avatars/${rowData.imageUrl}`).default}
            className="img-50 bdr-rad-50"
          />
        ),
      },
      { title: "First Name", field: "firstName" },
      { title: "Last Name", field: "lastName" },
      { title: "Email", field: "email" },
      {
        title: "Date Added",
        field: "dateAdded",
        render: (rowData) => (
          <div>
            <span className="thisIsClass">{rowData.dateAdded}</span>
            {/* {rowData.icon ? (
            <span className="custom-table-arrow">
              <i className="material-icons">arrow_forward_ios</i>
            </span>
          ) : (
            <span></span>
          )} */}
          </div>
        ),
      },
      {
        title: "İşlemler",
        field: "işlemler",
        render: (rowData) => (
          <div>
            <Tooltip title="Detay" placement="bottom">
              <IconButton
                id={rowData.id}
                value={rowData.id ? rowData.id : "acaba"}
                className="preview-icon-btn"
                variant="outlined"
                onClick={() => 
                  setSelectedRow(rowData)
                }
              >
                <i value className="material-icons-outlined">pageview</i>
              </IconButton>
            </Tooltip>
          </div>
        ),
      },
    ],
    []
  );

  const [selectedRow, setSelectedRow] = useState({
    id:"178",
    firstName: "Camir",
    lastName: "Yoğ",
    designation: "Web Developer",
    city: "Choke Me daddy",
    postal: "352950",
    address: "Ap #262-5976 Elementum Rd.",
    country: "Bakir Adaları",
    imageUrl: "user-1.jpg",
    contactNo: "9876543210",
    lastModified: "17/3/2019",
    tableData: {
      id: 0
    }
  });

  const [selectedRowForStyle, setSelectedRowForStyle] = useState(null);
  
  return (
    <>
      <SmallTitleBar title={<IntlMessages id="title.sporcular" />} center />
      <div style={{paddingLeft : "5rem" , paddingTop : "3rem"}}>
        <TableWithPhoto columns={columns} data={customTable.data} selectedRow={selectedRow}/>
      </div>
    </>
  );
}

export default Sporcular