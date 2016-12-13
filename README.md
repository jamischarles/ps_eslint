# `Better Code Quality with ESLint` Instructions

This is the instructions page for the "Better Code Quality with ESLint " Pluralsight course demo code.
The code files can be downloaded on the course page. 

I'll try to keep the code files update when breaking changes happen to the ESLint API. Check the demo code first. 
If there are significant API changes that will break the demo code, I'll include workaound instructions here.



## Caveats  
- In these demos, the emphasis is on analyzing the files with ESLint. A lot of the code may not run due to JS errors, or 
the fact that tools like webpack (or babel) are missing.  This was done on purpose to keep the examples simpler. 
- In cases where I create a new file halfway through the module, I tried to include it here in the `before` folder to 
save you a lot of typing. This may occasionally cause ESLint errors that don't show up in the videos (because the file 
didn't exist yet in the videos). If the ESLint errors in that file bother you, I suggest one of the following options:

1. Try to resolve the errors   
2. Ignore the file using the `--ignore-pattern` flag. IE: `eslint --ignore-pattern public/js/ .` (this will lint all files 
except the `public/js` folder )  
3. Delete the file until the part in the video where it is added.



Almost all demos require the following to be run from the command line in order to work:
- `npm install`
