.. _DeveloperWorkflow:

Bots and Integrations
#####################

moja global makes use of an array of bots and integrations with GitHub in order to provide a smooth experience to new contributors and to also make the process of contributing as effortless as possible.

This section focuses on the bots used within the organization and how to maintain them.

All-contributors Bot
--------------------

All-contributors bot is a `GitHub bot <https://github.com/apps/allcontributors/installations/new>`_ to automate acknowledging contributors to your open source projects. This is achieved by setting up a contributors table in the readme which is edited according to the commands given to our bot.
This bot is created and maintained by the `all-contributors` organisation `here <https://github.com/all-contributors/all-contributors>`_.

**Usage**
=========
* **Add a contributor** : Comment on Issue or Pull Request, asking @all-contributors to add a contributor:
::

  @all-contributors please add <username> for <contributions>

  * <contribution> : See the `Emoji Key (Contribution Types Reference) <https://allcontributors.org/docs/en/emoji-key>`_ for a list of valid contribution types.

* **Intent-Based Bot** : Your request to the bot doesn't need to be perfect. The bot will use basic Natural Language Parsing to determine your intent. For example, this will work too:

::

  Jane you are crushing it in documentation and your infrastructure work has been great too. Let's
  add jane.doe23 for her contributions. cc @all-contributors``

* The bot will then create a Pull Request to add the contributor, then reply with the pull request details.

Contributing
============

If you wish to configure or modify the bot settings according to the needs of the repository, you may update the  ``.all-contributorsrc`` JSON file. The data used to generate the contributors list will be stored in there, and you can configure how you want ``@all-contributors`` to generate the list.
Here are more details on the `configuration options <https://allcontributors.org/docs/en/bot/configuration>`_ available.


Botmojaglobal
-------------

Botmojaglobal uses **@zulipbot**, a GitHub workflow bot from the zulip organisation, to handle issues and pull requests in our repositories in order to create a better workflow for contributors.
This bot is created and maintained by the **zulip** organisation `here <https://github.com/zulip/zulipbot>`_.

**Usage**
=========
* **Claim an issue** : Comment ``@botmojaglobal claim`` on the issue you want to claim; **@botmojaglobal** will assign you to the issue and label the issue as ``in progress``.

  * If you’re a new contributor, **@botmojaglobal** will give you read-only collaborator access to the repository and leave a welcome message on the issue you claimed.

  * You can also claim an issue that you’ve opened by including ``@botmojaglobal claim`` in the body of your issue.

  * If you accidentally claim an issue you didn’t want to claim, comment ``@botmojaglobal abandon`` to abandon an issue.

* **Label your issues** : Add appropriate labels to issues that you opened by including **@botmojaglobal** add in an issue comment or the body of your issue followed by the desired labels enclosed within double quotes ("").

  * For example, to add the bug and help wanted labels to your issue, comment or include ``@botmojaglobal add "bug" "help wanted"`` in the issue body.

  * You’ll receive an error message if you try to add any labels to your issue that don’t exist in your repository.

  * If you accidentally added the wrong labels, you can remove them by commenting  ``@botmojaglobal remove`` followed by the desired labels enclosed with double quotes ("").

* **Find unclaimed issues** : Use the `GitHub search feature <https://help.github.com/en/articles/using-search-to-filter-issues-and-pull-requests>`_ to find unclaimed issues by adding one of the following filters to your search:

  * -label: ``in progress`` (excludes issues labeled with the in progress label)

  * no:assignee (shows issues without assignees)

  Issues labeled with the ``in progress`` label and/or assigned to other users have already been claimed.

* **Track inactive claimed issues** : If a claimed issue has not been updated for a week, **@botmojaglobal** will post a comment on the inactive issue to ask the assignee(s) if they are still working on the issue.

  * If you see this comment on an issue you claimed, you should post a comment on the issue to notify **@botmojaglobal** that you’re still working on it.

  * If **@botmojaglobal** does not receive a response from the assignee within 3 days of an inactive issue prompt, **@botmojaglobal** will automatically remove the issue’s current assignee(s) and the ``in progress`` label to allow others to work on an inactive issue.

Contributing
============
If you wish to help develop and contribute to **@botmojaglobal**, check out the `mojaglobal/zulipbot  <https://github.com/moja-global/zulipbot>`_ repository fork on GitHub and read the project’s contributing guidelines for more information.

Welcome Bot
-----------
Welcome Bot is a `github app <https://github.com/apps/welcome>`_ that welcomes new users based off maintainer defined comments that should be located in a ``.github/config.yml``. This app is configured for moja global in order to provide a richer experience to all new contributors.
This bot is created and maintained by the `probot` organisation  `here <https://github.com/probot>`_.

**Usage**
=========
* **Welcome Bot is activated on all repositories** : Since the bot config file is already present in ``.github`` folder of ``import-me`` template repository, creating a new repository from this template ensures that the welcome bot is activated on the new repository.
* **Features** : The bot provides messages for 3 different scenarios and the messages are fetched from ``.github/config.yml`` file in each repository:

  * newIssueWelcomeComment : This message is displayed whenever a new contributor opens their first issue in the repository.

  * newPRWelcomeComment : This message is displayed whenever a new contributor open their first pull request in the repository.

  * firstPRMergeComment : This message is displayed whenever a new contributor's first pull request gets merged in the repository.

You can opt out of having the bot comment on first time pull requests, pull request merges, or new issues by not filling in a value for each of the above respective fields.

Contributing
============
If you wish to modfy the messages displayed by Welcome Bot, you may modify the ``.github/config.yml`` file in the repository.
