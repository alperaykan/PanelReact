/**
 * Router service file
*/
import İlkSayfa from 'routes/ilksayfa'
import Anasayfa from 'routes/Anasayfa'
import Etiketler from 'routes/Etiketler';
import Performanz from 'routes/Yönetim/Performanz';
import CihazBilgileri from 'routes/Yönetim/CihazBilgileri';
import Bilgi from 'routes/Yönetim/Bilgi';
import Kullanicilar from 'routes/Yönetim/Kullanicilar';
import Raporlar from 'routes/Raporlar';
import SaglikRapor from 'routes/SaglikRaporlar';
import Sporcular from 'routes/Sporcular';
import Senaryo from 'routes/Senaryo';
import Cihazlar from 'routes/Cihazlar';
import Yetkiler from 'routes/Yetkiler';
import Teknik from 'routes/Teknik';

const routes = [
   {
      path: 'ilksayfa',
      component : İlkSayfa
   },
   {
      path: 'anasayfa',
      component : Anasayfa
   },
   {
      path: 'etiketler',
      component : Etiketler
   },
   {
      path: 'yönetim/performanz',
      component : Performanz
   },
   {
      path: 'yönetim/cihazbilgileri',
      component : CihazBilgileri
   },
   {
      path: 'yönetim/bilgi',
      component : Bilgi
   },
   {
      path: 'yönetim/kullanicilar',
      component : Kullanicilar
   },
   {
      path: 'raporlar',
      component : Raporlar
   },
   {
      path: 'saglikraporlar',
      component : SaglikRapor
   },
   {
      path: 'sporcular',
      component : Sporcular
   },
   {
      path: 'senaryo',
      component: Senaryo
   },
   {
      path: 'cihazlar',
      component: Cihazlar
   },
   {
      path: 'yetki',
      component: Yetkiler
   },
   {
      path: 'teknik',
      component: Teknik
   }
]

export default routes;
