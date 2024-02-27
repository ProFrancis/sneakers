/* 
  Cette dépendances est un outil qui 
  permet de faciliter l’utilisation de Redux. 
*/
import { configureStore } from '@reduxjs/toolkit'
import Baskets from './reducers/articles'

/* ConfigureStore permet de créer le store
Plus simplement contrairement aux versions
Précédentes de Redux.

Cette méthode reçoit un objet en paramètre
avec une propriété reducer qui utilise 
automatiquement combinerReducer. 

La fonction configureStore se connecte
automatiquement au Devtools. */

export default configureStore({
  reducer: {
    baskets: Baskets
  }
})