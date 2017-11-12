import * as d3 from 'd3';

require('./css/vendor/bootstrap.css');
require('./css/base.scss');

// data variables
var gdpRate = [
// 2008    
{'quarter': '0',
'rate' : '0.1'},
{'quarter': '1',
'rate' : '0.3'},
{'quarter': '2',
'rate' : '-0.1'},
{'quarter': '3',
'rate' : '-1.4'},
// 2009
{'quarter': '4',
'rate' : '-4.2'},
{'quarter': '5',
'rate' : '-3.9'},
{'quarter': '6',
'rate' : '-2.8'},
{'quarter': '7',
'rate' : '-1.7'},
// 2010    
{'quarter': '8',
'rate' : '-1.1'},
{'quarter': '9',
'rate' : '-2.5'},
{'quarter': '10',
'rate' : '-6.6'},
{'quarter': '11',
'rate' : '-9.2'},
// 2011    
{'quarter': '12',
'rate' : '-8.3'},
{'quarter': '13',
'rate' : '-8.0'},
{'quarter': '14',
'rate' : '-4.3'},
{'quarter': '15',
'rate' : '-8.0'},
// 2012    
{'quarter': '16',
'rate' : '-7.8'},
{'quarter': '17',
'rate' : '-7.4'},
{'quarter': '18',
'rate' : '-7.7'},
{'quarter': '19',
'rate' : '-2.49'},
// 2013    
{'quarter': '20',
'rate' : '-6.0'},
{'quarter': '21',
'rate' : '-4.0'},
{'quarter': '22',
'rate' : '-3.2'},
{'quarter': '23',
'rate' : '-2.3'},
// 2014    
{'quarter': '24',
'rate' : '-0.2'},
{'quarter': '25',
'rate' : '1.7'},
{'quarter': '26',
'rate' : '1.3'},
{'quarter': '27',
'rate' : '0.3'}];

var unemploymentRate = [
// // 2008    
{'quarter':'0',
'rate' : null},
{'quarter': '1',
'rate' : null},
{'quarter': '2',
'rate' : null},
{'quarter': '3',
'rate' : null},
// 2009
{'quarter': '4',
'rate' : null},
{'quarter': '5',
'rate' : null},
{'quarter': '6',
'rate' : null},
{'quarter': '7',
'rate' : null},
// 2010    
{'quarter': '8',
'rate' : '11.9'},
{'quarter': '9',
'rate' : '12.0'},
{'quarter': '10',
'rate' : '12.6'},
{'quarter': '11',
'rate' : '14.4'},
// 2011    
{'quarter': '12',
'rate' : '16.1'},
{'quarter': '13',
'rate' : '16.5'},
{'quarter': '14',
'rate' : '17.9'},
{'quarter': '15',
'rate' : '20.9'},
// 2012    
{'quarter': '16',
'rate' : '22.8'},
{'quarter': '17',
'rate' : '23.8'},
{'quarter': '18',
'rate' : '24.9'},
{'quarter': '19',
'rate' : '26.2'},
// 2013    
{'quarter': '20',
'rate' : '27.6'},
{'quarter': '21',
'rate' : '27.3'},
{'quarter': '22',
'rate' : '27.2'},
{'quarter': '23',
'rate' : '27.8'},
// 2014    
{'quarter': '24',
'rate' : '27.8'},
{'quarter': '25',
'rate' : '26.6'},
{'quarter': '26',
'rate' : '25.5'},
{'quarter': '27',
'rate' : '26'}];


var gdpDefecit = [
// 2008    
{'quarter': '0',
'rate' : '-9.8'},
{'quarter': '1',
'rate' : '-9.8'},
{'quarter': '2',
'rate' : '-9.8'},
{'quarter': '3',
'rate' : '-9.8'},
// 2009
{'quarter': '4',
'rate' : '-15.7'},
{'quarter': '5',
'rate' : '-15.7'},
{'quarter': '6',
'rate' : '-15.7'},
{'quarter': '7',
'rate' : '-15.7'},
// 2010    
{'quarter': '8',
'rate' : '-10.9'},
{'quarter': '9',
'rate' : '-10.9'},
{'quarter': '10',
'rate' : '-10.9'},
{'quarter': '11',
'rate' : '-10.9'},
// 2011    
{'quarter': '12',
'rate' : '-9.6'},
{'quarter': '13',
'rate' : '-9.6'},
{'quarter': '14',
'rate' : '-9.6'},
{'quarter': '15',
'rate' : '-9.6'},
// 2012    
{'quarter': '16',
'rate' : '-8.9'},
{'quarter': '17',
'rate' : '-8.9'},
{'quarter': '18',
'rate' : '-8.9'},
{'quarter': '19',
'rate' : '-8.9'},
// 2013    
{'quarter': '20',
'rate' : '-12.7'},
{'quarter': '21',
'rate' : '-12.7'},
{'quarter': '22',
'rate' : '-12.7'},
{'quarter': '23',
'rate' : '-12.7'}];

var quartersDomain = [
'Q1','Q2','Q3','Q4',
'Q1','Q2','Q3','Q4',
'Q1','Q2','Q3','Q4',
'Q1','Q2','Q3','Q4',
'Q1','Q2','Q3','Q4',
'Q1','Q2','Q3','Q4',
'Q1','Q2','Q3','Q4'
];

var years = [{year: 2008,
                quarter: 0},
                {year: 2009,
                quarter: 4},
                {year: 2010,
                quarter: 8},
                {year: 2011,
                quarter: 12},
                {year: 2012,
                quarter: 16},
                {year: 2013,
                quarter: 20},
                {year: 2014,
                quarter: 24}];

// marker content data
var markersArr = [
    // 2009
    {date: '4-10-2009',
    content: 'The centre-left PASOK wins the Greek legislative elections. The party received 43.92% of the popular vote and 160 of 300 parliamentary seats.'},
    {date: '20-10-2009',
    content: 'Greece\'s budget deficit is expected to reach ~12.5% of GDP, according to disclosure by George Papaconstantinou, finance minister in Greece\'s new socialist government. This deficit exceeds a threshold of 3% of GDP which was set in the Stability and Growth Pact for all eurozone member states.'},
    {date: '22-10-2009',
    content: 'Greece\'s credit rating is downgraded by Fitch, one of the Big Three credit ratings agencies, from A to A−.'},
    {date: '8-12-2009',
    content: 'Greece\'s credit rating is downgraded by Fitch from A− to BBB+.'},
    {date: '16-12-2009',
    content: 'Greece\'s credit rating is downgraded by Standard and Poor\'s, another of the Big Three credit ratings agencies.'},
    {date: '23-12-2009',
    content: 'Greece\'s credit rating is downgraded by Moody\'s, the third of the Big Three credit ratings agencies, from A1 to A2.'},
    // 2010
    {date: '21-1-2010',
    content: 'The Greek/German 10-year debt yield spread surpasses 300 basis points.'},
    {date: '9-2-2010',
    content: 'The First austerity package is passed by the Greek parliament. Measures include: a freeze in the salaries of all government employees, a 10% cut in bonuses, and cuts in overtime workers.'},
    {date: '3-3-2010',
    content: 'The Second austerity package is passed by the Greek parliament. Measures include: a freeze in pensions; an increase in VAT from 19% to 21%; rises in taxes on fuel, cigarettes, and alcohol; rises in taxes on luxury goods; and cuts in public sector pay.'},
    {date: '9-4-2010',
    content: 'Greece\'s credit rating is downgraded by Fitch from BBB+ to BBB−.'},
    {date: '22-4-2010',
    content: 'Greece\'s credit rating is downgraded by Moody\'s from A2 to A3.'},
    {date: '23-4-2010',
    content: 'Prime Minister George Papandreou formally requests an international bailout for Greece. The European Union (EU), European Central Bank (ECB) and International Monetary Fund (IMF) agree to participate in the bailout.'},
    {date: '27-4-2010',
    content: 'Greece\'s credit rating is downgraded by Standard & Poor\'s below investment grade to junk bond status. Standard & Poor\'s is the last of the Big Three credit ratings agencies to downgrade Greece\'s credit rating in April 2010.'},
    {date: '28-4-2010',
    content: 'The Greek/German 10-year debt yield spread surpasses 1000 basis points.'},
    {date: '2-5-2010',
    content: 'The IMF, Greek Prime Minister Papandreou, and other eurozone leaders agree to the First bailout package for €110 billion ($143 billion) over 3 years. The Third austerity package is announced by the Greek government.'},
    {date: '5-5-2010',
    content: 'Greece-wide riots and popular revolt break out as Greece turns violent. There is a 48-hour nationwide strike and demonstrations in two major cities. Three people are killed when a group of masked people throw petrol bombs in a Marfin Egnatia Bank branch on Stadiou street. 6 May 2010 – The Third austerity package is passed by the Greek parliament.'},
    {date: '14-6-2010',
    content: 'Greece\'s credit rating is downgraded by Moody\'s from A3 to Ba1. The downgrade follows a previous downgrade on 27 April 2010.'},
    {date: '7-7-2010',
    content: 'The Greek parliament passes pension reform, a key requirement of the EU and IMF. Measures include: increasing retirement age from 60 to 65 for women. The reforms cut prospective payments from 25% of GDP by 2050. Additional pension reforms come in November 2012.'},
    {date: '15-12-2010',
    content: 'The Greek parliament passes a new law regarding state-owned companies. The law sets a cap on monthly wages and introduces 10% cuts on salaries above €1,800.'},
    {date: '23-10-2010',
    content: 'The Greek parliament approves the 2011 austerity budget.'},
    // 2011
    {date: '14-1-2011',
    content: 'Greece\'s credit rating is downgraded by Fitch from BBB− to BB+.'},
    {date: '7-3-2011',
    content: 'Greece\'s credit rating is downgraded by Moody\'s from Ba1 to B1.'},
    {date: '29-3-2011',
    content: 'Greece\'s credit rating is downgraded by Standard and Poor’s to BB−.'},
    {date: '9-5-2011',
    content: 'Greece\'s credit rating is downgraded by Standard and Poor’s from BB− to B.'},
    {date: '20-5-2011',
    content: 'Greece\'s credit rating is downgraded by Fitch from BB+ to B+.'},
    {date: '25-5-2011',
    content: 'The Greek Indignant Citizens Movement (also known as the Square Movement) starts daily protests. It is inspired by a similar movement in Spain.'},
    {date: '1-6-2011',
    content: 'Greece\'s credit rating is downgraded by Moody\'s from B1 to Caa1.'},
    {date: '13-6-2011',
    content: 'Greece\'s credit rating is downgraded by Standard and Poor’s to its lowest rating.'},
    {date: '17-6-2011',
    content: 'The prime minister makes a broad cabinet reshuffle and Evangelos Venizelos assumes the position of finance minister.'},
    {date: '29-6-2011',
    content: 'The Fourth austerity package is passed by the Greek parliament despite protests outside the parliament building. The two-day demonstrations against the bill turn violent as protesters clash with police in front of the Greek parliament and other areas of central Athens. The measures in the austerity package include new taxes and new cuts of workers\' wages.'},
    {date: '13-7-2011',
    content: 'Greece\'s credit rating is downgraded by Fitch from B+ to CCC.'},
    {date: '25-7-2011',
    content: 'Greece\'s credit rating is downgraded by Moody\'s to Ca−.'},
    {date: '27-7-2011',
    content: 'Greece\'s credit rating is downgraded by Standard and Poor’s from CCC to CC.'},
    {date: '8-8-2011',
    content: 'The Athens Stock Exchange general index falls below 1000 points, its lowest level since January 1997.'},
    {date: '11-11-2011',
    content: 'The Greek parliament imposes a new property tax to be collected through the electricity bill.'},
    {date: '20-10-2011',
    content: 'The Fifth austerity package is passed by the Greek parliament, amid protests and violent rioting outside the parliament building.'},
    {date: '27-10-2011',
    content: 'The investors agree to a "haircut" of 50% in converting their existing bonds into new loans.'},
    {date: '28-10-2011',
    content: 'An anti-austerity protest in Thessaloniki forces the cancellation of a commemoration parade for a national holiday. Similar incidents occur in several other Greek cities.'},
    {date: '31-10-2011',
    content: 'Greek Prime Minister Papandreou calls for a confidence vote and a referendum to approve the EU summit deal from the previous week regarding the Greek debt haircut.'},
    {date: '4-11-2011',
    content: 'Papandreou wins the confidence vote 153–145.'},
    {date: '6-11-2011',
    content: 'Prime Minister Papandreou resigns.'},
    {date: '10-11-2011',
    content: 'Lucas Papademos becomes the new Greek Prime Minister, as the leader of a coalition government consisting of the PASOK, New Democracy, and LAOS parties.'},
    {date: '15-12-2011',
    content: 'Greece\'s private TV channel Alter stops broadcasting due to financial difficulties.'},
    // 2012
    {date: '12-2-2012',
    content: 'The Fifth austerity package is passed by the Greek parliament amid violent protests. Many buildings in the centre of Athens are burned during the riots.'},
    {date: '21-2-2012',
    content: 'The Second bailout package is finalized. It brings the total amount of eurozone and IMF bailouts to €246 billion by 2016, which is 135% of Greece\'s GDP in 2013.'},
    {date: '9-3-2012',
    content: 'Greek 10-year bond yields reach a peak of 44.21% on the eve of debt restructuring. 83.5% of Greek bondholders are in the private sector.'},
    {date: '4-4-2012',
    content: 'A retired pharmacist commits suicide a short distance from Greece\'s parliament as an act of protest against austerity. He becomes a symbol for groups opposing the austerity measures, and violent clashes between police and demonstrators erupt in Athens.'},
    {date: '6-5-2012',
    content: 'Elections are held. The New Democracy party wins, but with a smaller share of the popular vote and fewer seats than it had in the previous election. The governing PASOK party collapses, while more votes go to the left wing parties (Syriza, KKE, and DIMAR) and right wing parties (ANEL, XA). No party wins the majority of the parliament seats.'},
    {date: '16-5-2012',
    content: 'No coalition government is able to be formed, so Panagiotis Pikramenos assumes the position of caretaker Prime Minister. An early election is called for the 17th of June.'},
    {date: '25-5-2012',
    content: 'The Athens Stock Exchange general index falls below 500 points.'},
    {date: '17-6-2012',
    content: 'Early elections are held. The New Democracy party leads, winning 29.7% of the popular vote, but doesn\'t win a majority of seats in parliament. Four days later, a coalition government is formed between New Democracy, PASOK and DIMAR. Antonis Samaras, the president of New Democracy, becomes the new Prime Minister.'},
    {date: '7-11-2012',
    content: 'The Sixth austerity package is adopted by the Greek parliament. The austerity measures are required for Greece to receive the next installment, the second economic bailout, worth €31.5 billion. Protests occurs outside the parliament. Austerity measures include: public pension cuts on average between 5% and 15% through the removal of two seasonal bonuses; an increase of the retirement age from 65 to 67; additional wage cuts for civil servants up to 20%; and public salary wage cuts up to 30%.'},
    {date: '11-11-2012',
    content: 'The Greek parliament passes the 2013 austerity budget.'},
    // 2013
    {date: '28-4-2013',
    content: 'The Greek parliament approves a reform bill: it abolishes 15,000 state jobs by the end of 2014, including 4,000 in 2013; makes it easier to fire civil servants; increases the working hours of teachers; and cuts a property tax by 15%.'},
    {date: '11-6-2013',
    content: 'The Greek parliament shuts down the country\'s Public Broadcasting Service ERT.'},
    {date: '21-6-2013',
    content: 'The Democratic Left party withdraws from the Greek coalition government, which retains a razor-thin majority in parliament.'},
    {date: '24-6-2013',
    content: 'Prime Minister Samaras reshuffles his cabinet.'},
    {date: '17-7-2013',
    content: 'The Seventh austerity package is passed by the Greek parliament. Measures include a contentious plan for thousands of layoffs and wage cuts for civil service workers.'},
    {date: '21-12-2013',
    content: 'A bill on the Single Property Tax and the auction of houses is approved by a majority of 152 deputies in the 300-seat chamber.'},
    // 2014
    {date: '14-1-2014',
    content: 'Greece posts a primary budget surplus of 1.5% of GDP for the 2013 financial year (€691 million).'},
    {date: '30-3-2014',
    content: 'The Greek parliament passes a new multi-bill which is needed for Greece to receive its next bailout payment. Nikitas Kaklamanis, a member of parliament, is expelled from the government for abstaining from the vote on one of the bill\'s two articles, leaving the government with an even smaller majority.'},
    {date: '10-4-2014',
    content: 'Greece returns to financial markets with the issue of €3 billion Eurobonds at a yield below 6%.'},
    {date: '18-5-2014',
    content: 'Local elections are held.'},
    {date: '23-5-2014',
    content: 'Greece\'s credit rating is upgraded by Fitch from B− to B.'},
    {date: '25-5-2014',
    content: 'Syriza wins the European Parliament election.'},
    {date: '9-6-2014',
    content: 'The cabinet is reshuffled. Gikas Hardouvelis assumes the position of finance minister.'},
    {date: '8-12-2014',
    content: 'Parliament begins attempts to elect a new president to replace outgoing Karolos Papoulias, whose five-year presidential term was due to end in February. The next day the Athens Stock Exchange falls 12.78%, its largest single-day decline since 1989.'},
    {date: '29-12-2014',
    content: 'The government\'s candidate for the president (a largely ceremonial role), Stavros Dimas, fails to win majority support from parliament, and the government falls. This leads to snap parliamentary elections, which are set to be held on 25 January 2015.'},
];

// global variables 
var w = d3.select('#time-line').node().clientWidth;
var h = 500;

var canvas = d3.select('#time-line').append('svg').attr('id', 'canvas').style('height', h).style('width', w).style('background', 'rgb(12, 33, 58)');

var lineOpen = false;

var minY = -20;
var maxY = 30;
var minX = 0;
var maxX = 27;


var yearArr = [2008, 2009, 2010, 2011, 2012, 2013, 2014, 2015];

// set default shown data to gdp rate
var activeData = gdpRate;
// set default slices of the data displayed
var dataSlice1 = 0
var dataSlice2 = 27;

// x scale
var x = d3.scaleLinear()
    .domain([maxX, minX])
    .range([w - 80, 0]);

// xaxis generator
var xAxis = d3.axisBottom()
    .scale(x)
    .ticks(28)
    .tickFormat(function(d,i) {
        var idx = 27 - i;
        return quartersDomain[idx];
    })
    .tickPadding(15)
    .tickSize(0);

// y scale
var y = d3.scaleLinear()
    .domain([minY, maxY])
    .range([h - 30, 0]);

// y axis generator
var yAxis = d3.axisLeft()
    .scale(y)
    .tickPadding(15)
    .tickSize(0);

// append x axis to the svg
canvas.append('g')
    .attr('class', 'axis')
    .attr('id', 'xAxis')
    .style('transform', 'translate(40px, '+ (h *.595)+'px)')
    .call(xAxis);

// apend y axis to svg
canvas.append('g')
    .attr('class', 'axis')
    .attr('id', 'yAxis')
    .style('transform', 'translate(40px, 15px)')
    .call(yAxis);

// define line generator
var lineGen = d3.line()
    .defined(function(d) {
        if (d.rate == null) {
            console.log('d')
            return false
        } else {
            return true;
        }
    })
    .x(function(d) { return x(d.quarter); })
    .y(function(d) { return y(d.rate); })
    .curve(d3.curveCardinal);

// append value line to the svg
canvas.append('path')
    .attr('id', 'plotted-line')
    .attr('class', 'gdp-rate line')
    .attr('d', lineGen(gdpRate))
    .style('stroke', '#F9D108')
    .style('stroke-width', '2px')
    .style('fill', 'none')
    .style('transform', 'translate(40px, 0)');

// adjust spacing on x axis ticks
d3.select('#xAxis').selectAll('.tick')
    .select('text')
    .attr('dx', function(d,i) {
        if (i == 0) {
            return '0.25em';
        } else {
            return '0.50em';
        }
    })

// add on click action to the filters
d3.selectAll('.filter').on('click', function() {

    changeLineData(this)

});

// changes data that generates the value line based on parameter
function changeLineData(that) {

    var dataArr = [{ data: gdpRate,
                     class: 'gdp-rate' },
                    { data: unemploymentRate,
                      class: 'unemployment-rate' },
                    { data: gdpDefecit,
                      class: 'gdp-defecit' }];

    var dataFilter = parseFloat(that.getAttribute('data-filter'));
    var dataClass = dataArr[dataFilter].class;
    var line = d3.select('#plotted-line');
    var lineClass = line.attr('class');

    if(lineClass.indexOf(dataClass) == -1) {

        activeData = dataArr[dataFilter].data;
        d3.select('.selected').attr('class', 'filter');
        d3.select(that).attr('class', 'selected filter');
        line.remove()

        canvas.append('path')
            .attr('id', 'plotted-line')
            .attr('class', dataClass + ' line')
            .style('stroke', '#F9D108')
            .style('stroke-width', '2px')
            .style('fill', 'none')
            .style('transform', 'translate(40px, 0)')
            .attr('stroke-dasharray', '1060 1060')
            .attr('stroke-dashoffset', 1060)
            .transition()
            .duration(1500)
            .attr('stroke-dashoffset', 0)
            .attr('d', lineGen(activeData.slice(dataSlice1, dataSlice2)));

    }


}

// definte year labels
var yearLabels = d3.select('#canvas').selectAll('.year-label').data(years);

// append year labels
yearLabels.enter()
    .append('text')
    .text(function(d) { 
        return d.year;
    })
    .attr('class', function(d) {
        return 'year-label ' + d.year;
    })
    .attr('x', function(d, i) {
        var xCoord = x(d.quarter);
        if (i == 0) {
            return xCoord + 48;
        } else {
            return xCoord + 40;
        }
    })
    .attr('y', function(d) {
        var yCoord = (h *.595) - 20;
        return yCoord;
    })
    .on('click', function(d) {
        openCloseLine(this, d)
    });

// handles the opening or closing on the time line 
function openCloseLine(that, data) {

    // if the line is open and the user clicks the active year label
    if(lineOpen == true && d3.select('.selected-year').node() == that) {

        d3.selectAll('.marker-group').remove();

        dataSlice1 = 0;
        dataSlice2 = 27;

        d3.select('.selected-year').attr('class', 'year-label');
        lineOpen = false;
        x = d3.scaleLinear()
            .domain([maxX, minX])
            .range([w - 80, 0]);

        xAxis = d3.axisBottom()
            .scale(x)
            .ticks(28)
            .tickFormat(function(data,i) {
                var idx = data;
                return quartersDomain[idx];
            })
            .tickPadding(15)
            .tickSize(0);

        d3.select('#xAxis')
            .transition()
            .duration(800)
            .call(xAxis);

        lineGen = d3.line()
                .defined(function(d) {
                    if (d.rate == null) {
                        console.log('d')
                        return false
                    } else {
                        return true;
                    }
                })
                .x(function(data) { return x(data.quarter); })
                .y(function(data) { return y(data.rate); })
                .curve(d3.curveCardinal);

        var lineClasses =  d3.select('#plotted-line').attr('class');
        d3.select('#plotted-line').remove()

        canvas.append('path')
            .attr('id', 'plotted-line')
            .attr('class', lineClasses)
            .style('stroke', '#F9D108')
            .style('stroke-width', '2px')
            .style('fill', 'none')
            .style('transform', 'translate(40px, 0)')
            .attr('stroke-dasharray', '1060 1060')
            .attr('stroke-dashoffset', 1060)
            .transition()
            .duration(1500)
            .attr('stroke-dashoffset', 0)
            .attr('d', lineGen(activeData));

        d3.selectAll('.year-label').transition().duration(900).attr('y', (h *.595) - 20)

    // if the user clicks a year label
    } else {
        d3.select('.selected-year').attr('class', 'year-label');

        d3.select(that).attr('class', 'selected-year year-label')
        var newXMax = data.quarter + 3;
        var newXMin = data.quarter;
        dataSlice1 = data.quarter;
        dataSlice2 = data.quarter + 4;
        x = d3.scaleLinear()
            .domain([newXMax, newXMin])
            .range([w - 80, 0]);

        xAxis = d3.axisBottom()
            .scale(x)
            .ticks(4)
            .tickFormat(function(data,i) {
                var idx = data;
                return quartersDomain[idx];
            })
            .tickPadding(15)
            .tickSize(0);

        d3.select('#xAxis')
            .transition()
            .duration(800)
            .call(xAxis);

        lineGen = d3.line()
                .defined(function(d) {
                    if (d.rate == null) {
                        return false
                    } else {
                        return true;
                    }
                })
                .x(function(data) { return x(data.quarter); })
                .y(function(data) { return y(data.rate); })
                .curve(d3.curveCardinal);

        d3.select('#plotted-line')
            .transition()
            .delay(250)
            .duration(1400)
            .attr('d', lineGen(activeData.slice(dataSlice1, dataSlice2)));

        d3.selectAll('.year-label').transition().duration(900).attr('y', 20)

        drawMarkers(parseFloat(that.innerHTML));

        lineOpen = true;

    }
}

// draw the markers on the timeline 
function drawMarkers(year) {

    var markers = d3.select('#canvas').selectAll('.marker').data(markersArr);
    var circleGen = d3.geoCircle();
    var markerGroupHeight = 250;

    // if the time line is not open
    if(!lineOpen) {

        markers.enter()
            .append('g')
            .attr('class', 'marker-group')
            .attr('transform', function(d) {

                var dateObj = dateStringConversion(d.date);
                var yearIdx = (dateObj.year - 2008) * 4;

                var scale = d3.scaleLinear()
                                .domain([0, 365])
                                .range([yearIdx, (yearIdx + 3)]);

                var scaledDay = scale(dateObj.day)
                var xCoord = x(scaledDay) + 15;

                return 'translate(' + xCoord + ', ' + markerGroupHeight + ')';
            })
            .append('circle')
            .style('fill', '#F9D108')
            .attr('r', 0)
            .transition()
            .duration(500)
            .attr('r', 9);

        d3.selectAll('.marker-group')
            .append('line')
            .attr('height', 10)
            .attr('width', 10)
            .attr('y1', 0)
            .attr('y2', 0)
            .transition()
            .delay(250)
            .duration(250)
            .attr('y1', 5)
            .attr('y2', 48)
            .style('stroke', 'F9D108');

    // if the time line is open
    } else {
        d3.selectAll('.marker-group').remove()

        markers.enter()
            .append('g')
            .attr('class', 'marker-group')
            .attr('transform', function(d) {

                var dateObj = dateStringConversion(d.date);
                var yearIdx = (dateObj.year - 2008) * 4;

                var scale = d3.scaleLinear()
                                .domain([0, 365])
                                .range([yearIdx, (yearIdx + 3)]);

                var scaledDay = scale(dateObj.day)
                var xCoord = x(scaledDay) + 15;

                return 'translate(' + xCoord + ', ' + markerGroupHeight + ')';
            })
            .append('circle')
            .style('fill', '#F9D108')
            .attr('r', 0)
            .transition()
            .duration(500)
            .attr('r', 9);

        d3.selectAll('.marker-group')
            .append('line')
            .attr('height', 10)
            .attr('width', 10)
            .attr('y1', 0)
            .attr('y2', 0)
            .transition()
            .delay(250)
            .duration(250)
            .attr('y1', 5)
            .attr('y2', 48)
            .style('stroke', 'F9D108');
    }

    // add on click action to marker
    d3.selectAll('.marker-group')
    .on('click', function(d) {
        handleClickedMarker(this, d);
    });

}

// open or close the marker when clicked
function handleClickedMarker(that, data) {

    var selectedMarker = d3.select('.selected-marker').node();

    var xcoord = parseFloat(d3.select(that).attr('transform').split('(')[1].split(',')[0]);

    var openMarkerHeight = -200;
    var openLineHeight = -191;
    var markerTextHeight = -208;

    // clicked a marker and no marker is open
    if(selectedMarker == null) {

        d3.select(that)
            .attr('class', 'selected-marker marker-group')
            .select('circle')
            .transition()
            .duration(150)
            .style('fill', '#F9D108')
            .style('cy', openMarkerHeight);

        d3.select(that)
            .select('line')
            .transition()
            .duration(150)
            .attr('y1', openLineHeight)
            .attr('y2', 48);

        d3.select(that)
            .append('foreignObject')
            .attr('class', 'marker-text')
            .attr('x', ((w - (xcoord + 275) > 0) ? 20 : -295))
            .attr('y', markerTextHeight)
            .html(function(d) {

                var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                var dateStr = data.date.split('-');
                var month = months[parseFloat(dateStr[1]) - 1];
                var date = '<div class="marker-content-date">' + dateStr[0] + ' ' + month + '</div>';

                if(w - (xcoord + 275) > 0) {

                    return '<div class="marker-content">' + date + data.content + '</div>';

                } else {

                    return '<div class="marker-content marker-content-left">' + date + data.content + '</div>';

                }

            })
            .style('opacity', 0)
            .transition()
            .delay(100)
            .style('opacity', 1);

    // if clicked on a different marker than the open one
    } else if (selectedMarker != that) {

        d3.select('.selected-marker')
            .select('circle')
            .transition()
            .duration(150)
            .style('cy', '0');

        d3.select('.selected-marker')
            .attr('class', 'marker-group')
            .select('line')
            .transition()
            .duration(150)
            .attr('y1', 5)
            .attr('y2', 48)

        d3.select('.marker-text').remove();

        d3.select(that)
            .attr('class', 'selected-marker marker-group')
            .select('circle')
            .transition()
            .duration(150)
            .style('cy', openMarkerHeight);

        d3.select(that)
            .select('line')
            .transition()
            .duration(150)
            .attr('y1',openLineHeight)
            .attr('y2', 48);

        d3.select(that)
            .append('foreignObject')
            .attr('class', 'marker-text')
            .attr('x', ((w - (xcoord + 250) > 0) ? 20 : -295))
            .attr('y', markerTextHeight)
            .html(function(d) {

                var months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
                var dateStr = data.date.split('-');
                var month = months[dateStr[1] - 1];
                var date = '<div class="marker-content-date">' + dateStr[0] + ' ' + month + '</div>';

                if(w - (xcoord + 250) > 0) {

                    return '<div class="marker-content">' + date + data.content + '</div>';

                } else {
                    return '<div class="marker-content marker-content-left">' + date + data.content + '</div>';
                }

            })
            .style('opacity', 0)
            .transition()
            .delay(100)
            .style('opacity', 1);

    // if clicked on open marker
    } else {

        d3.select('.selected-marker')
            .select('circle')
            .transition()
            .duration(150)
            .style('cy', '0')
            .style('fill', '#F9D108');

        d3.select('.selected-marker')
            .attr('class', 'marker-group')
            .select('line')
            .transition()
            .duration(150)
            .attr('y1', 5)
            .attr('y2', 48)
            .style('stroke', '#F9D108');

        d3.select('.marker-text').remove();

    }

}

// convert date string into day of the year and year as an object
function dateStringConversion(dateString) {

    var monthLengths = [{month: 1, length: 31},
                        {month: 2, length: 28},
                        {month: 3, length: 31},
                        {month: 4, length: 30},
                        {month: 5, length: 31},
                        {month: 6, length: 30},
                        {month: 7, length: 31},
                        {month: 8, length: 31},
                        {month: 9, length: 30},
                        {month: 10, length: 31},
                        {month: 11, length: 30},
                        {month: 12, length: 31}];

    var dateStringArr = dateString.split('-');
    var day = parseFloat(dateStringArr[0]);
    var month = parseFloat(dateStringArr[1]);
    var year = parseFloat(dateStringArr[2]);
    var dayCount = 0;
    var dateObj = new Object();

    for (var i = 0; i < month - 1; i++) {
        dayCount = dayCount + monthLengths[i].length;
    }
    dateObj.day = (dayCount + day);
    dateObj.year = year;

    return dateObj
}
