import React from 'react'
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';

function LocationTile(props) {
    const {item, addToCart, removeFromCart, isBooked} = props;

    return (
        <div className='flight-card'>
            <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                <CardContent sx={{ display: 'flex', flexDirection: 'column', justifyContent: "flex-end" }}>
                    <Typography component="div" variant="h3" sx={{textAlign: 'left', fontWeight: 'bolder', color: '#AC6869'}}>{item.code}</Typography>
                    <Typography variant="h5" color="text.secondary" sx={{textAlign: 'left', color: '#ECA4A4'}} component="div">{item.title}</Typography>
                    {
                        isBooked ? 
                        (<Button sx={{ mt: 2, color: 'white' }} variant="contained" onClick={() => removeFromCart(item)}>Remove Flight</Button>)
                        :
                        (<Button sx={{ mt: 2 }} variant="outlined" onClick={() => addToCart(item)}>Book Flight</Button>)
                    }
                </CardContent>
            </Box>
            <div className='flight-card-media' style={{backgroundImage: `url(${process.env.PUBLIC_URL + item.image})`}}>
                <div className='flight-card-chips'>
                    <div className='flight-card-price'>
                    <Chip icon={<AttachMoneyIcon />} color='secondary' label={item.price} />
                    </div>

                    <div className='flight-card-price' id='tags'>
                        {
                            item.tags.map((tag, index) => {
                                return <Chip key={index} label={tag} color='secondary' />
                            })
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocationTile