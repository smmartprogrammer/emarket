"use client"
// import "~slick-carousel/slick/slick.css"; 
// import "~slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import React, { Component, FC, ReactNode } from 'react'
import { oneProductType } from './Types'
import Card from './Card'


// const ProductCarrosal: FC<{ ProductData: Array<oneProductType> }> = ({ ProductData }) => {


export default class ProductCarrosal extends Component<{ ProductData: Array<oneProductType> }> {
  render(): ReactNode {
    const settings = {
      speed: 500,
      slidesToShow: 3,
      slidesToScroll: 1
    };
    return (
      <div>
        <h2> Single Item</h2>
        <Slider {...settings}>
          <div>
          {this.props.ProductData.map((item: oneProductType, index: number) => (
        <Card singleProduct={item} />
      ))}
         </div>
        </Slider>
      </div>
    );
  }
}