import { Avatar, Card, CardContent, Grid } from '@material-ui/core'
import { CardHeader } from '@material-ui/core'
import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Blog() {
    const [post, setPost] = useState([]);
    useEffect(() => {
        axios('http://localhost:5000/all-blogs')
            .then(result => {
                setPost(result.data)
            })
            .catch(err => {
                console.log(err)
            })
    }, [])
    return (
        <div>{console.log(post)}
            <Grid container direction="row" spacing={3}>
                {post.map((element, key) => (
                    <Grid key={key} item lg={4} xs={4}>
                        <Card fullwidth>
                            <CardHeader
                                avatar={
                                    <Avatar aria-label="recipe" >
                                        R
                                    </Avatar>
                                }
                                title={element.nom}
                                subheader="Blogueur"
                            />
                            <CardContent>
                                {element.message}
                            </CardContent>
                        </Card>
                    </Grid>

                ))}

            </Grid>

        </div>
    )
}
