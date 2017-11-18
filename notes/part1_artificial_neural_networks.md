# Part 1: Artifical Neural Networks(ANN)

## Overview

* The Neuron
* The Activation Function
* How do Neural Networks work?
* How do Neural Networks learn?
* Gradient Descent
* Stochastic Gradient Descent
* Backpropagration

## The Neuron

* Dendrites: Receivers for neurons
* Axon: Transmitters for neurons
* Synapse: Connection between dendrites and axons
* Input Layer:
  - Independent variables: Input values need to standardize, mean of 0, variance of 1.
* Output Layer:
  - Can be continuous(price), binary(will exit yes/no), or categorical which contains multiple output values
* Weights:
  - Assign weights to each independent variable, strength that signals get passed along. 
  - Crucial, adjusted while training ANN
* What happens inside neuron?
  1. Take weighted sum of all input values
  2. Apply an activation function, determines if signal is passed or not
  3. Neuron passes signal down the line

## The Activation Function

* 4 Types:
  1. Threshold Function
    - Pass 1 if x >= 0
    - Pass 0 if x < 0
  2. Sigmoid Function
    - 1 / (1 + e ^ -x)
    - Smoother curve used for Log regression
  3. Rectifier
    - One of the most popular functions
    - max(x, 0)
  4. Hyperbolic Tangent(tanh)
    - (1 - e^-2x)/(1 + e^-2x)

## How do Neural Networks work?

* After training, neurons pick up relationships, valid signals between variables and output
* Combines many different relationships to more accurately make predictions.

## How do Neural Networks learn?

* 2 different approaches:
  1. Hard coding rules and outcomes, guide program through various options.
  2. Create facility, give program inputs and desired outputs.
* Backpropagation - Steps to training:
  1. Give inputs
  2. Apply activation function
  3. Compare prediction with actual value
    - Cost function: C = 0.5(y_hat - y)^2
    - Minimize cost (error)
  4. Adjust weights

