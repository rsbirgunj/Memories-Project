import { withWidth } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

export default makeStyles((theme) => ({
  appBar: {
    borderRadius: 15,
    margin: '30px 0',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  heading: {
    color: 'rgba(0,183,255, 1)',
    fontFamily: 'Dancing Script',
  },
  image: {
    marginLeft: '15px',
  },
  footer:{
    backgroundColor: 'rgba(128,0,0,1)',
    padding: '15px 0',
    color : 'white',
    marginTop : '10px',
  },
  icon:{
    color : 'red',
  }
}));