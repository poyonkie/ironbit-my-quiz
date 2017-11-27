// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const CardsList = (props) => <div>
    {
      props.groups.map((i, key) => <div className="item tooltip" key={key}>
                <Link to={`/gallery/${i.id}`}>
                  <img src={i.image_small} />
                  <span className="tooltiptext">{ i.title }</span>
                </Link>
              </div>)
    }
  </div>

export default CardsList;
