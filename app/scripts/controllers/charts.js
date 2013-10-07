/**
 * Controller responsible for rendering google charts.
 */
(function(angular, _, google) {

    'use strict';

    angular.module('quantennaAssignmentApp')
        .controller('ChartsCtrl', function ($scope) {

            _.extend($scope, {

                /**
                 * Initialize charts controller.
                 * Re-render charts on author change.
                 */
                init: function() {
                    this.$watch('author.name', _.bind(this.renderAuthorsCharts, this));
                },

                /**
                 * Generate random charts data once per author and render charts.
                 */
                renderAuthorsCharts: function() {
                    if(!this.author) {
                        return;
                    }
                    if (!this.author.charts) {
                        this.author.charts = {
                            area: this.getChartData(8, 20),
                            line: this.getChartData(),
                            column: this.getChartData(12, 50),
                            pie: this.getPieChartData()
                        };
                    }
                    this.renderAreaChart(this.author.charts.area);
                    this.renderLineChart(this.author.charts.line);
                    this.renderColumnChart(this.author.charts.column);
                    this.renderPieChart(this.author.charts.pie);
                },

                /**
                 * Render Area Chart
                 *
                 * @link https://google-developers.appspot.com/chart/interactive/docs/gallery/areachart
                 * @param data
                 */
                renderAreaChart: function(data) {
                    var el = document.getElementById('area-chart'),
                        chart = new google.visualization.AreaChart(el);
                    chart.draw(data, {
                        title: 'Random Area Chart',
                        'width':600,
                        'height':300
                    });
                },

                /**
                 * Render Line Chart
                 *
                 * @link https://google-developers.appspot.com/chart/interactive/docs/gallery/linechart
                 * @param data
                 */
                renderLineChart: function(data) {
                    var el = document.getElementById('line-chart'),
                        chart = new google.visualization.LineChart(el);
                    chart.draw(data, {
                        title: 'Random Linear Chart',
                        'width':600,
                        'height':300
                    });
                },

                /**
                 * Render Column Chart
                 *
                 * @link https://google-developers.appspot.com/chart/interactive/docs/gallery/columnchart
                 * @param data
                 */
                renderColumnChart: function(data) {
                    var el = document.getElementById('column-chart'),
                        chart = new google.visualization.ColumnChart(el);
                    chart.draw(data, {
                        title: 'Random Column Chart',
                        'width':600,
                        'height':300
                    });
                },

                /**
                 * Render Pie Chart
                 *
                 * @link https://google-developers.appspot.com/chart/interactive/docs/gallery/piechart
                 * @param data
                 */
                renderPieChart: function(data) {
                    var el = document.getElementById('pie-chart'),
                        chart = new google.visualization.PieChart(el);
                    chart.draw(data, {
                        title: 'Random Pie Chart',
                        is3D: true,
                        'width':600,
                        'height':300
                    });
                },

                /**
                 * Generate random data for line, column and area charts
                 *
                 * @param xMax integer. max value by x axis, default to 10
                 * @param yMax integer. max value by y axis, default to 100
                 * @returns {*}
                 */
                getChartData: function(xMax, yMax) {
                    var data = [],
                        x = xMax || 10,
                        y = yMax || 100;
                    while(x--) {
                        data.push([x, Math.ceil(Math.random()*y), Math.ceil(Math.random()*y)]);
                    }
                    data.unshift(['Index', 'Value1', 'Value2']);
                    return google.visualization.arrayToDataTable(data);
                },

                /**
                 * Generate random data for pie chart
                 *
                 * @returns {*}
                 */
                getPieChartData: function() {
                    return google.visualization.arrayToDataTable([
                        ['Random', 'Value'],
                        ['Random1', Math.ceil(Math.random()*10)],
                        ['Random2', Math.ceil(Math.random()*10)],
                        ['Random3', Math.ceil(Math.random()*10)],
                        ['Random4', Math.ceil(Math.random()*10)],
                        ['Random5', Math.ceil(Math.random()*10)]
                    ]);
                }
            });
        });

})(angular, _, google);
