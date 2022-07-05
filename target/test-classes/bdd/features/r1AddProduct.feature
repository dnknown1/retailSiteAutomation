@f1
Feature: adding a product

  Background: user is at PRODUCTS_PAGE
    Given user is at DASHBOARD_PAGE
    When user clicks on TAGS_ICON
    And user clicks on PRODUCTS_ICON
    Then user navigates to PRODUCTS_PAGE

  @!f1
  Scenario: ADD_PRODUCT with no data
    When user clicks on ADD_PRODUCT button
    And user clicks on SAVE_PRODUCT button
    Then validate ADD_PRODUCT fail

  @!f1n
  Scenario Outline: ADD_PRODUCT only with PRODUCT_NAME
    When user clicks on ADD_PRODUCT button
    And user provides PRODUCT_NAME "<productName>"
    And user clicks on SAVE_PRODUCT button
    Then validate ADD_PRODUCT fail

    Examples: 
      | productName    |
      | sample product |

  @!f1nm
  Scenario Outline: ADD_PRODUCT w/o PRODUCT_MODEL
    When user clicks on ADD_PRODUCT button
    And user provides PRODUCT_NAME "<productName>"
    And user provides PRODUCT_META_NAME "<productMetaName>"
    And user clicks on SAVE_PRODUCT button
    Then validate ADD_PRODUCT fail

    Examples: 
      | productName    | productMetaName |
      | sample product | spm             |

  @f1!
  Scenario Outline: ADD_PRODUCT with all valid credentials
    When user clicks on ADD_PRODUCT button
    And user provides PRODUCT_NAME "<productName>"
    And user provides PRODUCT_META_NAME "<productMetaName>"
    And user clicks on DATA_TAB
    And user provides PRODUCT_MODEL "<productModel>"
    And user clicks on SAVE_PRODUCT button
    Then validate ADD_PRODUCT success

    Examples: 
      | productName     | productMetaName | productModel |
      | sample product  | spm             | 003pxd       |
      | sample product1 | spm1            | 003pxd744    |
