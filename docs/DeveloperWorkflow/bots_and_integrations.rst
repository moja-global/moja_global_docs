.. _DeveloperWorkflow:

Bots and Integrations
=====================

moja global makes use of an array of bots and integrations with GitHub
in order to provide a smooth experience to new contributors and to also
make the process of contributing as effortless as possible.

This section focuses on the bots used within the organization and how to
maintain them.

All-contributors Bot
--------------------

All-contributors bot is a `GitHub bot`_ to automate acknowledging
contributors to your open source projects. This is achieved by setting
up a contributors table in the readme which is edited according to the
commands given to our bot. This bot is created and maintained by the
all-contributors organisation `here`_.

**Usage**
~~~~~~~~~

\* **Add a contributor** : Comment on Issue or Pull Request, asking
@all-contributors to add a contributor: :

::

   @all-contributors please add <username> for <contributions>

   * <contribution> : See the `Emoji Key (Contribution Types Reference) <https://allcontributors.org/docs/en/emoji-key>`_ for a list of valid contribution types.

-  **Intent-Based Bot** : Your request to the bot doesn't need to be
   perfect. The bot will use basic Natural Language Parsing to determine
   your intent. For example, this will work too:

::

   Jane you are crushing it in documentation and your infrastructure work has been great too. Let's
   add jane.doe23 for her contributions. cc @all-contributors``

-  The bot will then create a Pull Request to add the contributor, then
   reply with the pull request details.

Contributing
~~~~~~~~~~~~

If you wish to configure or modify the bot settings according to the
needs of the repository, you may update the ``.all-contributorsrc`` JSON
file. The data used to generate the contributors list will be stored in
there, and you can configure how you want ``@all-contributors`` to
generate the list. Here are more details on the `configuration options`_
available.

.. _GitHub bot: https://github.com/apps/allcontributors/installations/new
.. _here: https://github.com/all-contributors/all-contributors
.. _configuration options: https://allcontributors.org/docs/en/bot/configuration
