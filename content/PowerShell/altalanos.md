# PowerShell Cheat Sheet

## Basic Commands

| Command | Description |
|---|---|
| `Get-Help [cmdlet]` | display help for a cmdlet |
| `Get-Command` | list all available cmdlets |
| `Get-Member` | display properties and methods of an object |
| `Get-Alias` | list cmdlet aliases |
| `Clear-Host` (or `cls`) | clear the console screen |
| `Exit` | close the current PowerShell session |
| `Start-Process [program] -Verb RunAs` | run a program with elevated (admin) privileges |
| `Start-Job { scriptblock }` | run a command as a background job |
| `Get-Job` / `Receive-Job` | list / retrieve results of background jobs |
| `Stop-Job` | stop a background job |
| `>> [fileA]` | append output to fileA |
| `> [fileA]` | output to fileA, overwriting contents |
| `\| Tee-Object [fileA]` | output to console and fileA simultaneously |
| `\|` | pipe output to next command |
| `; ` | separate multiple commands on one line |

## Disk & Storage Utilities

| Command | Description |
|---|---|
| `Get-Volume` | display disk volume usage and free space |
| `Get-Disk` | list physical disks |
| `Get-Partition` | list disk partitions |
| `New-Partition` | create a new disk partition |
| `Format-Volume` | format a volume / create file system |
| `Resize-Partition` | resize an existing partition |
| `Repair-Volume` | check and repair a file system |
| `Mount-DiskImage` | mount an ISO or VHD file |
| `Dismount-DiskImage` | unmount a mounted disk image |
| `Get-PSDrive` | list all PowerShell drives (including mapped drives) |

## File Permission

| Command | Description |
|---|---|
| `Get-Acl [path]` | get file/folder permissions (Access Control List) |
| `Set-Acl [path]` | set file/folder permissions |
| `icacls [path]` | view/modify file permissions (legacy, still common) |
| `attrib +r/-r [file]` | set or clear read-only attribute |
| `Get-ItemProperty [path]` | get file timestamps and attributes |
| `Set-ItemProperty [path] -Name LastWriteTime` | modify file timestamp |
| `takeown /F [file]` | take ownership of a file |

## File Utilities

| Command | Description |
|---|---|
| `Select-String -Pattern` | search text using a pattern (like grep) |
| `Sort-Object` | sort lines/objects |
| `Get-Unique` | report unique lines (input must be pre-sorted) |
| `Measure-Object` | count lines, words, characters |
| `Select-Object -First N` | output the first N lines |
| `Select-Object -Last N` | output the last N lines |
| `Compare-Object` | compare two files/objects, line by line |
| `Get-Content [file]` | view/output file content |
| `Get-Content [file] -Wait` | output appended data as file grows (like `tail -f`) |
| `Set-Content [file]` | write/overwrite content to a file |
| `Add-Content [file]` | append content to a file |
| `ConvertTo-Csv` / `ConvertFrom-Csv` | convert objects to/from CSV format |
| `ConvertTo-Json` / `ConvertFrom-Json` | convert objects to/from JSON format |

## Directory Utilities

| Command | Description |
|---|---|
| `New-Item -ItemType Directory` | create a directory |
| `Remove-Item -Recurse` | remove a directory and its contents |
| `Set-Location` (or `cd`) | change current directory |
| `Push-Location` / `Pop-Location` | save and return to a previous directory |

## File Management

| Command | Description |
|---|---|
| `Get-ChildItem` (or `ls`, `dir`) | list contents of a directory |
| `Get-ChildItem -Recurse -Filter` | search for files recursively |
| `Remove-Item -Force` | remove files or directories |
| `Copy-Item -Recurse` | copy files or directories |
| `Move-Item` | move or rename files or directories |
| `Rename-Item` | rename a file or directory |
| `Test-Path` | check if a file or path exists |
| `Get-Item` | get information about a file or directory |
| `(Get-ChildItem).Length` | get file/folder size |

## File Compression

| Command | Description |
|---|---|
| `Compress-Archive` | create a .zip archive |
| `Expand-Archive` | extract a .zip archive |
| `tar -czvf` | create a .tar.gz archive (built into modern Windows) |
| `tar -xzvf` | extract a .tar.gz archive |

## Text Editors

| Command | Description |
|---|---|
| `notepad [file]` | open Notepad |
| `code [file]` | open in Visual Studio Code |
| `Out-GridView` | view structured data in an interactive grid window |
| `ise` (PowerShell ISE) | built-in PowerShell script editor |

## Processes & Services

| Command | Description |
|---|---|
| `Get-Process` | display currently running processes |
| `Stop-Process -Name [name]` | stop a process by name |
| `Stop-Process -Id [PID] -Force` | force-kill a process by ID |
| `Get-Service` | list services and their status |
| `Start-Service [name]` | start a service |
| `Stop-Service [name]` | stop a service |
| `Restart-Service [name]` | restart a service |
| `Set-Service [name] -StartupType` | change a service's startup type |
| `Get-CimInstance Win32_OperatingSystem` | display OS and memory information |
| `Get-Counter '\Memory\Available MBytes'` | display available memory |
| `Get-EventLog` / `Get-WinEvent` | view Windows event logs |

## Network

| Command | Description |
|---|---|
| `Test-Connection [host]` | ping a host |
| `Test-NetConnection [host] -Port` | test connectivity to a host/port |
| `Get-NetIPAddress` | display IP address configuration |
| `Get-NetIPConfiguration` | display network adapter configuration |
| `Get-NetAdapter` | list network adapters |
| `Resolve-DnsName [host]` | resolve a DNS name (like nslookup) |
| `Get-NetTCPConnection` | display active TCP connections (like netstat) |
| `Invoke-WebRequest [url]` | fetch a web page or download a file |
| `Invoke-RestMethod [url]` | call a REST API |
| `New-PSSession` / `Enter-PSSession` | create or enter a remote PowerShell session |
| `Invoke-Command -ComputerName` | run a command on a remote computer |

## Misc Commands

| Command | Description |
|---|---|
| `Get-Location` (or `pwd`) | print current working directory |
| `Get-Date` | print current date/time |
| `Get-Date -Format` | print formatted date |
| `[math]::Sqrt(), [math]::Pow()` | perform math operations |
| `Get-Random` | generate a random number |
| `$env:VARIABLE` | access an environment variable |
| `Set-Item env:VARIABLE [value]` | set an environment variable |
| `$variable` | access a PowerShell variable |
| `& [command]` | call/invoke operator, runs a command or script block |
| `Get-History` | show command history |
| `Invoke-Expression` | run a string as a command (like eval) |

## Scripting

| Command/Concept | Description |
|---|---|
| `.ps1` | PowerShell script file extension |
| `# comment` | single-line comment |
| `<# ... #>` | multi-line comment block |
| `"text $variable"` | double quotes: variables and expressions are expanded |
| `'text $variable'` | single quotes: text is treated literally, no expansion |
| `function Name { }` | define a function |
| `param()` | define parameters for a function or script |
| `if / elseif / else` | conditional branching |
| `foreach ($i in $collection) { }` | loop over a collection |
| `while () { }` | loop while a condition is true |
| `try / catch / finally` | error handling |
| `. [script.ps1]` | dot-source a script, load its functions into current session |
| `Import-Module` | load a PowerShell module |
| `Set-ExecutionPolicy` | configure script execution permissions |
| `Write-Output` / `Write-Host` | print output to the console |

---

*Formátum: Linux Command Cheat Sheet mintájára összeállítva*