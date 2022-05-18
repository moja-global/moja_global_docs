.. _DeveloperWorkflow:

GitHub Repository maintenance
=============================

This section guides contributors and maintainers on the guidelines to
follow while setting up a new repository and maintaining it under moja
global.

Repository Creation
-------------------

A new repository under moja global is generated from the template
repository `Import-me`_. This ensures that the start-up files for a
standard moja global repo are already included in the new repository and
the commit history also remains clean.

Follow these steps to generate your new repository from Template
repository:

-  Navigate to https://github.com/moja-global.
-  Select the ``New`` button for new repository creation.
-  On the create repository page, select the template ``Import-me`` from
   the dropdown titled ``Repository Template``.

.. image:: ../../images/template_1.png
   :alt: Create a new template repository
   :align: center
   :width: 600px

-  Upon selecting the template, please make sure the checkbox for
   ``include all branches`` is unmarked.

.. image:: ../../images/template_2.png
   :alt: \`include all branches`` unmarked
   :align: center
   :width: 600px

-  Now go ahead and add details of your repository name, description and
   visibility setting (Public or Private).
-  Click on the ``Create repository`` button as the final step!

Setting up Labels for your repository
-------------------------------------

Labels are visual tools for the project. They make it easier to filter
issues and prioritize tasks. Additionally, they also help new
contributors identify areas of interest for your project.

They can help improve awareness of different types of contribution
methods in the project. (e.g. science, communication and documentation
tasks).

-  Navigate to
   ``https://github.com/moja-global/<repository_name>/labels`` where
   ``<repository_name>`` is the name of the new repository created. You
   can find all the labels setup for your repository here. In order to
   create a new label, click on the New Label button.

.. image:: ../../images/label_new.png
   :alt: Labels in a repository
   :align: center
   :width: 600px

-  Configure each issues’ labels in a way that makes sense for your
   project. The labels should classify the issues/pull requests in an
   appropriate manner so they can be easily applied for filtering later.
   Every issue and pull request label can be found under the Issue tab
   with the labels button.

.. image:: ../../images/label_1.png
   :alt: Classify issues/pull requests using Labels
   :align: center
   :width: 600px

moja global has the following labels available on an organisational
level. You can use the labels depending on the issue, and make new
labels specific to the repository if needed as explained above.

It is recommended to provide every issue with 4 types of labels: 1 from
each type of label below.

.. _Import-me: https://github.com/moja-global/Import-Me

Category:

-  ``Cat = Blocked`` = Progress on the issue is Blocked, either due to
   waiting for another code change, or something outside of our control.
-  ``Cat = Bug`` = Something isn't working
-  ``Cat = Comms`` = Propose a way to better communicate a feature
-  ``Cat = Doc`` = Adding or updating documentation
-  ``Cat = Good for newcomers`` = These issues require minimal context
   and are well-suited for new contributors
-  ``Cat = Feedback`` = Describe how we can improve your experience
-  ``Cat = Help Wanted`` = Anybody out there, can you give me a hand?
-  ``Cat = Need Info``
-  ``Cat = New Feature`` = Suggest an idea for this project
-  ``Cat = Science`` = Suggest how the science can be improved

Priority:

-  ``Priority = High`` = High Priority issues/pull request that require
   immediate attention
-  ``Priority = Medium`` = Mid Priority issues/pull request that require
   attention after High Priority issues are resolved.
-  ``Priority = Low`` = Low Priority issues/pull request that require
   attention only after Mid Priority issues are resolved.

Time:

-  ``T = 1 Hour`` = Resolving this issue will take about 1 hour
-  ``T = 2 Hours`` = Resolving this issue will take about 2 hours
-  ``T = 4 Hours`` = Resolving this issue will take about 1/2 day
-  ``T = 8 Hours`` = Resolving this issue will take about 1 day
-  ``T = Break me up`` = This issue takes more than 1 day and needs to
   be broken up into smaller tasks

Difficulty:

-  ``X = Easy`` = This is a good issue for new contributors
-  ``X = Intermediate`` = Solving this issue requires some experience
-  ``X = VeryDifficult`` = Solving this issue requires advanced
   expertise

How to maintain a GitHub repository
===================================

This section focuses on “housekeeping” with GitHub projects, including
labels and project boards.

Housekeeping is important to maintain a repository. This organizes bugs,
feature requests, and the project itself. Organized projects help active
contributors stay on track and make realistic deadlines. It also helps
new contributors understand what is going on.

Housekeeping has five parts:

Issue metadata Adding labels Updating project boards Making pull
requests Reviewing pull requests

Update issue and pull request metadata (under How to maintain a GitHub
Repo) Every GitHub issue and pull request has four metadata properties:

Assignees: Who is currently working on this and who is the best
point-of-contact for updates Labels: Visual cues on task status and
importance (see below) Projects: Advanced business process management
(see below) Milestone: Relevant feature or version milestone for an
issue or pull request Assignees and labels should always be used at a
minimum. Use projects and milestones when they are available.

Adding labels (under How to maintain a GitHub Repo) Above, labels were
mentioned as part of issue and pull request metadata. Maintaining and
using labels is a good habit. An issue or pull request might have two to
four labels, depending on how the project was set up.

If labels are not yet configured, read Set up useful labels <add the
link>.

Once a week, check issues and pull requests to see if tags are
up-to-date. Update or change any labels that are stale (such as priority
labels). Add labels from the metadata sub-menu when you open an issue or
pull request. Making pull requests All major changes to the project
should always be made through a pull request (PR). Pull requests are
like a registry of changes for a project. It is easy for someone to see
what is going in and out of a project. Outside contributors will always
have to make pull requests, so it is good practice for core / trusted
developers to use pull requests too.

Follow contributing guidelines The contributing guidelines for all
moja global projects live in their respective repositories.

Always follow these contributing guidelines when working in the project.
These are the standards and rules we ask the community to follow when
contributing. As project maintainers, it is our responsibility to hold
ourselves to the same standards that we ask of others. Thus, always make sure
that the current development practices are in-line with our guidelines.

Write useful commit messages Writing useful commit messages is a good
practice to follow. When looking through project commits, it should be
somewhat clear what has changed in the project and how. Short or
nondescript commit messages are not helpful to maintainers or new
contributors. Commit messages do not need to be paragraphs, but they
should clearly indicate what changed or why something changed.

Read this blog post for more information about keeping git history clean
and tidy with git rebase.

Reviewing pull requests Pull requests (often abbreviated as PRs) are the
cornerstone of accepting contributions to countless open source
projects. All major contributions to a project, from both core
contributors and new contributors, should be made as pull requests. It
is important to follow consistent practices when reviewing pull
requests.

Triage new pull requests Update the metadata for all new pull requests,
especially if they will be open for longer than one workday. Examples of
metadata include the following:

Assignees: Indicates whose responsibility it is to review or accept a
pull request Labels: Indicates what type of change the pull request is
and what its priority is Projects: Provides context to overall project
development (if using project boards) Milestones: Connects pull request
to a specific goal or version (if applicable) Triaging new pull requests
by updating the metadata keeps the project organized. It is easier for
an outsider to understand the project workflow and development by
triaging. It is also helpful to give context for a pull request if you
have to update it later. For example, if a pull request cannot be merged
because of an external problem, label it as blocked.

Creating and maintaining Project Boards
=======================================

Project boards on GitHub help you organize and prioritize your work by
creating them for specific feature work, comprehensive roadmaps, or even
release checklists.

There are 2 types of project boards available:

-  Repository: Boards for use in a single repository.
-  Organization: Boards for use in a GitHub organization across multiple
   repositories (but private to organization members)

Moja global team uses boards for development and documentation at the
repository level. It means repository-specific boards for focused work
in each repository.

Creating your first board
-------------------------

-  Project boards can be found under the the ``Projects`` tab in the
   same row as Issues and Pull requests on a specific repository.
-  If you have enough permissions on the repository or as an
   organisation member, then you'll be able to create a new project by
   clicking on the green button labeled ``Create Project``.

.. image:: ../../images/project_board_1.png
   :alt: Project Boards under Organization
   :align: center
   :width: 600px

-  Configure the name and description for the project board. You can
   also choose templates to set up basic columns and sorting for your
   board. Currently, moja global team selects ``Basic kanban`` for
   Kanban-style boards.

.. image:: ../../images/project_board_2.png
   :alt: Create a new project board
   :align: center
   :width: 600px

-  After creating the project board, you can make adjustments to it as
   needed. You can create new columns, set up automation and add
   pre-existing GitHub issues and pull requests to the project board.

However, it is recommended that the contributors use the existing board
in each repo rather than creating a new board unless necessary.

Adding issues/pull requests to your Project Board
=================================================

After you set up a project board, you need to populate it with issues
and pull requests and keep updating the board on a regular basis.

The ``Basic kanban`` template offers the following columns for every
issue/pull request. You may classify your issues/pull requests into one
of the criteria below.

   -  Todo: Open issues/pull requests, Reopened issues/pull requests
   -  In progress: Issues that have been assigned, pull requests that
      are open and reviewed
   -  Done: Closed issues/pull requests, Merged pull requests

In order to add a issue/pull request to a project board, follow these
steps:

-  Navigate to the specific issue/pull request.
-  Under the right sidebar, check out the ``Projects`` tab. Click on the
   settings icon next to the ``Projects`` tab and select the relevant
   project board. If the settings icon is not visible to you, then you
   don't have enough permissions to add an issue/pull request to a
   project board.

.. image:: ../../images/project_board_3.png
   :alt: Select project board for issue
   :align: center
   :width: 200px

-  After selection of the board, you may classify it into one of the
   three columns by clicking on the ``Awaiting Triage`` dropdown and
   selecting any one of the above options (Todo, In progress, Done).

.. image:: ../../images/project_board_4.png
   :alt: Assign state (todo, in progress, done) to the issue
   :align: center
   :width: 400px

-  Once you have classified your issue/pull request into the correct
   column, you can see an update for the same shown in your issue.

.. image:: ../../images/project_board_5.png
   :alt: Update for issue added to project board
   :align: center
   :width: 600px

-  Now if you need to update the column, navigate to the Projects tab.
   You can then drag-and-drop issues/pull requests from one column to
   another as per your convenience.

.. image:: ../../images/project_board_6.png
   :alt: Drag/Drop interface to move cards to different columns
   :align: center
   :width: 600px

Build project boards into your workflow
=======================================

After you set up a project board and populate it with issues and pull
requests, you need to integrate it into your workflow. Project boards
are effective only when actively used.

The moja global team uses the project boards as a way to track our
progress as a team, update external stakeholders on development, and
estimate team bandwidth for reaching our milestones.

The following image shows how we can track progress with GitHub project
boards.

.. image:: ../../images/project_board_7.png
   :alt: Progress Tracking with Project boards
   :align: center
   :width: 600px

As moja global is an open-source project and community, consider using
the project boards to update other team members, and encourage
participation inside of GitHub issues and pull requests.

Presently, we are also considering using the project boards for
development. It also helps remind us and other core contributors to
spend 5 minutes each day updating progress as needed.
