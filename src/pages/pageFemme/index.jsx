import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENT
import Card from "../../components/Card";

// Data
import Data from "../../service/data.json";

// COMPONENT
import { sneakers } from "../../service/selectors/baskets_selector";
// Actions
import * as ACTION from "../../redux/reducers/articles";

const Femme = () => {
  const baskets = useSelector((state) => sneakers(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ACTION.FETCH_STAR());
    try {
      dispatch(ACTION.FETCH_FEMME_SUCCESS(Data));
    } catch (error) {
      dispatch(ACTION.FETCH_FAILURE(error));
    }
  }, []);

  return (
    <div>
      <h1>Categorie Femme</h1>
      <Card baskets={baskets} />
    </div>
  );
};

export default Femme;
