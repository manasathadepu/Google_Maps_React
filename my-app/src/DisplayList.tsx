import React, { Fragment, useState, useEffect, useRef } from 'react';
import { Props, Stations } from './interfaces';

const DisplayList = ({stations}: Props) : JSX.Element => {

  const [pageList, setPageList] = useState<Array<Stations>| undefined>();
  const [currentPage, setCurrentPage] = useState(1);
  let numberOfPages = useRef(0);
  const numberPerPage: number = 10;

  useEffect(() => {
    numberOfPages.current = Math.ceil(stations.length / numberPerPage);
  }, [stations])

  useEffect(()=> {
    const listToDisplay = () =>{
      const beginList = ((currentPage - 1) * numberPerPage);
      const endList = beginList + numberPerPage;
      const pageListToUpdate: Array<Stations> = stations.slice(beginList,endList)
      setPageList(pageListToUpdate);
    }
    listToDisplay();
  },[currentPage,stations])

  

  const beginingOfList = () => {
    setCurrentPage(1);
  }

  const endOfList = () => {
    setCurrentPage(numberOfPages.current);
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
          pageList && pageList.map((listItem, index) => (
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
      <input type="button" className = {"btn btn-primary"} disabled = {currentPage === numberOfPages.current ? true : false} onClick={e => nextList() } value="next" />
      <input type="button" className = {"btn btn-primary"} disabled = {currentPage === 1 ? true : false} onClick= { e => previousList() } value="previous" />
      <input type="button" className = {"btn btn-primary"} disabled = {currentPage === numberOfPages.current ? true : false} onClick={e =>  endOfList() } value="last" />
    </div>
    </div>
  </Fragment>
}

export default DisplayList;


// this function component contains list of bixistations along with
// pagination logic.
// each page contains 10 list items.