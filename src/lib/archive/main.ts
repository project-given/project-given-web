// import { doc, getDoc } from 'firebase/firestore';
// import { firestore, storage } from './firebase';
// import { items, type Main, type SingleItem } from './items';
// import { loading } from './loading';
// import { listAll, ref } from 'firebase/storage';

// let mainLoading: boolean = false;

// const infoRef = doc(firestore, 'main/info');

// async function getMain() {
// 	if (items['main']) return;
// 	if (mainLoading) {
// 		while (true) {
// 			await new Promise((r) => setTimeout(r, 50));
// 			if (items['main']) return;
// 		}
// 	}

// 	mainLoading = true;
// 	items['main'] = (await getDoc(infoRef)).data() as Main;
// 	loading.update((s) => {
// 		s.delete('items/main');
// 		return s;
// 	});

// 	const id = items['main']!['main']['id'];
// 	const type = items['main']!['main']['type'];

// 	if (items[type])
// 		return loading.update((s) => {
// 			s.delete('items/main/main');
// 			return s;
// 		});

//     const typeItemRef = doc(firestore, `main/${type}/${id}`)
//     const imageRef = ref(storage, `main/${type}/${id}`);

//     const [typeItemDocument, imageRefList] = await Promise.all([
//         await getDoc(typeItemRef),
//         await listAll(imageRef)
//     ]);

//     const itemData = typeItemDocument.data()!
//     items[type] ??= {};
//     items[type]['items'] = {

//     }

//     // imageRefList.items[0]

//     const typeItem = typeItemDocument.data();

// }

// export { getMain };
