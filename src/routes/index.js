/**
 * Code splitting Components
 * AsyncComponents
*/
import React from 'react';
import Loadable from 'react-loadable';
import { HulkPageLoader } from 'components/GlobalComponents';

const ilkloader = Loadable({
	loader: () => import("routes/ilksayfa"),
	loading: () => <HulkPageLoader />,
});

const anasayfaLoader = Loadable({
	loader : () => import("routes/Anasayfa"),
	loading: () => <HulkPageLoader />
})

const etiketlerLoader = Loadable({
	loader : () => import("routes/Etiketler"),
	loading: () => <HulkPageLoader />
})

const performanzLoader = Loadable({
	loader : () => import("routes/Yönetim/Performanz"),
	loading: () => <HulkPageLoader />
})

const cihazBilgileriLoader = Loadable({
	loader : () => import("routes/Yönetim/CihazBilgileri"),
	loading: () => <HulkPageLoader />
})

const bilgiLoader = Loadable({
	loader : () => import("routes/Yönetim/Bilgi"),
	loading: () => <HulkPageLoader />
})

const kullaniciLoader = Loadable({
	loader : () => import("routes/Yönetim/Kullanicilar"),
	loading: () => <HulkPageLoader />
})

const raporlarLoader = Loadable({
	loader : () => import("routes/Raporlar"),
	loading: () => <HulkPageLoader />
})

const saglikRaporLoader = Loadable({
	loader : () => import("routes/SaglikRaporlar"),
	loading: () => <HulkPageLoader />
})

const sporcularLoader = Loadable({
	loader : () => import("routes/Sporcular"),
	loading: () => <HulkPageLoader />
})

const senaryoLoader = Loadable({
	loader : () => import("routes/Senaryo"),
	loading: () => <HulkPageLoader />
})

const cihazlarLoader = Loadable({
	loader : () => import("routes/Cihazlar"),
	loading: () => <HulkPageLoader />
})

const yetkiLoader = Loadable({
	loader : () => import("routes/Yetkiler"),
	loading: () => <HulkPageLoader />
})

const teknikLoader = Loadable({
	loader : () => import("routes/Teknik"),
	loading: () => <HulkPageLoader />
})

export {
	ilkloader,
	anasayfaLoader,
	etiketlerLoader,
	performanzLoader,
	cihazBilgileriLoader,
	bilgiLoader,
	kullaniciLoader,
	raporlarLoader,
	saglikRaporLoader,
	sporcularLoader,
	senaryoLoader,
	cihazlarLoader,
	yetkiLoader,
	teknikLoader
};