import React from 'react';

export const ImageView = ({ history, onDeleteItem }) => {
  return (
    history.map(({id, image, title, timeLoad}) =>
      <div key={id} className="card mb-3">
        <h5 className="card-title">{title}</h5>
        <h6 className="card-subtitle text-muted">{timeLoad.toLocaleString("ru")}</h6>
        <img key={id} src={image} title={title}/>
        <button className="image__button" onClick={ () => onDeleteItem(id) }>Удалить</button>
      </div>
    )
  )
};
