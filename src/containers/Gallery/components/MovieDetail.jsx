// Dependencies
import React, { Component } from 'react';
import PropTypes from 'prop-types';

const MovieDetail = (props) => {
  const {
    title,
    image_background,
    image_large,
    large_description,
    extendedcommon
  } = props.itemDdetail;
  const { media, roles: {role}, genres: {genre} } = extendedcommon;

  return (<section>
    <div className="section-ficha-bg" style={{'backgroundImage': `url(${image_background})`}} />
    <section className="section-ficha-info">
      <div className="container">
        <div className="head-title">
          <h2><a href='/gallery'>&laquo;</a> {title}</h2>
        </div>
        <div className="body-info">
          <div className="image">
            <img src={image_large} alt={title} />
            <div className="subscribe">
              <span>SUSCRÍBETE</span>
            </div>
          </div>
          <div className="paragraphs">
            <div className="left">
              <p>{media.description_extended}</p>
              <div className="fecha_tiempo">
                <ul className="list-inline">
                  <li><span>{media.publishyear}</span></li>
                  <li><span>{media.duration}</span></li>
                  { media.language.subbed === 'true' && <li><span className="btn-label margin-left-20">Subtitulada</span></li> }
                  { media.language.dubbed === 'true' && <li><span className="btn-label">Doblada</span></li> }
                  <li><span className="btn-label rating">{media.rating.code}</span></li>
                </ul>
              </div>
              <div className="film-crew">
                {role.map((item, key) => <div key={key}>
                  <strong>{item.desc} :</strong>
                  {
                    item.talents.talent.map((i, key) => <span key={key}>
                      <a href="javascript:void(0);">{i.fullname}</a>
                      {key === item.talents.talent.length-1 ? '.' : ', '}
                    </span>)
                  }
                </div>)}
                <div>
                  <strong>Género: </strong>
                  {
                    genre.map((i, key) => <span key={key}>
                      <a href="">{i.desc}</a>
                      {key === genre.length-1 ? '.' : ', '}
                      </span>)
                  }
                </div>
                <div>
                  <strong>Título Original: </strong>
                  <span><a href="javascript:void(0);">{media.originaltitle}</a>.</span>
                </div>
              </div>
            </div>
            <div className="rigth"></div>
          </div>
        </div>
      </div>
    </section>
  </section>);
};

export default MovieDetail;
