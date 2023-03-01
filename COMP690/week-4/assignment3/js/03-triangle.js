/*

Looping a Triangle

Write a loop that displays the following triangle within a console window:

#
##
###
####
#####
######
#######
*/
let hashString = ""
for(let i = 0; i < 7; i++){
    hashString += "#"
    console.log(hashString);
}