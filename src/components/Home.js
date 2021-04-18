import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import Header from './Header';
import MainFeaturedPost from './MainFeaturedPost';
import FeaturedPost from './FeaturedPost';
import ReactPaginate from 'react-paginate';

const useStyles = makeStyles((theme) => ({
  mainGrid: {
    marginTop: theme.spacing(3),
  },
}));

const sections = [
  { title: 'Familia', url: '#' },
  { title: 'Amigos', url: '#' },
  { title: 'Trabajo', url: '#' },
  { title: 'Gimansio', url: '#' },
];

const mainFeaturedPost = {
  title: 'Agenda de contactos 2021',
  image: 'https://source.unsplash.com/random',
  imgText: 'main image description',
};

export default function Home() {
  const classes = useStyles();
  const [offset, setOffset] = useState(0);
  const [data, setData] = useState([]);
  // const [perPage] = useState(10);
  const [pageCount, setPageCount] = useState(0);

  useEffect(
    () => {
      const getData = async () => {
        const res = await axios.get(
          `https://randomuser.me/api/?page=3&results=50&seed=abc`
        );
        const data = res.data.results;
        const slice = data.slice(offset, offset + 10);
        setData(slice);
        setPageCount(Math.ceil(data.length / 10));
      };
      getData();
    },
    [offset],
    []
  );

  //UseEffect before implementing pagination just for bringing the data and display it all
  // useEffect(async () => {
  //   try {
  //     const response = await axios(
  //       'https://randomuser.me/api/?page=3&results=10&seed=abc'
  //     );
  //     setData(response.data.results);
  //   } catch (error) {
  //     console.error(error);
  //   }
  // }, []);

  const handlePageClick = (e) => {
    const selectedPage = e.selected;
    setOffset(selectedPage + 1);
  };

  return (
    <React.Fragment>
      <CssBaseline />
      <Container maxWidth='lg'>
        <Header title='MI AGENDA' sections={sections} />
        <main>
          <MainFeaturedPost post={mainFeaturedPost} />
          <ReactPaginate
            previousLabel={'prev'}
            nextLabel={'next'}
            breakLabel={'...'}
            breakClassName={'break-me'}
            pageCount={pageCount}
            marginPagesDisplayed={2}
            pageRangeDisplayed={5}
            onPageChange={handlePageClick}
            containerClassName={'pagination'}
            subContainerClassName={'pages pagination'}
            activeClassName={'active'}
          />
          <Grid container spacing={4}>
            {data.map((element) => (
              <FeaturedPost key={element.cell} post={element} />
            ))}
          </Grid>
          <Grid container spacing={5} className={classes.mainGrid}></Grid>
        </main>
      </Container>
    </React.Fragment>
  );
}
