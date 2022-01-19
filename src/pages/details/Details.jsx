import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

import { AiFillMessage, AiOutlineUser } from 'react-icons/ai';

import './Details.scss';

import { getOne } from '../../api/cars.api';
import Spinner from '../../kit/spinner/Spinner';
import Button from '../../kit/button/Button';

const Details = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [data, setData] = useState(null);
  const [carName, setCarName] = useState('');

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const response = await getOne(id);

    const { contents, car } = response;

    setData(contents);
    setCarName(car);
  };

  const renderComment = () => data.map((d) => (
    <div className="details-page__comment-item" key={d.id}>
      <div className="details-page__comment-text"><AiFillMessage />&nbsp;{d.comment}</div>
      <div className="details-page__comment-name"><AiOutlineUser />{d.user}</div>
    </div>
  ));

  const handleClickBack = () => {
    navigate('/');
  };

  if (!data) {
    return <Spinner opened />;
  }

  return (
    <div className="details-page">
      <div className="details-page__name">{carName}</div>
      <hr />
      <div className="details-page__comment">
        {renderComment()}
      </div>
      <hr />
      <div className="details-page__button">
        <Button onClick={handleClickBack}>Go back</Button>
      </div>
    </div>
  );
};

export default Details;
