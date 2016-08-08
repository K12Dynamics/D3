# Release History

## Upcoming 

New features we're working on for upcoming releases include:

<p class="upcoming"><span class="label"></span>Color Themes</p>

<p class="upcoming"><span class="label"></span>Watchlist Management Redesign</p>

<p class="upcoming"><span class="label"></span>Toggle Measure Visibility in Charts</p>

<p class="upcoming"><span class="label"></span>Ability to Specify Ranges when Filtering Date Category Items</p>

<p class="upcoming"><span class="label"></span>Ability to Specify Ranges when Filtering Date Category Items</p>

<p class="upcoming"><span class="label"></span>Improvements to Search Capabilities</p>

## July 2016 Release

<p class="new featured"><span class="label"></span>Sort Options Now Available for Library Charts</p>

The Data Explorer has has a `Sort by` action available in the sidebar for some time, but until now this capability has been missing for existing charts in the library. Now you can organize items in a chart explicitly by the value (descending) or their category name (alphabetically).  

![Sorting Options for Charts](img/201607-chart-sort-by.png)

<p class="new featured"><span class="label"></span>Special Education Domain</p>

We've introduced support for data requirements specific to students enrolled in special education programs.
In addition to identifying students enrolled in special education, D3 can now track
the primary, secondary and tertiary (if applicable) disability of special education 
students, the special education services provided to each student, and each student's instructional setting. We've also enhanced the disciplinary reporting to include charts that compare disciplinary activities between special education students and all students.

<p class="new featured"><span class="label"></span>Data Explorer Saving / Sharing Improvements</p>

The ability to save an exploration and share it with others has been redesigned. Previously, the
behavior was confusing, especially when a shared exploration was further modified. We determined that the root of the confusion was due to our saving of changes to an exploration, which was automatic for the owner but not persisted at all when modified by another user. 

To resolve this, the functionality of the `Save as...` action in the Explorer sidebar has been improved. A modified exploration is only updated by selecting this action.  A copy of an exploration can be created by using this action and providing a different exploration name.

This new behavior works equally well when a second user opens an exploration saved by the first user. In this case, the `Save as...` action will create a local copy of the exploration belonging to the second user.

Along with this enhancement, the screen title will now display the name of a saved exploration, or `<New Exploration>`. In addition, <Unsaved Changes> is displayed to alert you that you have made modifications to the exploration. In the case, or a second user opening a shared exploration, `<Not Saved>` will be displayed.   

<p class="new featured"><span class="label"></span>Dynamic Explanations in Data Explorer</p>

The Explain sidebar action available in dashboards and charts is now also available in data explorer. Just select an explorer 
level and click Explain to view a dynamic description of the selected chart configuration as well as a statistical analysis 
of the explorer measure values.

![Explain Feature in Explorer](img/201607-explorer-explain.png)

<p class="new featured"><span class="label"></span>Pie Chart Legends</p>

Pie chart legend details displayed in the sidebar now include values. 
Previously, this information was not available to users on mobile devices 
since the values were only shown in the tooltip of each pie slice.

![Legend Values](img/201607-legend-values.png)

<p class="new featured"><span class="label"></span>STAAR Grades 3-8 Assessments</p>

We've just added support for STAAR Grade 3-8 files, so now your scorecards and dashboard will display both 3-8 and EOC results.

<p class="new featured"><span class="label"></span>New TAPR HR charts</p>

Teacher Diversity and Teacher Years of Experience charts added to TAPR HR dashboard.

<p class="new featured"><span class="label"></span>Add Select All Option to Data Explorer Filters</p>

The ability to select all filter items now available in Explorer. This is particularly useful for selecting all except for a few items. First click the `Select All` checkbox, then un-check items you want to exclude.

![Select All Added to Explorer Filter](img/201607-explorer-filter-select-all.png)

<p class="new featured"><span class="label"></span>Favorites are now sorted alphabetically</p>

Previously, the favorite items were listed in the order they were added as favorites.

<p class="fixed"><span class="label"></span>Filters with no selections appear in the Explain area (#2285)</p>

## June 2016 Release

<p class="new featured"><span class="label"></span>TEA Chart Explanations</p>

Proper interpretation of state-published information is essential, but it can be 
difficult to correlate essential metrics to nomenclature definitions published 
in documents such as the 36-page TAPR glossary of terms. We've made it easy for you by now include explanations for every chart based on state information.

![TAPR Explain](img/201607-tapr-explain.png)

<p class="new featured"><span class="label"></span>Collapse/Expand All Levels in Data Explorer</p>

It's not uncommon to explore several levels deep when using the data explorer. You've always been able to collapse and expand individual levels, but now you can collapse all levels at once to see at a glance a breadcrumb trail of your exploration. When collapsed, the option changes to expand all levels.

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

<p class="new featured"><span class="label"></span>Watch List Improvements</p>

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