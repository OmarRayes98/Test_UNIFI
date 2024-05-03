import { useDispatch, useSelector } from "react-redux";
import "./BikeDetails.css";
import { useEffect } from "react";
import { fetchBikesId } from "../../store/bikes.actions";
import { useParams } from "react-router-dom";
import Loading from "../../components/Loading/Loading";
import { convertUnixTimestampToAmPm } from "../../utils/helper/functions";
import noImage from "../../assets/images/not_Image.svg";

const BikeDetails = () => {

  const dispatch = useDispatch();
  const {objectBike,loading} = useSelector((state) => state.bikes);
  const {id} = useParams();


  useEffect(()=>{

    dispatch(fetchBikesId(id));

},[dispatch])



  return (

    <div className="bike-details">
      {
            loading?
            <Loading/>
            :
            objectBike &&
            <>
            <div className="bike-details_title">
              <h1 className="bike-details_title-main">
                <strong style={{color : objectBike?.status !=="found" ? "red":"green"}} >
                  {
                    objectBike?.status
                  }
                </strong>
              <span className="bike-details_title-subtext">
                <strong>
                  {
                    objectBike?.manufacturer_name
                  }

                </strong>
                {" "}
                <span style={{fontWeight:'normal'}}>
                {
                  objectBike?.frame_model
                }
                </span>


              </span>

              </h1>
              <p>
                <strong>
                  {objectBike?.status}
                </strong>
                <span style={{margin:'0px 5px'}}>
                {convertUnixTimestampToAmPm(objectBike?.date_stolen)}
                </span>
                <strong>
                  from
                </strong>
                <span style={{margin:'0px 5px'}}>
                  
                {objectBike?.status !=="found" ? objectBike?.stolen_location : objectBike?.location_found}
              
                </span>


              </p>

            </div>

            <div className="bike-details_image">
                <img  src={objectBike?.thumb ? objectBike?.thumb : noImage} alt="icon"/>
            </div>

            <div className="bike-details_info">
              <ul className="bike-details_info-details">
                <li>
                  <strong>
                  Serial:
                  </strong>
                  <span>
                    {
                      objectBike?.serial
                    }
                  </span>
                </li>
                <li>
                  <strong>
                  Propulsion: 
                  </strong>
                  <span>
                    {
                      objectBike?.propulsion_type_slug
                    }
                  </span>
                </li>
                <li>
                  <strong>
                  Manufacturer:
                  </strong>
                  <span>
                  {objectBike?.manufacturer_name}
                  </span>

                </li>

                <li>
                <strong>
                Model:
                  </strong>
                  <span>
                  {objectBike?.frame_model}
                  </span>
                </li>
                <li>
                <strong>
                Primary colors:
                  </strong>
                  <span>
                  {
                     objectBike?.frame_colors?.map((color, index) => index < objectBike?.frame_colors?.length - 1? `${color},` : color).join('')
                    }
                  </span>
                </li>

              </ul>

            </div>
            </>
      }
    </div>
  )
}

export default BikeDetails
