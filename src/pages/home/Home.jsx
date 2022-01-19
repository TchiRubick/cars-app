import React, { useEffect, useState } from 'react';

import { useNavigate } from 'react-router-dom';

import { AiFillCaretLeft, AiFillCaretRight } from 'react-icons/ai';

import './Home.scss';

import Button from '../../kit/button/Button';

import { get } from '../../api/cars.api';

const Home = () => {
  const navigate = useNavigate();
  const [pagination, setPagination] = useState({
    page: 1,
    total: 0,
  });
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchCars();
  }, [pagination.page]);

  const fetchCars = async () => {
    const cars = await get(pagination.page);

    if (cars instanceof Error) {
      // TODO: Error message here
      return;
    }

    setData(cars);
  };

  const handlePageChange = (value) => {
    const nextPage = pagination.page + value;

    if (nextPage > pagination.total || nextPage === 0) {
      return;
    }

    setPagination({ ...pagination, page: nextPage });
  };

  const handleClickDetails = (id) => {
    navigate(`/car/${id}`);
  };

  const renderList = () => data.map((d) => (
    <div className="page-home__item" key={d.id}>
      <div className="page-home__item-name">{d.name}</div>
      <div className="page-home__item-button">
        <Button onClick={() => handleClickDetails(d.id)}>Details</Button>
      </div>
    </div>
  ));

  return (
    <div className="page-home">
      <div className="page-home__items">
        {renderList()}
      </div>
      <div className="page-home__pagination">
        <div className="__pagination-button">
          <Button theme="danger" onClick={handlePageChange(-1)}><AiFillCaretLeft />&nbsp;Previous</Button>
        </div>
        <div className="__pagination-button">
          <Button theme="danger" onClick={handlePageChange(1)}>Next&nbsp;<AiFillCaretRight /></Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
