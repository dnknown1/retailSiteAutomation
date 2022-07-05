$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/bdd/features/SearchProduct.feature");
formatter.feature({
  "name": "Test products page",
  "description": "  user wants to search products",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@f2"
    }
  ]
});
formatter.background({
  "name": "user needs to login to view homepage",
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
  "name": "user wants to view all products",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@f2"
    },
    {
      "name": "@f2!"
    }
  ]
});
formatter.step({
  "name": "user clicks on FILTER_PRODUCT button",
  "keyword": "When "
});
formatter.match({
  "location": "TestSearchProduct.user_clicks_on_FILTER_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate PRODUCTS_TABLE is displayed",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSearchProduct.validate_PRODUCTS_TABLE_is_displayed()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user wants to verify partial search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f2!n"
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
  "name": "validate PRODUCT_MODEL_VALUE \"\u003cmodel\u003e\"",
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
        "model"
      ]
    },
    {
      "cells": [
        "sample",
        "003pxd744"
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
  "name": "user needs to login to view homepage",
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
  "name": "user wants to verify partial search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f2"
    },
    {
      "name": "@f2!n"
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
  "name": "validate PRODUCT_MODEL_VALUE \"003pxd744\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSearchProduct.validate_PRODUCT_MODEL_VALUE(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "user needs to login to view homepage",
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
  "name": "user wants to verify partial search",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f2"
    },
    {
      "name": "@f2!n"
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
  "name": "validate PRODUCT_MODEL_VALUE \"003pxd\"",
  "keyword": "Then "
});
formatter.match({
  "location": "TestSearchProduct.validate_PRODUCT_MODEL_VALUE(String)"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});