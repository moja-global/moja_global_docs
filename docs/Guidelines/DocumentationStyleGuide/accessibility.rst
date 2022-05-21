Accessibility
=============

The moja global community strives towards accessibility in our software
products and even in the documentation. Through accessibility, we strive
for successful access to information and resources among people who
might find it challenging to access them otherwise. We aim to bring
contributors with limited ability to the forefront of our community to
have them contribute and access our documentation easily.

The general guidelines for creating accessible documentation pieces are:

-  Maintain consistency across the documentation. Both in style and
   visuals by employing a fixed hierarchy.
-  Avoid language or word usage that is potentially biased for a
   group of people.
-  Focus on the audience that you are writing for and follow a
   conversation style of documentation.
-  Define acronyms, abbreviations, prerequisites initially and never
   assume the technical competency of the reader.
-  Use alternative text for multimedia elements wherever possible, and
   be conscious of the usage of visual elements.

Image accessibility
-------------------

-  Validate that the images, diagrams, graphs, icons possess a
   meaningful alternative-text description for a meaningful equivalent.
-  Use alternative text to describe what the image, digraph, graph or
   icon does, rather than what it looks like.
-  All images, diagrams, graphs, icons should contain a caption that should
   be self-explanatory.
-  Prefer the usage of SVGs over JPEGs and PNGs. SVGs scale on zooming
   and provide better context to the readers.
-  Don’t use images of text, terminal outputs, code samples and other
   information that can be displayed as text. Always transcribe text or
   terminal outputs as code blocks.

Text accessibility
------------------

-  Follow a content hierarchy defined by the content strategy or the
   documentation plan for the project.
-  Use Heading-1 only once in the entire content piece. Use Heading-2
   and Heading-3 for all the sub-headings (#, ##, ### in Markdown).
-  Headings should be correctly nested to indicate their relative
   significance in the documentation piece.
-  Avoid Camel-Case, inconsistent formatting and unnecessary
   capitalization of text.
-  Use a table of contents to provide a quick reference to the content.
-  Always break down your documentation piece into short paragraphs that
   are easy to consume in chunks and pieces.

UI accessibility
----------------

-  Avoid documenting instructions and steps that rely on sensory
   characteristics of the UI and instead rely on what it is supposed to
   do.
-  Document the information that is presented in visual colours, in text
   format as well.
-  Avoid directional indicators, like above, below, top, while
   documenting User Interface Navigation.
-  Provide necessary feedback to designers and engineers on
   accessibility issues.

Links accessibility
-------------------

-  Use meaningful link texts with proper Uniform Resource Locator (URL)
   slugs. Include meaningful keywords in the URL slug and be short,
   descriptive and functional. For example, if your documentation piece
   talks about CMake installation, you can use the slug
   ``cmake-installation/``. Remove numbers, punctuation and duplications
   while making a URL slug.
-  Add an indicator, if a link redirects to an external website and
   opens on another tab, with a text or an icon.
-  If a link downloads an external file, mention the file type, its
   standard purpose and the necessary prerequisites.
-  Don’t use conventional verbs like *here*, *click on this link*, *read
   this* which betrays the needful necessary to the user before clicking
   anything.
-  Use a tool like `broken-link-checker`_ to check for broken links on
   your documentation piece.

Multimedia accessibility
------------------------

-  Provide access to captions, transcripts or descriptions for audio and
   video content.
-  Avoid low-quality GIFs to display processes and workflows and instead
   rely on text and high-quality images.
-  Use proper colour combinations and contrast ratios, with a minimum
   ratio of 4.5:1.
-  Avoid auto-playing media and provide as much context as possible
   before a user clicks on any multimedia element.
-  Use a Screen Reader to verify your documentation piece before
   publishing it anywhere.

.. _broken-link-checker: https://www.npmjs.com/package/broken-link-checker
