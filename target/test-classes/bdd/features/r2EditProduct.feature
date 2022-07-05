@f3
Feature: Editing a product
  user wants to modify a product

  Background: user is at products page
    Given user is at PRODUCTS_PAGE

  @!f3
  Scenario Outline: user tries to update PRODUCT_MODEL with same PRODUCT_SEO
    When user provides FILTER_PRODUCT_NAME "<name>"
    And user clicks on FILTER_PRODUCT button
    And user selects PRODUCT_TO_MODIFY
    And user clicks on EDIT_PRODUCT button
    And user clicks on DATA_TAB
    And user updates PRODUCT_MODEL "<productModel>"
    And user clicks on SAVE_PRODUCT button
    Then validate ADD_PRODUCT fail

    Examples: 
      | name            | productModel |
      | sample product1 | 003pxd       |

  @f3!
  Scenario Outline: user tries to update PRODUCT_MODEL & PRODUCT_SEO
    When user provides FILTER_PRODUCT_NAME "<name>"
    And user clicks on FILTER_PRODUCT button
    And user selects PRODUCT_TO_MODIFY
    And user clicks on EDIT_PRODUCT button
    And user clicks on DATA_TAB
    And user updates PRODUCT_MODEL "<productModel>"
    And user provides PRODUCT_SEO "<productSeo>"
    And user clicks on SAVE_PRODUCT button
    Then validate ADD_PRODUCT success

    Examples: 
      | name            | productModel | productSeo |
      | sample          | 003pxd744    | re         |
      | sample product1 | 003pxd       | re1        |
