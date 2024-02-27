import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  data: [],
  loading: null,
  error: false,
};

export const Baskets = createSlice({
  name: "BASKETS",
  initialState,
  /*
    C'est ici que les "reducers" sont définis. 
    Les "reducers" sont des fonctions qui décrivent comment l'état de l'application 
    change en réponse à des actions. Dans ce cas, trois "reducers" sont définis : 
    FETCH_STAR, FETCH_SUCCESS et FETCH_FAILURE.
  */
  reducers: {
    FETCH_STAR: (draft) => {
      draft.loading = true;
    },
    FETCH_SUCCESS: (draft, action) => {
      draft.loading = false;
      draft.data = action.payload;
    },
    FETCH_HOMME_SUCCESS: (draft, action) => {
      draft.loading = false;
      draft.data = action.payload.filter(
        (sneaker) => sneaker.category == "f" || sneaker.category == "mixe"
      );
    },
    FETCH_FEMME_SUCCESS: (draft, action) => {
      draft.loading = false;
      draft.data = action.payload.filter(
        (sneaker) => sneaker.category == "h" || sneaker.category == "mixe"
      );
    },
    FETCH_DETAIL_SUCCESS: (draft, action) => {
      draft.loading = false;
      draft.data =  action.payload.data.filter(sneaker => sneaker.name == action.payload.name)
    },
    FETCH_FAILURE: (draft) => {
      draft.loading = false;
      draft.error = true;
    },
  },
});

export const {
  FETCH_STAR,
  FETCH_SUCCESS,
  FETCH_HOMME_SUCCESS,
  FETCH_FEMME_SUCCESS,
  FETCH_DETAIL_SUCCESS,
  FETCH_FAILURE,
} = Baskets.actions;
export default Baskets.reducer;
