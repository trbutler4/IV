import React from 'react';
import { Link } from 'react-router-dom'
import {
    Box,
    Text,
    Button
} from '@chakra-ui/react';
import ConnectWalletButton from './ConnectWalletButton';

const Navbar = () => {
    return (

        <Box w="100%" p={4} display="flex">
            <Text fontSize="xl" fontWeight="bold">IV</Text>

            <Box marginLeft="auto" marginRight={0}>
            <Button as={Link} to="/" variant="ghost"  mr={4}>Home</Button>
            <Button as={Link} to="/about" variant="ghost"  mr={4}>About</Button>
            <Button as={Link} to="/blog" variant="ghost"  mr={4}>Blog</Button>
            <ConnectWalletButton />
            </Box>
        </Box>

    )
}

export default Navbar;
