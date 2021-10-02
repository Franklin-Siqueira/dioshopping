// Copyright 2021 Franklin Siqueira.
// SPDX-License-Identifier: Apache-2.0

import React from "react";
import styled, { css } from "styled-components";

/**
 * GridContainer
 */
export const GridContainer = styled.div`
  width: 90%;
  max-width: 1240px;
  margin: 0 auto;

  display: grid;

  grid-template-columns: 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;

  ${(props) =>
    props.primary &&
    css`
      background: palevioletred;
      color: white;
    `}

  @media (min-width: 30em) {
    grid-template-columns: 1fr 1fr;
  }

  @media (min-width: 60em) {
    grid-template-columns: repeat(4, 1fr);
  }
`;
/**
 * CardContainer
 */
export const CardBase = styled.div`
  width: 325px;
  height: 490px;
  position: absolute;
  top: 10px;
  left: 10px;
  overflow: hidden;
  transform-style: preserve-3d;
  -webkit-transition: 100ms ease-out;
  -moz-transition: 100ms ease-out;
  -o-transition: 100ms ease-out;
  transition: 100ms ease-out;

  &:hover {
    top: 5px;
    left: 5px;
    width: 335px;
    height: 500px;
    box-shadow: 0px 13px 21px -5px rgba(0, 0, 0, 0.3);
    -webkit-transition: 100ms ease-out;
    -moz-transition: 100ms ease-out;
    -o-transition: 100ms ease-out;
    transition: 100ms ease-out;
  }
`;
/**
 * StatsContainer
 */
export const StatsContainer = styled.div`
  /* .stats-container{ */
  background: #fff;
  position: absolute;
  top: 386px;
  left: 0;
  width: 265px;
  height: 300px;
  padding: 27px 35px 35px;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;

  ${CardBase}:hover & {
    top: 272px;
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
  }
`;
/**
 * DetailsBox
 */
export const DetailsBox = styled.div`
  position: absolute;
  top: 112px;
  left: 50%;
  margin-left: -85px;
  border: 2px solid rgb(250, 246, 246);
  color: #fff;
  font-size: 19px;
  text-align: center;
  text-transform: uppercase;
  font-weight: 700;
  padding: 10px 0;
  width: 172px;
  opacity: 0;
  -webkit-transition: all 200ms ease-out;
  -moz-transition: all 200ms ease-out;
  -o-transition: all 200ms ease-out;
  transition: all 200ms ease-out;

  &:hover {
    background: #fff;
    color: #48cfad;
    cursor: pointer;
  }

  ${CardBase}:hover & {
    opacity: 1;
    width: 152px;
    font-size: 15px;
    margin-left: -75px;
    top: 115px;
    -webkit-transition: all 200ms ease-out;
    -moz-transition: all 200ms ease-out;
    -o-transition: all 200ms ease-out;
    transition: all 200ms ease-out;
  }
`;
/**
 * CardColorsBall
 */
export const CardColorsBall = styled.div`
  div {
    margin-top: 3px;
    width: 15px;
    height: 15px;
    margin-right: 5px;
    float: left;
  }
  span {
    width: 15px;
    height: 15px;
    display: block;
    border-radius: 50%;

    &:hover {
      width: 17px;
      height: 17px;
      margin: -1px 0 0 -1px;
    }
  }
  .c-blue {
    background: #6e8cd5;
  }
  .c-green {
    background: #44c28d;
  }
  .c-white {
    background: #fff;
    width: 14px;
    height: 14px;
    border: 1px solid #e8e9eb;
  }
`;
/**
 * CardFront
 */
export const CardFront = styled.div`
  width: 335px;
  height: 500px;
  background: #fff;
  position: absolute;
  left: -5px;
  top: -5px;
  -webkit-transition: all 100ms ease-out;
  -moz-transition: all 100ms ease-out;
  -o-transition: all 100ms ease-out;
  transition: all 100ms ease-out;
`;
/**
 * CardBack
 */
export const CardBack = styled.div`
  width: 335px;
  height: 500px;
  background: #fff;
  position: absolute;
  left: -5px;
  top: -5px;
  -webkit-transition: all 100ms ease-out;
  -moz-transition: all 100ms ease-out;
  -o-transition: all 100ms ease-out;
  transition: all 100ms ease-out;
  display: none;
  transform: rotateY(180deg);
`;
/**
 * CardAnimate
 */
export const CardAnimate = styled.div`
  /* #product-card.animate{ */
  top: 5px;
  left: 5px;
  width: 335px;
  height: 500px;
  box-shadow: 0px 13px 21px -5px rgba(0, 0, 0, 0.3);
  -webkit-transition: 100ms ease-out;
  -moz-transition: 100ms ease-out;
  -o-transition: 100ms ease-out;
  transition: 100ms ease-out;
`;
