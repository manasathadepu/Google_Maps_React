import React, { Fragment, useState, useEffect } from 'react';

const DisplayList = (props) => {
  const {
    stations
  } = props;

  const [pageList, setPageList] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  let numberOfPages = 0;
  const numberPerPage = 10;

  useEffect((numberOfPages) => {
    numberOfPages = Math.ceil(stations.length / numberPerPage);
  }, [stations])

  useEffect(()=> {
    listToDisplay();
  },[currentPage])

  const listToDisplay = () =>{
    const beginList = ((currentPage - 1) * numberPerPage);
    const endList = beginList + numberPerPage;
    setPageList(stations.slice(beginList,endList));
  }

  const beginingOfList = () => {
    setCurrentPage(1);
  }

  const endOfList = () => {
    setCurrentPage(numberOfPages);
  }

  const previousList = () => {
    setCurrentPage(currentPage => currentPage - 1);
  }

  const nextList = () => {
    setCurrentPage(currentPage => currentPage + 1);
  }

  return <Fragment>
    <div className="container">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">NAME</th>
        </tr>
      </thead>
      <tbody>
        {
          pageList.map((listItem, index) => (
            <tr key = {index}>
              <td>{listItem.code}</td>
              <td>{listItem.name}</td>
            </tr>
          ))
        }
      </tbody>
    </table>
    <div className= "paginationBtns">
      <input type="button" className = {"btn btn-primary"} disabled = {currentPage === 1 ? true : false} onClick={ e => beginingOfList() } value="first" />
      <input type="button" className = {"btn btn-primary"} disabled = {currentPage === numberOfPages ? true : false} onClick={e => nextList() } value="next" />
      <input type="button" className = {"btn btn-primary"} disabled = {currentPage === 1 ? true : false} onClick= { e => previousList() } value="previous" />
      <input type="button" className = {"btn btn-primary"} disabled = {currentPage === numberOfPages ? true : false} onClick={e =>  endOfList() } value="last" />
    </div>
    </div>
  </Fragment>
}

export default DisplayList;
