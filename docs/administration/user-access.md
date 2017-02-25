# Managing User Access

```eval_rst
.. _admin-credentials:
```

## How Are Credentials Recognized?

The district provides a user file that is imported into D3 on a recurring basis. This file contains all users who should have access to D3. It includes the username, first and lst name, and email address. Also in the file, each user is associated with a D3 role, and when applicable, to a school.

There are two ways in which a user may login to D3. A district may elect to use one or both methods.

* **Single Sign-On**: Users can access D3 from their Intranet website by clicking on a pre-configured link. With this method, the D3 login screen is bypassed because a secure exchange of information occurs between the two sites to authenticate the user. To use single-sign-on requires some implementation work on the customer's Intranet website, which is explained in our D3 Integration Guide. You may request this document from your D3 account manager.


* **Login Screen**: Users can access D3 directly, in which case they are prompted to enter a username and password. The first time a user accesses D3, they must enter their username provided by the district, and then enter a password to use with their account. For security purposes, the user is then sent an activation email to the email address provided by the district, which must be acknowledged before the user is granted the ability to login to D3.

## Available Roles

D3 includes a number of pre-defined roles aligned to business responsibilities of various staff in a school district. Each user in D3 is associated to exactly one of these roles. The given role determines what features and information is available to the user through D3.

### Core Roles

Core roles are automatically setup for each D3 implementation. They are the most used roles within a district.

<div class="wy-table-responsive">
<table class="docutils">
    <thead>
        <tr>
            <th>Role Name</th>
            <th>Scope</th>
            <th>Access<br>Scorecards</th>
            <th>Access<br>Watch Lists</th>
            <th>Functional Areas</th>
            <th>Administration</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Board</td>
            <td>District</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
                Finance<br>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>Cabinet</td>
            <td>District</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
                Human Resources<br>
                Finance<br>
                TAPR<br>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>District Administrator</td>
            <td>Campus</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
                Human Resources<br>
                Finance<br>
                TAPR<br>
            </td>
            <td>
                Impersonate<br>
                Publish Watch Lists<br>
            </td>
        </tr>
        <tr>
            <td>District Manager</td>
            <td>Campus</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
                Finance<br>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>Principal</td>
            <td>Campus</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
                HR<br>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>Teacher</td>
            <td>Classroom</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>Team Leader</td>
            <td>Campus + Grade Level</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
            </td>
            <td>
            </td>
        </tr>
    </tbody>
</table>
</div>

### Additional Roles

Additional roles are setup as needed to support customized access requirements. 

<div class="wy-table-responsive">
<table class="docutils">
    <thead>
        <tr>
            <th>Role Name</th>
            <th>Scope</th>
            <th>Access<br>Scorecards</th>
            <th>Access<br>Watch Lists</th>
            <th>Functional Areas</th>
            <th>Administration</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>Attendance Office</td>
            <td>District</td>
            <td>No</td>
            <td>Yes</td>
            <td>&lt;None&gt;</td>
            <td></td>
        </tr>
        <tr>
            <td>Campus Academics</td>
            <td>Campus</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>Campus Department Head</td>
            <td>Campus</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>Curriculum and Instruction</td>
            <td>District</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>District Academics</td>
            <td>Campus</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
                TAPR<br>
            </td>
            <td></td>
        </tr>
        <tr>
            <td>Education Director</td>
            <td>District</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>HR Cabinet</td>
            <td>District</td>
            <td>Yes</td>
            <td>No</td>
            <td>
                Performance<br>
                HR<br>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>HR Principal</td>
            <td>Campus</td>
            <td>Yes</td>
            <td>No</td>
            <td>
                Performance<br>
                HR<br>
            </td>
            <td>
            </td>
        </tr>
        <tr>
            <td>Truancy Office</td>
            <td>District</td>
            <td>No</td>
            <td>Yes</td>
            <td>&lt;None&gt;</td>
            <td>
            </td>
        </tr>
    </tbody>
</table>
</div>