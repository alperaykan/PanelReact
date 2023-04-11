import React from 'react'
import useSporcular from './useSporcular'
import { Grid, Button , Box, Container, Typography, CardContent } from '@material-ui/core';
import { CustomCard} from 'components/GlobalComponents';
import { SmallTitleBar } from 'components/GlobalComponents';
import IntlMessages from 'Shared/util/IntlMessages';
import TableWithPhoto from 'components/SelfmadeComponents/TableWithPhoto';
import customTable from "assets/Data/CustomTable";

function Sporcular() {

  const controller = useSporcular();

  const columns = [
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
              {rowData.icon ? (
                <span className="custom-table-arrow">
                  <i className="material-icons">arrow_forward_ios</i>
                </span>
              ) : (
                <span></span>
              )}
            </div>
          ),
        },
      ];
  
  return (
    <>
      <SmallTitleBar title={<IntlMessages id="title.sporcular" />} center />
      <div style={{paddingLeft : "10rem" , paddingTop : "5rem"}}>
        <TableWithPhoto columns={columns} data={customTable.data} />
      </div>
    </>
  );
}

export default Sporcular