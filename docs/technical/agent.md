# D3 Agent

## Introduction

The D3 Agent is a utility that simplifies exporting of data from the customer's environment for processing into the D3 infrastructure. It supports manual operation or can run in a fully automated fashion. The agent guarantees secure transfer of data from your organization.

D3 Agent significantly reduces the burden on the customer's IT resources by eliminating the need to create extract files that confirm to D3 file export specification. The D3 data warehouse requires a comprehensive collection of data, which can be complex to extract from source systems. By using D3 Agent, this complexity is streamlined.

## Technical Details

The D3 Agent runs as a Windows Service. It periodically retrieves configuration settings from the D3 infrastructure and uses this information to process a set of extract commands against your local databases.

D3 Agent can be configured in a variety of ways ranging ensure compatibility with your organization’s security policies:

* **Fully Automated**:	After initial setup, all agent tasks are managed centrally from the D3 infrastructure.

* **Private Credentials**: This option allows you to maintain database connection information locally in your environment, so that database login credentials remain private to you and are not stored in the D3 infrastructure. This option requires a small amount of technical knowledge to setup connection string in a local configuration file.

* **Manual File Transmission**:	By default, the Export Agent performs an efficient transfer of data over HTTPS. The Manual File Transmission option creates a local ZIP file instead that you are then responsible for transmitting to the D3 SFTP server.  This option requires additional technical knowledge to setup a process in your environment for file transmission.

## Setting Up the D3 Agent

### Step 1: Copy Files to Your Server

K-12 Dynamics will provide you a ZIP file containing the D3 Agent files.

You will determine which machine you want the D3 Agent to run on, and then unzip the file to a folder on that machine. The D3 Agent is a Windows application, so it must run on a Windows operating system.

### Step 2: Run as a Windows Service

Run the “install.bat”. This will setup the D3 Agent as a Windows service, which will run automatically in the background, even if no-one is logged into the machine.

Note that depending on your specific version of Windows, you may need to execute this file with elevated permissions. You can do this by right-clicking the file in Windows Explorer and choosing “Run as Administrator”.

### Step 3: Verify Windows Service

Launch the Services tool (find in Administrative Tools, or in Windows Administrative Tools on Windows 10), and verify that the service “D3 Agent” is installed.

If you do not see it, please send us the `instlog.txt` file so that we can diagnose and help you resolve the issue.

### Step 4: Configure Connection Strings

If you would like us to manage your connection strings, you will need to provide us the following information for each database that data is being exported from:

* Server name
* Type of database (e.g. SQL Server, MySQL, Oracle)
* Database name
* Username and password to connect to the database

```eval_rst
.. note::
   The username only requires read access to the database.
```

If you would like to maintain your connection strings locally, then perform the following procedure:

1.	Open the D3Agent.exe.config file in a text editor.
2.	Locate the `<connectionStrings>` element.
3.	Add a connection string for each database that data is being exported from. We have provided a sample connection string in the file for you to use as a starting point. For assistance with setting up the connection string, see <http://www.connectionstrings.com>.
4.	Notify us of the connection string names (not the connectionString value itself that contains your credentials) that you used.

### Step 5: Validate

Once the preceding steps are complete, we will validate our ability to extract data. If you elected to download the data locally rather than transmit directly, then you will need to assist with this validation.

### Manual File Transmission Option

The option to create local files for manual transmission is configured in the centralize D3 environment, so you will need to tell us if this is the approach you want to use. If this option is selected, then a ZIP file is created in the Files folder relative to the application folder. The file is named with the convention YYYYMMDDNNN.ZIP. The “NNN” component will be “001” for the first extract, and if you produce more than one a day, it will increment each time. 

If needed you can change the folder that the files are created in by setting the ExportFolderPath app setting in D3Agent.exe.config.
You will need to create a process or manually upload the file to our secure FTP server:

* Host: sftp.goitservices.com
* Protocol: SFTP (SSH File Transfer Protocol)
* Folder: /import

You will be provided credentials for accessing this server by your implementation team.
