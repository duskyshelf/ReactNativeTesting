import React from 'react';
import {renderIntoDocument} from 'react-addons-test-utils';

import {expect} from 'chai';

import setup from './setup';

import MainView from '../index.ios.js';

const MOCKED_MOVIES_DATA = [
  {title: 'Title', year: '2015', posters: {thumbnail: 'http://i.imgur.com/UePbdph.jpg'}},
];;

describe('MainView', () => {
  it('should display item details', () => {
    const tweet = MOCKED_MOVIES_DATA;

    {
      dataSource: new ListView.DataSource({
        rowHasChanged: (row1, row2) => row1 !== row2,
      }),
      loaded: false,
    };
    
    const item = renderIntoDocument(
      <MainView film={tweet}/>
    );

    const userIcon = item.refs.userIcon;
    const userDescription = item.refs.userDescription;
    const userScreenName = item.refs.userScreenName;
    const date = item.refs.date;
    const text = item.refs.text;

    expect(userDescription.textContent).to.equal(tweet.user.description);
    expect(userScreenName.textContent).to.equal('@' + tweet.user.screenName);
    expect(date.textContent).to.include('3m');
    expect(text.textContent).to.equal(tweet.text);
  });
});