@f0
Feature: Log in
  user wants to LOGIN as administrator

  Background: User is at LOGIN_PAGE
    Given user is at LOGIN_PAGE

  @!f0u^p
  Scenario Outline: correct PASSWORD required
    When user provides correct USERNAME "<user>"
    And user provides incorrect PASSWORD "<pass>"
    And user clicks on LOGIN button
    Then validate LOGIN fail

    Examples: 
      | user  | pass      |
      | admin | admin@124 |

  @!f0^pu
  Scenario Outline: correct USERNAME required
    When user provides incorrect USERNAME "<user>"
    And user provides correct PASSWORD "<pass>"
    And user clicks on LOGIN button
    Then validate LOGIN fail

    Examples: 
      | user | pass      |
      | admi | Admin@123 |

  @f0!
  Scenario Outline: verify valid LOGIN
    When user provides correct USERNAME "<user>"
    And user provides correct PASSWORD "<pass>"
    And user clicks on LOGIN button
    Then user navigates to DASHBOARD_PAGE

    Examples: 
      | user  | pass      |
      | admin | Admin@123 |
