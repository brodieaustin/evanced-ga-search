Simple javascript to do event tracking for Evanced's calendar search panel.

## How to use this

There are two ways to add this to the Evanced calendar:

### As a linked file

1. Create a directory called `custom` to put any custom files like this.
2. Add `ga-search.min.js` file (or use the regular version) to the `custom/js' folder.
3. Open up the 'common/defines.inc' file (this is how you add Google Anatlyics to Evanced calendar in the first place a la http://kb.evanced.info/article.php?id=310).
4. Add the following after your Google Analytics script:

    `<script src="custom/ga-search.min.js"></script>`

### As an embedded script

1. Open up the `ga-search.min.js` file and copy the contents (yes, it's supposed to look crazy).
2. Open up the `common/defines.inc` file.
3. Add the following after your Google Analytics script:

    `<script> <<stuff you copied>> </script>`

## A word of caution

Since you're cracking open a core Evanced file, be careful and maybe use Git to keep yourself safe.
