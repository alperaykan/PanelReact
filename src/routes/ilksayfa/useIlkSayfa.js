import React,{ useEffect, useState }  from 'react'
import axios from 'axios';
import {toast} from 'react-toastify';

 
function useIlkSayfa() {

    const [response, SetResponse] = useState([]);
    const [show, SetShow] = useState(false);
    const [selected, SetSelected] = useState('');
    const [sporDal, SetSporDal] = useState([]);
    const [editDataId, SetEditDataId] = useState('');
    const [güncel, SetGüncel] = useState();
  
    useEffect(() => {
      const fetch = () => {
        if(!show){
          getMevkiler();
        }
        if(show){
          getSporDal();
        }
      }
      fetch();
      },[show, güncel]);
  
    function boxControl() {
      if(!show){
          SetShow(true)
      }
      else if(show)
      {
      SetShow(false);
      SetSelected('');
      document.getElementById("isim").value = '';
      SetEditDataId('');
      }
    }
  
    const getMevkiler = () => {
      axios.get("https://apipanel.performa.nz/api/Mevkiler").then((res) => {
        // console.log(res.data.data);
        var data = res.data.data;
        SetResponse(data);
      });
    };
  
    const getSporDal = () => {
      axios.get("https://apipanel.performa.nz/api/SporDallar").then((res) => {
        // console.log(res.data.data);
        var data = res.data.data;
        SetSporDal(data);
      });
    }
  
    const kaydet = () => {
     
      if(editDataId === ""){
        var gönder = {
          sporDalFK: selected,
          isim: document.getElementById("isim").value,
        };
        console.log(gönder);
        axios.post("https://apipanel.performa.nz/api/Mevkiler", gönder).then((res) => {
            if(res.status){
              toast.success('Başarılı!!');
              boxControl();
            }
            if(res.status === Error){
              toast.error("Olmadı be");
              boxControl();
            }
        });
      }
      else {
        var gönder = {
          id:editDataId,
          sporDalFK: selected,
          isim: document.getElementById("isim").value,
        };
        console.log(gönder);
        axios.put("https://apipanel.performa.nz/api/Mevkiler", gönder).then((res) => {
            if(res.status){
              toast.success('Başarılı!!');
              boxControl();
            }
            if(res.status === Error){
              boxControl();
            }
        });
      }
    }

    const editOpen = (e) => {
      var id = e;
      axios.get("https://apipanel.performa.nz/api/Mevkiler/"+ id).then((res) => {
        if(res.status){
          console.log(res);
          // var data = res.data.data;
          // SetSelected(data.sporDalFK);
          // document.getElementById("isim").value = data.isim;
          // SetEditDataId(data.id);
          if(show){
            SetShow(false);
            var data = res.data.data;
            SetSelected(data.sporDalFK);
            document.getElementById("isim").value = data.isim;
            SetEditDataId(data.id);
            SetShow(true);
          }
          else if(!show){
            var data = res.data.data;
            SetSelected(data.sporDalFK);
            document.getElementById("isim").value = data.isim;
            SetEditDataId(data.id);
            SetShow(true);
          }
        }
        if(res.status === 400){
          boxControl();
        }
      });
    }

    const sil = (e) => {
      toast.warn("Veri 5 saniye içerisinde silinecektir!", {
        delay:"5000"
      });
      
      if(window.confirm("Silmek istiyor musunuz?" )){
        setTimeout(() => {
          var id = e;
          axios.delete("https://apipanel.performa.nz/api/Mevkiler/"+ id).then(
            (res) => {
              if(res.status){
                toast.success('Başarılı bir şekilde silindi');
                SetGüncel("yeyo");
              }
            }
          )
        }, 5000);
      }
    }
  
  return ({
    response,
    SetResponse,
    show,
    SetShow,
    selected,
    SetSelected,
    sporDal,
    SetSporDal,
    kaydet,
    boxControl,
    getMevkiler,
    getSporDal,
    editOpen,
    sil,
    editDataId, 
    SetEditDataId
  })
}

export default useIlkSayfa