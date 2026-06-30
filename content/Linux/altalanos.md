# Linux Command Cheat Sheet

## Basic Commands

| Command | Description |
|---|---|
| `sudo [command]` | run `<command>` in superuser mode |
| `nohup [command]` | run `<command>` immune to hangup signal |
| `man [command]` | display help pages of `<command>` |
| `[command] &` | run `<command>` and send task to background |
| `>> [fileA]` | append to fileA, preserving existing contents |
| `> [fileA]` | output to fileA, overwriting contents |
| `echo -n` | display a line of text |
| `xargs` | build command line from previous output |
| `1>2&` | redirect stdout to stderr |
| `fg %N` | go to task N |
| `jobs` | list task |
| `ctrl-z` | suspend current task |

**Pipe (redirect) output**

## Disk Utilities

| Command | Description |
|---|---|
| `df -h, -i` | file system usage |
| `mkfs -t -V` | create file system |
| `resize2fs` | update a filesystem, after lvextend* |
| `fsck -A -N` | file system check & repair |
| `pvcreate` | create physical volume |
| `mount -a -t` | mount a filesystem |
| `fdisk -l` | edit disk partition |
| `lvcreate` | create a logical volume |
| `umount -f -v` | umount a filesystem |

## File Permission

| Command | Description |
|---|---|
| `chmod -c -R` | chmod file read, write and executable permission |
| `touch -a -t` | modify (or create) file timestamp |
| `chown -c -R` | change file ownership |
| `chgrp -c -R` | change file group permission |
| `touch -a -t` | modify (or create) file timestamp |

## File Utilities

| Command | Description |
|---|---|
| `tr -d` | translate or delete character |
| `uniq -c -u` | report or omit repeated lines |
| `split -l` | split file into pieces |
| `wc -w` | print newline, word, and byte counts for each file |
| `head -n` | output the first part of files |
| `cut -s` | remove section from file |
| `diff -q` | file compare, line by line |
| `join -i` | join lines of two files on a common field |
| `more, less` | view file content, one page at a time |
| `sort -n` | sort lines in text file |
| `comm -3` | compare two sorted files, line by line |
| `cat -s` | concatenate files to the standard output |
| `tail -f` | output last part of the file |

## Directory Utilities

| Command | Description |
|---|---|
| `mkdir` | create a directory |
| `rmdir` | remove a directory |

## File Management

| Command | Description |
|---|---|
| `find` | search for a file |
| `ls -a -C -h` | list content of directory |
| `rm -r -f` | remove files and directory |
| `locate -i` | find file, using updatedb(8) database |
| `cp -a -R -i` | copy files or directory |
| `du -s` | disk usage |
| `file -b -i` | identify the file type |
| `mv -f -i` | move files or directory |
| `grep, egrep, fgrep -i -v` | print lines matching pattern |

## File Compression

| Command | Description |
|---|---|
| `tar xvfz` | create or extract .tar or .tgz files |
| `gzip, gunzip, zcat` | create, extract or view .gz files |
| `uuencode, uudecode` | create or extract .Z files |
| `zip, unzip -v` | create or extract .ZIP files |
| `rpm` | create or extract .rpm files |
| `bzip2, bunzip2` | create or extract .bz2 files |
| `rar` | create or extract .rar files |

## File Editor

| Command | Description |
|---|---|
| `ex` | basic editor |
| `vi` | visual editor |
| `nano` | pico clone |
| `view` | view file only |
| `emacs` | extensible, customizable editor |
| `sublime` | yet another text editor |
| `sed` | stream editor |
| `pico` | simple editor |

## Memory & Processes

| Command | Description |
|---|---|
| `free -m` | display free and used system memory |
| `killall` | stop all process by name |
| `sensors` | CPU temperature |
| `top` | display current processes, real time monitoring |
| `kill -1 -9` | send signal to process |
| `service [start\|stop\|restart]` | manage or run sysV init script |
| `ps aux` | display current processes, snapshot |
| `dmesg -k` | display system messages |

## Network

| Command | Description |
|---|---|
| `netstat -r -v` | print network information, routing and connections |
| `telnet` | user interface to the TELNET protocol |
| `tcpdump` | dump network traffic |
| `ssh -i` | openSSH client |
| `ping -c` | print routing packet trace to host network |

## Misc Commands

| Command | Description |
|---|---|
| `pwd -P` | print current working directory |
| `bc` | high precision calculator |
| `expr` | evaluate expression |
| `cal` | print calendar |
| `export` | assign or remove environment variable |
| `` `[command]` `` | backquote, execute command |
| `date -d` | print formatted date |
| `$[variable]` | if set, access the variable |

## Scripting

| Command | Description |
|---|---|
| `awk, gawk` | pattern scanning |
| `tsh` | tiny shell |
| `" "` | anything within double quotes is unchanged except `\` and `$` |
| `' '` | anything within single quote is unchanged |
| `python` | object-oriented programming language |
| `bash` | GNU bourne-again SHell |
| `ksh` | korn shell |
| `php` | general-purpose scripting language |
| `csh, tcsh` | C shell |
| `perl` | Practical Extraction and Report Language |
| `source [file]` | load any functions file into the current shell, requires the file to be executable |

---

*Compiled by Alvin Khoo*
*Source: bit.ly/Linux-Commands*