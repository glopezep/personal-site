'use strict'
import React, { Component } from 'react'
import Layout from '../shared/components/Layout'
import Nav from '../navigation/components/Nav'
import MainCard from '../shared/components/MainCard'
import { 
  Col, 
  Container,
  Row, 
} from 'reactstrap'
import { GoMarkGithub } from 'react-icons/lib/go'

class Index extends Component {

  render () {
    return (
      <Layout>
        <Container>
          <Row>
            <Col>
              <MainCard
                title='Guillermo López'
                subTitle='Javascript Developer'
                description={`
                  I am a Developer with experience in Node.js and JavaScript
                  with DevOps Skills,currently making modules, CLI tools, and apps.
                  My favorite technologies right now are Node.js, Python, React,
                  Internet Of Things, Ansible, Linux, Unix, AWS, Digital Ocean.
                `}
              >
                <a style={{ padding: '1em', display: 'block', color: 'black' }} href='http://github.com/glopezep'>
                  <GoMarkGithub size={35} />
                </a>
                <a style={{ adding: '1em', display: 'block', color: 'black' }} href='https://www.npmjs.com/~glopezep'>
                  <svg version="1.1" xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><title>npm</title><path d="M0 0v32h32v-32h-32zM26 26h-4v-16h-6v16h-10v-20h20v20z"></path></svg>
                </a>
              </MainCard>
              <p style={{ textAlign: 'center' }}><strong>git Contact:</strong> guillermolopez2529@gmail.com</p>
            </Col>
          </Row>
        </Container>
      </Layout>
    )
  }
}

export default Index