Using the echo Command
The echo command is used to show a line of text or a variable's value in the terminal.

Basic Usage
To display a simple message, use echo "message":

Example
echo "Hello, World!"
Hello, World!
Options Overview
The echo command has several options to customize its output:

-n - Don't add a new line at the end
-e - Allow special characters like \n for new lines
-E - Don't allow special characters (default)
-n Option: No Trailing Newline
The -n option prevents echo from adding a newline at the end of the output.

This is useful when you want to continue output on the same line.

Example: No Trailing Newline
echo -n "Hello,";echo " World!"
Hello, World!

-e Option: Enable Backslash Escapes
The -e option enables the use of backslash escapes like \n for new lines, \t for tabs, etc.

This allows for more formatted output.

Example: Enable Backslash Escapes
echo -e "Hello\nWorld!"
Hello
World!
-E Option: Disable Backslash Escapes
The -E option disables the use of backslash escapes, which is the default behavior.

This ensures that the text is output exactly as typed.

Example: Disable Backslash Escapes
echo -E "Hello\nWorld!"
Hello\nWorld!
Using echo in Scripts
The echo command is often used in scripts for debugging or logging information. It helps you see what's happening in your script by printing messages to the terminal.

Example in a Script
#!/bin/bash
echo "Starting the script..."
# Your script commands here
echo "Script finished."
