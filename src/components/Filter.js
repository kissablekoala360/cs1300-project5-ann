import React from 'react'
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select from '@mui/material/Select';
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 200,
    },
  },
};

function Filter(props) {

    const { getFilters, setFilters, clearFilters } = props;
    const { destinationType, vacationType, priceFilter } = getFilters;
    const { setDestinationType, setVacationType, setPriceFilter } = setFilters;

    const destinationTypes = [
        'Domestic',
        'International',
      ];
      
    const vacationTypes = [
        'City',
        'Tropical',
    ];


    const handleChangeFilter = (event) => {
        setPriceFilter(event.target.value);
    };

    const handleChangeDestination = (event) => {
        const { target: { value }} = event;
        
        setDestinationType (
                // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
            );
    };

    const handleChangeVacation = (event) => {
        const {
                target: { value },
            } = event;
        
            setVacationType (
                // On autofill we get a stringified value.
                typeof value === 'string' ? value.split(',') : value,
            );
    };

    return (
        <div className='filter-selector'>
            <FormControl sx={{width: '200px', ml: 3}}>
                <InputLabel id="demo-simple-select-label">Destination Types</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={destinationType}
                    onChange={handleChangeDestination}
                    input={<OutlinedInput label="Destination Types" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    >
                    {destinationTypes.map((name) => (
                        <MenuItem key={name} value={name}>
                        <Checkbox checked={destinationType.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl sx={{width: '200px'}}>
                <InputLabel id="demo-simple-select-label">Vacation Types</InputLabel>
                <Select
                    labelId="demo-multiple-checkbox-label"
                    id="demo-multiple-checkbox"
                    multiple
                    value={vacationType}
                    onChange={handleChangeVacation}
                    input={<OutlinedInput label="Destination Types" />}
                    renderValue={(selected) => selected.join(', ')}
                    MenuProps={MenuProps}
                    >
                    {vacationTypes.map((name) => (
                        <MenuItem key={name} value={name}>
                        <Checkbox checked={vacationType.indexOf(name) > -1} />
                        <ListItemText primary={name} />
                        </MenuItem>
                    ))}
                </Select>
            </FormControl>

            <FormControl sx={{ width: 200 }}>
                <InputLabel id="demo-simple-select-helper-label">Filter Price</InputLabel>
                <Select
                labelId="demo-simple-select-helper-label"
                id="demo-simple-select-helper"
                value={priceFilter}
                label="Filter Price"
                onChange={handleChangeFilter}
                >
                <MenuItem value={""}><em>None</em></MenuItem>
                <MenuItem value={"lowToHigh"}>Low to High</MenuItem>
                <MenuItem value={"highToLow"}>High to Low</MenuItem>
                </Select>
            </FormControl>

            <Button onClick={() => clearFilters()} sx={{ height: 56, justifySelf: 'flex-end' }} variant="outlined">Clear Filters</Button>
        </div>
    )
}

export default Filter