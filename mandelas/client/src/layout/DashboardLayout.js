import React from 'react'
import { Route, Switch } from 'react-router'
import Body from '../components/Body'
import update from '../components/update'

export default function DashboardLayout() {
    return (
        <div>
            <Switch>
                <Route exact path="/" component={Body}/>
                <Route path="/update/:id" component={update}/>
            </Switch>
        </div>
    )
}
