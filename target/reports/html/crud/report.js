$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/bdd/features/r1AddProduct.feature");
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
formatter.uri("file:src/test/java/bdd/features/r2EditProduct.feature");
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
formatter.uri("file:src/test/java/bdd/features/r3SearchProduct.feature");
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
formatter.uri("file:src/test/java/bdd/features/r4DeleteProduct.feature");
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