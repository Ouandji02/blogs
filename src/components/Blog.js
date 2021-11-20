import { Avatar, Button, Card, CardActions, CardContent, Grid } from '@material-ui/core'
import { CardHeader } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

const Blog = ({props}) => {
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios('https://blog-essaie.herokuapp.com/all-blogs')
            .then(result => {
                setPost(result.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])

    const update = (id) => {
        props.history.push(`/update/${id}`)
    }


    const deleteItem = (id) => {
        console.log(id)
        axios.delete(`https://blog-essaie.herokuapp.com/delete/${id}`);
    }

    console.log('propriete',props)
    return (
        <div>{console.log(post)}
            <Grid container direction="row" spacing={3}>
                {post.map((element, key) => (
                    <Grid key={key} item lg={4} xs={6} md={4} sx={6}>
                        <Card fullwidth>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" >e
                                    </Avatar>
                                }
                                title={element.nom}
                                subheader="Blogueur"
                            />
                            <CardContent>
                                {element.message}
                            </CardContent>
                            <CardActions>
                                    <Button type="submit" color="secondary" onClick={() => deleteItem(element._id)}>
                                        supprimer
                                    </Button>
                                    <Button type="submit" color="primary" onClick={() => update(element._id)}>
                                       Update
                                    </Button>
                            </CardActions>
                        </Card>
                    </Grid>

                ))}

            </Grid>

        </div>
    )
}

export default Blog;