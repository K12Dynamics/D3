# Release History

## Upcoming 

<p class="upcoming"><span class="label"></span>STAAR Grades 3-8 Assessments</p>

<p class="upcoming"><span class="label"></span>Special Education Domain</p>

<p class="upcoming"><span class="label"></span>Color Themes</p>

<p class="upcoming"><span class="label"></span>Dynamic Explanations in Data Explorer</p>

<p class="upcoming"><span class="label"></span>Watchlist Management Redesign</p>

<p class="upcoming"><span class="label"></span>Ability to Update a Saved Exploration</p>

<p class="upcoming"><span class="label"></span>Add Select All Option to Data Explorer Filters</p>

<p class="upcoming"><span class="label"></span>Data Explorer Saving / Sharing Improvements</p>

## July 2016 Release

<p class="new featured"><span class="label"></span>Pie Chart Legends</p>

Pie chart legend details displayed in the sidebar now include values. 
Previously, this information was not available to users on mobile devices 
since the values were only shown in the tooltip of each pie slice.

![Legend Values](img/201607-legend-values.png)

<p class="new featured"><span class="label"></span>New TAPR HR charts</p>

Teacher Diversity and Teacher Years of Experience charts added to TAPR HR dashboard.

<p class="fixed"><span class="label"></span>Filters with no selections appear in the Explain area (#2285)</p>

## June 2016 Release

<p class="new featured"><span class="label"></span>TEA Chart Explanations</p>

Proper interpretation of state-published information is essential, but it can be 
difficult to correlate essential metrics to nomentaclature definitions published 
in documents such as the 36-page TAPR glossary of terms. We've made it easy for you by now include explanations for every chart based on state information.

![TAPR Explain](img/201607-tapr-explain.png)

<p class="new featured"><span class="label"></span>Collapse/Expand All Levels in Data Explorer</p>

It's not uncommon to explore several levels deep when using the data explorer. You've always been able to collapse and
expand individual levels, but now you can collapse all levels at once to see at a glance a breadcrumb trail of
your exploration. When collapsed, the option changes to expand all levels.

![Toggle Explorer Levels](img/201606-explorer-toggle-levels.png)

<p class="fixed"><span class="label"></span>In IE, the My Items folder is not positioned at the top of the list of library items (#2205)</p>
<p class="fixed"><span class="label"></span>In some cases, selecting `Reset all` does not reset all filters to their original state (#2122)</p>
<p class="fixed"><span class="label"></span>In charts and dashboards, child filters should be reset when parent filter is selected (#2121)</p>
<p class="fixed"><span class="label"></span>Bar selection in data explorer charts does not work in certain cases (#2137)</p>
<p class="fixed"><span class="label"></span>Do not all deletion of a user chart if it is referenced in a dashboard (#2074)</p>

## May 2016 Release

<p class="new featured"><span class="label"></span>TAPR Dashboards</p>

Published data from Texas Education Agency is now available within D3 to provide comparisons of academic performance against other districts.
Over 100 new charts have been added, organized by functional area into 8 distinct dashboards.

![TAPR Dashboards](img/201605-tapr-dashboards.png)

<p class="new featured"><span class="label"></span>Assigned Principal Perspectives</p>

We've added a new filter to applicable charts so you can now target time periods that one or more selected principals were responsible for their school(s).

![Assigned Principal](img/201605-assigned-principal.png)

<p class="new featured"><span class="label"></span>Automatically filter student results using classroom assignment for teacher role</p>

Teachers can now enjoy charts and dashboards tailored to show results from the students they teach.

<p class="fixed"><span class="label"></span>Grid columns are misaligned in data view for some charts (#2072)</p>
<p class="fixed"><span class="label"></span>Error when displaying diversity charts in dashboard (#2030)</p>
<p class="fixed"><span class="label"></span>Unable to explore scorecards that have multiple measures (#2028)</p>
<p class="fixed"><span class="label"></span>The home screen is shown after login expiration rather than the item specified in the URL (#2023)</p>
<p class="fixed"><span class="label"></span>Rename EOC Tracker to Student Tracker (#1986)</p>
<p class="fixed"><span class="label"></span>Wrap long filter selection names to multple lines for improved readability (#1982)</p>
<p class="fixed"><span class="label"></span>Vertical scrollbar appears in chart data view even if it's not needed (#1940)</p>
<p class="fixed"><span class="label"></span>Do not show empty folders in library. This is needed for the teacher role (#1963)</p>

## April 2016 Release

<p class="new featured"><span class="label"></span>User Impersonation</p>

![User Impersonation](img/201604-impersonation.png)

We're often asked by users what other information is D3 is shown for other users. D3 uses a combination of roles, 
associations, and attributes to manage the information displayed for each individual user, so knowing what another
user can see isn't always obvious. To resolve this, we've just added a really useful impersonation feature available to users
who are responsible for managing access to D3. 

```eval_rst
For more information, read our :ref:`User Impersonation <admin-impersonation>` topic.
```

<p class="new featured"><span class="label"></span>Enhancements to the Discipline Domain</p>

![Discipline Enhancements](img/201604-discipline.png)

We've made some enhancements to the data we collect about disciplinary information. We now capture the referring party for each 
discipline incident and also the administration assigned for managing each associated discipline action. Plus, we now capture the 
time of day that discipline incidents are reported so you can analyze what types of incidents are occurring at diffent times of the day.  

We have new charts to show this information, plus it's available in the data explorer so you can create your own charts too.

<p class="fixed"><span class="label"></span>Loss of data view in bottom exploration level (#1868)</p>
<p class="fixed"><span class="label"></span>Display a message indicating when there are no watch lists available (#1753)</p>
<p class="fixed"><span class="label"></span>Show busy indicator while generationg dashboard export to Excel or image (#973)</p>
<p class="fixed"><span class="label"></span>Infographic displays incorrectly when there is no All School Year column (#1816)</p>
<p class="fixed"><span class="label"></span>Error occurs when deleting chart from My Items (#1843)</p>

## March 2016 Release

<p class="new featured"><span class="label">Watch List Improvements</span></p>

![Watch List Improvements](img/201603-improve-watchlist.png)

You can now access a student's scorecard directly from a watch list.

The display of watch list results also received a facelist with a new grid display and the addition of pagination controls.

<p class="new featured"><span class="label"></span>Introduce Feature Toggle</p>

We've introduced an internal feature toggle capability to allow us to turn on features currently under development for
review by certain districts or users. This helps us gather feedback from real world users during development.

<p class="fixed"><span class="label"></span>Include course section and teacher categores in popular results (#1850)</p>
<p class="fixed"><span class="label"></span>No data is displayed for second value in explorer (#1842)</p>
<p class="fixed"><span class="label"></span>Remove All School Years column from the Enrollment score cards (#1802)</p>
<p class="fixed"><span class="label"></span>Top n filter not applied to chart created from Explorer (#1801)</p>

## February 2016 Release

<p class="new featured"><span class="label"></span>Quick Search</p>

![Quick Search](img/201602-quick-search.png)

We've introduced a new universal search capability so you can quickly locate any item by typing a few letters of its name. 
As a bonus, the search screen also displays your more recently accessed items as well the most popular items accessed by users in your organization. 

<p class="fixed"><span class="label"></span>Show additional columns does not work for Top N levels (#1741)</p>
<p class="fixed"><span class="label"></span>Items removed from Watch List still marked as added in search view (#1773)</p>
<p class="fixed"><span class="label"></span>Should be able to add user created charts to new dashboard (#1764)</p>
<p class="fixed"><span class="label"></span>Layout issue in student enrollment grid (#1737)</p>
<p class="fixed"><span class="label"></span>Cannot navigate backwards from quick search (#1677)</p>

## Older Releases

**Highlights from our earlier releases include:**

TODO