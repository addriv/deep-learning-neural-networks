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
* Steps to training:
  1. Give inputs
  2. Apply activation function
  3. Compare prediction with actual value
    - Cost function: C = 0.5(y_hat - y)^2
    - Minimize cost (error)
  4. Adjust weights

## Gradient Descent

* Instead of brute forcing and iterating through many different weights, adjust weight and test for the slope of C, which direction is pointing down towards min C. Zig zag pattern to gradually find the minimum point.

## Stochastic Gradient Descent

* Problem is with multi dimensional cost function, there are local minimums. Need to find the global minimum to have an optimized neural network.
* 2 approaches:
  1. Batch Gradient Descent: Adjust weights after running all data.
  2. Stocastic Gradient Descent: Run data one at a time and adjust weight after each.

## Backpropagation

* Complex mathematics that allows for adjusting all of weights simultanuously

## Steps in Training the ANN with Stochastic Gradient Descent

1. Randomly initialize the weights to small numbers close to 0 (but not 0).
2. Input the first observation of your dataset in the input layer, each feature in one input node.
3. Forward-Propagation: from left to right, the neurons are activated in a way that the impact of each neuron's activatoin is limited by weights. Propagate the activations until getting the predicted result y.
4. Compare the predicted result to the actual result. Measure the generated error.
5. Back-Propagation: from right to left, the error is back-propagated. Update the weights according to how much they are responsible for the error. The learning rate decides by how much we update the weights.
6. Repeat steps 1 to 5 and update the weights after each observation (Reinforcement Learning). Or: Repeat Steps 1 to 5 but update the weights only after a batch of observations (Batch Learning).
7. When the whole training set passed through the ANN, that makes an epoch. Redo more epochs

## Building an ANN

### Example: Churn Modeling

### Libraries

* Theano
* Tensorflow
* Keras

### Improving the ANN

* Dropout Regularization
  * Solution for overtraining, when the ANN learned too much on training set, succeeds on models of some test sets due to correlation similarities.
  * At each iteration of training, some neurons are randomly disabled to prvent overtraining