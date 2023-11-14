import React from 'react'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import card from '../assets/images/card.jpg';
const Projects = () => {
  return (
    <div className='container p-4 mb-4'>
        <div className='row d-flex align-item-center justify-content-between'>
            <div className='col col-sm-12 col-lg-6 col-md-6 '>
                <h3>Hot auctions</h3>
            </div>
            <div className='col col-sm-12 col-lg-6 col-md-6 '>
                <Button variant="dark">View All</Button>
            </div>
        </div>
        <div className='row'>
            
            <div className='col col-sm-12 col-md-6 col-lg-3 p-2'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card} />
                    <Card.Body>
                        
                        <Card.Text className='d-flex justify-content-between'>
                            <p>Lorem Ipsum</p>
                            <p>120 Weid</p>
                        </Card.Text>
                        <Button variant="dark">Buy</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='col col-sm-12 col-md-6 col-lg-3 p-2'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card} />
                    <Card.Body>
                        
                        <Card.Text className='d-flex justify-content-between'>
                            <p>Lorem Ipsum</p>
                            <p>120 Weid</p>
                        </Card.Text>
                        <Button variant="dark">Bid</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='col col-sm-12 col-md-6 col-lg-3 p-2'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card} />
                    <Card.Body>
                        
                        <Card.Text className='d-flex justify-content-between'>
                            <p>Lorem Ipsum</p>
                            <p>120 Weid</p>
                        </Card.Text>
                        <Button variant="dark">Bid</Button>
                    </Card.Body>
                </Card>
            </div>
            <div className='col col-sm-12 col-md-6 col-lg-3 p-2'>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src={card} />
                    <Card.Body>
                        
                        <Card.Text className='d-flex justify-content-between'>
                            <p>Lorem Ipsum</p>
                            <p>120 Weid</p>
                        </Card.Text>
                        <Button variant="dark">Bid</Button>
                    </Card.Body>
                </Card>
            </div>
           




        </div>

    </div>
  )
}


export default Projects;