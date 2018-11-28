$(function () {//dom加载后执行
    mapChart('mapChart')
})



/**
 * 根据Json里的数据构造Echarts地图所需要的数据
 * @param {} mapJson 
 */
function initMapData(mapJson) {
    var mapData = [];
    for (var i = 0; i < mapJson.features.length; i++) {
        mapData.push({
            name: mapJson.features[i].properties.name,
            //id:mapJson.features[i].id
        })
    }
    return mapData;
}

/**
 * 返回上一级地图
 */
function back() {
    if (mapStack.length != 0) {//如果有上级目录则执行
        var map = mapStack.pop();
        $.get('./asset/json/map/' + map.mapId + '.json', function (mapJson) {

            registerAndsetOption(myChart, map.mapId, map.mapName, mapJson, false)

            //返回上一级后，父级的ID、Name随之改变
            parentId = map.mapId;
            parentName = map.mapName;

        })

    }

}
/**
 * Echarts地图
 */

//中国地图（第一级地图）的ID、Name、Json数据
var chinaId = 100000;
var chinaName = 'china'
var chinaJson = null;

//记录父级ID、Name
var mapStack = [];
var parentId = null;
var parentName = null;

//Echarts地图全局变量，主要是在返回上级地图的方法中会用到
var myChart = null;
function mapChart(divid) {

    $.get('./asset/json/map/' + chinaId + '.json', function (mapJson) {
        chinaJson = mapJson;
        myChart = echarts.init(document.getElementById(divid));
        registerAndsetOption(myChart, chinaId, chinaName, mapJson, false)
        parentId = chinaId;
        parentName = 'china'
        myChart.on('click', function (param, t) {

            var cityId = cityMap[param.name]
            if (cityId) {//代表有下级地图
                $.get('./asset/json/map/' + cityId + '.json', function (mapJson) {
                    registerAndsetOption(myChart, cityId, param.name, mapJson, true)
                })
            } else {
                //没有下级地图，回到一级中国地图，并将mapStack清空
                registerAndsetOption(myChart, chinaId, chinaName, chinaJson, false)
                mapStack = []
                parentId = chinaId;
                parentName = chinaName;


            }
            // $.get('./asset/json/map/'+param.data.id+'.json', function (mapJson,status) {

            //     registerAndsetOption(myChart,param.data.id,param.name,mapJson,true)

            // }).fail(function () {
            //     registerAndsetOption(myChart,chinaId,'china',chinaJson,false)
            // });

        });


    })
}

/**
 * 
 * @param {*} myChart 
 * @param {*} id        省市县Id
 * @param {*} name      省市县名称
 * @param {*} mapJson   地图Json数据
 * @param {*} flag      是否往mapStack里添加parentId，parentName
 */
function registerAndsetOption(myChart, id, name, mapJson, flag) {

    echarts.registerMap(name, mapJson);
    myChart.setOption({
        series: [{
            type: 'map',
            map: name,
            itemStyle: {
                normal: {
                    areaColor: 'rgba(23, 27, 57,0)',
                    borderColor: '#1dc199',
                    borderWidth: 1,
                },
            },
            data: initMapData(mapJson)
        }]
    });

    if (flag) {//往mapStack里添加parentId，parentName,返回上一级使用
        mapStack.push({
            mapId: parentId,
            mapName: parentName
        });
        parentId = id;
        parentName = name;
    }
}