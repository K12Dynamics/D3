.. _features-charts-and-dashboards:

# Charts and Dashboards
## Dashboards

### Working with D3 Dashboards 

A dashboards is a collection of charts. Functional area dashboards contain charts related to the specific function. The only exception to this is the At a Glance dashboard in Favorites; this dashboard is specific to each user and may contain charts from various functional areas, based on user’s preferences.
***

#### Dashboard Selection
Dashboards are identifiable by the 3x3 matrix icon above. To navigate to a dashboard, click on Favorites or Chart Library. When navigating to a dashboard in the Chart Library, the user first selects the functional area and then selects a specific folder, if multiple folders exist. Click the desired dashboard to select it and view it.

##### Switching between Dashboard and Chart Selection
Once a dashboard is selected, it becomes the scope of actions in the Action menu (see below). When a chart within the dashboard is clicked, it becomes the selected chart and scope of actions in the Action menu is switched from the dashboard as a whole to the selected chart - this is indicated by the red boundary drawn around the selected chart. To undo selection of a chart and return scope back to all charts in the dashboard, click the selected chart again.
***

#### Dashboard Layout
Dashboards present multiple charts in a grid of columns and rows. Generally, a chart occupies a single cell (intersection of column and row); however, some charts use 2 columns on a single row – this is done selectively to enhance visualization of data presented in certain charts. Note the top right and bottom left charts in the figure below to see multi-cell charts.
Dashboard layout is completely dynamic: as more charts are added to (or removed from) a dashboard, the layout is expanded or collapsed, depending on the number of charts. 

![dashboardlayout](img/dashboardlayout.png)

##### Handheld Devices
On hand-held devices, charts are displayed in a single column. Each chart occupies the device’s screen entirely. Scroll down or up to view additional charts.

![smartphone view](img/smart_phone_view.png)
***

#### Customizing Dashboard Layout
Dashboard layout is also configurable by the user: users can modify the layout of dashboard by moving charts around in the grid  and defining single or multi-cell housing for each chart.
***

### Dashboard Actions
Users can perform various actions on dashboards. These actions are available from the Actions Menu which can be activated by clicking the double left arrow icon, located at the top right of the D3 screen. Actions applicable to the dashboard as a whole are enabled as shown below; disabled actions are reserved for selected charts only (to learn more about these, see Working with D3 Charts section).

![dashboardactions](img/dashboardactions.png)



```eval_rst
.. tip ::

    **Hiding Actions Menu:** When the Action Menu is opened, the icon is switched to a double right arrow icon; to close the Action menu, click the double right arrow icon

```

##### Send to
The Send to action allows the user to share, save, print or export the dashboard.

![sendto](img/sendto.png)

##### Printer
The Send to Printer action allows the user to print the dashboard. The user is presented with the Print dialogue box to select the printer. 

##### Email
The Send to Email  action allows the user to eMail the dashboard. This invokes a dialogue box that asks the user to enter one or more eMail addresses, a subject line, and a message. Upon clicking Submit, the eMail is sent with the dashboard as a jpg attachment.

##### Save as image
The Sent to Save as image action allows the user to save the dashboard as a jpg image to any drive attached to the user’s local device. The image can later be inserted in documents as needed for internal or external district/campus communications.

##### Save as PDF
The Send to Save as PDF action allows the user to save the dashboard as a PDF document. The user is presented with the Save as dialogue box where the user can select the name of the desired PDF file as well as the drive and folder where to save the PDF file.

##### Export to Excel
The Send to Export to Excel action allows the user to export the data for each chart displayed in the dashboard. The data for each chart is saved as a separate tab within the same Excel file; each tab is labeled with the corresponding chart name. 
When the user selects Export to Excel, an Excel file is created with a generic name and is downloaded to the local device’s Downloads folder. You can navigate to the file and open it or use browser to view it.

![export_to_excel](img/export_to_excel.png)

##### Modify

#### Filters
D3 dashboards present information at the highest aggregation level possible for the role of the logged in user. Filters allow users to narrow the scope of the data presented in a specific dashboard by excluding certain subsets of information.

#### Functional Area Filters
Each functional area has a specific set of filters applicable to the corresponding function


![functional_areas](img/functional_areas.PNG)

#### Selecting a Filter
Data presented in all charts of the currently selected dashboard can be filtered to exclude certain dimensions or categories of data.


![apply_filters](img/apply_filters.PNG)


#### Academics Dashboard Filter Example
For district staff roles, Academics function area dashboards initially present data for the district as a whole; for campus administrator users, dashboards initially present data for their campus. In either case, the data is aggregated for all grade levels, all sub populations, and for all ethnic and gender groups. 
Users can filter out one or more campus type, campus, grade level, race/ethnicity, gender, and/or sub population. For example, when viewing a dashboard aggregated for the whole school district, users may want to narrow the scope of all charts in the dashboard to one or more campus type. 

![Campus_filters](img/Campus_filters.PNG)

#### Selecting / Deselecting All Filters
Filter values default to all being unchecked. When all filter values are unchecked, D3 assumes all data should be included (which is equivalent to checking all filter values).  This is equivalent to all values being checked or the “All” option being selected.

![clear_filters](img/clear_filters.PNG)

#### Using Filter Combinations
Multiple Filters can be used at once to narrow the scope of dashboard charts. For example, you can select Elementary for Campus Types, Hispanic and White for Race/Ethnicities, and Gifted and Talented for Program Types. This will redraw all charts in the dashboard and include only students that are White or Hispanic, Gifted and Talented, and enrolled at elementary campuses.

#### Other Dashboard Actions
D3 provides various actions applicable to the dashboard as a whole vs. those for all charts within a dashboard.

##### Add to Favorites
Dashboards are located within folders and subfolders of functional areas. To have quick and easy access to one or more dashboards, users may add dashboards to their Favorites area. 

![Add_fav_to_dashboard](img/Add_fav_to_dashboard.PNG)

##### Remove from Favorites 
Users can remove dashboard(s) added to the Favorites area. To do this, select the desired Favorites dashboard, click the Action menu, and then click Remove from favorites

##### Set as Home Screen 
When the user first logs in, the default dashboard appears. This is the user’s home screen. D3 allows each user to change the home screen by setting it to a different dashboard.

![dashboard_home_screen](img/dashboard_home_screen.PNG)

## Charts

### Working with D3 Charts
D3 charts are located within dashboards or as individual items within subfolders and folders of functional areas. Charts can be selected for analysis and other actions depending on user needs

#### Chart Selection   
Individual charts are identifiable by any one of the icons above. To select to a chart, click on an individual chart or navigate to a dashboard of interest and click on any chart within the dashboard. 

#### Finding Individual Item Charts
To navigate to an individual chart in the Chart Library, select the functional area, folder and subfolder (if needed), and click on an individual chart identifiable by one of the chart icons shown; see diagram below for example individual charts within the Human Resources folder of the Human Resources functional area

![chart_items](img/chart_items.png)

When an individual item chart is selected, it is drawn in a maximized view. 

![selected_chart_item](img/selected_chart_item.png)

When a dashboard chart is selected, it is distinguished from other charts by a red-line boundary.

![selected_dashboard_chart](img/selected_dashboard_chart.png)


#### Switching between Dashboard and Chart Selection
Once a chart is selected, it becomes the scope of actions in the Action menu. When a selected chart within a dashboard is clicked again, scope of actions in the Action menu is switched back to all charts in the dashboard. To select the chart again, click it; this returns scope of actions back to the selected chart

### Chart Size and Placement
Dashboard layout is completely dynamic: as more charts are added to (or removed from) a dashboard, the layout is expanded or collapsed, depending on the number of charts. Newly added charts are placed in the right column of the bottom row (or inserted in the first column of a new row).
Charts can occupy one or more cells (column and row intersection of dashboard grid layout). Generally speaking, trend line and horizontal bar charts should occupy two or more cells; other charts can fit into one cell. However, users can resize a chart to occupy a cell with multiple columns and/or multiple rows

![single_multi_cell_charts](img/single_multi_cell_charts.png)

#### Handheld Devices
On hand-held devices, charts are displayed in a single column. Each chart occupies the device’s screen entirely. Scroll down or up to view additional charts.

### Actions Section
Users can perform various actions on a selected chart. These actions are available from the Actions Menu which can be activated by clicking the double left arrow icon, located at the top right of the D3 screen. Actions applicable to the selected chart are enabled as shown below. Actions are grouped into three sections: Actions, Modify, and Dashboard.
The Actions section provides tools to explore, save, and share the chart.

![chart_actions_menu](img/chart_actions_menu.png)

#### View
When a dashboard chart is selected (signified by the red-line boundary), the user may wish to maximize the view of the chart. To do this, click the Actions menu icon then click View

#### Explore 
As noted earlier, D3 charts are initially presented at the highest possible aggregation of data. Analysis of charts often requires “drill down” operations that can allow users to observe statistical trends, and relationships of data. This can result in understanding the data more clearly which may help in identifying issues, realizing opportunities and, in general, aide the decision making process. 

#### Reasons to Explore
The Explore action is used to systematically dissect a selected chart in various ways to better understand the underlying components of data; this can lead to inferences that can be made from comparisons, contrasts, trends, and other investigative techniques.
The systematic dissection of a chart allows the user to start with aggregated data for the entire district or a campus and apply successive explore actions to drill down, categorize, sub-categorize, and/or filter specific components of a chart. These steps can proceed indefinitely until the user arrives at data attributed to individual classrooms, teachers, or students. 
In conclusion, Explore allows the user to observe variations of data at the lowest possible levels (for instance, individual student EOC performance); this in turn may allow for further analysis to determine root causes of these differences resulting in action plans to remedy possible problems.

![how_to_explore_chart.PNG](img/how_to_explore_chart.PNG)

#### D3 Automatic Explore Steps
When a user initiates a chart Explore action, D3 instantly begins the exploration and automatically applies filters to exclude data assumed to be out of scope for the exploration. For instance, D3 will apply a school year filter to include only the current school year on an ADA chart. To undo this and include all school years, the user can remove the applied filters (see Edit Explore action below).

![automatic_explore_step](img/automatic_explore_step.png)

#### Actions Section
When an Explore operation is started, additional actions are added to the Actions menu. These new actions allow the user to perform successive tasks on desired charts to aide in analysis; these action tasks include: Categorize, Disaggregate, Filter by Category, Advanced Filter, and Top n.

![explore_actions](img/explore_actions.png)

##### Categorize
As part of analyzing a chart, the user may wish to categorize the data by showing lower level components of the displayed data. For example, a chart representing data for the whole district may be categorized to show the data by campus types, campuses, or grade levels. 
When the user clicks on the Categorize action, a list of default or popular categories, applicable to the char, appears. The user may select any of the default categories or click View All to select other categories. The available categories are based on the functional area context of the chart being categorized. For instance, an academics functional area chart will have academics type categories available for selection while a finance functional area chart will include only finance type categories.

![category_selection](img/category_selection.png)


Multiple categorizations are allowed on the same chart. Multiple categorizations are presented in a tabbed control that allows the user to alternate views to see each categorization. Each categorization results in a new chart showing the corresponding categories selected.  The user may categorize each resulting chart to show yet lower levels of data components. The categorization process is unlimited and can proceed as far down the hierarchy of data as the user desires. Below are samples of results on the Categorize action, including multiple charts shown in a tabbed control.

![tabbed_categorization](img/tabbed_categorization.png)
Categorize Example showing tabbed Categorizations – by Campus Type

![tabbed_categorization_by_grade_level](img/tabbed_categorization_by_grade_level.png)
Categorize Example showing tabbed Categorizations – by Grade Level

![Campuses_for_each_campus_type](img/Campuses_for_each_campus_type.png)
2nd Level Categorize Example – Campuses for each Campus Type

![Campuses_for_each_grade_level](img/Campuses_for_each_grade_level.png)
2nd Level Categorize Example – Campuses for each Grade Level

##### Sub-Categorize
Charts showing Categorized data may be sub-categorized further. This allows the user to show sub-groups of the categorized data. Similar to Categorize, the user is prompted to select a sub-category; see  Category Selection figure above.
See example below where ADA for the district was first categorized by grade level; then, the resulting grade level chart is sub-categorized by race/ethnicity. The overall analysis presented in the example allows the user to see what are the ADA differences between the various grade levels and then examine the ADA differences between the various student ethnic groups for each of the grade levels.

![sub_categories_example](img/sub_categories_example.png)


##### Disaggregate
The Disaggregate action is a powerful analysis tool to “drill down” on a specific chart component. The Disaggregate action differs from Categorize in that Disaggregate works only on a specific data value while Categorize works on all data values of the chart. 
When the Disaggregate action is clicked, the user is prompted to select a Disaggregation category. See Category Selection figure above.
The Disaggregation process is unlimited and can proceed for as deep down the data hierarchies as desired by the user. Below is an example of Disaggregate action performed on the 9th Grade Level data in the ADA by Grade Level chart.

![disaggregate_example](img/disaggregate_example.png)

##### Filter by Category
The Filter by Category action allows the user to filter out/in specific data categories. This action helps focus user analysis on data of interest. For example, a user may want to focus the ADA analysis on High school campuses or on just 9th and 10th graders.
Initially, when the user clicks Filter by Category, a list of default or popular categories applicable to the current chart is presented. The user may select any one of the default categories or click on View All to select other available and applicable categories. The available categories are based on the functional area context of the chart being categorized. For instance, an academics functional area chart will have academics type categories available for selection while a finance functional area chart will include only finance type categories.
The user may select Filter by Category from any chart during the Explore process. This includes Categorize, Sub-Categorize, and Disaggregate.

##### Advanced Filter 
The Advance Filter action allows the user to select cross functional categories. This action widens the scope of categorization and sub-categorization so that a user may categorize academic type charts by finance or human resource type categories. 
The Advance Filter action involves tow prompts that require user selection. First the user must select a Category of data to filter on. Next, the user provides a condition for the selected category. The condition may be a specific value or an inequality threshold (less than or greater than). The user may specify more than one category, each with its own specified condition.

![advanced_filter](img/advanced_filter.png)


##### Top n
The Top n action allows the user to restrict a chart to show only a specified number of top or bottom values of data. This is useful when the user wants to identify the highest or lowest values in a chart so that further analysis can be focused just on those. Here the “n” represents the number of top or bottom values to include on a chart; the user is prompted to provide the desired count “n”.

![topn](img/topn.png)


#### Modify
The Explore - Modify section within the Explore actions menu provides the ability to change the view presented for each Explore chart

##### Edit
The Edit action within the Modify section of Explore allows the user to change the current chart’s categorization, sub-categorization, disaggregation, Filter, Advance Filter, or Top n settings. For example if the current chart is categorized by campus type, the user can click Edit to change this to campuses; this causes the current chart to be redrawn showing values for each campus, instead of each campus type. For another example, consider the current chart is showing top 5 campuses for ADA; the user can change this to bottom 5 or 3 by clicking on Edit then changing the Top n settings (see Top n figure above).

##### Sort by
The Sort by action within the Modify section of Explore allows the user to set the sorting of displayed values in the chart. Initially, when an Explore chart is displayed as a result of an Explore action, the sort order is set to Default; in most cases, this is based on the logical ordering of the data items shown in the chart. 
For instance, an ADA column chart showing ADA % for all grade levels shows lowest to highest grade levels from left to right, regardless of the ADA %. To change the sort order to show highest to lowest ADA % from left to right, the user should click on the Sort by action, then select Value; to reverse this order and show lowest to highest ADA % from left to right, click on the Category Sort by option. See figure below for the Sort by options

![sortby](img/sortby.png)


##### Chart Labels
The Chart Labels action within the Modify section of Explore allows the user to hide or show labels of data values presented in a chart. By default, all D3 charts show labels to signify the data values of chart components. In column charts, labels are shown on top of each column; in pie charts, labels are displayed to the right of each pie slices; and so on. For a clearer view of a chart, especially in crowded ones that have many components, the user may elect to hide labels. To do this, the user clicks on the Off option of the Chart Labels action. To reinstate labels, the user simply clicks on the Default or On option.

![chart_lables](img/chart_lables.png)

##### Chart type
The Chart Type action within the Modify section of Explore allows the user to change the chart type. D3 features various chart types; the default chart type for explorations is column chart. However, for any selected chart within an Explore operation, the user may change the chart type for better display of data as needed. Below is a figure that shows the Chart Type options available in D3

![chart_type](img/chart_type.png)

##### Data View 
The Data View action within the Modify section of Explore allows the user to change the display from chart to data grid. This allows the user to see the underlying data of the chart in tabular form. Below is an example of changing from chart to data view of ADA % for each campus.

![data_view_example](img/data_view_example.png)
Exploring a chart allows the user to drill down to the student level. When the Data View is invoked showing student level information (list of individual students), the user can select additional data to view corresponding to each student in the list.

![view_other_data_in_data_view](img/view_other_data_in_data_view.PNG)

#### Exploration Section
The Exploration section allows the user to perform various actions on the current exploration as a whole. Users can save the exploration for later actions and analysis, they can clear the exploration to start over, or they can export the entire exploration.

##### Save As
The Save As action within the Exploration section of Explore allows users to save all exploration steps and charts so they can resume the exploration at a later time. 
When the user clicks on Save As, the user is prompted to enter a name for the current exploration and then press OK. This saves the exploration (with all steps/actions and resulting charts) in the D3 Explore section. To resume the saved exploration, the user should click on the Explore navigation panel option

![saveas](img/saveas.png)

##### Clear
The Clear action within the Exploration section of Explore allows users to clear the current exploration session. All steps/action and resulting chart are removed. 
To undo the Clear action, click on the D3 Back Arrow button (located in the top left corner of the D3 screen, just to the right of the navigation menu icon).

![clear](img/clear.png)

##### Send To
The Send To section allows the user to share, save, and perform other actions on the current exploration in its entirety.

![sendto2](img/sendto2.png)

###### Printer
The Send to Printer action allows the user to print the current exploration in its entirety with all steps and resulting charts. The user is presented with the Print dialogue box to select the printer

###### Email
The Send to Email  action allows the user to eMail the current exploration in its entirety with all steps and resulting charts. This invokes a dialogue box that asks the user to enter one or more eMail addresses, a subject line, and a message. Upon clicking Submit, the eMail is sent with the selected exploration as a jpg attachment

###### Save as image
The Sent to Save as image action allows the user to save the current exploration in its entirety with all steps and resulting charts as a jpg image to any drive attached to the user’s local device. The image can later be inserted in documents as needed for internal or external district/campus communications.

###### Save as PDF
The Send to Save as PDF action allows the user to save the current exploration in its entirety with all steps and resulting charts as a PDF document. The user is presented with the Save as dialogue box where the user can select the name of the desired PDF file as well as the drive and folder where to save the PDF file.

###### Export to Excel
The Send to Export to Excel action allows the user to export the data for the current exploration in its entirety with all steps and resulting charts to Excel. The data is saved into the first tab within the Excel file. When the user selects this action, the Excel file is created with a generic name and is downloaded to  the local device’s Downloads folder; the downloaded file is available in the bottom right of the screen for opening and saving into another folder and name based on user preference

###### Get link 
The Get Link action provides a URL link that can be saved or shared with other authorized users. When an authorized user clicks on the link, the user is navigated directly to the exploration automatically.


### Filters
D3 charts present information at the highest aggregation level possible for the role of the logged in user. Filters allow users to narrow the scope of the data presented in a specific chart by excluding certain categories of information.

#### Functional Area Filters
Each functional area has a specific set of filters applicable to the corresponding function. 

![functional_area_filters](img/functional_area_filters2.PNG)

<div class="wy-table-responsive">
<table class="docutils">
    <thead>
        <tr>
            <th>Functional Area</th>
            <th>Filters</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td rowspan="6">Academics</td>
            <td>Campus Type</td>
        </tr>
        <tr>
            <td>Campuses</td>
        </tr>
        <tr>
            <td>Grade Level</td>
        </tr>
        <tr>
            <td>Program Type</td>
        </tr>
        <tr>
            <td>Genders</td>
        </tr>
        <tr>
            <td>Race / Ethnicity</td>
        </tr>
        <tr>
            <td rowspan="8">Finance</td>
            <td>Financial Unit Group</td>
        </tr>
        <tr>
            <td>Financial Unit</td>
        </tr>
        <tr>
            <td>Function Group</td>
        </tr>
        <tr>
            <td>Function</td>
        </tr>
        <tr>
            <td>Object Groups</td>
        </tr>
        <tr>
            <td>Object</td>
        </tr>
        <tr>
            <td>Fund Category</td>
        </tr>
        <tr>
            <td>Fund</td>
        </tr>
    </tbody>
</table>
</div>

#### Selecting a Filter
To filter the data of a selected chart, click Filters in the Action Menu. This presents the user with the applicable Filters for the functional area.

![how_to_apply_chart_filters](img/how_to_apply_chart_filters.png)

##### Selecting / Deselecting All
Deselecting all filter options is equivalent to All being selected. To undo filters, deselect all checked filters or select All to re-include data for all Campus Types.

##### Filter Combinations
Multiple Filters can be used at once to narrow the scope of a chart. For example, you can select Elementary for Campus Types, Hispanic and White for Race/Ethnicities, and Gifted and Talented for Program Types

#### Academics Functional Area Example
In the Academics function area, charts initially present data for the district as a whole for district staff roles; for campus administrator users, charts present data for the entire campus. The data is for all grade levels and all sub populations, and for all ethnic and gender groups. Users can filter out one or more campus type(s), campus(es), grade levels, ethnicities, genders, and sub populations. 
For example, when viewing a chart aggregated for the whole school district, a user may want to narrow the scope of the chart to one or more campus type. 

![how_to_apply_campus_dashboard_filters](img/how_to_apply_campus_dashboard_filters.PNG)

![using_filters](img/using_filters.png)

Using Filters

### Data View
The Data View action within the Modify section allows the user to change the display from chart to data grid. This allows the user to see the underlying data of the chart in tabular form. Below is an example of changing from chart to data view of ADA % for each campus.

![chart_data_view_example](img/chart_data_view_example.png)


## Chart Section
The chart section provides other actions that can be performed on the selected chart.

### Add to Favorites 
Charts are located throughout D3 folders, subfolders, and/or dashboards of functional areas. To have quick and easy access to one or more charts, users may add specific charts to their Favorites area. To do this, find a desired chart, select the chart, click the Action menu, and then click Add to favorites. The selected chart is now available in the Favorites area as an individual item chart.

### Remove from Favorites
To remove a chart from favorites, select the chart you want removed from Favorites then click Remove from favorites

## Legend Section
Most D3 charts provide a legend within the chart that describes each chart component. The legend includes color indicators to identify components of multi-color charts. Because of space limitations within the chart, the legend within the chart may not be display clearly. So, in addition to the legend being provided within the chart, the legend information is displayed, much more clearly, in the legend section of the Action menu. Below is a sample legend section view.

![legend_view](img/legend_view.png)



