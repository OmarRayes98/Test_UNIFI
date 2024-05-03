import { Fragment, useEffect, useState } from "react";
import Card from "../../components/AllBikes/Card/Card";
import "./AllBikes.css";
import { useSelector, useDispatch } from 'react-redux';
import { fetchStolenBikes, fetchStolenBikesCount } from "../../store/bikes.actions";
import Loading from "../../components/Loading/Loading";
import ReactPaginate from 'react-paginate';


const AllBikes = () => {

  const dispatch = useDispatch();
  const {countStolenBikes,allBikes,loading} = useSelector((state) => state.bikes);
  const [page, setPage] = useState(1);

  useEffect(()=>{


    dispatch(fetchStolenBikes(page));

},[dispatch,page])

//count of bikes stolean
useEffect(()=>{

  if(countStolenBikes ===null){
    dispatch(fetchStolenBikesCount());
  }



},[dispatch])

const handlePageClick =(data)=>{


  setPage(data?.selected+1)


}

  return (
    <section className="all-bikes">

    <h1 className="all-bikes__title">
      All Bikes
    </h1>

    <section className="all-bikes__cards">

      {
        loading ?
        <Loading/>
        :

        allBikes &&
        allBikes.map((item,index)=>(
          <Fragment key={index}>
            <Card item={item}/>
          </Fragment>
        ))
      }


    </section>
    
    <section className="all-bikes__paginations">

    <ReactPaginate
        breakLabel="..."
        nextLabel=">"
        onPageChange={handlePageClick}
        pageCount={Math.ceil(1000 / 5)}
        previousLabel="<"
        marginPagesDisplayed={1}
        pageRangeDisplayed={3}
        activeClassName={"active"}

      />

    </section>

    <section>
      <h3>
      Total number of bikes
      {" "}
      <strong style={{color:'red'}}>
      Stolen 
      </strong>
      {" "}
      :
      {" "}
      <span style={{color:'red'}}>
        {countStolenBikes}
      </span>
      </h3>
    </section>

      
    </section>
  )
}

export default AllBikes
