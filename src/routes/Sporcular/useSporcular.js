import React, { useEffect, useMemo , useState} from 'react'
import { Tooltip, IconButton } from '@material-ui/core';
import moment from "moment";
import axios from 'axios';


function useSporcular() {
    
  useEffect(() => {
    let fetch = () => {
      fetchTable();
    }
    fetch();
  },[]);

  const [tableData, SetTableData] = useState([]);

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
 
  const [collapseShow,SetCollapseShow] = useState(false);

  const rowDataFunc = (rowData) => {
    if(collapseShow){
      SetCollapseShow(false);
      setSelectedRow(rowData);
      SetCollapseShow(true);
    }
    else{
      setSelectedRow(rowData);
      SetCollapseShow(true);
    }
  }

  //Unit Testler
  const date = "2022-08-10T12:20:32.503+00:00";
  var test = false;

  const columns = useMemo(
    () => [
      {
        title: "Fotoğraf",
        field: "imageUrl",
        render: (rowData) => (
          <img
            alt="user-thumb"
            src={rowData.imageUrl ? require(`assets/Images/avatars/${rowData.imageUrl}`).default : require(`assets/Images/avatars/performanzlogo.png`).default}
            className="img-50 bdr-rad-50"
          />
        ),
      },
      { title: "Ad", field: "ad" },
      { title: "Soyad", field: "soyad" },
      // { title: "Email", field: "email" },
      {
        title: "Doğum Tarihi",
        field: "birthday",
        render: (rowData) => (
          <div>
            <span className="thisIsClass">{moment(rowData.dogumTarihi).format('DD/MM/YYYY')}</span>
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
                onClick={() => rowDataFunc(rowData)}
              >
                <i value className="material-icons-outlined">pageview</i>
              </IconButton>
            </Tooltip>
          </div>
        ),
      },
    ],
    [selectedRow]
  );

  const fetchTable = () => {
    axios.get('https://apipanel.performa.nz/api/Sporcular').then(
      res => {
        if(res.status){
          console.log(res.data.data);
          SetTableData(res.data.data);
        }
      }
    )
  }

  return ({
    tableData, 
    SetTableData,
    columns,
    collapseShow,
    SetCollapseShow,
    selectedRow,
    setSelectedRow
  })
}

export default useSporcular