import TrendingMovies from 'components/TrendingMovies/TrendingMovies';

import styles from './home-page.module.css';

const Home = () => {
  return (
    <div>
      <h1 className={styles.trendingTitle}>Trending today</h1>
      <TrendingMovies />
    </div>
  );
};

export default Home;
