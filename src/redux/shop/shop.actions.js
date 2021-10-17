import ShopActionTypes from './shop.types';
import {firestore,convertCollectionsSnapshotToMap} from '../../firebase/firebase.utils'

// export const updateCollections = collectionsMap => ({
//   type: ShopActionTypes.UPDATE_COLLECTIONS,
//   payload: collectionsMap
// });
export const fetchCollectionsStart = () => ({
  type:ShopActionTypes.FETCH_COLLECTIONS_START
});

export const fetchCollectionsSuccess = (collections) => ({
  type:ShopActionTypes.FETCH_COLLECTIONS_SUCCESS,
  payload: collections
});

export const fetchCollectionsFailure = (errorMessage) => ({
  type:ShopActionTypes.FETCH_COLLECTIONS_FAILURE,
  payload:errorMessage
});


export const fetchCollectionsStartAsync = () => {
  return dispatch => {
    const collectionRef = firestore.collection('collections');
    dispatch(fetchCollectionsStart())
    
    collectionRef.get().then(snapshot => {
      const collectionsMap = convertCollectionsSnapshotToMap(snapshot);
      console.log(collectionsMap)
      dispatch(fetchCollectionsSuccess(collectionsMap))
    }).catch(err => dispatch(fetchCollectionsFailure(err.message)))
  }
}