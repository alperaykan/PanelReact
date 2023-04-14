import React, { useEffect, useMemo , useState, useRef} from 'react'
import useSporcular from './useSporcular'
import { Grid, Button , Box, Container, Typography, CardContent ,Tooltip, IconButton, Collapse } from '@material-ui/core';
import { CustomCard} from 'components/GlobalComponents';
import { SmallTitleBar } from 'components/GlobalComponents';
import IntlMessages from 'Shared/util/IntlMessages';
import customTable from "assets/Data/CustomTable";
import SporcularTable from "components/SelfmadeComponents/SporcularTable";
import moment from "moment";
import axios from 'axios';

function Sporcular() {

  const controller = useSporcular();

  return (
    <>
      <SmallTitleBar title={<IntlMessages id="title.sporcular" />} center />
      <div style={{ paddingLeft: "5rem", paddingTop: "3rem" }}>
        <SporcularTable
          columns={controller.columns}
          data={controller.tableData}
          selectedRow={controller.selectedRow}
          collapseShow={controller.collapseShow}
        />
      </div>
    </>
  );
}

export default Sporcular;