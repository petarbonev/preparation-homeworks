var input = [
    'Telerik Academy', 
    '31 Al. Malinov, Sofia',
    '+359 888 55 55 555',
    '',
    'http://telerikacademy.com/',
    'Martin',
    'Veshev',
    '25',
    '+359 2 981 981',
];
 
var print = this.print || console.log;
var gets = this.gets || ((arr, index) => () => arr[index++])(input, 0);


let companyName = gets();
print('Company Name: ' + companyName);
let companyAddress = gets();
print('Company Address: ' + companyAddress);
let phoneNumber = gets();
print('Phone Number: ' + phoneNumber);
let fax = gets();
if(fax == ''){
    print('Fax: No Fax');
}else{
    print('Fax: ' + fax);
}
let webSite = gets();
print('Web Site: ' + webSite);
let managerFirstName = gets();
print('Manager First Name: ' + managerFirstName);
let managerLastName = gets();
print('Manager Last Name: ' + managerLastName);
let managerAge = gets();
print('Manager Age: ' + managerAge);
let managerPhone = gets();
print('Manager Phone: ' + managerPhone);
