import { Dialog } from '@mui/material';
import SignUpForm from './SingUpForm';
import SignInForm from './SingInForm';
import { useState } from 'react';

export default function Login(props: any) {
    const { close, open } = props;
    const [sing, setSing] = useState(true);

    const handleClose = () => {
        close()
    }

  return (
    <Dialog open={open} onClose={handleClose}>
          {sing ? <SignInForm setSing={setSing} close={handleClose}/> 
          : <SignUpForm setSing={setSing} close={handleClose}/>}
    </Dialog>
  )
}
