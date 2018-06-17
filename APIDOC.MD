# API Documentation

This document will explain the various APIs, their input parameters and responses.

Also, this document contains the type and data related to various notifications.

Generic response in case of some error is going to be:

    {
        "success": false,
        "message": "Error Message"
    }

# Table of Contents

- [Employee API](#employee-api)

  - [Get All Employee API](#get-all-employee-api)
  - [Get One Employee API](#get-one-employee-api)
  - [Create Employee API](#create-employee-api)
  - [Update Employee API](#update-employee-api)
  - [Delete Employee API](#delete-employee-api)

- [Project API](#employee-api)

  - [Get All Project API](#get-all-project-api)
  - [Get One Project API](#get-one-project-api)
  - [Create Project API](#create-project-api)
  - [Update Project API](#update-project-api)
  - [Delete Project API](#delete-project-api)

# Employee APIs

### Get All Employee API

**Description**: This API fetches all the employee.

**Method**: `GET`

**URL**: `/employees`

**Headers**: None

**Response JSON**:

    {
        "success": true,
        "data":
        [
            {
                "EmployeeId": 1,
                "FirstName": "Vikash",
                "LastName": "Dahiya",
                "PhoneNumber": 9908767895,
                "Email": "vikash@gmail.com",
                "Designation": "SDE"
            }
        ]
    }

### Get One Employee API

**Description**: This API fetches one of the employee along with details of his Projects.

**Method**: `GET`

**URL**: `/employees/:employeeId`

**Response JSON**:

    {
        "success": true,
        "data": {
            "EmployeeId": 1,
            "FirstName": "Vikash",
            "LastName": "Dahiya",
            "PhoneNumber": 9908767895,
            "Email": "vikash@gmail.com",
            "Designation": "SDE",
            "Projects": [
                {
                    "ProjectId": 3,
                    "ProjectName": "Project-three",
                    "Description": "something something",
                    "ProjectManager": 1
                },
                {
                    "ProjectId": 5,
                    "ProjectName": "Project-five",
                    "Description": "something something",
                    "ProjectManager": 1
                }
            ]
        }
    }

### Create Employee API

**Description**: This API is used to create an employee.

**Method**: `POST`

**URL**: `/employees/`

**Headers**: None

**Input JSON**:

    {
        "FirstName": "Vikash",
        "LastName": "Dahiya",
        "PhoneNumber": 9908767895,
        "Email": "vikash@gmail.com",
        "Designation": "SDE",
    }

**Output JSON**:

    {
        "success": true,
        "data": {
        }

}

### Update Employee API

**Description**: This API is used to update the employee Details.

**Method**: `PUT`

**URL**: `/employees/:employeeId`

**Headers**: None

**Input JSON**:

    {
        "FirstName": "Vikash",
        "LastName": "Dahiya",
        "PhoneNumber": 9908767895,
        "Email": "vikash@gmail.com",
        "Designation": "SDE",
    }

**Output JSON**:

    {
        "success": true,
        "data": {
        }

}

### Delete Employee API

**Description**: This API is used to delete an employee.

**Method**: `Delete`

**URL**: `/employees/:employeeId`

**Response JSON**: `Generic Response`

# Project APIs

### Get All API

**Description**: This API fetches all the employee.

**Method**: `GET`

**URL**: `/projects`

**Headers**: None

**Response JSON**:

    {
        "success": true,
        "data":
        [
            {
                "EmployeeId": 1,
                "FirstName": "Vikash",
                "LastName": "Dahiya",
                "PhoneNumber": 9908767895,
                "Email": "vikash@gmail.com",
                "Designation": "SDE"
            }
        ]
    }

### Get One API

**Description**: This API fetches one of the employee along with details of his Projects.

**Method**: `GET`

**URL**: `/employees/:employeeId`

**Response JSON**:

    {
        "success": true,
        "data": {
            "EmployeeId": 1,
            "FirstName": "Vikash",
            "LastName": "Dahiya",
            "PhoneNumber": 9908767895,
            "Email": "vikash@gmail.com",
            "Designation": "SDE",
            "Projects": [
                {
                    "ProjectId": 3,
                    "ProjectName": "Project-three",
                    "Description": "something something",
                    "ProjectManager": 1
                },
                {
                    "ProjectId": 5,
                    "ProjectName": "Project-five",
                    "Description": "something something",
                    "ProjectManager": 1
                }
            ]
        }
    }

### Create API

**Description**: This API is used to create an employee.

**Method**: `POST`

**URL**: `/employees/`

**Headers**: None

**Input JSON**:

    {
        "FirstName": "Vikash",
        "LastName": "Dahiya",
        "PhoneNumber": 9908767895,
        "Email": "vikash@gmail.com",
        "Designation": "SDE",
    }

**Output JSON**:

    {
        "success": true,
        "data": {
        }

}

### Update API

**Description**: This API is used to update the employee Details.

**Method**: `PUT`

**URL**: `/employees/:employeeId`

**Headers**: None

**Input JSON**:

    {
        "FirstName": "Vikash",
        "LastName": "Dahiya",
        "PhoneNumber": 9908767895,
        "Email": "vikash@gmail.com",
        "Designation": "SDE",
    }

**Output JSON**:

    {
        "success": true,
        "data": {
        }

}

### Delete API

**Description**: This API is used to delete an employee.

**Method**: `Delete`

**URL**: `/employees/:employeeId`

**Response JSON**: `Generic Response`
