# Configuration file for the Sphinx documentation builder.
import datetime

import sphinx_rtd_theme
import os

# This file only contains a selection of the most common options. For a full
# list see the documentation:
# https://www.sphinx-doc.org/en/master/usage/configuration.html

# -- Path setup --------------------------------------------------------------

# If extensions (or modules to document with autodoc) are in another directory,
# add these directories to sys.path here. If the directory is relative to the
# documentation root, use os.path.abspath to make it absolute, like shown here.
#
# import os
# import sys
# sys.path.insert(0, os.path.abspath('.'))


# -- Project information -----------------------------------------------------

project = 'moja global Technical Guide'
author = 'moja global docs team'

copyright = '{0} {1}, contributed by {2}'.format(datetime.datetime.now().year, 'moja global', author)

# -- General configuration ---------------------------------------------------

nitpicky = True

# Add any Sphinx extension module names here, as strings. They can be
# extensions coming with Sphinx (named 'sphinx.ext.*') or your custom
# ones.
extensions = ['recommonmark',
'sphinx_rtd_theme',
'sphinx_copybutton',
'myst_nb',
]

# ignore a particular link during the linkcheck build
linkcheck_ignore = [r'https://flintpro.com/']

# Execution mode for jupyter notebooks
nb_execution_mode = 'off'

master_doc = 'index'

# Add any paths that contain templates here, relative to this directory.
templates_path = ['source/_templates']

# List of patterns, relative to source directory, that match files and
# directories to ignore when looking for source files.
# This pattern also affects html_static_path and html_extra_path.
exclude_patterns = ['env/*']


# -- Options for HTML output -------------------------------------------------

# The theme to use for HTML and HTML Help pages.  See the documentation for
# a list of builtin themes.
#
html_theme = "sphinx_rtd_theme"
# html_theme_path = [sphinx_rtd_theme.get_html_theme_path()]


# Add any paths that contain custom static files (such as style sheets) here,
# relative to this directory. They are copied after the builtin static files,
# so a file named "default.css" will overwrite the builtin "default.css".

html_favicon = 'favicon.ico'

html_static_path = ['source/_static']

# html_style = os.path.join("css", "custom.css")

html_css_files = [
    'css/custom.css'
]