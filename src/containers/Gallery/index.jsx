// Dependencies
import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

// Components
import CardsList from './components/CardsList';
import MovieDetail from './components/MovieDetail';

// Assets
import './Gallery.css';

// Actions
import * as actions from './actions';

// Utils
import { isFirstRender } from '../../lib/utils/frontend';

class Gallery extends Component {
  static propTypes = {
    loadScienceFictionMovies: PropTypes.func.isRequired,
    groups: PropTypes.array,
    total: PropTypes.number,
    itemDdetail: PropTypes.object
  }

  constructor(props) {
    super(props);

    this.state = {
      displayDetailMovie: false,
      searchInput: ''
    }

    this.filterList = this.filterList.bind(this);
    this.renderAllMovies = this.renderAllMovies.bind(this);
  }

  componentWillMount() {
    const { match: {params: {id = 0}}} = this.props;
    this.setState({displayDetailMovie: id > 0});

    if (id > 0) {
      this.props.loadScienceFictionMovieDetail({ id });
    } else {
      this.props.loadScienceFictionMovies();
    }
  }

  componentWillReceiveProps(nextProps) {
    const {match: {params: {id = 0}}} = nextProps;

    if (nextProps.match.params !== this.props.match.params) {
      this.setState({displayDetailMovie: id > 0});

      if (id > 0) {
        this.props.loadScienceFictionMovieDetail({ id });
      }
    }
  }

  renderDetailMovie(itemDdetail) {
    const { title, image_background, image_large, large_description, extendedcommon } = itemDdetail;
    const { media, roles: {role}, genres: {genre} } = extendedcommon;
    return <MovieDetail itemDdetail={itemDdetail} />
  }

  renderAllMovies(groups) {
    return (<div className="cards-container group">
      <div className="search">
        <input type="text" placeholder="Buscar" value={this.state.searchInput} onChange={this.filterList}/>
      </div>
      <CardsList groups={groups} />
    </div>);
  }

  filterList(event){
    this.setState({searchInput: event.target.value});
    this.props.loadScienceFictionMovies(event.target.value);
  }

  render() {
    const {
      groups,
      pictures,
      itemDdetail
    } = this.props;

    if (!isFirstRender(groups) && !isFirstRender(itemDdetail)) {
      return null;
    }

    let displayed = this.state.displayDetailMovie && itemDdetail.hasOwnProperty('id') ? this.renderDetailMovie(itemDdetail) : this.renderAllMovies(groups);

    return (<div className="Gallery">
      { displayed }
    </div>);
  }
}

export default connect(state => ({
  groups: state.gallery.groups,
  total: state.gallery.total,
  itemDdetail: state.gallery.itemDdetail
}), actions)(Gallery);
