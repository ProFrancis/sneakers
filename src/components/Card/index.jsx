import { Link } from "react-router-dom";

const Card = (props) => {
  const { baskets } = props
  return (
    <div> 
      {baskets && Array.isArray(baskets) && baskets.map((basket, index) => (
      <div key={index}>
        <Link to={{ pathname: `/detail/${basket.name}/${index}` }}>
          <img src={basket.picture[0].pic1} width={300} height={350} />
          <div style={{ display: "flex" }}>
            <p style={style.brand}>{basket.brand}</p>
            {basket.online ? (
              <p style={style.online}>Disponible</p>
            ) : (
              <p style={style.offOnline}>Indisponible</p>
            )}
          </div>
          <p style={style.title}>{basket.name} </p>
          <p style={style.content}>{basket.content?.substr(0, 100)}...</p>
        </Link>
      </div>
    ))}</div>
  )
}

const style = {
  brand: {
    backgroundColor: "black",
    color: "white",
    padding: "0.5rem 1.5rem",
  },
  title: {
    fontWeight: "bold",
    fontSize: 20,
    margin: "0.5rem 0rem",
  },
  content: {},
  online: {
    backgroundColor: "#dbd2d2",
    padding: "0.5rem 1.5rem",
  },
  offOnline: {
    backgroundColor: "gris",
    color: "red",
    padding: "0.5rem 1.5rem",
  },
};

export default Card