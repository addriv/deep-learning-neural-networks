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
