import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  moviesContiner: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    overflow: 'auto',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },

}));
