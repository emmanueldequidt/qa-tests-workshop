TESTS LIST

1.1. Source open in a new tab
-----------------------------
I've developped a test who clicked the first news of the list to see if it opens on a new tab, then I've added a line who scan the href attribute to see if it has the right value. File name is open-new-tab.spec.js.
No problems faced


2.1. 5 news category : Top, New, Show, Ask, Job
-----------------------------------------------
This test analyze all the href attribute of the navbar to see if they match the category name. It matches. File name is 5-category.spec.js. No problems faced



3.1. Categories can be accessed everywhere
------------------------------------------
The aim of this test is to see if you can access and change categories nevermind where you are. I've made this test possible by changing page automatically and scan if all the categories are there and accessible. File name is menu-acces-everywhere.spec.js. No problems faced



4.1. Current category is visually different from others
-------------------------------------------------------
Not finished yet. File name is category-different-appearance.spec.js. I've faced a timeout error so I tried to expand the timeout limit but it didn't change anything so I just put it aside for now and removed my timeout limit expander 


5.1. Each category has its own page
-----------------------------------
I already did this one in 2.1


6.1. Each list must not contain more than 500 news and must be regrouped by 20's pack
-------------------------------------------------------------------------------------
Not finished yet. File name is list-item-counter.spec.js. I tried to make my test count the list but I've made a mistake and it only count up to 20 wich fullfill the second objective by the way. So I've changed my line to make it count to see if news are regrouped by packs of 20 wich is the case


7.1. Current page id, total page amount and browsing with previous and next arrow must be visible on each page
--------------------------------------------------------------------------------------------------------------
Not finished yet. File name is paging.spec.js. Maybe I'm just tired but for now I can't figure out how to make my test scan the page's id, still trying for the moment



8.1. The current page id must be seen inside the url
----------------------------------------------------
Not done yet



9.1. Each news must have a title, a source, a grade from the community, news sharer's username, date of sharing, commentary number
----------------------------------------------------------------------------------------------------------------------------------
Not done yet


10.1. Clicking on the sharing username under each news display his username, number of days between his profile's creation and today
------------------------------------------------------------------------------------------------------------------------------------
Not done yet




11.1. Each user's profile have its own page with its onw url shaped like this : /user/ \<username\>
---------------------------------------------------------------------------------------------------
Not done yet



12.1. Each news must have its own commentary thread showing their total number, each commentary must show the username of the user who posts it, a link to his profile and how old is the commentary
---------------------------------------------------------------------------------------------------------------------------------------
Not done yet

13.1. Commentary thread can be accessed through a link on the news
------------------------------------------------------------------
Not done yet


14.1. Commentary threads have their own pages with a recall of the news info
----------------------------------------------------------------------------
Not done yet


15.1. Commentary threads can be shrinked and only shows the number of answers or expanded and shows each answers
----------------------------------------------------------------------------------------------------------------
Not done yet


16.1. Each news title from Show category must start with Show HN
----------------------------------------------------------------
Not done yet


17.1. News from Ask category are ony commentary thread, they doesn't open in a new tab
--------------------------------------------------------------------------------------
Not done yet



18.1. The aggregator must be responsive
---------------------------------------
Not done yet


19.1. News feed must refresh automatically
------------------------------------------
Not done yet


20.1. Implementation must be HTTPS secured
------------------------------------------
Not done yet


21.1. The aggregator must be fast and show each list the shortest time it can
-----------------------------------------------------------------------------
Not done yet
