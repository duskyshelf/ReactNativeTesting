import React from 'react-native';
import {renderIntoDocument} from 'react-addons-test-utils';

import {expect} from 'chai';

import setup from './setup';

import Film from '../film';

const MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];;

describe('Film', () => {
  it('should display film details', () => {
    const movie = MOCKED_MOVIES_DATA;

    const item = renderIntoDocument(
      <Film movie = { movie } />
    );

    const filmTitle = item.refs.filmTitle;

    expect(filmTitle.textContent).to.equal(movie.title);
  });
});