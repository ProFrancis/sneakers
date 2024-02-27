import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom'

// Data
import Data from "../../service/data.json";

// COMPONENT
import { detailSneaker } from "../../service/selectors/baskets_selector";

// Actions
import * as ACTION from "../../redux/reducers/articles";


const Detail = () => {
  const basket = useSelector((state) => detailSneaker(state));
  const dispatch = useDispatch();

  const params = useParams()
  const { name, id } = params;

  useEffect(() => {
    dispatch(ACTION.FETCH_STAR());
    try {
      dispatch(ACTION.FETCH_DETAIL_SUCCESS({data: Data, name: name, id: id}));
    } catch (error) {
      dispatch(ACTION.FETCH_FAILURE(error));
    }
  }, []);

  return (
    <div>
      <h1>Detail {name}</h1>
      {basket && basket.picture && basket.picture[0] &&
        <div >
          <img src={basket?.picture[0] && basket.picture[0].pic1 } width={300} height={350} />
          <div style={{display: "flex"}}>
            <p style={style.brand} >{basket.brand}</p>
            {basket.online ? <p style={style.online}>Disponible</p> : <p style={style.offOnline}>Indisponible</p>}
          </div>
          <p style={style.title}>{basket.name} </p>
          <p style={style.content}>{basket.content?.substr(0, 100)}...</p>
        </div>
      }
    </div>
  )
}
const style = {
  brand: {
    backgroundColor: 'black',
    color: 'white',
    padding: '0.5rem 1.5rem'
  },
  title: {
    fontWeight: 'bold',
    fontSize: 20,
    margin: '0.5rem 0rem'
  }, 
  content: {

  },
  online: {
    backgroundColor: '#dbd2d2',
    padding: '0.5rem 1.5rem'
  },
  offOnline: {
    backgroundColor: 'gris',
    color: 'red',
    padding: '0.5rem 1.5rem'
  }
}


export default Detail