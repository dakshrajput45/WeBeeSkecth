import * as React from 'react';
import { styled, alpha,useTheme } from '@mui/material/styles';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import { useNavigate } from 'react-router-dom';

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

export default function CustomizedMenus(props) {
  const navigate = useNavigate();
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    event.stopPropagation();
    setAnchorEl(event.currentTarget);
  };
  const handleClose = (e) => {
    setAnchorEl(null);
  };

  const theme = useTheme();
  return (
    <div>
      <Button
        id="demo-customized-button"
        aria-controls={open ? 'demo-customized-menu' : undefined}
        aria-haspopup="true"
        aria-expanded={open ? 'true' : undefined}
        variant="contained"
        disableElevation
        onClick={handleClick}
        endIcon={<KeyboardArrowDownIcon />}
        sx={{
            color: 'black',
            bgcolor: 'white',
            fontSize:'20px',
            marginRight:'20px',
            textTransform: 'none',
            '&:hover': {
                bgcolor: 'transparent', // Change background color on hover
              },
              [theme.breakpoints.down('md')]: { // Apply styles for small screens
                fontSize: '20px',
                width: '75vw',
                textAlign: 'start',
                display: 'flex',
                justifyContent: 'flex-start',
                color:'white',
                borderRadius:'0px',
                bgcolor: 'rgb(0, 33, 65)'
            }, 
          }}
          
      >
        Services
      </Button>
      <StyledMenu
        id="demo-customized-menu"
        MenuListProps={{
          'aria-labelledby': 'demo-customized-button',
        }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        
      >
        <MenuItem 
        onClick={(e)=>{
          navigate("/analytics-and-data-insights");
          handleClose(e);
        }} disableRipple
        sx={{
            fontSize:'15px',
        }}
        >
        Analytics and Data Insights
        </MenuItem>
        <MenuItem onClick={(e)=>{
          navigate("/analytics-and-data-insights");
          handleClose(e);
        }} disableRipple
        sx={{
            fontSize:'15px',
        }}>
          Content Marketing
        </MenuItem>
        <MenuItem onClick={(e)=>{
          navigate("/analytics-and-data-insights");
          handleClose(e);
        }} disableRipple
        sx={{
            fontSize:'15px',
        }}>
          Search Engine Marketing
        </MenuItem>
        <MenuItem onClick={(e)=>{
          navigate("/analytics-and-data-insights");
          handleClose(e);
        }} disableRipple
        sx={{
            fontSize:'15px',
        }}
        >
          Social Media Marketing
        </MenuItem>
        <MenuItem onClick={(e)=>{
          navigate("/analytics-and-data-insights");
          handleClose(e);
        }} disableRipple
        sx={{
            fontSize:'15px',
        }}>
          Pay-Per-Click Advertising
        </MenuItem>
        <MenuItem onClick={(e)=>{
          navigate("/analytics-and-data-insights");
          handleClose(e);
        }} disableRipple
        sx={{
            fontSize:'15px',
        }}>
          Web Development
        </MenuItem>
        <MenuItem onClick={(e)=>{
          navigate("/analytics-and-data-insights");
          handleClose(e);
        }} disableRipple
        sx={{
            fontSize:'15px',
        }}>
          App Development
        </MenuItem>
      </StyledMenu>
    </div>
  );
}