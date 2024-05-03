import { Link } from "react-router-dom";
import noImage from "../../../assets/images/not_Image.svg";
import "./Card.css";
import { convertUnixTimestampToAmPm } from "../../../utils/helper/functions";

const Card = ({item}) => {




  return (
    <div className="bike-card">
      <Link  to={`/${item?.id}`} className="bike-card__image">
        <img src={item?.thumb ? item?.thumb : noImage} alt="icon" className={item?.thumb  ? "" : "no-image"} />
      </Link>
      <div className="bike-card__info">
        <h5 className="bike-card__info-title">
            <Link to={`/${item?.id}`}>
            <strong>
                {item?.year} {" "}
                {item?.manufacturer_name}
            </strong>
            {" "}
            {item?.frame_model}
            </Link>
        </h5>

        <ul className="attr-list">
            <li>
                <strong>
                    Serial:

                </strong>
                <span>
                    {item?.serial}

                </span>
            </li>

            <li>
                <strong>
                    Primary colors:
                </strong>
                <span>
                    {
                     item?.frame_colors.map((color, index) => index < item?.frame_colors?.length - 1? `${color},` : color).join('')
                    }
                </span>
            </li>

        </ul>

        <ul className="attr-list">
           <li>

            <strong style={{color:item?.status !=="found" ? "red" : "green"}}>
                {item?.status !=="found" ? "Stolen ": "Found"}
            </strong>
            :
            <span>
                {convertUnixTimestampToAmPm(item?.date_stolen)}

            </span>

           </li>

           <li>

            <strong>
                Location:

            </strong>

            <span>
                {item?.status !=="found" ? item?.stolen_location : item?.location_found}
            </span>

           </li>

        </ul>

      </div>
    </div>
  )
}

export default Card
