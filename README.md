# D3

## View this documentation

http://docs.accessd3.com

## Contribute to this documentation

The most straightforward way to make minor changes to this documentation is to edit the files directly on github.com.

All documentation files are written in [CommonMark](http://commonmark.org/help/) markdown.

For some features not supported in markdown, it is necessary to embed reStructuredText 
directly. The [Recommonmark](http://recommonmark.readthedocs.io/en/latest/index.html) 
documentation explains how to use this and other features found in Sphinx (the documentation compiler).

## Setting up locally

*Returning users: if you've already got everything setup but forgot how to compile, just run `watch.cmd` from the `Documents\Github\D3\docs` folder.*

You can also clone this project locally to work on it. You will need to install several software packages to setup your local environment, as follows:

* Clone the project locally:

    1. Create a [GitHub](https://github.com/) user account if you do not already have one. Then ask me to grant you access to the K12Dynamics organization.

    2. Install [GitHub Desktop](https://desktop.github.com/). This provides a UI for working with Git.

    3. Use GitHub Desktop to **clone** the K12Dynamics -> D3 repository to your local machine (you should end up with a Documents\GitHub\D3 folder).

* Compile and display the documentation locally:

    1. Install [Python 2.7.x](https://www.python.org/downloads/) (make sure to select the option to add python to your path)

    2. From a command prompt, install everything else used to compile the docs: 
    
    `pip install sphinx sphinx-autobuild sphinx-rtd-theme recommonmark`

    3. In the docs folder of your cloned project, launch the watch.cmd file. 
    
    4. Browse to http://localhost:8000

    *You should now see the documentation site.*

* Edit the docs and commit changes:

    1. Install [Visual Studio Code](https://code.visualstudio.com/Download). This will be your text editor (use something else if you prefer).

    2. From VS Code, Open Folder... and choose the Documents\GitHub\D3 folder.

    3. Open a file in the `docs` sub-folder, make a change, and save. You should see the documentation in the browser update automatically.

    4. Select the D3 project in GitHub Desktop. You should see all your file change. At the bottom fill out the summary field with a meaningful message, and click `Commit to master'.

    *Your changes have been committed to your local Git repository only at this point.*

    5. Click the `Sync` button in GitHub Desktop to merge with the master repository on GitHub.com.

    *A GitHub hook is in place to automatically recompile the hosted documentation after each commit. Within a few seconds you should see the documentation updated on the live site.* 

**Pro tip**: Once the Git repository has been cloned locally via GitHub Desktop, you can instead perform all subsequent git actions from with VS Code. To activate this feature in VS Code, you will need to install [Git for Windows](https://git-scm.com/download/win) (accept all defaults in setup wizard).

## Taking screenshots

For screenshots of the entire window, first set your browser width to 1280px (and 
preferably use a height of 720px). This matches the resolution of a 720P HD television, 
and it is the minimum 
resolution for D3 dashboards to display multiple charts in a single row. To manage your 
browser width in Chrome, hit F12, then the "Toggle device mode" icon. Click edit in the 
devices dropdown to add a "720P" option if you don't already have it. Use this, and make 
sure your scaling is 100%.

The easiest way to capture the content area of the browser in Chrome is to install the Full 
Page Screen Capture extension, or just use the Snipping Tool built in to Windows.

Annotated screenshots used in the documentation are maintained in the Visio file `drawings.vxdx`.

## Using Sphinx directives in markdown

###Link Reference:
    ```eval_rst
    .. _how-do-i-explore-existing-chart:
    ```

### See Also:
    ```eval_rst
    .. seealso:: 
    :ref:`technical-olap-concepts`
     ```

### Note:
    ```eval_rst
    .. note::
       This information be be of interest.
    ```

### Tip:
    ```eval_rst
    .. tip::
       Here's a tip for you.
    ```

### Warning:
    ```eval_rst
    .. warning::
       Be careful with this.
    ```

## Custom CSS Classes

### Task (How Do I...):
    <div class="task-title">
    How do I apply chart filters?
    </div>

    1.  <span class="task-item">Select a chart of interest then click Filters in the sidebar.</span>

        This present the user with applicable filters for the chart functional area.

    2.  <span class="task-item">Select the filter name you wish to use</span>

    3.  <span class="task-item">Click the desired filter.</span>

