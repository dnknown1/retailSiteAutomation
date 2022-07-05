$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/java/bdd/features/login.feature");
formatter.feature({
  "name": "Log in",
  "description": "  user wants to LOGIN as administrator",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@f0"
    }
  ]
});
formatter.scenarioOutline({
  "name": "correct PASSWORD required",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@!f0u^p"
    }
  ]
});
formatter.step({
  "name": "user provides correct USERNAME \"\u003cuser\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user provides incorrect PASSWORD \"\u003cpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "name": "validate LOGIN fail",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "pass"
      ]
    },
    {
      "cells": [
        "admin",
        "admin@124"
      ]
    }
  ]
});
formatter.background({
  "name": "User is at LOGIN_PAGE",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is at LOGIN_PAGE",
  "keyword": "Given "
});
formatter.match({
  "location": "TestLogin.user_is_at_LOGIN_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "correct PASSWORD required",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0"
    },
    {
      "name": "@!f0u^p"
    }
  ]
});
formatter.step({
  "name": "user provides correct USERNAME \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestLogin.user_provides_correct_USERNAME(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides incorrect PASSWORD \"admin@124\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestLogin.user_provides_incorrect_PASSWORD(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on LOGIN button",
  "keyword": "And "
});
formatter.match({
  "location": "TestLogin.user_clicks_on_LOGIN_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate LOGIN fail",
  "keyword": "Then "
});
formatter.match({
  "location": "TestLogin.validate_LOGIN_fail()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "correct USERNAME required",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@!f0^pu"
    }
  ]
});
formatter.step({
  "name": "user provides incorrect USERNAME \"\u003cuser\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user provides correct PASSWORD \"\u003cpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "name": "validate LOGIN fail",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "pass"
      ]
    },
    {
      "cells": [
        "admi",
        "Admin@123"
      ]
    }
  ]
});
formatter.background({
  "name": "User is at LOGIN_PAGE",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is at LOGIN_PAGE",
  "keyword": "Given "
});
formatter.match({
  "location": "TestLogin.user_is_at_LOGIN_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "correct USERNAME required",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0"
    },
    {
      "name": "@!f0^pu"
    }
  ]
});
formatter.step({
  "name": "user provides incorrect USERNAME \"admi\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestLogin.user_provides_incorrect_USERNAME(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides correct PASSWORD \"Admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestLogin.user_provides_correct_PASSWORD(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on LOGIN button",
  "keyword": "And "
});
formatter.match({
  "location": "TestLogin.user_clicks_on_LOGIN_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "validate LOGIN fail",
  "keyword": "Then "
});
formatter.match({
  "location": "TestLogin.validate_LOGIN_fail()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
formatter.scenarioOutline({
  "name": "verify valid LOGIN",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0!"
    }
  ]
});
formatter.step({
  "name": "user provides correct USERNAME \"\u003cuser\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user provides correct PASSWORD \"\u003cpass\u003e\"",
  "keyword": "And "
});
formatter.step({
  "name": "user clicks on LOGIN button",
  "keyword": "And "
});
formatter.step({
  "name": "user navigates to DASHBOARD_PAGE",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "user",
        "pass"
      ]
    },
    {
      "cells": [
        "admin",
        "Admin@123"
      ]
    }
  ]
});
formatter.background({
  "name": "User is at LOGIN_PAGE",
  "description": "",
  "keyword": "Background"
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "user is at LOGIN_PAGE",
  "keyword": "Given "
});
formatter.match({
  "location": "TestLogin.user_is_at_LOGIN_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.scenario({
  "name": "verify valid LOGIN",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@f0"
    },
    {
      "name": "@f0!"
    }
  ]
});
formatter.step({
  "name": "user provides correct USERNAME \"admin\"",
  "keyword": "When "
});
formatter.match({
  "location": "TestLogin.user_provides_correct_USERNAME(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user provides correct PASSWORD \"Admin@123\"",
  "keyword": "And "
});
formatter.match({
  "location": "TestLogin.user_provides_correct_PASSWORD(String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user clicks on LOGIN button",
  "keyword": "And "
});
formatter.match({
  "location": "TestLogin.user_clicks_on_LOGIN_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user navigates to DASHBOARD_PAGE",
  "keyword": "Then "
});
formatter.match({
  "location": "TestLogin.user_navigates_to_DASHBOARD_PAGE()"
});
formatter.result({
  "status": "passed"
});
formatter.after({
  "status": "passed"
});
});