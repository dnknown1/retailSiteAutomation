$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/bdd/features/DeleteProduct.feature");
formatter.feature({
  "name": "Deletion of existing product",
  "description": "  user wants to delete existing product",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@f4"
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
  "name": "user tries invalid deletion",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@f4"
    },
    {
      "name": "@!f4"
    }
  ]
});
formatter.step({
  "name": "user clicks on DELETE_PRODUCT button",
  "keyword": "When "
});
formatter.match({
  "location": "TestDeleteProduct.user_clicks_on_DELETE_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user accepts CONFORM_DELETE alert",
  "keyword": "And "
});
formatter.match({
  "location": "TestDeleteProduct.user_accepts_CONFORM_DELETE_alert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate NO_CHANGE",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDeleteProduct.validate_NO_CHANGE()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user tries valid deletion first item",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@!f4n"
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
  "keyword": "And "
});
formatter.step({
  "name": "user selects PRODUCT_TO_MODIFY",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on DELETE_PRODUCT button",
  "keyword": "And "
});
formatter.step({
  "name": "user rejects CONFORM_DELETE alert",
  "keyword": "And "
});
formatter.step({
  "name": "validate NO_CHANGE",
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
  "name": "user tries valid deletion first item",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f4"
    },
    {
      "name": "@!f4n"
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
  "name": "validate PRODUCT_MODEL_VALUE \"003pxd\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestSearchProduct.validate_PRODUCT_MODEL_VALUE(String)"
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
  "name": "user clicks on DELETE_PRODUCT button",
  "keyword": "And "
});
formatter.match({
  "location": "TestDeleteProduct.user_clicks_on_DELETE_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user rejects CONFORM_DELETE alert",
  "keyword": "And "
});
formatter.match({
  "location": "TestDeleteProduct.user_rejects_CONFORM_DELETE_alert()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate NO_CHANGE",
  "keyword": "Then "
});
formatter.match({
  "location": "TestDeleteProduct.validate_NO_CHANGE()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "user tries valid deletion first item",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f4!"
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
  "keyword": "And "
});
formatter.step({
  "name": "user selects PRODUCT_TO_MODIFY",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on DELETE_PRODUCT button",
  "keyword": "And "
});
formatter.step({
  "name": "user accepts CONFORM_DELETE alert",
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
        "sample",
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
  "name": "user tries valid deletion first item",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f4"
    },
    {
      "name": "@f4!"
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
  "keyword": "And "
});
formatter.match({
  "location": "TestSearchProduct.validate_PRODUCT_MODEL_VALUE(String)"
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
  "name": "user clicks on DELETE_PRODUCT button",
  "keyword": "And "
});
formatter.match({
  "location": "TestDeleteProduct.user_clicks_on_DELETE_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user accepts CONFORM_DELETE alert",
  "keyword": "And "
});
formatter.match({
  "location": "TestDeleteProduct.user_accepts_CONFORM_DELETE_alert()"
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
  "name": "user tries valid deletion first item",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f4"
    },
    {
      "name": "@f4!"
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
  "name": "validate PRODUCT_MODEL_VALUE \"003pxd\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestSearchProduct.validate_PRODUCT_MODEL_VALUE(String)"
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
  "name": "user clicks on DELETE_PRODUCT button",
  "keyword": "And "
});
formatter.match({
  "location": "TestDeleteProduct.user_clicks_on_DELETE_PRODUCT_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user accepts CONFORM_DELETE alert",
  "keyword": "And "
});
formatter.match({
  "location": "TestDeleteProduct.user_accepts_CONFORM_DELETE_alert()"
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