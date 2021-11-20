import { Box, TextField, Typography, Container, Button } from '@material-ui/core'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'

export default function update(props) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { id } = useParams();
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [post, setPost] = useState([]);
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const [data, setData] = useState({id: id});
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        axios('https://blog-essaie.herokuapp.com/all-blogs')
            .then(res => {
               res.data.map((doc) => {
                    // eslint-disable-next-line no-undef
                    if(doc._id == id){
                        setPost(doc)
                    }
               })
               console.log(post)
            })
            .catch(err => { console.log(err) })

    }, [])

    const handleChange = (e) => {
        let name = e.target.name
        let value = e.target.value
        setData(prevState => ({ ...prevState, [name]: value }))
    }

    const updateSubmit = (e) => {
        e.preventDefault()
        console.log(data)
        axios.post(`https://blog-essaie.herokuapp.com/update/${id}`, data)
        props.history.push('/');
    }

    return (
        <div>
            <Typography align="center" variant="h4">Update</Typography>
            <Container maxWidth="xs">
                <form action="https://blog-essaie.herokuapp.com/update" method="post" onSubmit={updateSubmit}>
                    <Box mb={2} mt={10}>
                        <TextField
                            label="Entrer votre nom"
                            variant="outlined"
                            name="nom"
                            defaultValue={post.nom}
                            fullWidth
                            onChange={handleChange}
                        />
                    </Box>
                    <Box
                        mb={2}>
                        <TextField
                            label="Entrer votre commentaire"
                            variant="outlined"
                            name="message"
                            multiline
                            defaultValue={post.message}
                            rows={7}
                            fullWidth
                            onChange={handleChange}
                        />
                    </Box>
                    <Box mb={5}>
                        <Button variant="contained" color="primary" fullWidth type="submit">
                         update
                        </Button>
                    </Box>
                </form>
            </Container>
        </div>
    )
}
