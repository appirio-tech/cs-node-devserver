
/**
 * Module dependencies.
 */

var express = require('express')
  , routes = require('./routes')

var app = module.exports = express.createServer();

// Configuration

app.configure(function(){
  app.set('views', __dirname + '/views');
  app.set('view engine', 'jade');
  app.use(express.bodyParser());
  app.use(express.methodOverride());
  app.use(app.router);
  app.use(express.static(__dirname + '/public'));
});

app.configure('development', function(){
  app.use(express.errorHandler({ dumpExceptions: true, showStack: true })); 
});

app.configure('production', function(){
  app.use(express.errorHandler()); 
});

// Routes

app.get('/', routes.index);

app.get('/members', function(req, res){

	var output = [{"attributes":{"type":"Member__c","url":"/services/data/v22.0/sobjects/Member__c/a0IU0000000DrmhMAC"},"Name":"camy2079","Challenges_Entered__c":0,"Challenges_Submitted__c":0,"Total_2nd_Place__c":0,"Active_Challenges__c":0,"Total_Money__c":0.00,"Total_1st_Place__c":0,"Id":"a0IU0000000DrmhMAC","Total_Wins__c":0,"Total_3st_Place__c":0,"Profile_Pic__c":"https://acdcstorage.blob.core.windows.net/userimages/profilecamy207925c13c91-3972-48a7-bbf7-fd3ad3060a99.jpg"},{"attributes":{"type":"Member__c","url":"/services/data/v22.0/sobjects/Member__c/a0IU0000000DrmiMAC"},"Name":"anandaprasad","Challenges_Entered__c":0,"Challenges_Submitted__c":0,"Total_2nd_Place__c":0,"Active_Challenges__c":0,"Total_Money__c":0.00,"Total_1st_Place__c":0,"Id":"a0IU0000000DrmiMAC","Total_Wins__c":0,"Total_3st_Place__c":0,"Profile_Pic__c":"http://cloudspokes.s3.amazonaws.com/Cloud_th_100.jpg"},{"attributes":{"type":"Member__c","url":"/services/data/v22.0/sobjects/Member__c/a0IU0000000DrmjMAC"},"Name":"krishnakumari","Challenges_Entered__c":0,"Challenges_Submitted__c":0,"Total_2nd_Place__c":0,"Active_Challenges__c":0,"Total_Money__c":0.00,"Total_1st_Place__c":0,"Id":"a0IU0000000DrmjMAC","Total_Wins__c":0,"Total_3st_Place__c":0,"Profile_Pic__c":"http://cloudspokes.s3.amazonaws.com/Cloud_th_100.jpg"},{"attributes":{"type":"Member__c","url":"/services/data/v22.0/sobjects/Member__c/a0IU0000000DrmkMAC"},"Name":"jurgita","Challenges_Entered__c":0,"Challenges_Submitted__c":0,"Total_2nd_Place__c":0,"Active_Challenges__c":0,"Total_Money__c":0.00,"Total_1st_Place__c":0,"Id":"a0IU0000000DrmkMAC","Total_Wins__c":0,"Total_3st_Place__c":0,"Profile_Pic__c":"http://cloudspokes.s3.amazonaws.com/Cloud_th_100.jpg"},{"attributes":{"type":"Member__c","url":"/services/data/v22.0/sobjects/Member__c/a0IU0000000DrmlMAC"},"Name":"zixuan","Challenges_Entered__c":0,"Challenges_Submitted__c":0,"Total_2nd_Place__c":0,"Active_Challenges__c":0,"Total_Money__c":0.00,"Total_1st_Place__c":0,"Id":"a0IU0000000DrmlMAC","Total_Wins__c":0,"Total_3st_Place__c":0,"Profile_Pic__c":"http://cloudspokes.s3.amazonaws.com/Cloud_th_100.jpg"},{"attributes":{"type":"Member__c","url":"/services/data/v22.0/sobjects/Member__c/a0IU0000000DrmmMAC"},"Name":"vo1stv","Challenges_Entered__c":1,"Challenges_Submitted__c":1,"Total_2nd_Place__c":0,"Active_Challenges__c":1,"Total_Money__c":100.00,"Total_1st_Place__c":1,"Id":"a0IU0000000DrmmMAC","Total_Wins__c":1,"Summary_Bio__c":"My specialty is in handheld or portable client/server technology. I am comfortable in both Windows and Unix environments. My credentials include the degree of Bachelor of Engineering (Electrical) and the completion of all course requirements for my Master's of Engineering (Computer).","Total_3st_Place__c":0,"Profile_Pic__c":"https://acdcstorage.blob.core.windows.net/userimages/profilevo1stv45fc5501-2034-4ca4-87af-6009a674b014.jpg"},{"attributes":{"type":"Member__c","url":"/services/data/v22.0/sobjects/Member__c/a0IU0000000DrmnMAC"},"Name":"chinnupatil","Challenges_Entered__c":0,"Challenges_Submitted__c":0,"Total_2nd_Place__c":0,"Active_Challenges__c":0,"Total_Money__c":0.00,"Total_1st_Place__c":0,"Id":"a0IU0000000DrmnMAC","Total_Wins__c":0,"Total_3st_Place__c":0,"Profile_Pic__c":"http://cloudspokes.s3.amazonaws.com/Cloud_th_100.jpg"},{"attributes":{"type":"Member__c","url":"/services/data/v22.0/sobjects/Member__c/a0IU0000000DO0MMAW"},"Name":"wuxuheu","Challenges_Entered__c":0,"Challenges_Submitted__c":0,"Total_2nd_Place__c":0,"Active_Challenges__c":0,"Total_Money__c":0.00,"Total_1st_Place__c":0,"Id":"a0IU0000000DO0MMAW","Total_Wins__c":0,"Total_3st_Place__c":0,"Profile_Pic__c":"http://cloudspokes.s3.amazonaws.com/Cloud_th_100.jpg"},{"attributes":{"type":"Member__c","url":"/services/data/v22.0/sobjects/Member__c/a0IU0000000DO0cMAG"},"Name":"arusamy","Challenges_Entered__c":0,"Challenges_Submitted__c":0,"Total_2nd_Place__c":0,"Active_Challenges__c":0,"Total_Money__c":0.00,"Total_1st_Place__c":0,"Id":"a0IU0000000DO0cMAG","Total_Wins__c":0,"Total_3st_Place__c":0,"Profile_Pic__c":"http://cloudspokes.s3.amazonaws.com/Cloud_th_100.jpg"},{"attributes":{"type":"Member__c","url":"/services/data/v22.0/sobjects/Member__c/a0IU0000000DO0dMAG"},"Name":"YOunas","Challenges_Entered__c":0,"Challenges_Submitted__c":0,"Total_2nd_Place__c":0,"Active_Challenges__c":0,"Total_Money__c":0.00,"Total_1st_Place__c":0,"Id":"a0IU0000000DO0dMAG","Total_Wins__c":0,"Total_3st_Place__c":0,"Profile_Pic__c":"http://cloudspokes.s3.amazonaws.com/Cloud_th_100.jpg"}];
	var body = JSON.stringify(output);

	res.writeHead(200, {
	  "Content-Type": "application/json",
	  "Access-Control-Allow-Origin": "*"
	});
	
	res.end(body);

 });

app.get('/challenges', function(req, res){

	var output = [{"attributes":{"type":"Challenge__c","url":"/services/data/v22.0/sobjects/Challenge__c/a0GU00000000PmuMAE"},"Name":"Event - Virtual Stamp Manager","End_Date__c":"2011-08-12T07:59:00.000+0000","Challenge_Categories__r":{"totalSize":2,"done":true,"records":[{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riZyIAI"},"Display_Name__c":"Heroku","Id":"a08U0000001riZyIAI","Challenge__c":"a0GU00000000PmuMAE"},{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riZxIAI"},"Display_Name__c":"Salesforce.com","Id":"a08U0000001riZxIAI","Challenge__c":"a0GU00000000PmuMAE"}]},"Registered_Members__c":9,"Top_Prize__c":"$2000","Challenge_Id__c":"1163","Id":"a0GU00000000PmuMAE","Is_Open__c":"false","Start_Date__c":"2011-08-05T17:00:00.000+0000","Description__c":"<p>Ever go to a conference and have to collect stamps on a card in order to win something ?  This app / set of apps makes that a thing of the past for attendees, sponsors and event administrators.  </p>\n\n<p>At many conferences attendees are required to go to a set of different sponsors and get a stamp on a card.  Once they collect all the stamps they win a prize, get an invitation to an event, enter a raffle, etc.  The purpose of this all is to automate that process through mobile apps that replace the stamps and cards.</p>\n\n<p>In our example, once the attendee collects all the “virtual stamps” they will receive an email (that provides them special access to a VIP event).\nThere are three mini apps (operating against the same data model) that make up this complete system:</p>\n<p>\n<b>Stamp Collector (Attendees) </b>– Application that allows the attendee to register, collect ‘stamp’s and see their progress.  This application should:\n<br>- Allow you to register your name, phone and email into the app (optionally <br>- your company name)\n<br>- Ability enter a stamp (unique number provided by the sponsor) and get confirmation of success for that sponsor stamp\n<br>- Ability to view the status of your stamps (ie which 5 sponsors you have entered stamps for, what three you have remaining)\n</p>\n\n<p><b>Sponsor Stamper (Sponsor)</b> – Application that allows the sponsor to generate a unique number they give each attendee to act as a stamp\n<br>- Get the next unique stamp (unique number) to give to an attendee\n<br>- Have this sit behind a protected login\n</p>\n<p>\n<b>Event Administrator </b>– Admin function to manage the event, the sponsors and see / edit attendees status\n<br>- Automated email that goes out to the registrant once all the scans have been completed\n<br>- Ability to manage the system (setup the template email, view/update the sponsors of a contest, view / update the registration status of a contact).\n<br>- Ability to manage the number generator for the sponsors\n\n<b>See attached document for key functional details</b></p>"},{"attributes":{"type":"Challenge__c","url":"/services/data/v22.0/sobjects/Challenge__c/a0GU00000000fKxMAI"},"Name":"Google App Engine Shared Contacts Manager","End_Date__c":"2011-08-26T04:00:00.000+0000","Challenge_Categories__r":{"totalSize":1,"done":true,"records":[{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riaVIAQ"},"Display_Name__c":"Google","Id":"a08U0000001riaVIAQ","Challenge__c":"a0GU00000000fKxMAI"}]},"Registered_Members__c":20,"Top_Prize__c":"$1250","Challenge_Id__c":"1171","Id":"a0GU00000000fKxMAI","Is_Open__c":"false","Start_Date__c":"2011-08-18T05:00:00.000+0000","Description__c":"Develop a Google App Engine application that allows an administrator to upload a data file (CSV) to create domain Shared Contacts.  Also provide views for browsing and searching a list of all existing shared contacts and a form to create new shared contacts individually."},{"attributes":{"type":"Challenge__c","url":"/services/data/v22.0/sobjects/Challenge__c/a0GU00000000WpgMAE"},"Name":"Primary Contact Manager","End_Date__c":"2011-08-19T04:00:00.000+0000","Challenge_Categories__r":{"totalSize":1,"done":true,"records":[{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riaCIAQ"},"Display_Name__c":"Salesforce.com","Id":"a08U0000001riaCIAQ","Challenge__c":"a0GU00000000WpgMAE"}]},"Registered_Members__c":24,"Top_Prize__c":"$500","Challenge_Id__c":"1168","Id":"a0GU00000000WpgMAE","Is_Open__c":"false","Start_Date__c":"2011-08-11T05:00:00.000+0000","Description__c":"<p>A common use case in Salesforce.com is to mark a contact as the primary for an account. We want to create an easy way for users to select an account&#39;s primary contact, edit their details and quickly create a new primary contact.</p>"},{"attributes":{"type":"Challenge__c","url":"/services/data/v22.0/sobjects/Challenge__c/a0GU00000000UWCMA2"},"Name":"RSS to Chatter Groups","End_Date__c":"2011-08-17T04:00:00.000+0000","Challenge_Categories__r":{"totalSize":5,"done":true,"records":[{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riaGIAQ"},"Display_Name__c":"Heroku","Id":"a08U0000001riaGIAQ","Challenge__c":"a0GU00000000UWCMA2"},{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riaFIAQ"},"Display_Name__c":"AWS","Id":"a08U0000001riaFIAQ","Challenge__c":"a0GU00000000UWCMA2"},{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riaEIAQ"},"Display_Name__c":"Google","Id":"a08U0000001riaEIAQ","Challenge__c":"a0GU00000000UWCMA2"},{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riaHIAQ"},"Display_Name__c":"Cloud Foundry","Id":"a08U0000001riaHIAQ","Challenge__c":"a0GU00000000UWCMA2"},{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riaDIAQ"},"Display_Name__c":"Salesforce.com","Id":"a08U0000001riaDIAQ","Challenge__c":"a0GU00000000UWCMA2"}]},"Registered_Members__c":9,"Top_Prize__c":"$750","Challenge_Id__c":"1165","Id":"a0GU00000000UWCMA2","Is_Open__c":"false","Start_Date__c":"2011-08-09T05:00:00.000+0000","Description__c":"<p>Create an automated way to pull RSS feeds into Chatter groups. Companies have a need to keep their employees informed about topics relating to their business. What better way then to send RSS feeds into Chatter! For instance, a company may want to add new articles from the Apple iOS RSS feed to their Mobile chatter group.</p>"},{"attributes":{"type":"Challenge__c","url":"/services/data/v22.0/sobjects/Challenge__c/a0GU00000001HxWMAU"},"Name":"Redesign CloudSpokes Site on Ruby on Rails","End_Date__c":"2011-09-16T13:00:00.000+0000","Challenge_Categories__r":{"totalSize":2,"done":true,"records":[{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riasIAA"},"Display_Name__c":"Heroku","Id":"a08U0000001riasIAA","Challenge__c":"a0GU00000001HxWMAU"},{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riatIAA"},"Display_Name__c":"Ruby","Id":"a08U0000001riatIAA","Challenge__c":"a0GU00000001HxWMAU"}]},"Registered_Members__c":3,"Top_Prize__c":"$600","Challenge_Id__c":"1188","Id":"a0GU00000001HxWMAU","Is_Open__c":"false","Start_Date__c":"2011-09-12T05:00:00.000+0000","Description__c":"We are looking for ideas on how to best rebuild the web front of CloudSpokes on Heroku and Ruby on Rails. We feel the best way to tackle this is to rebuild the website with the same look and feel but using Ruby on Rails. So here’s our hypothetical question for this challenge, “if you were hired to port the CloudSpokes site to Ruby on Rails, what’s the process that you would use to do so? How would you architect it?”<br><br>Please refer to <a href=\"http://www.cloudspokes.com\" target=\"_blank\">CloudSpokes</a> for all the pages that need to be redesigned."},{"attributes":{"type":"Challenge__c","url":"/services/data/v22.0/sobjects/Challenge__c/a0GU0000001Od2vMAC"},"Name":"Salesforce Mashup with jQuery & Google Maps","End_Date__c":"2012-01-09T04:00:00.000+0000","Challenge_Categories__r":{"totalSize":3,"done":true,"records":[{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001rrdsIAA"},"Display_Name__c":"Google","Id":"a08U0000001rrdsIAA","Challenge__c":"a0GU0000001Od2vMAC"},{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001rrdnIAA"},"Display_Name__c":"Salesforce.com","Id":"a08U0000001rrdnIAA","Challenge__c":"a0GU0000001Od2vMAC"},{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001rrdxIAA"},"Display_Name__c":"JavaScript","Id":"a08U0000001rrdxIAA","Challenge__c":"a0GU0000001Od2vMAC"}]},"Registered_Members__c":29,"Top_Prize__c":"$2500","Challenge_Id__c":"1345","Id":"a0GU0000001Od2vMAC","Is_Open__c":"false","Start_Date__c":"2011-12-24T13:17:00.000+0000","Description__c":"Develop an interactive map representing global sales from Salesforce using Google Maps. See mockup in the Assets section."},{"attributes":{"type":"Challenge__c","url":"/services/data/v22.0/sobjects/Challenge__c/a0GU00000000VbpMAE"},"Name":"CloudSpokes Authentication Component","End_Date__c":"2011-08-18T04:00:00.000+0000","Challenge_Categories__r":{"totalSize":5,"done":true,"records":[{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riaRIAQ"},"Display_Name__c":"Google","Id":"a08U0000001riaRIAQ","Challenge__c":"a0GU00000000VbpMAE"},{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riaQIAQ"},"Display_Name__c":"Salesforce.com","Id":"a08U0000001riaQIAQ","Challenge__c":"a0GU00000000VbpMAE"},{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riaSIAQ"},"Display_Name__c":"AWS","Id":"a08U0000001riaSIAQ","Challenge__c":"a0GU00000000VbpMAE"},{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riaUIAQ"},"Display_Name__c":"Cloud Foundry","Id":"a08U0000001riaUIAQ","Challenge__c":"a0GU00000000VbpMAE"},{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riaTIAQ"},"Display_Name__c":"Heroku","Id":"a08U0000001riaTIAQ","Challenge__c":"a0GU00000000VbpMAE"}]},"Registered_Members__c":22,"Top_Prize__c":"750","Challenge_Id__c":"1166","Id":"a0GU00000000VbpMAE","Is_Open__c":"false","Start_Date__c":"2011-08-10T05:00:00.000+0000","Description__c":"As part of our infrastructure rebuild, we want to develop a flexible and robust component for CloudSpokes that authenticates a user with Force.com."},{"attributes":{"type":"Challenge__c","url":"/services/data/v22.0/sobjects/Challenge__c/a0GU00000000VbqMAE"},"Name":"Salesforce.com Callback Scheduler","End_Date__c":"2011-08-18T04:00:00.000+0000","Challenge_Categories__r":{"totalSize":1,"done":true,"records":[{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riZuIAI"},"Display_Name__c":"Salesforce.com","Id":"a08U0000001riZuIAI","Challenge__c":"a0GU00000000VbqMAE"}]},"Registered_Members__c":10,"Top_Prize__c":"$500","Challenge_Id__c":"1167","Id":"a0GU00000000VbqMAE","Is_Open__c":"false","Start_Date__c":"2011-08-10T05:00:00.000+0000","Description__c":"<p>Create a Visualforce interface that allows call center representatives to quickly and easily schedule a call back for an Opportunity.</p>"},{"attributes":{"type":"Challenge__c","url":"/services/data/v22.0/sobjects/Challenge__c/a0GU00000000ZnTMAU"},"Name":"PHP Library for Box API","End_Date__c":"2011-08-30T04:00:00.000+0000","Challenge_Categories__r":{"totalSize":1,"done":true,"records":[{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riaaIAA"},"Display_Name__c":"Other","Id":"a08U0000001riaaIAA","Challenge__c":"a0GU00000000ZnTMAU"}]},"Registered_Members__c":19,"Top_Prize__c":"$1000","Challenge_Id__c":"1169","Id":"a0GU00000000ZnTMAU","Is_Open__c":"false","Start_Date__c":"2011-08-15T05:00:00.000+0000","Description__c":"<p>Box provides a RESTful API that allows developers to interact with its core functionality and build applications on top of the Box platform. We want to create a well-designed PHP library that makes it simple and easy for developers to get up and running with the API.</p>"},{"attributes":{"type":"Challenge__c","url":"/services/data/v22.0/sobjects/Challenge__c/a0GU0000001MNsiMAG"},"Name":"Chatter Birthday Alerts","End_Date__c":"2011-12-06T08:00:00.000+0000","Challenge_Categories__r":{"totalSize":1,"done":true,"records":[{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001ridEIAQ"},"Display_Name__c":"Salesforce.com","Id":"a08U0000001ridEIAQ","Challenge__c":"a0GU0000001MNsiMAG"}]},"Registered_Members__c":54,"Top_Prize__c":"$750","Challenge_Id__c":"1319","Id":"a0GU0000001MNsiMAG","Is_Open__c":"false","Start_Date__c":"2011-11-23T08:00:00.000+0000","Description__c":"Happy Birthday Chatter followers!!  This contest idea is to provide birthday alerts for people who are following me in Chatter via the collaborative detail information stored on Contact records.  <br><br>\nAlthough there are many uses for this information, we would primarily like to inform our followers when our birthday arrives. <br><br> \n\nYour task is to develop a fancy way to setup the notification!!"}];
	var body = JSON.stringify(output);

	res.writeHead(200, {
	  "Content-Type": "application/json",
	  "Access-Control-Allow-Origin": "*"
	});

	res.end(body);

 });


app.get('/categories', function(req, res){

	var output = [{"attributes":{"type":"Category__c","url":"/services/data/v23.0/sobjects/Category__c/a07U0000000bGhzIAE"},"Id":"a07U0000000bGhzIAE","Name":"AWS"},{"attributes":{"type":"Category__c","url":"/services/data/v23.0/sobjects/Category__c/a07U0000000bGlYIAU"},"Id":"a07U0000000bGlYIAU","Name":"Cloud Foundry"},{"attributes":{"type":"Category__c","url":"/services/data/v23.0/sobjects/Category__c/a07U0000000bGhyIAE"},"Id":"a07U0000000bGhyIAE","Name":"Google"},{"attributes":{"type":"Category__c","url":"/services/data/v23.0/sobjects/Category__c/a07U0000000bGi0IAE"},"Id":"a07U0000000bGi0IAE","Name":"Heroku"},{"attributes":{"type":"Category__c","url":"/services/data/v23.0/sobjects/Category__c/a07U0000000bGlWIAU"},"Id":"a07U0000000bGlWIAU","Name":"Java"},{"attributes":{"type":"Category__c","url":"/services/data/v23.0/sobjects/Category__c/a07U0000000bGlVIAU"},"Id":"a07U0000000bGlVIAU","Name":"JavaScript"},{"attributes":{"type":"Category__c","url":"/services/data/v23.0/sobjects/Category__c/a07U0000000bGlSIAU"},"Id":"a07U0000000bGlSIAU","Name":"Mobile"},{"attributes":{"type":"Category__c","url":"/services/data/v23.0/sobjects/Category__c/a07U0000000bGlRIAU"},"Id":"a07U0000000bGlRIAU","Name":"Node.JS"},{"attributes":{"type":"Category__c","url":"/services/data/v23.0/sobjects/Category__c/a07U0000000bGlUIAU"},"Id":"a07U0000000bGlUIAU","Name":"Other"},{"attributes":{"type":"Category__c","url":"/services/data/v23.0/sobjects/Category__c/a07U0000006Lg6kIAC"},"Id":"a07U0000006Lg6kIAC","Name":"Python"},{"attributes":{"type":"Category__c","url":"/services/data/v23.0/sobjects/Category__c/a07U0000000bGlXIAU"},"Id":"a07U0000000bGlXIAU","Name":"Ruby"},{"attributes":{"type":"Category__c","url":"/services/data/v23.0/sobjects/Category__c/a07U0000000bGhxIAE"},"Id":"a07U0000000bGhxIAE","Name":"Salesforce.com"},{"attributes":{"type":"Category__c","url":"/services/data/v23.0/sobjects/Category__c/a07U0000000bGlTIAU"},"Id":"a07U0000000bGlTIAU","Name":"Twilio"}]
	var body = JSON.stringify(output);

	res.writeHead(200, {
	  "Content-Type": "application/json",
	  "Access-Control-Allow-Origin": "*"
	});

	res.end(body);

 });

app.get('/scorecards', function(req, res){

	var output = [{"attributes":{"type":"QwikScore__c","url":"/services/data/v23.0/sobjects/QwikScore__c/a0PU00000005VoDMAU"},"Id":"a0PU00000005VoDMAU","Name":"Creative Submission"},{"attributes":{"type":"QwikScore__c","url":"/services/data/v23.0/sobjects/QwikScore__c/a0PU00000005VoFMAU"},"Id":"a0PU00000005VoFMAU","Name":"Google App Engine"},{"attributes":{"type":"QwikScore__c","url":"/services/data/v23.0/sobjects/QwikScore__c/a0PU00000005VoGMAU"},"Id":"a0PU00000005VoGMAU","Name":"Innovation"},{"attributes":{"type":"QwikScore__c","url":"/services/data/v23.0/sobjects/QwikScore__c/a0PU00000005VoIMAU"},"Id":"a0PU00000005VoIMAU","Name":"Design Scorecard"},{"attributes":{"type":"QwikScore__c","url":"/services/data/v23.0/sobjects/QwikScore__c/a0PU00000005aySMAQ"},"Id":"a0PU00000005aySMAQ","Name":"Bug Fixes"},{"attributes":{"type":"QwikScore__c","url":"/services/data/v23.0/sobjects/QwikScore__c/a0PU00000005b75MAA"},"Id":"a0PU00000005b75MAA","Name":"Salesforce.com"},{"attributes":{"type":"QwikScore__c","url":"/services/data/v23.0/sobjects/QwikScore__c/a0PU00000005euVMAQ"},"Id":"a0PU00000005euVMAQ","Name":"Pass / Fail"},{"attributes":{"type":"QwikScore__c","url":"/services/data/v23.0/sobjects/QwikScore__c/a0PU00000006Q97MAE"},"Id":"a0PU00000006Q97MAE","Name":"Simple 1-10 Scale"}]	
	var body = JSON.stringify(output);

	res.writeHead(200, {
	  "Content-Type": "application/json",
	  "Access-Control-Allow-Origin": "*"
	});

	res.end(body);

 });

app.get('/terms', function(req, res){

	var output = [{"attributes":{"type":"Terms_of_Service__c","url":"/services/data/v23.0/sobjects/Terms_of_Service__c/a0kU00000004tbxIAA"},"Id":"a0kU00000004tbxIAA","Name":"Hackathon Terms"},{"attributes":{"type":"Terms_of_Service__c","url":"/services/data/v23.0/sobjects/Terms_of_Service__c/a0kU00000004tc2IAA"},"Id":"a0kU00000004tc2IAA","Name":"Box.net Terms"},{"attributes":{"type":"Terms_of_Service__c","url":"/services/data/v23.0/sobjects/Terms_of_Service__c/a0kU00000004tc7IAA"},"Id":"a0kU00000004tc7IAA","Name":"Private Hackathon Terms"},{"attributes":{"type":"Terms_of_Service__c","url":"/services/data/v23.0/sobjects/Terms_of_Service__c/a0kU00000004qGZIAY"},"Id":"a0kU00000004qGZIAY","Name":"Standard Terms & Conditions"}]
	var body = JSON.stringify(output);

	res.writeHead(200, {
	  "Content-Type": "application/json",
	  "Access-Control-Allow-Origin": "*"
	});

	res.end(body);

 });

app.get('/challenge/:id', function(req, res){

	var output = [{"attributes":{"type":"Challenge__c","url":"/services/data/v22.0/sobjects/Challenge__c/a0GU00000000PmuMAE"},"Name":"Event - Virtual Stamp Manager","End_Date__c":"2011-08-12T07:59:00.000+0000","Challenge_Categories__r":{"totalSize":2,"done":true,"records":[{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riZyIAI"},"Display_Name__c":"Heroku","Id":"a08U0000001riZyIAI","Challenge__c":"a0GU00000000PmuMAE"},{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v22.0/sobjects/Challenge_Category__c/a08U0000001riZxIAI"},"Display_Name__c":"Salesforce.com","Id":"a08U0000001riZxIAI","Challenge__c":"a0GU00000000PmuMAE"}]},"Registered_Members__c":9,"Top_Prize__c":"$2000","Challenge_Id__c":"1163","Id":"a0GU00000000PmuMAE","Is_Open__c":"false","Start_Date__c":"2011-08-05T17:00:00.000+0000","Description__c":"<p>Ever go to a conference and have to collect stamps on a card in order to win something ?  This app / set of apps makes that a thing of the past for attendees, sponsors and event administrators.  </p>\n\n<p>At many conferences attendees are required to go to a set of different sponsors and get a stamp on a card.  Once they collect all the stamps they win a prize, get an invitation to an event, enter a raffle, etc.  The purpose of this all is to automate that process through mobile apps that replace the stamps and cards.</p>\n\n<p>In our example, once the attendee collects all the “virtual stamps” they will receive an email (that provides them special access to a VIP event).\nThere are three mini apps (operating against the same data model) that make up this complete system:</p>\n<p>\n<b>Stamp Collector (Attendees) </b>– Application that allows the attendee to register, collect ‘stamp’s and see their progress.  This application should:\n<br>- Allow you to register your name, phone and email into the app (optionally <br>- your company name)\n<br>- Ability enter a stamp (unique number provided by the sponsor) and get confirmation of success for that sponsor stamp\n<br>- Ability to view the status of your stamps (ie which 5 sponsors you have entered stamps for, what three you have remaining)\n</p>\n\n<p><b>Sponsor Stamper (Sponsor)</b> – Application that allows the sponsor to generate a unique number they give each attendee to act as a stamp\n<br>- Get the next unique stamp (unique number) to give to an attendee\n<br>- Have this sit behind a protected login\n</p>\n<p>\n<b>Event Administrator </b>– Admin function to manage the event, the sponsors and see / edit attendees status\n<br>- Automated email that goes out to the registrant once all the scans have been completed\n<br>- Ability to manage the system (setup the template email, view/update the sponsors of a contest, view / update the registration status of a contact).\n<br>- Ability to manage the number generator for the sponsors\n\n<b>See attached document for key functional details</b></p>"}];	
	var body = JSON.stringify(output);

	res.writeHead(200, {
	  "Content-Type": "application/json",
	  "Access-Control-Allow-Origin": "*"
	});

	res.end(body);

 });

app.get('/challenge/:id/reviewers', function(req, res){

	var output = [{"attributes":{"type":"Challenge_Reviewer__c","url":"/services/data/v23.0/sobjects/Challenge_Reviewer__c/a0CU00000008tGbMAI"},"Id":"a0CU00000008tGbMAI","Name":"jeffdonthemic"},{"attributes":{"type":"Challenge_Reviewer__c","url":"/services/data/v23.0/sobjects/Challenge_Reviewer__c/a0CU00000008tGcMAI"},"Id":"a0CU00000008tGcMAI","Name":"mess"}];
	var body = JSON.stringify(output);

	res.writeHead(200, {
	  "Content-Type": "application/json",
	  "Access-Control-Allow-Origin": "*"
	});

	res.end(body);

 });

app.get('/challenge/:id/notifiers', function(req, res){

	var output = [{"attributes":{"type":"Challenge_Comment_Notifier__c","url":"/services/data/v23.0/sobjects/Challenge_Comment_Notifier__c/a0lU0000000KdSSIA0"},"Id":"a0lU0000000KdSSIAZ","Name":"tpayne"},{"attributes":{"type":"Challenge_Comment_Notifier__c","url":"/services/data/v23.0/sobjects/Challenge_Comment_Notifier__c/a0lU0000001w2g6IAA"},"Id":"a0lU0000001w2g6IAX","Name":"aschwartz"}];
	var body = JSON.stringify(output);

	res.writeHead(200, {
	  "Content-Type": "application/json",
	  "Access-Control-Allow-Origin": "*"
	});

	res.end(body);

 });

app.get('/challenge/:id/participants', function(req, res){

	var output = [{"attributes":{"type":"Challenge_Participant__c","url":"/services/data/v23.0/sobjects/Challenge_Participant__c/a0AU00000009Jp9MAE"},"Id":"a0AU00000009Jp9MAE","Name":"jdoe"},{"attributes":{"type":"Challenge_Participant__c","url":"/services/data/v23.0/sobjects/Challenge_Participant__c/a0AU00000009JpAMAU"},"Id":"a0AU00000009JpAMAU","Name":"tspool"},{"attributes":{"type":"Challenge_Participant__c","url":"/services/data/v23.0/sobjects/Challenge_Participant__c/a0AU00000009JpBMAU"},"Id":"a0AU00000009JpBMAU","Name":"edlover"}];
	var body = JSON.stringify(output);

	res.writeHead(200, {
	  "Content-Type": "application/json",
	  "Access-Control-Allow-Origin": "*"
	});

	res.end(body);

 });

app.get('/challenge/:id/prizes', function(req, res){

	var output = [{"attributes":{"type":"Challenge_Prize__c","url":"/services/data/v23.0/sobjects/Challenge_Prize__c/a0BU0000000fwZTMAY"},"Id":"a0BU0000000fwZTMAY","Place__c":1.0,"Points__c":250.0,"Prize__c":"$250","Value__c":250.0},{"attributes":{"type":"Challenge_Prize__c","url":"/services/data/v23.0/sobjects/Challenge_Prize__c/a0BU0000000fwZYMAY"},"Id":"a0BU0000000fwZYMAY","Place__c":2.0,"Points__c":100.0,"Prize__c":"$100","Value__c":100.0},{"attributes":{"type":"Challenge_Prize__c","url":"/services/data/v23.0/sobjects/Challenge_Prize__c/a0BU0000000fwZdMAI"},"Id":"a0BU0000000fwZdMAI","Place__c":3.0,"Points__c":50.0,"Prize__c":"$50","Value__c":50.0}];
	var body = JSON.stringify(output);

	res.writeHead(200, {
	  "Content-Type": "application/json",
	  "Access-Control-Allow-Origin": "*"
	});

	res.end(body);

 });

app.get('/challenge/:id/categories', function(req, res){

	var output = [{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v23.0/sobjects/Challenge_Category__c/a08U0000001rrd5IAA"},"Id":"a08U0000001rrd5IAA","Name":"Ruby"},{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v23.0/sobjects/Challenge_Category__c/a08U0000001rrdsIAA"},"Id":"a08U0000001rrdsIAA","Name":"Heroku"},{"attributes":{"type":"Challenge_Category__c","url":"/services/data/v23.0/sobjects/Challenge_Category__c/a08U0000001ry4SIAQ"},"Id":"a08U0000001ry4SIAQ","Name":"Cloud Foundry"}];
	var body = JSON.stringify(output);

	res.writeHead(200, {
	  "Content-Type": "application/json",
	  "Access-Control-Allow-Origin": "*"
	});

	res.end(body);

 });

app.get('/challenge/:id/assets', function(req, res){

	var output = [{"attributes":{"type":"Challenge__c","url":"/services/data/v23.0/sobjects/Challenge__c/a0GU0000001O8JzMAK"},"Id":"a0GU0000001O8JzMAK","Attachments":{"totalSize":2,"done":true,"records":[{"attributes":{"type":"Attachment","url":"/services/data/v23.0/sobjects/Attachment/00PU0000000T4IWMA0"},"Id":"00PU0000000T4IWMA0","Name":"gene-mas-cleaned.pdf"},{"attributes":{"type":"Attachment","url":"/services/data/v23.0/sobjects/Attachment/00PU0000000T4IbMAK"},"Id":"00PU0000000T4IbMAK","Name":"Project Entry Design Doc.pdf"}]}}]
	var body = JSON.stringify(output);

	res.writeHead(200, {
	  "Content-Type": "application/json",
	  "Access-Control-Allow-Origin": "*"
	});

	res.end(body);

 });

app.get('/questions', function(req, res){

	var output = [{"attributes":{"type":"Quick_Quiz_Question__c","url":"/services/data/v23.0/sobjects/Quick_Quiz_Question__c/a0xZ00000004uIeIAI"},"Question__c":"<script type=\"text/javascript\">\nfunction displayDate3()\n{\ndocument.getElementByDiv(\"demo\").span=Date();\n}\n</script>\n\n<button type=\"button\" onclick=\"displayDate()\">Display Date</button>","Type__c":"Java","Id":"a0xZ00000004uIeIAI","Answer__c":"<scripttype=\"text/javascript\">functiondisplayDate3(){document.getElementByDiv(\"demo\").span=Date();}</script><buttontype=\"button\"onclick=\"displayDate()\">DisplayDate</button>"},{"attributes":{"type":"Quick_Quiz_Question__c","url":"/services/data/v23.0/sobjects/Quick_Quiz_Question__c/a0xZ00000004uIyIAI"},"Question__c":"<script type=\"text/javascript\">\r\nfunction displayDate7()\r\n{\r\ndocument.getElementByDiv(\"demo\").span=Date();\r\n}\r\n</script>\r\n\r\n<button type=\"button\" onclick=\"displayDate()\">Display Date</button>","Type__c":"Java","Id":"a0xZ00000004uIyIAI","Answer__c":"<scripttype=\"text/javascript\">functiondisplayDate7(){document.getElementByDiv(\"demo\").span=Date();}</script><buttontype=\"button\"onclick=\"displayDate()\">DisplayDate</button>"},{"attributes":{"type":"Quick_Quiz_Question__c","url":"/services/data/v23.0/sobjects/Quick_Quiz_Question__c/a0xZ00000004uIZIAY"},"Question__c":"<script type=\"text/javascript\">\r\nfunction displayDate2()\r\n{\r\ndocument.getElementByDiv(\"demo\").span=Date();\r\n}\r\n</script>\r\n\r\n<button type=\"button\" onclick=\"displayDate()\">Display Date</button>","Type__c":"Ruby","Id":"a0xZ00000004uIZIAY","Answer__c":"<scripttype=\"text/javascript\">functiondisplayDate2(){document.getElementByDiv(\"demo\").span=Date();}</script><buttontype=\"button\"onclick=\"displayDate()\">DisplayDate</button>"},{"attributes":{"type":"Quick_Quiz_Question__c","url":"/services/data/v23.0/sobjects/Quick_Quiz_Question__c/a0xZ00000004uIoIAI"},"Question__c":"<script type=\"text/javascript\">\r\nfunction displayDate5()\r\n{\r\ndocument.getElementByDiv(\"demo\").span=Date();\r\n}\r\n</script>\r\n\r\n<button type=\"button\" onclick=\"displayDate()\">Display Date</button>","Type__c":"Ruby","Id":"a0xZ00000004uIoIAI","Answer__c":"<scripttype=\"text/javascript\">functiondisplayDate5(){document.getElementByDiv(\"demo\").span=Date();}</script><buttontype=\"button\"onclick=\"displayDate()\">DisplayDate</button>"},{"attributes":{"type":"Quick_Quiz_Question__c","url":"/services/data/v23.0/sobjects/Quick_Quiz_Question__c/a0xZ00000004uIpIAI"},"Question__c":"<script type=\"text/javascript\">\r\nfunction displayDate8()\r\n{\r\ndocument.getElementByDiv(\"demo\").span=Date();\r\n}\r\n</script>\r\n\r\n<button type=\"button\" onclick=\"displayDate()\">Display Date</button>","Type__c":"Java","Id":"a0xZ00000004uIpIAI","Answer__c":"<scripttype=\"text/javascript\">functiondisplayDate8(){document.getElementByDiv(\"demo\").span=Date();}</script><buttontype=\"button\"onclick=\"displayDate()\">DisplayDate</button>"},{"attributes":{"type":"Quick_Quiz_Question__c","url":"/services/data/v23.0/sobjects/Quick_Quiz_Question__c/a0xZ00000004uIPIAY"},"Question__c":"<script type=\"text/javascript\">\nfunction displayDate()\n{\ndocument.getElementByDiv(\"demo\").span=Date();\n}\n</script>\n\n<button type=\"button\" onclick=\"displayDate()\">Display Date</button>","Type__c":"JavaScript","Id":"a0xZ00000004uIPIAY","Answer__c":"<scripttype=\"text/javascript\">functiondisplayDate(){document.getElementByDiv(\"demo\").span=Date();}</script><buttontype=\"button\"onclick=\"displayDate()\">DisplayDate</button>"},{"attributes":{"type":"Quick_Quiz_Question__c","url":"/services/data/v23.0/sobjects/Quick_Quiz_Question__c/a0xZ00000004uIUIAY"},"Question__c":"<script type=\"text/javascript\">\r\nfunction displayDate1()\r\n{\r\ndocument.getElementByDiv(\"demo\").span=Date();\r\n}\r\n</script>\r\n\r\n<button type=\"button\" onclick=\"displayDate()\">Display Date</button>","Type__c":"Ruby","Id":"a0xZ00000004uIUIAY","Answer__c":"<scripttype=\"text/javascript\">functiondisplayDate1(){document.getElementByDiv(\"demo\").span=Date();}</script><buttontype=\"button\"onclick=\"displayDate()\">DisplayDate</button>"},{"attributes":{"type":"Quick_Quiz_Question__c","url":"/services/data/v23.0/sobjects/Quick_Quiz_Question__c/a0xZ00000004uIjIAI"},"Question__c":"<script type=\"text/javascript\">\r\nfunction displayDate4()\r\n{\r\ndocument.getElementByDiv(\"demo\").span=Date();\r\n}\r\n</script>\r\n\r\n<button type=\"button\" onclick=\"displayDate()\">Display Date</button>","Type__c":"JavaScript","Id":"a0xZ00000004uIjIAI","Answer__c":"<scripttype=\"text/javascript\">functiondisplayDate4(){document.getElementByDiv(\"demo\").span=Date();}</script><buttontype=\"button\"onclick=\"displayDate()\">DisplayDate</button>"},{"attributes":{"type":"Quick_Quiz_Question__c","url":"/services/data/v23.0/sobjects/Quick_Quiz_Question__c/a0xZ00000004uJ3IAI"},"Question__c":"<script type=\"text/javascript\">\r\nfunction displayDate9()\r\n{\r\ndocument.getElementByDiv(\"demo\").span=Date();\r\n}\r\n</script>\r\n\r\n<button type=\"button\" onclick=\"displayDate()\">Display Date</button>","Type__c":"Python","Id":"a0xZ00000004uJ3IAI","Answer__c":"<scripttype=\"text/javascript\">functiondisplayDate9(){document.getElementByDiv(\"demo\").span=Date();}</script><buttontype=\"button\"onclick=\"displayDate()\">DisplayDate</button>"},{"attributes":{"type":"Quick_Quiz_Question__c","url":"/services/data/v23.0/sobjects/Quick_Quiz_Question__c/a0xZ00000004uItIAI"},"Question__c":"<script type=\"text/javascript\">\r\nfunction displayDate6()\r\n{\r\ndocument.getElementByDiv(\"demo\").span=Date();\r\n}\r\n</script>\r\n\r\n<button type=\"button\" onclick=\"displayDate()\">Display Date</button>","Type__c":"Ruby","Id":"a0xZ00000004uItIAI","Answer__c":"<scripttype=\"text/javascript\">functiondisplayDate6(){document.getElementByDiv(\"demo\").span=Date();}</script><buttontype=\"button\"onclick=\"displayDate()\">DisplayDate</button>"}]
	var body = JSON.stringify(output);

	res.writeHead(200, {
	  "Content-Type": "application/json",
	  "Access-Control-Allow-Origin": "*"
	});

	res.end(body);

 });

app.get('/notifications', function(req, res){

	var output = [{"text":"Double Prize Money for Your Quiz Questions!", "url": "http://blog.cloudspokes.com/2012/05/calling-all-ruby-devs-double-prize.html"},{"text":"Build an Admin UI for new Challenges .. in Rails!","url":"http://blog.cloudspokes.com/2012/05/build-admin-ui-for-new-challenges-in.html"},{"text":"Better Know a CloudSpoker - Shashidhar Gurumurthy","url":"http://blog.cloudspokes.com/2012/04/better-know-cloudspoker-shashidhar.html"},{"text":"Create Salesforce Content From Attachments Winners!","url":"http://blog.cloudspokes.com/2012/04/create-salesforce-content-from.html"}];	
	var body = JSON.stringify(output);

	res.writeHead(200, {
	  "Content-Type": "application/json",
	  "Access-Control-Allow-Origin": "*"
	});

	res.end(body);

 });

app.listen(3001);
console.log("Express server listening on port %d in %s mode", app.address().port, app.settings.env);
