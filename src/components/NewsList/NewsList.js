import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  makeStyles,
  List,
  ListItem,
  ListItemText,
  ListSubheader
} from '@material-ui/core';
import { actions as newsActions } from '../../ducks/news';

const list = [
  {
    title: 'Top headlines in the US',
    url: 'us-news',
  },
  {
    title: 'Top headlines from BBC News',
    url: 'bbc-news',
  },
  {
    title: 'Top business headlines from germany',
    url: 'business-news',
  },
  {
    title: 'top headlines about trump',
    url: 'trump-news',
  },
];

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
  nested: {
    paddingLeft: theme.spacing(4),
  },
}));

const NewsList = ({
  getArticlesData
}) => {
  const classes = useStyles();
  const [selectedIndex, setSelectedIndex] = React.useState(0);

  useEffect(() => {    
    getArticlesData({
      url: list[selectedIndex].url,
      page: 0,
    });
  }, [getArticlesData, selectedIndex]);

  return (
    <List
      component="nav"
      subheader={
        <ListSubheader component="div">
          News
        </ListSubheader>
      }
      className={classes.root}
    >
      {list.map((value, ind) => (
        <ListItem
          button
          selected={selectedIndex === ind}
          onClick={() => setSelectedIndex(ind)}
        >
          <ListItemText primary={value.title} />
        </ListItem>
      ))}
    </List>
  );
}

NewsList.propTypes = {
  getArticlesData: PropTypes.func.isRequired,
};

export default connect(
  null,
  {
    getArticlesData: newsActions.getArticlesData,
  },
)(NewsList);
