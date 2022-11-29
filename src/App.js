import React, {useState, useEffect} from 'react';
import './App.css';

import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import AppBar from '@mui/material/AppBar';

import { createTheme, ThemeProvider } from '@mui/material/styles';

import LocationTile from './components/LocationTile';
import Filter from './components/Filter';
import Cart from './components/Cart';

import placeData from "./assets/data.json";


function App() {

  const theme = createTheme({
    palette: {
      secondary: {
        main: '#DCEBEB'
      },
      primary: {
        main: '#ECA4A4'
      },
    },
    text: {
      primary: '#ECA4A4'
    }
  });

  const [placeDataItems, setPlaceDataItems] = useState(placeData);
  const [cartItems, setCartItems] = useState([]);

  const [destinationType, setDestinationType] = React.useState(['Domestic', 'International']);
  const [vacationType, setVacationType] = React.useState(['City', 'Tropical']);
  const [priceFilter, setPriceFilter] = React.useState('');

  useEffect(() => {
      const filteredData = placeData.filter((item) => {
        return inclusiveMatch(item.tags[0], vacationType);
      }).filter((item) => {
        return inclusiveMatch(item.tags[1], destinationType);
      });

      setPlaceDataItems(filteredData);
      if (priceFilter === 'lowToHigh') {
        setPlaceDataItems(filteredData.sort((a, b) => a.price - b.price));
      } else if (priceFilter === 'highToLow') {
        setPlaceDataItems(filteredData.sort((a, b) => b.price - a.price));
      }

  }, [destinationType, vacationType, priceFilter]);

  const addToCart = (item) => {
    if (!cartItems.includes(item)){
      setCartItems([...cartItems, item]);
    }
  }; 

  const removeFromCart = (item) => {
    if (cartItems.includes(item)) {
      setCartItems(cartItems.filter(function(cartItem) { 
        return item !== cartItem
    }));
    }
  }

  const clearFilters = () => {
    setDestinationType(['Domestic', 'International']);
    setVacationType(['City', 'Tropical']);
    setPriceFilter('');

    setPlaceDataItems(placeData);
  }

  const inclusiveMatch = (item, values) => {
    return values.includes(item);
  }

  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <Box sx={{ flexGrow: 1 }}>
          <AppBar position="fixed">
            <Toolbar>
              <Typography variant="h6" component="div" color={"white"} sx={{ flexGrow:1, textAlign: 'left', fontWeight: 'bolder' }}>
                Travel App
              </Typography>
             <Cart cartItems={cartItems}/>
            </Toolbar>
          </AppBar>
        </Box>
        <Container sx={{pt: 10, width: '100%'}}>
          <div className='header-wrapper'>
            <div className='text-wrap'>
              <div className='blur-text'>
                <Typography variant="h2" component="div" color={"white"} sx={{ flexGrow:1, textAlign: 'left', fontWeight: 'bolder' }}>
                  We Do The Planning
                </Typography>
                <Typography variant="h4" component="div" color={"white"} sx={{ flexGrow:1, textAlign: 'left', fontWeight: '' }}>
                  You Do The Packing
                </Typography>
              </div>
            </div>
          </div>
          <Filter getFilters={{"destinationType": destinationType, "vacationType": vacationType, "priceFilter": priceFilter}} setFilters={{"setDestinationType": setDestinationType, "setVacationType": setVacationType, "setPriceFilter": setPriceFilter}} clearFilters={clearFilters}/>
          <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 2, p: 5 }}>
            {
              placeDataItems.map((values, index) => {
                return <LocationTile key={index} item={values} addToCart={addToCart} removeFromCart={removeFromCart} isBooked={cartItems.includes(values)} />
              })
            }

          </Box>
        </Container>
      </div>
    </ThemeProvider>
  );
}

export default App;
