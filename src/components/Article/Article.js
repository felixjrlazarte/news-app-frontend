import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  makeStyles,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Typography,
  TablePagination,
  CircularProgress,
} from '@material-ui/core';
import { actions as newsActions } from '../../ducks/news';

const useStyles = makeStyles(theme => ({
  media: {
    height: 140,
  },
  contentContainer: {
    height: '97%',
    overflowY: 'auto',
  },
  loaderContainer: {
    display: 'flex',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
}));

const Article = ({
  isFetching,
  params,
  totalResults,
  articles,
  getArticlesData,
}) => {
  const classes = useStyles();
  const [page, setPage] = useState(0);

  const handleChangePage = (event, newPage) => {
    getArticlesData({
      ...params,
      page: newPage,
    });
    setPage(newPage);
  };

  return (
    <React.Fragment>
      <Grid container spacing={3} className={classes.contentContainer}>
        {isFetching ?
        <div className={classes.loaderContainer}>
          <CircularProgress />
        </div>
        : articles.map(({
            title,
            description,
            publishedAt,
            urlToImage,
          }) => (
            <Grid item xs={4}>
              <Card>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    alt="Image"
                    className={classes.media}
                    src={urlToImage}
                    title="Title"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {title}
                    </Typography>
                    <Typography variant="caption" color="textSecondary" component="p">
                      {publishedAt}
                    </Typography>
                    <Typography variant="body2" color="textSecondary" component="p">
                      {description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))
        }
      </Grid>
      <TablePagination
        rowsPerPageOptions={[10]}
        component="div"
        count={totalResults}
        rowsPerPage={10}
        page={page}
        onChangePage={handleChangePage}
      />
    </React.Fragment>
  );
}

Article.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  params: PropTypes.object.isRequired,
  totalResults: PropTypes.number.isRequired,
  articles: PropTypes.array.isRequired,
  getArticlesData: PropTypes.func.isRequired,
};

export default connect(
  state => ({
    isFetching: state.news.isFetching,
    params: state.news.params,
    totalResults: state.news.totalResults,
    articles: state.news.articles,
  }),
  {
    getArticlesData: newsActions.getArticlesData,
  },
)(Article);