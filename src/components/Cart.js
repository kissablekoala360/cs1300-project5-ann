import React, {useState} from 'react';

import Popover from '@mui/material/Popover';
import IconButton from '@mui/material/IconButton';
import CartIcon from '@mui/icons-material/ShoppingCart';
import Typography from '@mui/material/Typography';


function Cart(props) {
    const { cartItems } = props;

    const getTotalCart = (cart) => {
        return cart.reduce((acc, item) => {return acc+parseInt(item.price)}, 0);
    }

    const [anchorEl, setAnchorEl] = useState(null);

    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const open = Boolean(anchorEl);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <IconButton
                size="large"
                edge="start"
                color="white"
                aria-label="cart"
                onClick={handleClick}
                sx={{ mr: 2, color: 'white' }}
            >
                <CartIcon />
            </IconButton>
            <Popover
                id={id}
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'center',
                }}
            >
                <div className='cart-container'>
                    {
                        cartItems.length > 0 ? 
                        
                        (
                            <div className='cart-items'>
                                <Typography variant="h6" component="div"  sx={{ textAlign: 'left', mb: 2, fontWeight: 'bold' }}>
                                Flight Cart
                                </Typography>
                                {cartItems.map((item, index) => {
                                    return (
                                        <div className='cart-item' key={index}>
                                            <Typography variant="subtitle1" component="div"  sx={{ textAlign: 'center' }}>
                                            {item.title}
                                            </Typography>
                                            <Typography variant="subtitle1" component="div"  sx={{ textAlign: 'center' }}>
                                            ${item.price}
                                            </Typography>
                                        </div>
                                    )
                                })}
                                <div className='cart-item'>
                                    <Typography variant="subtitle1" component="div"  sx={{ textAlign: 'left', mt: 2, fontWeight: 'bold' }}>
                                    Total
                                    </Typography>
                                    <Typography variant="subtitle1" component="div"  sx={{ textAlign: 'left', mt: 2, fontWeight: 'bold' }}>
                                    ${getTotalCart(cartItems)}
                                    </Typography>
                                </div>
                            </div>
                        ) 
                        : 
                        (
                            <Typography variant="subtitle2" component="div"  sx={{ textAlign: 'center' }}>
                                No flights in the cart yet &#128546;
                            </Typography>
                        )
                    }
                </div>
            </Popover>
        </div>
    )
}

export default Cart