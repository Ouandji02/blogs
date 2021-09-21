import { Typography } from '@material-ui/core'
import React from 'react'
import Blog from './Blog'
import Form from './Form'

export default function Body() {
    return (
        <div style={{marginTop :'50px'}}>
            <Typography align="center" variant="h4">Blog</Typography>
            <Form />
            <Blog />
        </div>
    )
}
