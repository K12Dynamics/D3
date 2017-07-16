# Managing User Access

```eval_rst
.. _admin-credentials:
```

## How Are Credentials Recognized?

The district provides a user file that is imported into D3 on a recurring basis. This file contains all users who should have access to D3. It includes the username, first and lst name, and email address. Also in the file, each user is associated with a D3 role, and when applicable, to a school.

There are two ways in which a user may login to D3. A district may elect to use one or both methods.

* **Single Sign-On**: Users can access D3 from their Intranet website by clicking on a pre-configured link. With this method, the D3 login screen is bypassed because a secure exchange of information occurs between the two sites to authenticate the user. To use single-sign-on requires some implementation work on the customer's Intranet website, which is explained in our D3 Integration Guide. You may request this document from your D3 account manager.


* **Login Screen**: Users can access D3 directly, in which case they are prompted to enter a username and password. The first time a user accesses D3, they must enter their username provided by the district, and then enter a password to use with their account. For security purposes, the user is then sent an activation email to the email address provided by the district, which must be acknowledged before the user is granted the ability to login to D3. Note: there is an alternate method of activation in case where a password is explicitly issued by the D3 support team. In this case, the user can login immediately; however, if not email address is recorded in their profile, they will be required to enter it before accessing D3.

## Available Roles

D3 includes a number of pre-defined roles aligned to business responsibilities of various staff in a school district. Each user in D3 is associated to exactly one of these roles. The given role determines what features and information is available to the user through D3.

### Core Roles

Core roles are automatically setup for each D3 implementation. They are the most used roles within a district.

<div class="wy-table-responsive">
<table class="docutils">
    <thead>
        <tr>
            <th>Role Name / <i>Code</i></th>
            <th>Scope</th>
            <th>Access<br>Scorecards</th>
            <th>Access<br>Watch Lists</th>
            <th>Functional Areas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>District Administrator<br><i>districtadmin</i></td>
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
        </tr>
        <tr>
            <td>Cabinet<br><i>cabinet</i></td>
            <td>District</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
                HR<br>
                Finance<br>
                TAPR<br>
            </td>
        </tr>
        <tr>
            <td>Board<br><i>board</i></td>
            <td>District</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
                HR<br>
                Finance<br>
            </td>
        </tr>
        <tr>
            <td>District Manager<br><i>districtmgr</i></td>
            <td>District</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
                Finance<br>
                TAPR<br>
            </td>
        </tr>
        <tr>
            <td>District HR<br><i>hrcabinet</i></td>
            <td>District</td>
            <td>Yes</td>
            <td>No</td>
            <td>
                HR<br>
            </td>
        </tr>
        <tr>
            <td>Principal<br><i>principal</i></td>
            <td>Campus</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
                Finance<br>
                HR<br>
            </td>
        </tr>
        <tr>
            <td>Teacher<br><i>teacher</i></td>
            <td>Classroom</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
            </td>
        </tr>
        <tr>
            <td>Team Leader<br><i>teamleader</i></td>
            <td>Grade Level</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
            </td>
        </tr>
        <!--
        <tr>
            <td>Campus Director<br><i>(coming soon)</i></td>
            <td>Campus + Grade Level(s)</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
                HR<br>
            </td>
        </tr>
        <tr>
            <td>Team Leader<br><i>(coming soon)</i></td>
            <td>Campus + Grade Level</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
            </td>
        </tr>
        -->
    </tbody>
</table>
</div>

### District Administrator Capabilities

The District Administrator role exclusively has access to perform the following administrative tasks:

```eval_rst
* Impersonate another user
* :ref:`Publish watch lists <features-watchlists-publish>`
```

### Additional Roles

Additional roles are setup as needed to support customized access requirements. 

<div class="wy-table-responsive">
<table class="docutils">
    <thead>
        <tr>
            <th>Role Name / <i>Code</i></th>
            <th>Scope</th>
            <th>Access<br>Scorecards</th>
            <th>Access<br>Watch Lists</th>
            <th>Functional Areas</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>District Academics<br><i>dacademics</i></td>
            <td>District</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
                TAPR<br>
            </td>
        </tr>
        <tr>
            <td>Curriculum and Instruction<br><i>candi</i></td>
            <td>District</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
            </td>
        </tr>
        <tr>
            <td>Education Director<br><i>education</i></td>
            <td>District</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
            </td>
        </tr>
        <tr>
            <td>Truancy Office<br><i>truancy</i></td>
            <td>District</td>
            <td>No</td>
            <td>Yes</td>
            <td>&lt;None&gt;</td>
        </tr>
        <tr>
            <td>Attendance Office<br><i>attendance</i></td>
            <td>District</td>
            <td>No</td>
            <td>Yes</td>
            <td>&lt;None&gt;</td>
        </tr>
        <tr>
            <td>Campus Academics<br><i>cacademics</i></td>
            <td>Campus</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
                Discipline<br>
            </td>
        </tr>
        <tr>
            <td>Campus Department Head<br><i>campusdepthead</i></td>
            <td>Campus</td>
            <td>Yes</td>
            <td>Yes</td>
            <td>
                Attendance/Enrollment<br>
                Performance<br>
            </td>
        </tr>
        <tr>
            <td>Campus HR<br><i>hrprincipal</i></td>
            <td>Campus</td>
            <td>Yes</td>
            <td>No</td>
            <td>
                HR<br>
            </td>
        </tr>
    </tbody>
</table>
</div>

### Scope Configuration

D3 automatically identifies the subset of students available to the user as follows:

<div class="wy-table-responsive">
<table class="docutils">
    <thead>
        <tr>
            <th>Scope</th>
            <th>Student Subset Available</th>
        <tr>
    </thead>
    <tbody>
        <tr>
            <td>District</td>
            <td>All students</td>
        </tr>
        <tr>
            <td>Campus</td>
            <td>Students enrolled at the campus identified by the SchoolCode value in the User file.</td>
        </tr>
        <tr>
            <td>Classroom</td>
            <td>Students in classes taught by the teacher.</td>
        </tr>
        <tr>
            <td>Grade Level</td>
            <td>Students enrolled at the campus identified by the SchoolCode value in the User file and enrolled in the grade level identified by the GradeLevelCode value in the User file.</td>
        </tr>
    </tbody>
</table>

The Campus and Grade Level roles use information in the imported User file to identify the specific scope of the user. If more complex scope configurations are required, this information can be provided in the UserAccess file instead.