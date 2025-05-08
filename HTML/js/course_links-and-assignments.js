var curURL = window.parent.location.href.toString();

// Blackboard links
var courseID = curURL.match(/(course_id=).*?(&)/g);
var glossaryURL = '/webapps/blackboard/glossary/links/glossary.jsp?' + courseID;
var discussionURL = '/webapps/discussionboard/do/conference?action=list_forums&' + courseID + 'nav=discussion_board';
var journalURL = '/webapps/blackboard/execute/blogTopicList?mode=read&course_id=' + courseID + '&type=journal';


// for assignment printing
if ( curURL.indexOf("print=yes") != -1 ) document.getElementById('displaystyle').setAttribute('href', '../../../css/style_display-assignment-only.css');
function openAssignment(assignmentfile) {
    window.open(assignmentfile + "?print=yes", "_blank" );
}

