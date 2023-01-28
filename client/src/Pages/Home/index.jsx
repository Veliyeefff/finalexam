import React from 'react'
import Explore from '../../Components/Explore/Explore'
import Features from '../../Components/Features/Features'
import Main from '../../Components/Main/Main'
import Members from '../../Components/Members/Members'
import { Helmet } from 'react-helmet'
// import Sliders from '../../Components/Slider/Slider'
function Index() {
    return (
        <div>
            <Helmet>
                <title>Educature</title>
            </Helmet>
            <Main />
            <Explore />
            <Features />
            <Members />
            {/* <Sliders /> */}
        </div>
    )
}

export default Index