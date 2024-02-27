import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

// COMPONENT
import Card from "../../components/Card";

// Data
import Data from "../../service/data.json";

// Selectors Redux
import { sneakers } from "../../service/selectors/baskets_selector";

// Actions
import * as ACTION from "../../redux/reducers/articles";

const Homme = () => {
  const baskets = useSelector((state) => sneakers(state));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(ACTION.FETCH_STAR());
    try {
      dispatch(ACTION.FETCH_HOMME_SUCCESS(Data));
    } catch (error) {
      dispatch(ACTION.FETCH_FAILURE(error));
    }
  }, []);

  return (
    <div>
      <h1>Categorie Homme</h1>
      <Card baskets={baskets} />
    </div>
  );
};

export default Homme;
