import React from 'react'
import Layout from '../components/Layout'
import Header from '../components/Header'
import { Chelss } from '../components/Chelss'
import MainSlider from '../components/MainSlider'


export default function Home() {
    return (
        <Layout>
            <Header/>
            <MainSlider />
            <Chelss/>
        </Layout>
    )
}
