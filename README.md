# D3

View this documentation
--------------------------
http://docs.accessd3.com

Contribute to this documentation
-------------------------------------
The most straightforward way to edit this documentation directly on github.com.

All documentation files are written in [CommonMark](http://commonmark.org/help/) markdown.

For some features not supported in markdown, it is necessary to embed reStructuredText directly. The [Recommonmark](http://recommonmark.readthedocs.io/en/latest/index.html) documentation explains how to use the this and other features found in Sphinx.

Setting up locally
---------------------
You can also clone this project locally to work on it. You will need Python, Sphinx, and Recommonmark installed to do so.

Instructions:

1. Install Python 2.7.x (make sure to select the option to add python to your path)
2. Install everything else: `pip install sphinx sphinx-autobuild recommonmark`
3. In the docs folder of your cloned project: `sphinx-autobuild . _build/html`
4. Browse to http://localhost:8000

Taking screenshots
-----------------------
For screenshots of the entire window, first set your browser width to 1280px (and preferably use a height of 720px). This matches a 720P HD television, and it is the minimum resolution for dashboards to include more than one chart per row. To manage your browser width in Chrome, hit F12, then the "Toggle device mode" icon. Click edit in the devices dropdown to add a "720P" option if you don't already have it. Use this, and make sure your scaling is 100%.

The easiest way to capture the content area of the browser in Chrome is to install the Full Page Screen Capture extension, or just use the Snipping Tool.

Annotated screenshots are maintained in the Visio file `drawings.vxdx`.