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

- [Manager API](#manager-api)

  - [Get All Manager API](#get-all-manager-api)
  - [Get One Manager API](#get-one-manager-api)
  - [Create Manager API](#create-manager-api)
  - [Update Manager API](#update-manager-api)
  - [Delete Manager API](#delete-manager-api)

- [ProjectEmployee API](#projectemployee-api)

  - [Get All ProjectEmployee API](#get-all-projectemployee-api)
  - [Get One ProjectEmployee API](#get-one-projectemployee-api)
  - [Create ProjectEmployee API](#create-projectemployee-api)
  - [Update ProjectEmployee API](#update-projectemployee-api)
  - [Delete ProjectEmployee API](#delete-projectemployee-api)

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

**Note**: Deleting Employees deletes corresponding record in ProjectEmployee Table and Manager Table.

**Method**: `Delete`

**URL**: `/employees/:employeeId`

**Response JSON**: `Generic Response`

# Project APIs

### Get All Project API

**Description**: This API fetches all the projects`.

**Method**: `GET`

**URL**: `/projects`

**Headers**: None

**Response JSON**:

    {
        "success": true,
        "data": [
            {
                "ProjectId": 3,
                "ProjectName": "Project-three",
                "Description": "something something",
                "ProjectManager": 1
            },
            {
                "ProjectId": 4,
                "ProjectName": "Project-four",
                "Description": "something something",
                "ProjectManager": 2
            },
            {
                "ProjectId": 5,
                "ProjectName": "Project-five",
                "Description": "something something",
                "ProjectManager": 1
            },
            {
                "ProjectId": 6,
                "ProjectName": "Project-six",
                "Description": "something something",
                "ProjectManager": 2
            }
        ]
    }

### Get One Project API

**Description**: This API fetches one of the projects along with details of the project Manager and the employees of Project.

**Method**: `GET`

**URL**: `/projects/:projectId`

**Response JSON**:

    {
        "success": true,
        "data": {
            "ProjectId": 4,
            "ProjectName": "Project-four",
            "Description": "something something",
            "ProjectManager": {
                "ManagerId": 2,
                "EmployeeId": 6,
                "FirstName": "Praveen",
                "LastName": "Dahiya",
                "PhoneNumber": 9908761895,
                "Email": "playstore@gmail.com"
            },
            "Employees": [
                {
                    "EmployeeId": 2,
                    "FirstName": "Pulankit",
                    "LastName": "pulk",
                    "PhoneNumber": 9760252857,
                    "Email": "pulankit@gmail.com",
                    "Designation": "Developer"
                },
                {
                    "EmployeeId": 4,
                    "FirstName": "Prakash",
                    "LastName": "Singh",
                    "PhoneNumber": 9918767895,
                    "Email": "prakash@gmail.com",
                    "Designation": "BD"
                }
            ]
        }
    }

### Create Project API

**Description**: This API is used to create a project.

**Method**: `POST`

**URL**: `/projects/`

**Headers**: None

**Fields**: "*ProjectName", "*Description", "ProjectManager" ( Default : Null Id, integer)

**Input JSON**:

    {
        "ProjectName": "Vikash",
        "Description": "Dahiya",
    }

**Output JSON**:

    {
        "success": true,
        "data": {
            projectId
        }

}

### Update Project API

**Description**: This API is used to update the project Details.

**Method**: `PUT`

**URL**: `/projects/:projectId`

**Headers**: None

**Fields**: "ProjectName", "Description", "ProjectManager"

**Input JSON**:

    {
        "ProjectName": "Vikash",
        "Description": "Dahiya",
        "ProjectManager": 1
    }

**Output JSON**:

    {
        "success": true,
        "data": {
        }

}

### Delete Project API

**Description**: This API is used to delete a project.

**Method**: `Delete`

**Note**: Deleting Project deletes corresponding record in ProjectEmployee Table.

**URL**: `/project/:projectId`

**Response JSON**: `Generic Response`

# Manager APIs

### Get All Manager API

**Description**: This API fetches all the manager.

**Method**: `GET`

**URL**: `/managers`

**Headers**: None

**Response JSON**:

    {
        "success": true,
        "data": [
            {
                "ManagerId": 1,
                "EmployeeId": 2,
                "Specialization": "Ecommerce"
            },
            {
                "ManagerId": 2,
                "EmployeeId": 6,
                "Specialization": "Food Industry"
            }
        ]
    }

### Get One Manager API

**Description**: This API fetches one of the manager along with details of his Projects and sub employees.

**Method**: `GET`

**URL**: `/managers/:managerId`

**Response JSON**:

    {
        "success": true,
        "data": {
            "ManagerId": 1,
            "EmployeeId": 2,
            "FirstName": "Pulankit",
            "LastName": "Panjwani",
            "PhoneNumber": 9760252857,
            "Email": "pulankit@gmail.com",
            "Projects": [
                {
                    "ProjectName": "Project-one",
                    "Description": "something something",
                    "ProjectId": 1,
                    "Employees": [
                        {
                            "EmployeeId": 1,
                            "FirstName": "Vikash",
                            "LastName": "Dahiya",
                            "PhoneNumber": 9908767895,
                            "Email": "vikash@gmail.com",
                            "Designation": "SDE"
                        },
                        {
                            "EmployeeId": 3,
                            "FirstName": "Anurag",
                            "LastName": "Dahiya",
                            "PhoneNumber": 9991212123,
                            "Email": "anurag@gmail.com",
                            "Designation": "SDE"
                        },
                        {
                            "EmployeeId": 6,
                            "FirstName": "Praveen",
                            "LastName": "Dahiya",
                            "PhoneNumber": 9908761895,
                            "Email": "playstore@gmail.com",
                            "Designation": "SDE"
                        }
                    ]
                },
                {
                    "ProjectName": "Project-three",
                    "Description": "something something",
                    "ProjectId": 3,
                    "Employees": [
                        {
                            "EmployeeId": 4,
                            "FirstName": "Prakash",
                            "LastName": "Singh",
                            "PhoneNumber": 9918767895,
                            "Email": "prakash@gmail.com",
                            "Designation": "BD"
                        }
                    ]
                },
                {
                    "ProjectName": "Project-five",
                    "Description": "something something",
                    "ProjectId": 5,
                    "Employees": [
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
            ]
        }
    }

### Create Manager API

**Description**: This API is used to create a manager.

**Method**: `POST`

**URL**: `/managers/`

**Headers**: None

**Fields**: EmployeeId,Specialisation

**Input JSON**:

    {
        "EmployeeId": 3,
        "Specialization":"abac"
    }

**Output JSON**:

    {
        "success": true,
        "data": {

        }

}

### Update Manager API

**Description**: This API is used to update the manager Details.

**Method**: `PUT`

**URL**: `/manager/:managerId`

**Headers**: None

**Fields**: EmployeeId,Specialisation

**Input JSON**:

    {
        EmployeeId: 1,
        Specialisation: "something"
    }

**Output JSON**:

    {
        "success": true,
        "data": {
        }

}

### Delete Manager API

**Description**: This API is used to delete a Manager.

**Note**: Deleting Manager updates sets ProjectManager in Project Table as null, for related records

**Method**: `Delete`

**URL**: `/managers/:managerId`

**Response JSON**: `Generic Response`

# ProjectEmployee APIs

### Get All ProjectEmployee API

**Description**: This API fetches all the projects and the employee Records`.

**Method**: `GET`

**URL**: `/projects`

**Headers**: None

**Response JSON**:

    {
        "success": true,
        "data": [
            {
                "EmployeeId": 1,
                "ProjectId": 1
            },
            {
                "EmployeeId": 3,
                "ProjectId": 1
            },
            {
                "EmployeeId": 6,
                "ProjectId": 1
            },
            {
                "EmployeeId": 3,
                "ProjectId": 2
            },
            {
                "EmployeeId": 5,
                "ProjectId": 2
            },
            {
                "EmployeeId": 4,
                "ProjectId": 3
            },
            {
                "EmployeeId": 2,
                "ProjectId": 4
            },
            {
                "EmployeeId": 4,
                "ProjectId": 4
            },
            {
                "EmployeeId": 1,
                "ProjectId": 5
            }
        ]
    }

### Get One ProjectEmployee API

**Description**: This API fetches all the employee of the given projects.

**Method**: `GET`

**URL**: `/project-employee/:projectId`

**Response JSON**:

    {
        "success": true,
        "data": [
            {
                "EmployeeId": 1,
                "FirstName": "Vikash",
                "LastName": "Dahiya",
                "PhoneNumber": 9908767895,
                "Email": "vikash@gmail.com",
                "Designation": "SDE"
            },
            {
                "EmployeeId": 3,
                "FirstName": "Anurag",
                "LastName": "Dahiya",
                "PhoneNumber": 9991212123,
                "Email": "anurag@gmail.com",
                "Designation": "SDE"
            },
            {
                "EmployeeId": 6,
                "FirstName": "Praveen",
                "LastName": "Dahiya",
                "PhoneNumber": 9908761895,
                "Email": "playstore@gmail.com",
                "Designation": "SDE"
            }
        ]
    }

### Create Project API

**Description**: This API is used to add an employee to the Project.

**Note**: A Manager of the project cannot be added as an employee.

**Method**: `POST`

**URL**: `/project-employee/`

**Headers**: None

**Fields**: "EmployeeId", "ProjectId"

**Input JSON**:

    {
        "EmployeeId": 1,
        "ProjectId": 1
    }

**Output JSON**:

    {
        "success": true,
        "data": {
        }

}

### Update ProjectEmployee API

**Description**: This API is not needed.

### Delete Project API

**Description**: This API is used to remove an employee from project.

**Method**: `Delete`

**URL**: `/project-employee/:projectId`

**Input JSON**

    {
        "EmployeeId": 1
    }

**Response JSON**: `Generic Response`
