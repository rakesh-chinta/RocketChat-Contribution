 <script type='text/javascript' src='fullcalendar/lib/jquery.min.js'></script>
  <script type='text/javascript' src='fullcalendar/lib/moment.min.js'></script>
 <script type='text/javascript' src='fullcalendar/gcal.js'></script>
 <script type='text/javascript' src='fullcalendar/fullcalendar.js'></script>
 <link rel="stylesheet" href="fullcalendar/fullcalendar.css"/>


<script type='text/javascript'>

$(document).ready(function() {
    $('#calendar').fullCalendar({
        googleCalendarApiKey: 'AIzaSyDsSKWeApvsm8aSRDvUdTv2fTVTL272GMM',
        events: {
            googleCalendarId: 'bk2cp46c4jr179p79j9qo98f2g@group.calendar.google.com'
        }
    });
});
</script>

<div  id='calendar'></div>

