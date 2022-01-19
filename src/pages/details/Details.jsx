import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

import './Details.scss';

import { getOne } from '../../api/cars.api';
import Spinner from '../../kit/spinner/Spinner';

const Details = () => {
  const { id } = useParams();

  const [data, setData] = useState(null);

  useEffect(() => {
    fetchDetails();
  }, []);

  const fetchDetails = async () => {
    const response = await getOne(id);
    setData(response.comments);
  };

  const renderComment = () => data.map((d) => (
    <div className="details-page__comment-text" key={d.id}>{d.content}</div>
  ));

  if (!data) {
    return <Spinner opened />;
  }

  return (
    <div className="details-page">
      <div className="details-page__name">{data.name}</div>
      <hr />
      <div className="details-page__comment">
        {renderComment()}
      </div>
    </div>
  );
};

export default Details;
