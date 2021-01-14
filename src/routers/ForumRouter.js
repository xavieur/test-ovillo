import React from 'react'
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom'
import ForumHeader from '../components/ForumHeader'
import ForumHome from '../components/ForumHome'
import ForumReplys from '../components/ForumReplys'
import ForumCreateUser from '../components/ForumCreateUser'
import ForumCreateThread from '../components/ForumCreateThread'
import ForumCreateReply from '../components/ForumCreateReply'
/* import ForumEdit from '../components/ForumEdit' */
import Forum404 from '../components/Forum404'

/* <Route path='/edit/:id' component={ForumEdit} /> */

const ForumRouter = () => (
    <BrowserRouter>
        <div>
            <ForumHeader />
            <Switch>
                <Route path='/' component={ForumHome} exact={true} />
                <Route path='/replys/:id' component={ForumReplys} />
                <Route path='/createuser' component={ForumCreateUser} />
                <Route path='/createthread' component={ForumCreateThread} />
                <Route path='/createreply' component={ForumCreateReply} />
                <Route component={Forum404} />
            </Switch>
        </div>
    </BrowserRouter>
)

export default ForumRouter