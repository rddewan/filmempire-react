import { makeStyles } from '@mui/styles';

export default makeStyles((theme) => ({
  movie: {
    padding: '10px',
    [theme.breakpoints.down('sm')]: {
      justifyContent: 'center',
    },
  },
  title: {
    color: theme.palette.text.primary,
    textOverflow: 'ellipsis',
    width: 230,
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    marginTop: 10,
    marginBottom: 0,
    textAlign: 'center',
  },

}));
