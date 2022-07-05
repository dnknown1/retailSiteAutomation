@f2
Feature: Test products page
  user wants to search products

  Background: user needs to login to view homepage
    Given user is at PRODUCTS_PAGE

  @f2!
  Scenario: user wants to view all products
    When user clicks on FILTER_PRODUCT button
    Then validate PRODUCTS_TABLE is displayed

  @f2!n
  Scenario Outline: user wants to verify partial search
    When user provides FILTER_PRODUCT_NAME "<name>"
    And user clicks on FILTER_PRODUCT button
    Then validate PRODUCT_MODEL_VALUE "<model>"

    Examples: 
      | name            | model     |
      | sample          | 003pxd744 |
      | sample product1 | 003pxd    |
