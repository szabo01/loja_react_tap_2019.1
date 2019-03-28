import React, { Component } from 'react';
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBContainer, MDBMask, MDBView } from "mdbreact";
import ListaDeProdutos from './ListaDeProdutos';

class Home extends Component {
    render(){
        return (
            <>
            <MDBContainer>
                <MDBCarousel activeItem={1} length={3} showControls={true} showIndicators={true} className="z-depth-1">
                    <MDBCarouselInner>
                        <MDBCarouselItem itemId="1">
                            <MDBView>
                                <img className="w-200" src={process.env.PUBLIC_URL + '/imagens/game.jpg'} alt="First image" />
                                <MDBMask overlay="black-light" />
                            </MDBView>
                        </MDBCarouselItem>

                        <MDBCarouselItem itemId="2">
                            <MDBView>
                                <img className="w-200" src={process.env.PUBLIC_URL + '/imagens/play.jpg'} alt="Second slide" />
                                <MDBMask overlay="black-strong" />
                            </MDBView>
                        </MDBCarouselItem>

                    </MDBCarouselInner>
                </MDBCarousel>
            </MDBContainer>

            <div class="m-3">
                <ListaDeProdutos/>
            </div>
            </>
        );
    }

}

export default Home;