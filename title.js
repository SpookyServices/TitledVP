/*

PROVIDED SPOOKHOST (https://spookhost.xyz/)
AND SPOOKY SERVICES (https://spookysrv.com/)
BY SPOOKY KIPPER (https://spooky.hk/)
DO NOT REMOVE CREDITS

THIS CODE IS OPEN SOURCED AT 
https://github.com/SpookyServices/TitledVP/

THIS CODE IS LICENSED UNDER the
BSD 3-Clause License

*/
if (document.getElementById('pageHeading')) {
    if ((typeof panel_name != "undefined") && (typeof panel_name == "string")) {
        document.title = document.getElementById('pageHeading').innerHTML + " - " + panel_name;
    } else {
        document.title = document.getElementById('pageHeading').innerHTML + " - Control Panel";
    }
} else {
    if ((typeof panel_name != "undefined") && (typeof panel_name == "string")) {
        document.title = panel_name;
    } else {
        document.title = "Control Panel";
    }
}
