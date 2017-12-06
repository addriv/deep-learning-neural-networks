# Annex - Get the Machine Learning Basics

## Overview

1. Regression & Classification Intuition - with Intuition Lectures about Regression and Classification
2. Data Preprocessing Template - with the Step-By-Step Implementation of the Data Preprocessing phase
3. Classification Template - with the Step-By-Step Implementation of our Classification template

## Regresion

* **Linear Regression**
  * Simple Linear Regression: `y = b_0 + b_1 * x`
  * Example: Experience vs. Salary
    * y_i: actual observation
    * y_i^: predicted value
    * SUM(y_i - y_i^)^2 and find the minimum across models
  * Multiple Lienar Regression: `y = b_0 + b_1 * x_1 + b_2 * x_2 ... + b_n * x_n`
* **Logistic Regression** 
  * Example: Did subject take action based on offer, Yes or No
  * `ln(p / (1-p)) = b_0 + b_1 * x`
  * Use to get probabilities as a score