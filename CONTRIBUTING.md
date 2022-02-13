## moja global Contribution Guideline

We're so glad that you're thinking about contributing to moja global. We welcome your contributions!

Here are some guidelines and instructions for contributing to our projects. Please go through them before making a contribution.

## Code of Conduct

moja global governs its participants according to the Contributor Covenant [Code of Conduct](CODE_OF_CONDUCT.md). As a contributor, you agree to uphold this code. Please report unacceptable behavior to info@moja.global. If you want your report to be handled confidentially, please report to guy@moja.global.

## FAQ and General Questions

Before asking any questions, please have a look at our [FAQs](https://github.com/moja-global/.github/wiki). If your question isn't answered there, please write to info@moja.global.

If your question concerns the code of a project, then you should create a [new issue] in the relevant project's repository.

You can also [join moja global](Contributing/How-to-Join-moja-global.md) and then ask your question(s) in the relevant channel of our private [Slack workspace](https://mojaglobal.slack.com/).

## How to Set Up the Documentation Website Locally?

In order to set up the documentation website locally, make sure you have a [Github](github.com) account. If you do not have an existing Github account, we recommend you to create one.

Here are the steps you can follow while setting up the documentation locally.

1. Fork the repository.

2. Clone the repository with the following command. Replace the <GITHUB_USERNAME> with your username.

```sh
git clone https://github.com/<GITHUB_USERNAME>/moja_global_docs.git
```

3. Next, go to the directory containing the project.

```sh
cd moja_global_docs
```

4. Navigate to the docs directory

```sh
cd docs
```

Make sure you already have python and pip installed before setting up the documentation.

#### For **Linux** Users:

```sh
virtualenv env
source env/bin/activate
pip install -r requirements.txt
make html
```

#### For **Windows** Users:

```sh
virtualenv env
env\Scripts\activate
pip install -r requirements.txt
make html
```

You can now run the documentation site on `_build/html/index.html` in your browser. In order to update the documentation after making corresponding changes, run `make clean && make html`.

#### To look for **broken links**:

```sh
make linkcheck
```

You can now look for the broken links, if any, inside `_build/linkcheck/output` .

## How to Contribute Code?

Bug fixes, performance improvements, code formatting, ...
There are a lot ways in which you can contribute code!
The issues list of a project is a great place to find something that you can help us with.

To increase the chances of your code getting merged, please ensure that:

- You satisfy our [contribution criteria](Governance/Contribution-Criteria.md).
- Your code follows our [coding guidelines](Governance/Coding-Guidelines.md).
- Your submission follows [Vincent Driessen's Git Branching](https://nvie.com/posts/a-successful-git-branching-model/) System.
- Your code's documentation follows our [rules](Contributing/How-to-Document-Your-Contribution.md).
- Your pull request:
  - Passes all checks and has no conflicts.
  - Has a well-written title and message that briefly explains your proposed changes.

## How to Report Bugs, Provide Feedback or Request Features?

We welcome all kinds of bug reports, user feedback and feature requests!
We've created some issue templates to assist you in this. Please use them to create a new issue in the relevant project's repository.
If you are not sure how to create an issue, here are the steps:

1. Navigate to the main page of the documentation website repository

2. Click `Issues`

3. Click `New issue`

4. Our repository uses issue templates, click `Get started` next to the type of issue you'd like to open

5. Type a title for your issue. We advise you to stick to the issue template to describe the issue

6. After you are finished, click `Submit new issue`

## How to Open a Pull Request to Add New Documentation or Fix Bugs?

After you have cloned the documentation repo to your computer locally, edit the files that you wish to change and follow the steps to open a pull request.

1. `add` and `commit` your changes to your repository

2. Git push your changes to your fork on Github

3. On Github, click on the `Create a new Pull Request` button.

4. Use a succinct title and descriptive comments to descibe your Pull Request. Also Ensure maintainers can understand your proposed changes from the description

5. Sign your message with

```
Signed-off-by: Random J Developer <random@developer.example.org>
```

This shows that you agree to the [Developer Certificate of Origin (DCO)](https://developercertificate.org/). It certifies that you wrote (or otherwise have the right to submit) your contribution to the project

6. Ensure your Pull-Request passes all checks and has no conflicts

7. Click `Create Pull Request`

## How To Get Credit for Your Contribution?

We use the [All Contributors Bot](https://allcontributors.org/) to recognize contributors.

To get recognized, just add the following line to a comment after making your contribution (like submitting a pull request, replying to a question, resolving an issue, etc.):

```
@all-contributors please add <@username> for <contributions>
```

Replace `<@username>` with your GitHub username and `<contributions>` with any word from [this list](https://allcontributors.org/docs/en/emoji-key).

After that, the @all-contributors bot will submit a PR to include you in the list of contributors. Once this PR gets accepted, you'll get added to the Contributors table in the relevant project's `README`.

## Are There Other Ways of Contributing?

Yes, there are a lot of other ways in which you can help us!

You can [coach new contributors](Contributing/How-to-Coach-New-Contributors.md), [answer user questions](Contributing/How-to-Answer-User-Questions.md), [organize events](Contributing/How-to-Organise-Events.md), help us in [administration](Contributing/How-to-Assist-with-Admin.md), [fundraising](Contributing/How-to-Assist-with-Fundraising.md), [website development](Contributing/How-to-Improve-the-Website.md), [communication/outreach](Contributing/How-to-Assist-with-Comms.md). You can also offer [strategy advice](Contributing/How-to-Provide-Strategic-Advice.md). You can even [join our strategy board](Contributing/How-to-Join-the-Strategy-Board.md)!

If there's some other way, not listed above, in which you'd like to help, then please drop us a line at info@moja.global. We'll get in touch with you!

[new issue]: https://github.com/moja-global/About_moja_global/issues/new/
