Feature: Orange Function

    Feature Description

    Scenario: Validate Login with Valid Credentials
        Given User is on Login Page
        When User Navigate to Login Page
        Then Message display Login Successfully

    Scenario: Create Leave
        Given Click Menu Leave
        # When Click menu apply
        # When Input Data
        # Then Submit

    Scenario: Cancel leave

    Scenario: Update Personal Info
        Given Click menu My Info
        When Click name
        Then Save

    Scenario: Update Contact Detail
        Given click Contact
        When add street
        When add city
        When add state
        When add zip
        # When add country
        When add home number
        Then save

    # Scenario: Job
    #     Given Click Job
        

    Scenario: Logout
        When User click profile
        Then Logout

