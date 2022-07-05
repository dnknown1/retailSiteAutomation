$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/bdd/features/AddProduct.feature");
formatter.feature({
  "name": "adding a product",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@f1"
    }
  ]
});
formatter.background({
  "name": "user is at PRODUCTS_PAGE",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is at DASHBOARD_PAGE",
  "keyword": "Given "
});
formatter.match({
  "location": "TestAddProduct.user_is_at_DASHBOARD_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on TAGS_ICON",
  "keyword": "When "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_TAGS_ICON()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on PRODUCTS_ICON",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_PRODUCTS_ICON()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to PRODUCTS_PAGE",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAddProduct.user_navigates_to_PRODUCTS_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADD_PRODUCT with no data",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@!f1"
    }
  ]
});
formatter.step({
  "name": "user clicks on ADD_PRODUCT button",
  "keyword": "When "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_ADD_PRODUCT_button()"
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
  "name": "ADD_PRODUCT only with PRODUCT_NAME",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@!f1n"
    }
  ]
});
formatter.step({
  "name": "user clicks on ADD_PRODUCT button",
  "keyword": "When "
});
formatter.step({
  "name": "user provides PRODUCT_NAME \"\u003cproductName\u003e\"",
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
        "productName"
      ]
    },
    {
      "cells": [
        "sample product"
      ]
    }
  ]
});
formatter.background({
  "name": "user is at PRODUCTS_PAGE",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is at DASHBOARD_PAGE",
  "keyword": "Given "
});
formatter.match({
  "location": "TestAddProduct.user_is_at_DASHBOARD_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on TAGS_ICON",
  "keyword": "When "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_TAGS_ICON()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on PRODUCTS_ICON",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_PRODUCTS_ICON()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to PRODUCTS_PAGE",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAddProduct.user_navigates_to_PRODUCTS_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADD_PRODUCT only with PRODUCT_NAME",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@!f1n"
    }
  ]
});
formatter.step({
  "name": "user clicks on ADD_PRODUCT button",
  "keyword": "When "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_ADD_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides PRODUCT_NAME \"sample product\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_provides_PRODUCT_NAME(String)"
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
  "name": "ADD_PRODUCT w/o PRODUCT_MODEL",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@!f1nm"
    }
  ]
});
formatter.step({
  "name": "user clicks on ADD_PRODUCT button",
  "keyword": "When "
});
formatter.step({
  "name": "user provides PRODUCT_NAME \"\u003cproductName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user provides PRODUCT_META_NAME \"\u003cproductMetaName\u003e\"",
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
        "productName",
        "productMetaName"
      ]
    },
    {
      "cells": [
        "sample product",
        "spm"
      ]
    }
  ]
});
formatter.background({
  "name": "user is at PRODUCTS_PAGE",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is at DASHBOARD_PAGE",
  "keyword": "Given "
});
formatter.match({
  "location": "TestAddProduct.user_is_at_DASHBOARD_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on TAGS_ICON",
  "keyword": "When "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_TAGS_ICON()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on PRODUCTS_ICON",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_PRODUCTS_ICON()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to PRODUCTS_PAGE",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAddProduct.user_navigates_to_PRODUCTS_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADD_PRODUCT w/o PRODUCT_MODEL",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@!f1nm"
    }
  ]
});
formatter.step({
  "name": "user clicks on ADD_PRODUCT button",
  "keyword": "When "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_ADD_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides PRODUCT_NAME \"sample product\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_provides_PRODUCT_NAME(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides PRODUCT_META_NAME \"spm\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_provides_PRODUCT_META_NAME(String)"
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
  "name": "ADD_PRODUCT with all valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1!"
    }
  ]
});
formatter.step({
  "name": "user clicks on ADD_PRODUCT button",
  "keyword": "When "
});
formatter.step({
  "name": "user provides PRODUCT_NAME \"\u003cproductName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user provides PRODUCT_META_NAME \"\u003cproductMetaName\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on DATA_TAB",
  "keyword": "And "
});
formatter.step({
  "name": "user provides PRODUCT_MODEL \"\u003cproductModel\u003e\"",
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
        "productName",
        "productMetaName",
        "productModel"
      ]
    },
    {
      "cells": [
        "sample product",
        "spm",
        "003pxd"
      ]
    },
    {
      "cells": [
        "sample product1",
        "spm1",
        "003pxd744"
      ]
    }
  ]
});
formatter.background({
  "name": "user is at PRODUCTS_PAGE",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is at DASHBOARD_PAGE",
  "keyword": "Given "
});
formatter.match({
  "location": "TestAddProduct.user_is_at_DASHBOARD_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on TAGS_ICON",
  "keyword": "When "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_TAGS_ICON()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on PRODUCTS_ICON",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_PRODUCTS_ICON()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to PRODUCTS_PAGE",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAddProduct.user_navigates_to_PRODUCTS_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADD_PRODUCT with all valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@f1!"
    }
  ]
});
formatter.step({
  "name": "user clicks on ADD_PRODUCT button",
  "keyword": "When "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_ADD_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides PRODUCT_NAME \"sample product\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_provides_PRODUCT_NAME(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides PRODUCT_META_NAME \"spm\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_provides_PRODUCT_META_NAME(String)"
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
  "name": "user provides PRODUCT_MODEL \"003pxd\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_provides_PRODUCT_MODEL(String)"
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
  "name": "user is at PRODUCTS_PAGE",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is at DASHBOARD_PAGE",
  "keyword": "Given "
});
formatter.match({
  "location": "TestAddProduct.user_is_at_DASHBOARD_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on TAGS_ICON",
  "keyword": "When "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_TAGS_ICON()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on PRODUCTS_ICON",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_PRODUCTS_ICON()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to PRODUCTS_PAGE",
  "keyword": "Then "
});
formatter.match({
  "location": "TestAddProduct.user_navigates_to_PRODUCTS_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "ADD_PRODUCT with all valid credentials",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f1"
    },
    {
      "name": "@f1!"
    }
  ]
});
formatter.step({
  "name": "user clicks on ADD_PRODUCT button",
  "keyword": "When "
});
formatter.match({
  "location": "TestAddProduct.user_clicks_on_ADD_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides PRODUCT_NAME \"sample product1\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_provides_PRODUCT_NAME(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides PRODUCT_META_NAME \"spm1\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_provides_PRODUCT_META_NAME(String)"
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
  "name": "user provides PRODUCT_MODEL \"003pxd744\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestAddProduct.user_provides_PRODUCT_MODEL(String)"
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