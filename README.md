# The 2024 Election: Takeaways

## Project Overview
This was my Module 2 Project that took a look at the key takeaways from the 2024 presidential election. I compared claims of landslide to historic landslide results, took a look at favorabiity data and assessed claims of a powerful mandate, and then explored what it meant for the future. In our age of polarization, are landslides still positive? Or is it time for third parties to rise up amidst growing discontentment with the current political process.

## Live preview
You can either create a local server quickly in your VS Code terminal, or use Live Server like I did (an extension on VSCode).

## Files
- index.html - article content and visualizations
- script.js - D3 scripts that load CSVs and draw charts
- styles.css - page and chart styles
- elections.csv - historic electoral college and popular vote data
- approval.csv - approval ratings data used to plot net favorability in the first year
- third_party.csv - survey data on the likelihood of voting for a third-party candidate
- assets/ - image I used 

## Data sources
- Atlas of US Presidential Elections (David Leip) - used for electoral college numbers
- The American Presidency Project (UCSB) - approval ratings data
- Gallup - third party polling data
- Other sources cited in the page sources section

## My 3 Visualizations
1) Historic Electoral College Comparison

For my first visualization, I wanted to really explore Trump's claims of winning in a landslide. Even though I used multiple data sources and articles, the one I was primarily remixing was CFR's 2024 Election By The Numbers. As you saw in the excerpt provided, they argued that the election was not the landslide claimed by the Trump administration and cited numerous examples. I agreed with this assessment but saw the value in having cohesive visualization that really showed the difference in the electoral college between popular landslide elections and the 2024 election. To make the graphic more striking, I wanted to add interaction. This way, the user has to concsiouly toggle the 2024 bar, which is a different color. When they do this, they see the massive gap between 10 of the biggest electoral college landslides, and the Trump victory in 2024. 

This data makes it visually apparent how misleading the claims were, and I agree with the CFR piece. I also thought it a powerful visual tool to add a loss threshold. Sure, most people know that majority of the electoral votes are needed to win the presidency, but the loss threshold of 50% makes it clear how close Trump was to being under the required 270 votes, and how far above the others in the chart are. I think charts that emphasize the difference between strong examples and weak ones are the best positioned to make arguments and change minds because you can see the gulf between what was claimed, and what is.


2) Net Favorability in First Year

The second claim directly built off of the first. Trump believed he won in a landslide. At best, we can say this was a misleading claim. However this then was the basis for him to allege he had the widespread popular support necessary to enact some of his more "ambitious" agenda items via executive order. I was curious to see if this was the case -- does majority of the American public back him. Here we learned a few interesting things, first, in recent elections, presidents have gotten less and less popular. No one exemplified this more than Trump, his two non-consecutive terms having some of the worst approval ratings of any president. The dataset I used here tracked the popularity of presidents in their first year after assuming office and reliably we saw a decline in every president, with the number starting lower and trending lower with each succeeding president. 

To go a step further, I wanted to highlight how poor Trump's favorability was assuming office in his second term. If you click the toggle in the first chart, I implemented cross chart interaction to update the favorability chart and emphasize just how unpopular his first year has been for this term. I think this further disassembles any arguments of landslide by showing how historically unpopular his rule is and how weak his "mandate" is proving to be.


3) Third Party Likelihood

With how negative the office of the president is and how entrenched people are in their beliefs, we are far from a functional government. Trying to mend how polarized we have become would be a gargantuan effort, but I think it begins with understanding where we are. In my third visualization, I hoped to begin this discussion in an important way. First, it was worth noting that Americans aren't satisfied. This is the impetus for change -- when 30% of adults believes America's 2 party duopoly represents them, there is a cause for concern. This is why I chose to assess data on how likely Americans are to vote for third party. That discontentment has to express itself somehow, and how better to do it then to do away with two-party system. Historically, this push has been met with questions of practicality, but now it seems change is impending, the question is in what way.

My visualization here seeked to understand where voters currently were, regardless of their party. Independents were the most open to voting for a third party candidate, but I was more surprised by how high the number was for Democrats and Republicans. 40-50% isn't insignificant and it shows how much politics has changed to where there are genuine questions on whether an alternative is necessary to change the establishment. I think going forward, this chart in particular presents a healthy curiosity with systemic changes that could very well benefit this country in the long run. Whether these changes are sought, and reconciling the idealistic hopes with practical realities, is yet to be seen, but does provide something to look for in the coming years.

## What I learned
Overall, I have to say I think the process of reading data and coming up with my own considerations and explorations was a great process. I think I went into this assignment with the idea that I would only be looking at a single article and putting my own spin on it. As I quickly learned, that was a possible avenue, but I preferred to bounce around different articles and create a cohesive narrative or "mega-remix". That is why I hope a common thread is present, from exploring claims of landslide, to the natural consideration of popularity after election, to then switching gears and looking into where the American people are at on the subject of change.

Designing the charts in D3 was an interesting case of evaluating what I thought was the most valuable in telling my story. Take for example my first chart. Sure I could've had more recent elections, but I found it important to show the clearest landslides as a contrast to 2024. Similarly for the second, I wanted to touch on the recent decline of presidential popularity. Although it has been happening, I think Trump is the best case of it to explore. Questions like these also required me to make my own CSVs from the data I saw, which was a repetitive but easy process that I didn't mind. I could've downloaded data sets but with how small the desired data was, I figured I could just track columns and data points I wanted myself. It didn't prove to be too difficult given the scope but I would consider a more standard approach for a bigger project.



## Going Forward -- What Can Be Done
While this data tells quite an interesting story about the 2024 election, there is much work that can still be done. I think it would have been interesting for the polarization piece to get opinions each party has on the other, and their thoughts on the morals of the other party. I estimate that there has been a shift not only in the way people think about their own beliefs but the beliefs their oppponents hold.

For that reason, I think it would've been very interesting to get opinions members of each party had on the other, developing a narrative on how these bubbles exist and further serve to isolate us from one another. When you are trying to get bipartisan support, it is the seeking of common ground and shared moral beliefs that drives change to occur.

## Thanks!
- Hamzah Yousuf
- Comp 617 - Module 2 Project
