$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/bdd/features/EditProduct.feature");
formatter.feature({
  "name": "Editing a product",
  "description": "  user wants to modify a product",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@f3"
    }
  ]
});
formatter.scenarioOutline({
  "name": "user tries to update PRODUCT_MODEL with same PRODUCT_SEO",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@!f3"
    }
  ]
});
formatter.step({
  "name": "user provides FILTER_PRODUCT_NAME \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on FILTER_PRODUCT button",
  "keyword": "And "
});
formatter.step({
  "name": "user selects PRODUCT_TO_MODIFY",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on EDIT_PRODUCT button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on DATA_TAB",
  "keyword": "And "
});
formatter.step({
  "name": "user updates PRODUCT_MODEL \"\u003cproductModel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on SAVE_PRODUCT button",
  "keyword": "And "
});
formatter.step({
  "name": "validate ADD_PRODUCT fail",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "productModel"
      ]
    },
    {
      "cells": [
        "sample product1",
        "003pxd"
      ]
    }
  ]
});
formatter.background({
  "name": "user is at products page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is at PRODUCTS_PAGE",
  "keyword": "Given "
});
formatter.match({
  "location": "TestSearchProduct.user_is_at_PRODUCTS_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries to update PRODUCT_MODEL with same PRODUCT_SEO",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f3"
    },
    {
      "name": "@!f3"
    }
  ]
});
formatter.step({
  "name": "user provides FILTER_PRODUCT_NAME \"sample product1\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestSearchProduct.user_provides_FILTER_PRODUCT_NAME(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on FILTER_PRODUCT button",
  "keyword": "And "
});
formatter.match({
  "location": "TestSearchProduct.user_clicks_on_FILTER_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects PRODUCT_TO_MODIFY",
  "keyword": "And "
});
formatter.match({
  "location": "TestEditProduct.user_selects_PRODUCT_TO_MODIFY()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on EDIT_PRODUCT button",
  "keyword": "And "
});
formatter.match({
  "location": "TestEditProduct.user_clicks_on_EDIT_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on DATA_TAB",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_DATA_TAB()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user updates PRODUCT_MODEL \"003pxd\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestEditProduct.user_updates_PRODUCT_MODEL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on SAVE_PRODUCT button",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_SAVE_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate ADD_PRODUCT fail",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAddProduct.validate_ADD_PRODUCT_fail()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user tries to update PRODUCT_MODEL \u0026 PRODUCT_SEO",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f3!"
    }
  ]
});
formatter.step({
  "name": "user provides FILTER_PRODUCT_NAME \"\u003cname\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user clicks on FILTER_PRODUCT button",
  "keyword": "And "
});
formatter.step({
  "name": "user selects PRODUCT_TO_MODIFY",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on EDIT_PRODUCT button",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on DATA_TAB",
  "keyword": "And "
});
formatter.step({
  "name": "user updates PRODUCT_MODEL \"\u003cproductModel\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user provides PRODUCT_SEO \"\u003cproductSeo\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on SAVE_PRODUCT button",
  "keyword": "And "
});
formatter.step({
  "name": "validate ADD_PRODUCT success",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "name",
        "productModel",
        "productSeo"
      ]
    },
    {
      "cells": [
        "sample",
        "003pxd744",
        "re"
      ]
    },
    {
      "cells": [
        "sample product1",
        "003pxd",
        "re1"
      ]
    }
  ]
});
formatter.background({
  "name": "user is at products page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is at PRODUCTS_PAGE",
  "keyword": "Given "
});
formatter.match({
  "location": "TestSearchProduct.user_is_at_PRODUCTS_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries to update PRODUCT_MODEL \u0026 PRODUCT_SEO",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f3"
    },
    {
      "name": "@f3!"
    }
  ]
});
formatter.step({
  "name": "user provides FILTER_PRODUCT_NAME \"sample\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestSearchProduct.user_provides_FILTER_PRODUCT_NAME(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on FILTER_PRODUCT button",
  "keyword": "And "
});
formatter.match({
  "location": "TestSearchProduct.user_clicks_on_FILTER_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects PRODUCT_TO_MODIFY",
  "keyword": "And "
});
formatter.match({
  "location": "TestEditProduct.user_selects_PRODUCT_TO_MODIFY()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on EDIT_PRODUCT button",
  "keyword": "And "
});
formatter.match({
  "location": "TestEditProduct.user_clicks_on_EDIT_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on DATA_TAB",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_DATA_TAB()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user updates PRODUCT_MODEL \"003pxd744\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestEditProduct.user_updates_PRODUCT_MODEL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides PRODUCT_SEO \"re\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestEditProduct.user_provides_PRODUCT_SEO(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on SAVE_PRODUCT button",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_SAVE_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate ADD_PRODUCT success",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAddProduct.validate_ADD_PRODUCT_success()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user is at products page",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is at PRODUCTS_PAGE",
  "keyword": "Given "
});
formatter.match({
  "location": "TestSearchProduct.user_is_at_PRODUCTS_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "user tries to update PRODUCT_MODEL \u0026 PRODUCT_SEO",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f3"
    },
    {
      "name": "@f3!"
    }
  ]
});
formatter.step({
  "name": "user provides FILTER_PRODUCT_NAME \"sample product1\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestSearchProduct.user_provides_FILTER_PRODUCT_NAME(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on FILTER_PRODUCT button",
  "keyword": "And "
});
formatter.match({
  "location": "TestSearchProduct.user_clicks_on_FILTER_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user selects PRODUCT_TO_MODIFY",
  "keyword": "And "
});
formatter.match({
  "location": "TestEditProduct.user_selects_PRODUCT_TO_MODIFY()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on EDIT_PRODUCT button",
  "keyword": "And "
});
formatter.match({
  "location": "TestEditProduct.user_clicks_on_EDIT_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on DATA_TAB",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_DATA_TAB()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user updates PRODUCT_MODEL \"003pxd\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestEditProduct.user_updates_PRODUCT_MODEL(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides PRODUCT_SEO \"re1\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestEditProduct.user_provides_PRODUCT_SEO(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on SAVE_PRODUCT button",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_SAVE_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate ADD_PRODUCT success",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAddProduct.validate_ADD_PRODUCT_success()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});