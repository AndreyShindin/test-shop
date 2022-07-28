import { Box, Divider, IconButton, InputBase, Paper } from '@mui/material';
import { useState } from 'react';
import { useSelector } from 'react-redux';
import SearchIcon from '@mui/icons-material/Search';
import styles from './Search.module.scss';
import { Directions } from '@mui/icons-material';

const Search = () => {
    const [requestSearch, changeSearch] = useState('');
    const main = useSelector((state: any) => state.main);

    return (
        <Paper
            component="form"
            sx={{ p: '2px 4px', display: 'flex', alignItems: 'center', width: 400 }}>
            <InputBase
                sx={{ ml: 1, flex: 1 }}
                placeholder="Search Google Maps"
            />
            <IconButton type="submit" sx={{ p: '10px' }} aria-label="search">
                <SearchIcon />
            </IconButton>
      </Paper>
    )
}

export default Search