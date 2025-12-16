---
layout: post
title: Fall 2018 password cracking lab results
date: 2018-12-06 # date of publication
categories: 
    - Academia
tags: 
    - assignments
    - password cracking
    - Students

#excerpt: "A brief summary or excerpt of the blog post goes here."
---

So, I have been a distant admirer of Ming Chow’s ([@0xmchow](https://twitter.com/0xmchow)) [password cracking labs](https://mchow01.github.io/education/security/2018/11/10/password-cracking.html) for his students.  Each semester, I found myself thinking “green, you need to do this sometime…” but never quite got around to doing it.

Until now…  🙂

This semester, I created a list of accounts and passwords and gave it to students in all of my security classes, as an extra credit assignment.  Details can be found at <https://github.com/AndyGreenPhD/password_cracking_challenges>

Students were given a list of 20 passwords to try and crack.  The answers were as follows, along with the number of times the password was cracked:

|Hash   |Username       |Password       |Count |
| ---   | ---           | ---           | ---    |
|NTLM 	|nsaban         |RollTide! 	    |18|
|MD5 	|drummerguy     |paradiddle 	|18|
|MD5 	|jdover 	    |1qaz 	        |18|
|NTLM 	|jgarris 	    |SoftballCoach 	|16|
|NTLM 	|rnason 	    |35PqAS 	    |16|
|SHA512 |bward 	        |qwerty 	    |16|
|NTLM 	|gkirby 	    |A)sD3$ 	    |15|
|SHA512 |agreen 	    |Password! 	    |15|
|NTLM 	|lcanada 	    |)&^%+n!1ast 	|12|
|NTLM 	|dcoleman 	    |*(&^E2!a 	    |12|
|MD5 	|slempesis 	    |P~as3 	        |12|
|MD5 	|rgeorge 	    |Bolt01? 	    |10|
|MD5 	|wremes 	    |8FrdS 	        |10|
|SHA512 |ewharton 	    |R8)_^ 	        |4|
|SHA512 |jrogers 	    |$asu3 	        |4|
|MD5 	|ldennis 	    |*ASE@1-09sB 	|0|
|MD5 	|mhollingsworth |*N<<:_)8AW 	|0|
|SHA512 |twilliamson 	|charlestonrocks|0|
|SHA512 |gnorton 	    |@#$LKJ)+B18 	|0|
|SHA512 |fdover 	    |{ASTd590*&YT 	|0|

A total of 22 students submitted attempts, which equates to roughly 35% of eligible students.  I say “roughly” because my calculations are based on class enrollments, with some students being enrolled in multiple classes.

The number of cracked passwords per student ranged from 15 to zero (zero because the student failed to follow directions when submitting the assignment).  The breakdown is as follows:

|# of passwords cracked |Student count |
| ---                   | ---          |
|15	                    |2|
|14	                    |1|
|12	                    |1|
|11	                    |2|
|10	                    |5|
|9	                    |3|
|7	                    |2|
|6	                    |1|
|5	                    |2|
|4	                    |2|
|0                      |1|

Since this is my first attempt at this assignment, I had no preconceived notions about how to grade the assignment.  Thus, anyone who followed directions and submitted the assignment correctly will get at least a 70.  Anyone who cracked 10 or more passwords will get a 100.  Failure to provide a description of their process will be a 10- point deduction from the final grade.

Below are two of the better descriptions I received, and really gets to what I was hoping to achieve with this assignment – learn new things, explore tools and ways to get things done, and explain what you did so that I can see the work you put in:

> When starting this assignment, I had no prior experience to password cracking. I did not spend any money during this assignment. So naturally I started by googling, “best password cracking tool” and it led me to a YouTube video titled “10 best password cracking tools 2018 edition.” I reviewed this video and decided to use the #1 tool recommended which is John the Ripper. I then looked up a tutorial on how to download it and run the tool. I successfully started the cracking process and waited a good few hours for it to complete. As this was running, I looked into a few online cracking websites. The first site I used was crackstation.net. It cracked passwords #1,2,8 and 9 only within a minute. I continued searching for more reliable websites and ran into hashkiller.co.uk. I manually added each individual hash to crack and was able to get #3,4, and 5 cracked. Finally, John the Ripper finished cracking process, I was able to crack # 15,16,17,18,19, and 20. I realized that the first 5 types are md5, most of 6-12 are sha512 and the rest 13-20 are LM.

> Starting this assignment, I really did not fully comprehend what exactly would happen or how to execute it correctly. I looked up many methods of cracking hashed passwords and used two main tools. First, I used the web to crack some of the passwords, this told me that these hashes have already been cracked and stored for future hackers to sift through, I used several online MD5 hash cracking websites like Cracknation.Net.. Second the ones I did not crack I used John the Ripper which is just a brute force algorithm that tries every combination possible in its power and my computers power to crack these passwords. I was able to get several this way but after 3 days of running it gave up and ended. I still have several to crack, seems like the ISA professors really know how to use strong passwords, not surprising at all. The hardships were mainly that of waiting and using constant computer energy. I had to be patient and wait to see just how many passwords the Ripper could crack with my computer. There are other methods of solving these issues, but time seems to be the most prevalent one along with computing power. My main resource that helped was Google and Youtube, it was humbling experience really, I watched videos where young adolescents were basically explaining to me how to crack hashes. It was, however, a great experience to actually do it yourself and see the magic happen. I used the command prompt to execute the John the Ripper application commands which took several days to crack about 7 or so passwords, the rest I found browsing the web trying out as many hashes cracked databases I could. Ultimately I learned that time and computing power is what will really help with password cracking, it was a fun experience, I look forward to learning more about all of this, actually because of this I came upon a great TV show called Mr. Robot, it is truly great. This was one of the more interesting and exciting extra credit assignment I’ve had, truly enjoyed every minute of it, even if it felt like it lasted forever.

Overall, I think the students who attempted the assignment learned something, and it was a low-stakes way for me to encourage outside learning with little to no extra overhead for me.

Based on how things went this semester, I think I’ll try this again next semester but add some additional guidance for expectations.  Primarily, I was disappointed in the “descriptions” provided.  These are students in a business program, and so I expect more when it comes to writing and expressing themselves.  I’m not looking for “War and Peace” but I’m also not looking for just the name of the tool being used, either.