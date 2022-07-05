@f4
Feature: Deletion of existing product
  user wants to delete existing product

  Background: user is at products page
    Given user is at PRODUCTS_PAGE

  @!f4
  Scenario: user tries invalid deletion
    When user clicks on DELETE_PRODUCT button
    And user accepts CONFORM_DELETE alert
    Then validate NO_CHANGE

  @!f4n
  Scenario Outline: user tries valid deletion first item
    When user provides FILTER_PRODUCT_NAME "<name>"
    And user clicks on FILTER_PRODUCT button
    And validate PRODUCT_MODEL_VALUE "<model>"
    And user selects PRODUCT_TO_MODIFY
    And user clicks on DELETE_PRODUCT button
    And user rejects CONFORM_DELETE alert
    Then validate NO_CHANGE

    Examples: 
      | name   | model  |
      | sample | 003pxd |

  @f4!
  Scenario Outline: user tries valid deletion first item
    When user provides FILTER_PRODUCT_NAME "<name>"
    And user clicks on FILTER_PRODUCT button
    And validate PRODUCT_MODEL_VALUE "<model>"
    And user selects PRODUCT_TO_MODIFY
    And user clicks on DELETE_PRODUCT button
    And user accepts CONFORM_DELETE alert
    Then validate ADD_PRODUCT success

    Examples: 
      | name            | model     |
      | sample          | 003pxd744 |
      | sample product1 | 003pxd    |
