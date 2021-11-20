import { Box, Button, Container, TextField } from '@material-ui/core'
import React, { useState } from 'react'
import SendIcon from '@material-ui/icons/Send';
import axios from 'axios';

export default function Form() {
    const [data, setData] = useState()

    const handleChange = (e) => {
        e.preventDefault()
        let name = e.target.name
        let value = e.target.value
        setData(prevState => ({ ...prevState, [name]: value }))
    }

    const sendData = (e)=>{
        e.preventDefault()
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        axios.post('https://blog-essaie.herokuapp.com/post', data);
    }


    return (
        <Container maxWidth="xs">
            <form onSubmit={handleSubmit} method="post">
                <Box mb={2} mt={10}>
                    <TextField
                        required
                        label="Entrer votre nom"
                        variant="outlined"
                        name="nom"
                        fullWidth
                        onChange={handleChange}
                    />
                </Box>
                <Box mb={2}>
                    <TextField
                        required
                        label="Entrer votre commentaire"
                        variant="outlined"
                        name="message"
                        multiline
                        rows={7}
                        fullWidth
                        onChange={handleChange}
                    />
                </Box>
                <Box mb={5}>
                    <Button variant="contained" color="primary" fullWidth type="submit" startIcon={<SendIcon />}>
                        Envoyer
                    </Button>
                </Box>
            </form>{console.log(data)}
        </Container>
    )
}
