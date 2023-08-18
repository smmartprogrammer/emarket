"use client"

import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import React, { Component, FC, ReactNode } from 'react'
import { oneProductType } from './Types'
import Card from './Card'



export default class SimpleSlider extends Component<{ ProductData: Array<oneProductType> }> {
    render() {
      const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      return (
        <div>
          {/* <h2> Single Item</h2> */}
          <Slider {...settings}>
          <div>
          { this.props.ProductData.map((item: oneProductType, index: number) => (
        <Card singleProduct={item} />
      ))}
         </div>
          </Slider>
        </div>
      );
    }
  }