import { Firestore } from "./app";

export const addToCollection = (
	db: Firestore,
	data: FirestoreData,
	collectionName: CollectionName
) => {
	db.collection(collectionName)
		.add(data)
		.then((doc) =>
			console.log(`New doc added to collection ${collectionName}`, {
				docId: doc.id,
			})
		)
		.catch((error) =>
			console.error(`Error adding new doc to collection ${collectionName}`, {
				collectionName,
				data,
				error,
			})
		);
};
