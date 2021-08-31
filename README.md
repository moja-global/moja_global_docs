# Moja global documentation

[![All Contributors](https://img.shields.io/badge/all_contributors-1-orange.svg?style=flat-square)](#contributors)

This repository contains developer documentation for the [Moja global](moja.global) community. You can find the online version of the moja global documentation at **[docs.moja.global](https://docs.moja.global/en/latest/)**.

Issues and contributions for the developer documentation are tracked here. We have a large community using these resources and we would like to make it our best effort to respond to issues in a timely fashion.

To file a docs issue, use the issue tracker in the [moja-global/moja_global_docs](https://github.com/moja-global/moja_global_docs) repo.

## Installation

To edit the documentation you need a [GitHub](github.com) account. Once you have created one and logged in, you can edit any page by navigating to the corresponding file and clicking the edit (pen) icon.

This will create a "fork" and further you can create a "pull request", which will be approved by one of the existing members of the Docs team. If you have any development experience, you can setup the docs on your local machine to build the documentation locally.

First make a fork, and then clone the repo:

```sh
git clone https://github.com/<GITHUB_USERNAME>/moja_global_docs.git
cd moja_global_docs
cd docs
```

Replace the `<GITHUB_USERNAME>` with your GitHub username. You can find your username by clicking on your profile picture in the top right corner of the GitHub website.

We are now in the `docs` directory. Let us set the documentation up:

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

You can now open the documentation site on `_build/html/index.html` in your browser. Make corresponding changes on the documentation site and then run `make clean && make html` to update the documentation. You can now create a pull request to get your changes merged into the upstream develop branch.

## How to Get Involved?

moja global welcomes a wide range of contributions as explained in [Contributing document](https://github.com/moja-global/About-moja-global/blob/master/CONTRIBUTING.md) and in the [About moja-global Wiki](https://github.com/moja-global/.github/wiki).

## FAQ and Other Questions

* You can find FAQs on the [Wiki](https://github.com/moja.global/.github/wiki).
* If you have a question about the code, submit [user feedback](https://github.com/moja-global/About-moja-global/blob/master/Contributing/How-to-Provide-User-Feedback.md) in the relevant repository.
* If you have a general question about a project or repository or moja global, [join moja global](https://github.com/moja-global/About-moja-global/blob/master/Contributing/How-to-Join-moja-global.md) and 
    * [submit a discussion](https://help.github.com/en/articles/about-team-discussions) to the project, repository or moja global [team](https://github.com/orgs/moja-global/teams)
    * [submit a message](https://get.slack.help/hc/en-us/categories/200111606#send-messages) to the relevant channel on [moja global's Slack workspace](mojaglobal.slack.com).
* If you have other questions, please write to [info@moja.global](info@moja.global).


## Contributors

Thanks goes to these wonderful people ([emoji key](https://allcontributors.org/docs/en/emoji-key)):

<!-- ALL-CONTRIBUTORS-LIST:START - Do not remove or modify this section -->
<!-- prettier-ignore-start -->
<!-- markdownlint-disable -->
<table>
  <tr>
    <td align="center"><a href="http://moja.global"><img src="https://avatars1.githubusercontent.com/u/19564969?v=4?s=100" width="100px;" alt=""/><br /><sub><b>moja global</b></sub></a><br /><a href="#projectManagement-moja-global" title="Project Management">📆</a></td>
    <td align="center"><a href="https://github.com/Tlazypanda"><img src="https://avatars.githubusercontent.com/u/33183263?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sneha Mishra</b></sub></a><br /><a href="https://github.com/moja-global/moja_global_docs/commits?author=Tlazypanda" title="Code">💻</a> <a href="https://github.com/moja-global/moja_global_docs/commits?author=Tlazypanda" title="Documentation">📖</a> <a href="#mentoring-Tlazypanda" title="Mentoring">🧑‍🏫</a> <a href="https://github.com/moja-global/moja_global_docs/pulls?q=is%3Apr+reviewed-by%3ATlazypanda" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://linktr.ee/shlokagupta"><img src="https://avatars.githubusercontent.com/u/41121520?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shloka</b></sub></a><br /><a href="https://github.com/moja-global/moja_global_docs/commits?author=chicken-biryani" title="Documentation">📖</a> <a href="https://github.com/moja-global/moja_global_docs/pulls?q=is%3Apr+reviewed-by%3Achicken-biryani" title="Reviewed Pull Requests">👀</a> <a href="#a11y-chicken-biryani" title="Accessibility">️️️️♿️</a></td>
    <td align="center"><a href="https://github.com/Sukriti-sood"><img src="https://avatars.githubusercontent.com/u/55010599?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sukriti Sood</b></sub></a><br /><a href="https://github.com/moja-global/moja_global_docs/commits?author=Sukriti-sood" title="Documentation">📖</a></td>
    <td align="center"><a href="https://sarahhaggarty.github.io/"><img src="https://avatars.githubusercontent.com/u/81160244?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Sarah Haggarty</b></sub></a><br /><a href="https://github.com/moja-global/moja_global_docs/commits?author=sarahhaggarty" title="Documentation">📖</a> <a href="https://github.com/moja-global/moja_global_docs/issues?q=author%3Asarahhaggarty" title="Bug reports">🐛</a> <a href="#mentoring-sarahhaggarty" title="Mentoring">🧑‍🏫</a> <a href="https://github.com/moja-global/moja_global_docs/pulls?q=is%3Apr+reviewed-by%3Asarahhaggarty" title="Reviewed Pull Requests">👀</a></td>
    <td align="center"><a href="https://github.com/Patamap"><img src="https://avatars.githubusercontent.com/u/59905399?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Patama</b></sub></a><br /><a href="https://github.com/moja-global/moja_global_docs/commits?author=Patamap" title="Documentation">📖</a> <a href="https://github.com/moja-global/moja_global_docs/pulls?q=is%3Apr+reviewed-by%3APatamap" title="Reviewed Pull Requests">👀</a> <a href="#mentoring-Patamap" title="Mentoring">🧑‍🏫</a> <a href="#projectManagement-Patamap" title="Project Management">📆</a></td>
    <td align="center"><a href="https://github.com/aornugent"><img src="https://avatars.githubusercontent.com/u/20387761?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Andrew O'Reilly-Nugent</b></sub></a><br /><a href="https://github.com/moja-global/moja_global_docs/commits?author=aornugent" title="Documentation">📖</a> <a href="https://github.com/moja-global/moja_global_docs/pulls?q=is%3Apr+reviewed-by%3Aaornugent" title="Reviewed Pull Requests">👀</a> <a href="#projectManagement-aornugent" title="Project Management">📆</a> <a href="#ideas-aornugent" title="Ideas, Planning, & Feedback">🤔</a></td>
  </tr>
  <tr>
    <td align="center"><a href="https://github.com/gmajan"><img src="https://avatars.githubusercontent.com/u/8733319?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Guy Janssen</b></sub></a><br /><a href="https://github.com/moja-global/moja_global_docs/commits?author=gmajan" title="Documentation">📖</a> <a href="https://github.com/moja-global/moja_global_docs/pulls?q=is%3Apr+reviewed-by%3Agmajan" title="Reviewed Pull Requests">👀</a> <a href="#ideas-gmajan" title="Ideas, Planning, & Feedback">🤔</a></td>
    <td align="center"><a href="https://www.linkedin.com/in/shubhamkarande13/"><img src="https://avatars.githubusercontent.com/u/13800316?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Shubham Karande</b></sub></a><br /><a href="https://github.com/moja-global/moja_global_docs/commits?author=shubhamkarande13" title="Documentation">📖</a> <a href="https://github.com/moja-global/moja_global_docs/pulls?q=is%3Apr+reviewed-by%3Ashubhamkarande13" title="Reviewed Pull Requests">👀</a> <a href="#ideas-shubhamkarande13" title="Ideas, Planning, & Feedback">🤔</a> <a href="#a11y-shubhamkarande13" title="Accessibility">️️️️♿️</a></td>
    <td align="center"><a href="http://harshcasper.github.io"><img src="https://avatars.githubusercontent.com/u/47351025?v=4?s=100" width="100px;" alt=""/><br /><sub><b>Harsh Mishra</b></sub></a><br /><a href="https://github.com/moja-global/moja_global_docs/commits?author=HarshCasper" title="Code">💻</a> <a href="https://github.com/moja-global/moja_global_docs/commits?author=HarshCasper" title="Documentation">📖</a> <a href="https://github.com/moja-global/moja_global_docs/pulls?q=is%3Apr+reviewed-by%3AHarshCasper" title="Reviewed Pull Requests">👀</a> <a href="#maintenance-HarshCasper" title="Maintenance">🚧</a></td>
  </tr>
</table>

<!-- markdownlint-restore -->
<!-- prettier-ignore-end -->

<!-- ALL-CONTRIBUTORS-LIST:END -->

This project follows the [all-contributors](https://github.com/all-contributors/all-contributors) specification. Contributions of any kind welcome!


## Maintainers Reviewers Ambassadors Coaches

The following people are Maintainers Reviewers Ambassadors or Coaches.
<table><tr><td align="center"><a href="http://moja.global"><img src="https://avatars1.githubusercontent.com/u/19564969?v=4" width="100px;" alt="moja global"/><br /><sub><b>moja global</b></sub></a><br /><a href="#projectManagement-moja-global" title="Project Management">📆</a></td></tr></table>


**Maintainers** review and accept proposed changes.
**Reviewers** check proposed changes before they go to the Maintainers.
**Ambassadors** are available to provide training related to this repository.
**Coaches** are available to provide information to new contributors to this repository.
