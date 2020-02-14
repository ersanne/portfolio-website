<template>
    <SectionLayout id="experience" title="Experience">
        <v-layout wrap>
            <v-flex xs12>
                <v-timeline :dense="$vuetify.breakpoint.smAndDown">
                    <v-timeline-item
                            v-for="(item, i) in items"
                            :color="item.color"
                            :key="i"
                            small
                    >
            <span
                    slot="opposite"
                    class="title"
                    v-text="item.date"
            ></span>
                        <div class="py-4">
                            <h2 class="title text--darken-3 pb-2" v-text="item.title"></h2>
                            <span class="primary--text text--darken-2 pb-2"
                                  v-text="`${item.company}, ${item.location}`">
              </span>
                            <div class="pb-1 hidden-md-and-up" v-text="item.date"></div>
                            <div class="pb-1" v-html="item.text"></div>
                        </div>
                    </v-timeline-item>
                </v-timeline>
            </v-flex>
        </v-layout>
    </SectionLayout>
</template>

<script>
    import SectionLayout from "@/components/sections/SectionLayout";
    export default {
        name: "Experience",
        components: {SectionLayout},
        data() {
            return {
                items: [
                    {
                        title: 'Business Analyst Intern',
                        company: 'MarketAxess',
                        location: 'London, UK',
                        date: 'Jun 2019 - Aug 2019',
                        text: 'Summer internship based at an international financial technology company. \n' +
                            '<ul>' +
                            '<li>Gained a thorough understanding of the MarketAxess trading platform</li>' +
                            '<li>Production of detailed business specifications for enhancements on the trading system, with new features to meet client requirements</li>' +
                            '<li>Liaising with internal stakeholders such as Product Managers to discuss client needs</li>' +
                            '<li>Participation in Scrum as Product Owner</li>' +
                            '<li>Prioritizing enhancements such as bug fixes and work items for software developers</li>' +
                            '<li>Analysing and modelling of financial data</li>'
                    },
                    {
                        title: 'Industrial Placement - Application Developer',
                        company: 'Morgan Stanley',
                        location: 'Glasgow, UK',
                        date: 'Jun 2018 - May 2019',
                        text: '12 Months split between Equity Swaps Trading and Morgan Stanley Development Environment teams<br><br>' +
                            '<b>Equity Swaps Trading</b><br>' +
                            '<ul>' +
                            '<li>Conducted Business Analysis using Waterfall and Agile methodologies</li>' +
                            '<li>Developed features for a market-leading trading system – performance tuning using Java and SQL</li>' +
                            '<li>Led migration and enhancement of a client feature from Perl to Java</li>' +
                            '<li>Database development, experiencing the full Software Development Lifecycle</li>' +
                            '<li>Effectively used technologies such as Java, Bash, Spring Boot, Ant-build, Ivy, Gradle, DB2, Sybase, Unix</li>' +
                            '<li>Demonstrated excellent oral presentation skills at Morgan Stanley Campus Recruitment events, speaking to groups of 30-50 people to promote their internship opportunities</li>' +
                            '<li>Collaborating across software teams and departments to build a successful product</li>' +
                            '</ul>' +
                            '<br><b>MSDE – Morgan Stanley Development Environment</b>' +
                            '<ul>' +
                            '<li>Created a project from scratch, demonstrating high levels of autonomy and responsibility</li>' +
                            '<li>Used SCRUM Agile methodology to ensure meticulous and efficient completion of projects</li>' +
                            '<li>Full-stack software development using secure processes to ensure integrity</li>' +
                            '<li>Software configuration management</li>' +
                            '<li>Used Java, Spring Boot, Gradle, Python, JS + Angular 6</li>' +
                            '</ul>'
                    },
                    {
                        title: 'Product Specialist - Online Fraud Prevention',
                        company: 'Sykes Global Services',
                        location: 'Edinburgh, UK',
                        date: 'May 2017 - May 2018',
                        text: '<ul>' +
                            '<li>Monitoring of customer transactions to identify suspicious activity including possible fraud</li>' +
                            '<li>Demonstrating a strong understanding of client requirements, identifying and implementing appropriate actions to complete requests successfully</li>' +
                            '<li>Using data to analyse trends, presenting any inefficiency to stakeholder in order to reduce future workloads</li>' +
                            '<li>Gathering evidence for customer audits, in accordance with strict GDPR procedures</li>' +
                            '<li>tReporting any suspected fraudulent activity in a timely manner, in compliance with company policies and procedures</li>' +
                            '</ul>'
                    }
                ]
            }
        }
    }
</script>

<style scoped>

</style>
