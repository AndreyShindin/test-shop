import { IconButton, InputBase, Paper } from '@mui/material';
import { useState } from 'react';
import { useAppSelector } from '../../store/hook';
import SearchIcon from '@mui/icons-material/Search';

const Search = () => {
    const [requestSearch, changeSearch] = useState('');
    const main = useAppSelector((state) => state.main);

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